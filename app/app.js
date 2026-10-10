(() => {
  const $ = s => document.querySelector(s);
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const uid = () => Math.random().toString(36).slice(2, 9);
  const FICHAS = window.FICHAS || [];

  // ---------- configuración ----------
  const urlLang = new URLSearchParams(location.search).get("lang");
  const cfg = Object.assign({
    lang: urlLang || ((navigator.language || "es").startsWith("en") ? "en" : "es"),
    units: (navigator.language || "").match(/-(US|LR|MM)$/) ? "I" : "M",
    cur: /-ES$/.test(navigator.language || "") ? "€" : "$", neg: "", tel: "", logo: "", val: 15
  }, store.get("pp_cfg", {}));
  if (urlLang) cfg.lang = urlLang;
  const urlQ = new URLSearchParams(location.search);
  if (urlQ.get("cur")) cfg.cur = urlQ.get("cur");
  if (urlQ.get("units")) cfg.units = urlQ.get("units");
  const T = () => window.I18N[cfg.lang] || window.I18N.es;
  const isI = () => cfg.units === "I";
  const uArea = () => isI() ? T().ft2 : T().m2;
  const uVol = () => isI() ? T().gal : T().l;
  const defaults = () => isI()
    ? { rend: 350, precio: 0, prod: 400, margen: 20 }
    : { rend: 10, precio: 0, prod: 40, margen: 20 };

  // ---------- presupuesto actual ----------
  const nuevo = () => ({
    id: uid(), fecha: new Date().toISOString().slice(0, 10),
    cliente: { n: "", dir: "", tel: "" },
    amb: [{ id: uid(), n: cfg.lang === "en" ? "Living room" : "Sala", tipo: "pared", a: "", b: "", abert: "", manos: 2 }],
    trats: [], extras: [],
    pint: { rend: defaults().rend, precio: "", margen: defaults().margen },
    mo: { precio: "", prod: defaults().prod },
    desc: "", imp: "", notas: ""
  });
  let P = store.get("pp_cur", null) || nuevo();
  const saveCur = () => store.set("pp_cur", P);

  // ---------- utilidades ----------
  const num = v => { const n = parseFloat(String(v).replace(",", ".")); return isFinite(n) ? n : 0; };
  const fmt = n => { const r = Math.round(n * 100) / 100, d = r % 1 ? 2 : 0; return cfg.cur + " " + r.toLocaleString(cfg.lang === "en" ? "en-US" : "es-MX", { minimumFractionDigits: d, maximumFractionDigits: d }); };
  const fx = n => (Math.round(n * 10) / 10).toLocaleString(cfg.lang === "en" ? "en-US" : "es-MX");
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const toast = m => { const t = $("#toast"); t.textContent = m; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => t.hidden = true, 1800); };
  const imgOf = f => `img/fichas/${f.id}.webp`;
  const loc = f => f[cfg.lang] || f.es;

  function areaAmb(a) {
    const A = num(a.a), B = num(a.b), O = num(a.abert);
    if (a.tipo === "directo") return Math.max(0, A);
    if (a.tipo === "techo") return Math.max(0, A * B);
    return Math.max(0, A * B - O);
  }

  function calc() {
    const lines = [];
    let sup = 0, supManos = 0;
    P.amb.forEach(a => { const s = areaAmb(a); sup += s; supManos += s * Math.max(1, num(a.manos) || 1); });
    const precioMO = num(P.mo.precio);
    let mo = 0;
    P.amb.forEach(a => {
      const s = areaAmb(a); if (!s) return;
      const v = s * precioMO; mo += v;
      lines.push({ t: `${a.n || T().ambiente} · ${fx(s)} ${uArea()} · ${num(a.manos) || 1} ${T().manos.toLowerCase()}`, v });
    });
    let trats = 0;
    P.trats.forEach(tr => {
      const s = tr.amb === "all" ? sup : areaAmb(P.amb.find(a => a.id === tr.amb) || {});
      const v = s * precioMO * num(tr.f); trats += v;
      const amb = tr.amb === "all" ? "" : ` · ${(P.amb.find(a => a.id === tr.amb) || {}).n || ""}`;
      lines.push({ t: `${tr.label}${amb} · ${fx(s)} ${uArea()}`, v });
    });
    const vol = num(P.pint.rend) ? supManos / num(P.pint.rend) : 0;
    const mat = vol * num(P.pint.precio) * (1 + num(P.pint.margen) / 100);
    if (mat) lines.push({ t: `${T().pintura} · ${fx(vol)} ${uVol()}`, v: mat });
    let ext = 0;
    P.extras.forEach(e => { const v = num(e.v); if (!v && !e.n) return; ext += v; lines.push({ t: e.n || T().extras, v }); });
    const sub = mo + trats + mat + ext;
    const desc = sub * num(P.desc) / 100;
    const imp = (sub - desc) * num(P.imp) / 100;
    const total = sub - desc + imp;
    const dias = num(P.mo.prod) ? Math.ceil(supManos / num(P.mo.prod) * 2) / 2 : 0;
    return { lines, sup, vol, mat, mo, trats, ext, sub, desc, imp, total, dias, envases: envases(vol) };
  }

  function envases(vol) {
    if (!vol) return [];
    // Prueba cortar en cada tamaño de envase y elige la combinación con menos sobrante,
    // penalizando cada envase extra (comprar muchas latas chicas sale más caro).
    const list = isI() ? T().envI : T().envM;
    const penal = isI() ? 0.4 : 1.5;
    let best = null;
    for (let i = 0; i < list.length; i++) {
      const cnt = []; let rest = vol;
      for (let j = 0; j < i; j++) { const n = Math.floor(rest / list[j].v + 1e-9); cnt.push(n); rest -= n * list[j].v; }
      cnt.push(rest > 1e-6 ? Math.ceil(rest / list[i].v - 1e-9) : 0);
      const total = cnt.reduce((s, n, k) => s + n * list[k].v, 0), count = cnt.reduce((s, n) => s + n, 0);
      const score = total - vol + count * penal;
      if (!best || score < best.score) best = { score, cnt };
    }
    return best.cnt.map((n, k) => n ? `${n} × ${list[k].n}` : "").filter(Boolean);
  }

  // ---------- textos ----------
  function paintTexts() {
    document.documentElement.lang = cfg.lang;
    document.title = T().app; $("#appName").textContent = T().app;
    document.querySelectorAll("[data-t]").forEach(el => { const v = T()[el.dataset.t]; if (typeof v === "string") el.textContent = v; });
    $("#q").placeholder = T().buscar;
    $("#backFicha").textContent = "← " + T().volver;
    $("#addAmb").textContent = "+ " + T().agregarAmb;
    $("#addExtra").textContent = "+ " + T().agregarExtra;
    $("#lblRend").textContent = `${T().rendimiento} (${uArea()}/${uVol()})`;
    $("#lblPrecioP").textContent = `${T().precioPintura} (${cfg.cur}/${uVol()})`;
    $("#lblMO").textContent = `${T().precioMO} ${uArea()} (${cfg.cur})`;
    $("#lblProd").textContent = `${T().productividad} (${uArea()}/${T().dia})`;
    $("#btnPdf").textContent = T().pdf; $("#btnWa").textContent = T().wa;
    $("#btnSave").textContent = T().guardar; $("#btnNew").textContent = T().nuevo;
    $("#btnInstall").textContent = T().instalar;
    $("#p-margen").placeholder = "%";
  }

  // ---------- navegación ----------
  let view = "fichas";
  function go(v) {
    view = v;
    ["fichas", "ficha", "pres", "hist", "ajustes"].forEach(x => $("#v-" + x).hidden = x !== v);
    document.querySelectorAll(".tabs button").forEach(b => b.classList.toggle("on", b.dataset.v === (v === "ficha" ? "fichas" : v)));
    if (v === "pres") renderPres();
    if (v === "hist") renderHist();
    if (v === "ajustes") renderAjustes();
    window.scrollTo(0, 0);
  }
  document.querySelectorAll(".tabs button").forEach(b => b.onclick = () => go(b.dataset.v));

  // ---------- fichas ----------
  let cat = "all";
  function renderChips() {
    const cats = ["all", ...Object.keys(T().cats)];
    $("#chips").innerHTML = cats.map(c => `<button data-c="${c}" class="${c === cat ? "on" : ""}">${c === "all" ? T().todas : T().cats[c]}</button>`).join("");
    $("#chips").querySelectorAll("button").forEach(b => b.onclick = () => { cat = b.dataset.c; renderChips(); renderGrid(); });
  }
  const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  function renderGrid() {
    const q = norm($("#q").value || "");
    const list = FICHAS.filter(f => (cat === "all" || f.cat === cat) && (!q || norm([loc(f).t, loc(f).r, ...(loc(f).sen || [])].join(" ")).includes(q)));
    $("#grid").innerHTML = list.map(f => `
      <button class="tile" data-id="${f.id}">
        <span class="ph" style="background-image:url('${imgOf(f)}')"></span>
        <span class="tx"><b>${esc(loc(f).t)}</b><span class="sev s${f.sev}"><i></i>${T().sev[f.sev]}</span></span>
      </button>`).join("") || `<p class="muted">—</p>`;
    $("#grid").querySelectorAll(".tile").forEach(b => b.onclick = () => openFicha(b.dataset.id));
  }
  $("#q").oninput = renderGrid;
  $("#backFicha").onclick = () => go("fichas");

  function openFicha(id) {
    const f = FICHAS.find(x => x.id === id); if (!f) return;
    const L = loc(f);
    const ul = (k, ord) => L[k] && L[k].length ? `<section><h3>${T()[k]}</h3><${ord ? "ol" : "ul"}>${L[k].map(x => `<li>${esc(x)}</li>`).join("")}</${ord ? "ol" : "ul"}></section>` : "";
    const added = P.trats.some(t => t.fid === f.id);
    $("#ficha").innerHTML = `
      <div class="hero" style="background-image:url('${imgOf(f)}')"></div>
      <span class="sev s${f.sev}"><i></i>${T().sev[f.sev]} · ${T().cats[f.cat] || ""}</span>
      <h1>${esc(L.t)}</h1><p class="r">${esc(L.r)}</p>
      ${f.trat ? `<button class="primary ficha-cta" id="addTrat">${added ? "✓ " + T().sumado : "+ " + T().sumarTrat}</button>` : ""}
      ${ul("sen")}${ul("cau")}${ul("ver")}${ul("cor", true)}${ul("pre")}
      ${L.cli ? `<section class="cli"><h3>${T().cli}</h3><p>${esc(L.cli)}</p></section>` : ""}`;
    const b = $("#addTrat");
    if (b) b.onclick = () => {
      if (!P.trats.some(t => t.fid === f.id)) {
        P.trats.push({ id: uid(), fid: f.id, label: (f.trat[cfg.lang] || f.trat.es), f: f.trat.f, amb: "all" });
        saveCur();
      }
      b.textContent = "✓ " + T().sumado; toast(T().sumado);
    };
    go("ficha");
  }

  // ---------- presupuesto ----------
  const bind = (sel, get, set) => { const el = $(sel); el.value = get() ?? ""; el.oninput = () => { set(el.value); saveCur(); renderResumen(); }; };

  function renderPres() {
    bind("#c-n", () => P.cliente.n, v => P.cliente.n = v);
    bind("#c-dir", () => P.cliente.dir, v => P.cliente.dir = v);
    bind("#c-tel", () => P.cliente.tel, v => P.cliente.tel = v);
    bind("#p-rend", () => P.pint.rend, v => P.pint.rend = v);
    bind("#p-precio", () => P.pint.precio, v => P.pint.precio = v);
    bind("#p-margen", () => P.pint.margen, v => P.pint.margen = v);
    bind("#mo-precio", () => P.mo.precio, v => P.mo.precio = v);
    bind("#mo-prod", () => P.mo.prod, v => P.mo.prod = v);
    bind("#desc", () => P.desc, v => P.desc = v);
    bind("#imp", () => P.imp, v => P.imp = v);
    bind("#notas", () => P.notas, v => P.notas = v);
    $("#notas").placeholder = T().notasDef;
    renderAmbs(); renderTrats(); renderExtras(); renderResumen();
  }

  function renderAmbs() {
    const tipos = ["pared", "techo", "fachada", "directo"];
    $("#ambs").innerHTML = P.amb.map(a => `
      <div class="amb" data-id="${a.id}">
        <div class="h"><input data-k="n" value="${esc(a.n)}" aria-label="${T().ambiente}"><button class="x" data-del aria-label="${T().borrar}">×</button></div>
        <div class="row2">
          <label><span>${T().tipo}</span><select data-k="tipo">${tipos.map(t => `<option value="${t}" ${a.tipo === t ? "selected" : ""}>${T().tipos[t]}</option>`).join("")}</select></label>
          <label><span>${T().manos}</span><input data-k="manos" type="number" inputmode="numeric" value="${esc(a.manos)}"></label>
        </div>
        ${a.tipo === "directo"
          ? `<label><span>${T().area} (${uArea()})</span><input data-k="a" type="number" inputmode="decimal" step="any" value="${esc(a.a)}"></label>`
          : `<div class="row3">
              <label><span>${a.tipo === "techo" ? T().ancho : T().largo} (${isI() ? "ft" : "m"})</span><input data-k="a" type="number" inputmode="decimal" step="any" value="${esc(a.a)}"></label>
              <label><span>${a.tipo === "techo" ? T().largoT : T().alto} (${isI() ? "ft" : "m"})</span><input data-k="b" type="number" inputmode="decimal" step="any" value="${esc(a.b)}"></label>
              ${a.tipo === "techo" ? "<span></span>" : `<label><span>${T().descontar} (${uArea()})</span><input data-k="abert" type="number" inputmode="decimal" step="any" value="${esc(a.abert)}"></label>`}
            </div>`}
        <div class="area">${T().area}: <b data-area>${fx(areaAmb(a))}</b> ${uArea()}</div>
      </div>`).join("");
    $("#ambs").querySelectorAll(".amb").forEach(box => {
      const a = P.amb.find(x => x.id === box.dataset.id);
      box.querySelectorAll("[data-k]").forEach(el => {
        const ev = el.tagName === "SELECT" ? "onchange" : "oninput";
        el[ev] = () => {
          a[el.dataset.k] = el.value; saveCur();
          if (el.dataset.k === "tipo") { renderAmbs(); renderTrats(); }
          else { box.querySelector("[data-area]").textContent = fx(areaAmb(a)); if (el.dataset.k === "n") renderTrats(); }
          renderResumen();
        };
      });
      box.querySelector("[data-del]").onclick = () => { P.amb = P.amb.filter(x => x !== a); P.trats.forEach(t => { if (t.amb === a.id) t.amb = "all"; }); saveCur(); renderAmbs(); renderTrats(); renderResumen(); };
    });
  }
  $("#addAmb").onclick = () => { P.amb.push({ id: uid(), n: `${T().ambiente} ${P.amb.length + 1}`, tipo: "pared", a: "", b: "", abert: "", manos: 2 }); saveCur(); renderAmbs(); renderResumen(); };

  function renderTrats() {
    if (!P.trats.length) { $("#trats").innerHTML = `<p class="muted">${T().sinTrats}</p>`; return; }
    const opts = sel => `<option value="all" ${sel === "all" ? "selected" : ""}>${T().todas}</option>` + P.amb.map(a => `<option value="${a.id}" ${sel === a.id ? "selected" : ""}>${esc(a.n)}</option>`).join("");
    $("#trats").innerHTML = P.trats.map(t => `<div class="trat" data-id="${t.id}"><span>${esc(t.label)}</span><select aria-label="${T().ambiente}">${opts(t.amb)}</select><button class="x" aria-label="${T().borrar}">×</button></div>`).join("");
    $("#trats").querySelectorAll(".trat").forEach(r => {
      const t = P.trats.find(x => x.id === r.dataset.id);
      r.querySelector("select").onchange = e => { t.amb = e.target.value; saveCur(); renderResumen(); };
      r.querySelector("button").onclick = () => { P.trats = P.trats.filter(x => x !== t); saveCur(); renderTrats(); renderResumen(); };
    });
  }

  function renderExtras() {
    $("#extras").innerHTML = P.extras.map(e => `<div class="trat" data-id="${e.id}"><input data-k="n" value="${esc(e.n)}" placeholder="${T().extraNombre}"><input data-k="v" type="number" inputmode="decimal" step="any" value="${esc(e.v)}" placeholder="${cfg.cur}" style="width:110px"><button class="x">×</button></div>`).join("");
    $("#extras").querySelectorAll(".trat").forEach(r => {
      const e = P.extras.find(x => x.id === r.dataset.id);
      r.querySelectorAll("input").forEach(i => i.oninput = () => { e[i.dataset.k] = i.value; saveCur(); renderResumen(); });
      r.querySelector("button").onclick = () => { P.extras = P.extras.filter(x => x !== e); saveCur(); renderExtras(); renderResumen(); };
    });
  }
  $("#addExtra").onclick = () => { P.extras.push({ id: uid(), n: "", v: "" }); saveCur(); renderExtras(); };

  function renderResumen() {
    const c = calc();
    const ln = (k, v) => v ? `<div class="ln"><span>${k}</span><span>${fmt(v)}</span></div>` : "";
    $("#resumen").innerHTML = `
      <h2>${T().resumen}</h2>
      <div class="meta">
        <span>${T().superficieTotal}<br><b>${fx(c.sup)} ${uArea()}</b></span>
        <span>${T().litros}<br><b>${fx(c.vol)} ${uVol()}</b></span>
        <span>${T().latas}<br><b>${c.envases.join(" + ") || "—"}</b></span>
        <span>${T().dias}<br><b>${c.dias || "—"}</b></span>
      </div>
      ${ln(T().totMO, c.mo)}${ln(T().totTrats, c.trats)}${ln(T().totMateriales, c.mat)}${ln(T().totExtras, c.ext)}
      ${c.desc ? `<div class="ln"><span>${T().descuento}</span><span>− ${fmt(c.desc)}</span></div>` : ""}
      ${ln(T().impuesto, c.imp)}
      <div class="ln big"><span>${T().total}</span><span>${fmt(c.total)}</span></div>`;
  }

  // ---------- PDF ----------
  function pdf() {
    const c = calc();
    const { jsPDF } = window.jspdf || {};
    if (!jsPDF) { toast("PDF…"); return; }
    const d = new jsPDF({ unit: "mm", format: "a4" });
    const W = 210, M = 16; let y = 18;
    if (cfg.logo) { try { d.addImage(cfg.logo, M, y - 6, 26, 26, undefined, "FAST"); } catch (e) {} }
    const x0 = cfg.logo ? M + 32 : M;
    d.setFont("helvetica", "bold"); d.setFontSize(18); d.text(cfg.neg || T().app, x0, y + 2);
    d.setFont("helvetica", "normal"); d.setFontSize(10); d.setTextColor(90);
    if (cfg.tel) d.text(cfg.tel, x0, y + 8);
    d.setTextColor(0); d.setFontSize(13); d.setFont("helvetica", "bold");
    d.text(T().presupuesto.toUpperCase(), W - M, y + 2, { align: "right" });
    d.setFont("helvetica", "normal"); d.setFontSize(10);
    d.text(`${T().fecha}: ${P.fecha}`, W - M, y + 8, { align: "right" });
    y += 26;
    d.setFillColor(242, 194, 48); d.rect(M, y, W - 2 * M, 1.2, "F"); y += 8;
    d.setFont("helvetica", "bold"); d.text(T().cliente + ":", M, y); d.setFont("helvetica", "normal");
    d.text([P.cliente.n, P.cliente.dir, P.cliente.tel].filter(Boolean).join("  ·  ") || "—", M + 20, y); y += 10;
    d.setFillColor(29, 42, 51); d.setTextColor(255); d.rect(M, y, W - 2 * M, 8, "F");
    d.text(T().item, M + 3, y + 5.5); d.text(T().importe, W - M - 3, y + 5.5, { align: "right" }); d.setTextColor(0); y += 13;
    c.lines.forEach((l, i) => {
      const wrapped = d.splitTextToSize(l.t, 130);
      if (y + wrapped.length * 5 > 270) { d.addPage(); y = 20; }
      if (i % 2) { d.setFillColor(244, 246, 243); d.rect(M, y - 4.5, W - 2 * M, wrapped.length * 5 + 2, "F"); }
      d.text(wrapped, M + 3, y); d.text(fmt(l.v), W - M - 3, y, { align: "right" }); y += wrapped.length * 5 + 2.5;
    });
    y += 3; d.line(M, y, W - M, y); y += 7;
    const tl = (k, v, b) => { d.setFont("helvetica", b ? "bold" : "normal"); d.setFontSize(b ? 14 : 10); d.text(k, W - M - 60, y); d.text(v, W - M - 3, y, { align: "right" }); y += b ? 9 : 6; };
    if (c.desc || c.imp) tl("Subtotal", fmt(c.sub));
    if (c.desc) tl(T().descuento, "− " + fmt(c.desc));
    if (c.imp) tl(T().impuesto, fmt(c.imp));
    tl(T().total, fmt(c.total), true);
    d.setFont("helvetica", "normal"); d.setFontSize(9.5); d.setTextColor(70);
    const info = [`${T().superficieTotal}: ${fx(c.sup)} ${uArea()}`, c.dias ? `${T().dias}: ${c.dias}` : "", `${T().valido} ${cfg.val} ${T().diasTxt}`].filter(Boolean).join("   ·   ");
    y += 4; d.text(info, M, y); y += 7;
    const notas = d.splitTextToSize(P.notas || T().notasDef, W - 2 * M); d.text(notas, M, y);
    const name = `${T().presupuesto}-${(P.cliente.n || "cliente").replace(/\s+/g, "-")}-${P.fecha}.pdf`;
    d.save(name);
  }

  function waText() {
    const c = calc();
    const L = [];
    L.push(`${T().waHola}${P.cliente.n ? " " + P.cliente.n : ""}, ${T().waIntro}${P.cliente.dir ? " (" + P.cliente.dir + ")" : ""}:`, "");
    c.lines.forEach(l => L.push(`• ${l.t}: ${fmt(l.v)}`));
    if (c.desc) L.push(`• ${T().descuento}: − ${fmt(c.desc)}`);
    if (c.imp) L.push(`• ${T().impuesto}: ${fmt(c.imp)}`);
    L.push("", `*${T().total}: ${fmt(c.total)}*`);
    if (c.dias) L.push(`${T().dias}: ${c.dias}`);
    L.push(`${T().valido} ${cfg.val} ${T().diasTxt}.`, "", T().waCierre, cfg.neg ? `— ${cfg.neg}` : "");
    return L.join("\n");
  }
  $("#btnPdf").onclick = pdf;
  $("#btnWa").onclick = () => {
    const tel = (P.cliente.tel || "").replace(/\D/g, "");
    const a = document.createElement("a");
    a.href = `https://wa.me/${tel}?text=${encodeURIComponent(waText())}`; a.target = "_blank"; a.rel = "noopener"; a.click();
  };
  $("#btnSave").onclick = () => {
    const h = store.get("pp_hist", []).filter(x => x.id !== P.id);
    h.unshift(JSON.parse(JSON.stringify(P))); store.set("pp_hist", h.slice(0, 200)); toast(T().guardadoOk);
  };
  $("#btnNew").onclick = () => { P = nuevo(); saveCur(); renderPres(); };

  // ---------- guardados ----------
  function renderHist() {
    const h = store.get("pp_hist", []);
    if (!h.length) { $("#hist").innerHTML = `<p class="muted">${T().vacioHist}</p>`; return; }
    const keep = P;
    $("#hist").innerHTML = h.map(x => { P = x; const t = calc().total; return `<div class="hrow" data-id="${x.id}"><div><b>${esc(x.cliente.n || "—")}</b><small>${x.fecha} · ${fmt(t)}</small></div><span><button data-o>${T().abrir}</button> <button data-d>${T().borrar}</button></span></div>`; }).join("");
    P = keep;
    $("#hist").querySelectorAll(".hrow").forEach(r => {
      r.querySelector("[data-o]").onclick = () => { P = JSON.parse(JSON.stringify(h.find(x => x.id === r.dataset.id))); saveCur(); go("pres"); };
      r.querySelector("[data-d]").onclick = () => { store.set("pp_hist", h.filter(x => x.id !== r.dataset.id)); renderHist(); };
    });
  }

  // ---------- ajustes ----------
  const saveCfg = () => store.set("pp_cfg", cfg);
  function renderAjustes() {
    const b = (sel, k, after) => { const el = $(sel); el.value = cfg[k] ?? ""; el.onchange = el.oninput = () => { cfg[k] = el.value; saveCfg(); after && after(); }; };
    b("#s-neg", "neg"); b("#s-tel", "tel"); b("#s-cur", "cur"); b("#s-val", "val");
    b("#s-lang", "lang", () => { paintTexts(); renderChips(); renderGrid(); });
    b("#s-units", "units", () => { const d = defaults(); P.pint.rend = d.rend; P.mo.prod = d.prod; saveCur(); paintTexts(); });
    const lp = $("#logoPrev"); lp.hidden = !cfg.logo; if (cfg.logo) lp.src = cfg.logo;
    $("#s-logo").onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      const img = new Image(); const r = new FileReader();
      r.onload = () => { img.onload = () => {
        const s = 240 / Math.max(img.width, img.height), cv = document.createElement("canvas");
        cv.width = img.width * s; cv.height = img.height * s; cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
        cfg.logo = cv.toDataURL("image/png"); saveCfg(); lp.src = cfg.logo; lp.hidden = false;
      }; img.src = r.result; };
      r.readAsDataURL(f);
    };
  }

  // ---------- instalar como app ----------
  let deferred;
  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferred = e; $("#btnInstall").hidden = false; });
  $("#btnInstall").onclick = async () => { if (!deferred) return; deferred.prompt(); deferred = null; $("#btnInstall").hidden = true; };
  if ("serviceWorker" in navigator && location.protocol === "https:") navigator.serviceWorker.register("sw.js").catch(() => {});

  // ---------- arranque ----------
  // ?demo=1 carga un presupuesto de muestra (para capturas y videos de anuncios)
  if (new URLSearchParams(location.search).get("demo")) {
    const en = cfg.lang === "en";
    cfg.neg = cfg.neg || (en ? "Ramirez Painting" : "Pinturas Ramírez");
    P = nuevo();
    P.cliente = { n: en ? "Carlos Ramirez" : "Carlos Ramírez", dir: en ? "1420 Oak St" : "Av. Juárez 1420", tel: "" };
    P.amb = [
      { id: uid(), n: en ? "Living room" : "Sala", tipo: "pared", a: isI() ? "52" : "16", b: isI() ? "8.5" : "2.6", abert: isI() ? "40" : "4", manos: 2 },
      { id: uid(), n: en ? "Bedroom" : "Recámara", tipo: "pared", a: isI() ? "42" : "13", b: isI() ? "8.5" : "2.6", abert: isI() ? "21" : "2", manos: 2 },
      { id: uid(), n: en ? "Ceilings" : "Techos", tipo: "techo", a: isI() ? "20" : "6", b: isI() ? "22" : "7", abert: "", manos: 2 }
    ];
    const moho = FICHAS.find(f => f.id === "moho");
    if (moho) P.trats = [{ id: uid(), fid: "moho", label: moho.trat[cfg.lang] || moho.trat.es, f: moho.trat.f, amb: P.amb[1].id }];
    P.pint.precio = isI() ? "38" : "95"; P.mo.precio = isI() ? "2.2" : "48";
    P.extras = [{ id: uid(), n: en ? "Sandpaper, tape and plastic" : "Lija, cinta y plástico", v: isI() ? "45" : "350" }];
  }
  paintTexts(); renderChips(); renderGrid();
  const hash = location.hash.slice(1);
  if (["pres", "hist", "ajustes"].includes(hash)) go(hash);
  if (hash.startsWith("ficha-")) openFicha(hash.slice(6));
})();
