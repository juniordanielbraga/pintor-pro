// PINTOR PRO · Fichas técnicas de patologías de pintura (50)
// Categorías: humedad, adherencia, fisuras, aplicacion, color, madera_metal, exterior
// sev: 1 estético · 2 requiere tratamiento · 3 problema de fondo / derivar a otro oficio
// trat.f: recargo como fracción de la mano de obra por m²
window.FICHAS = [

// ───────────────────────── HUMEDAD ─────────────────────────
{
  id: "moho",
  cat: "humedad",
  sev: 2,
  es: {
    t: "Moho en paredes",
    r: "Manchas negras o verdosas que reaparecen aunque se pinte encima.",
    sen: ["Puntos negros, grises o verdosos agrupados en colonias", "Aparece en rincones, detrás de muebles, baños y techos fríos", "Olor a encierro o humedad", "Vuelve a salir semanas después de pintar"],
    cau: ["Condensación por falta de ventilación", "Paredes frías (muros exteriores, puentes térmicos)", "Humedad por filtración o capilaridad", "Pintura sin fungicida en ambientes húmedos"],
    ver: ["Pasa un algodón con lavandina: si se aclara es moho, si no es suciedad u hollín", "Mide humedad de la pared con un higrómetro de punta si lo tienes", "Revisa si hay caños, canaletas o grietas exteriores cerca de la mancha", "Pregunta si el ambiente se ventila y si secan ropa adentro"],
    cor: ["Protégete con guantes, lentes y barbijo; no lijes el moho en seco", "Lava con solución de lavandina (1 parte en 3 de agua) o fungicida, deja actuar 20 minutos", "Enjuaga con agua limpia y deja secar al menos 24-48 horas", "Aplica una mano de fungicida/sanitizante y deja secar", "Aplica fijador o sellador si la superficie quedó porosa", "Pinta con pintura antihongos (con fungicida) en dos manos"],
    pre: ["Ventilar a diario, sobre todo baños y cocinas; instalar extractor si no hay", "Usar pintura con fungicida en zonas húmedas", "Separar muebles unos centímetros de los muros fríos"],
    cli: "Si solo pinto encima, el moho vuelve en semanas; hay que matarlo, secar y sellar, y eso lleva un día extra de trabajo y productos específicos."
  },
  en: {
    t: "Mold and mildew on walls",
    r: "Black or green spots that keep coming back even after you paint over them.",
    sen: ["Black, gray or greenish speckles growing in clusters", "Shows up in corners, behind furniture, bathrooms and cold ceilings", "Musty smell in the room", "Comes back a few weeks after a fresh coat"],
    cau: ["Condensation and poor ventilation", "Cold exterior walls and thermal bridges", "Moisture from a leak or rising damp", "Non-mildewcide paint in a wet room"],
    ver: ["Dab it with a cotton swab and bleach: if it lightens, it's mildew; if not, it's dirt or soot", "Check wall moisture with a pin meter if you have one", "Look for plumbing, gutters or exterior cracks near the stain", "Ask the owner about ventilation and indoor clothes drying"],
    cor: ["Wear gloves, goggles and a mask; never dry-sand mildew", "Wash with a bleach solution (1 part to 3 parts water) or a mildew remover, let it dwell 20 minutes", "Rinse with clean water and let it dry 24-48 hours", "Apply a coat of mildewcide wash and let it dry", "Seal with a primer-sealer if the surface is porous", "Finish with two coats of mildew-resistant paint"],
    pre: ["Ventilate daily, especially bathrooms and kitchens; add an exhaust fan if needed", "Use mildew-resistant paint in damp areas", "Keep furniture a few inches off cold exterior walls"],
    cli: "If I just paint over it, the mildew bleeds back in a few weeks; killing it, drying it out and sealing it takes an extra day and specialty products."
  },
  trat: { es: "Tratamiento antimoho", en: "Mildew treatment", f: 0.35 },
  img: "Vertical smartphone photo, close-up of black mildew spots spreading across the upper corner of a white painted bathroom wall near the ceiling, natural window light, realistic texture, no text, no people."
},
{
  id: "eflorescencia",
  cat: "humedad",
  sev: 2,
  es: {
    t: "Eflorescencia o salitre",
    r: "Polvo o costra blanca cristalina que empuja y levanta la pintura.",
    sen: ["Polvo blanco o cristales en la superficie", "Pintura abombada o descascarada con sal debajo", "Se desarma al pasar la mano", "Más común en la parte baja de muros y en ladrillo"],
    cau: ["Humedad que disuelve sales del ladrillo, cemento o suelo", "Al evaporarse, el agua deja las sales en la superficie", "Revoques nuevos pintados antes de curar", "Humedad ascendente o filtraciones"],
    ver: ["Prueba con un poco de vinagre: si burbujea es carbonato; si se disuelve en agua es salitre soluble", "Comprueba si la pared está húmeda al tacto o con medidor", "Identifica de dónde viene el agua antes de pintar", "Revisa hasta qué altura llega la mancha"],
    cor: ["Corta primero el origen de la humedad (si no, vuelve)", "Retira la pintura suelta con espátula y cepilla en seco con cepillo de cerdas duras", "Lava con solución antisalitre o ácida diluida y enjuaga bien", "Deja secar varios días, hasta que no salga más polvo blanco", "Aplica sellador antisalitre o fijador al solvente", "Pinta con pintura transpirable o de buena resistencia a la alcalinidad"],
    pre: ["Dejar curar revoques al menos 28 días antes de pintar", "Impermeabilizar fachadas y sellar el pie de los muros", "Usar pinturas que dejen respirar el muro en zonas con humedad"],
    cli: "La sal sigue saliendo y empuja la pintura; hay que sacarla, neutralizar y sellar, si no en pocos meses se vuelve a pelar."
  },
  en: {
    t: "Efflorescence (salt deposits)",
    r: "White powdery or crystal crust that pushes the paint off the wall.",
    sen: ["White powder or crystals on the surface", "Paint bubbling or flaking with salt behind it", "Crumbles when you rub it", "Most common low on walls and on brick or block"],
    cau: ["Water dissolving salts in brick, cement or soil", "Water evaporates and leaves the salts on the face", "Fresh stucco or plaster painted before it cured", "Rising damp or leaks"],
    ver: ["Wet it: water-soluble salts dissolve; a drop of vinegar fizzing means carbonate", "Check if the wall is damp to the touch or on a meter", "Find the water source before you paint anything", "Note how high up the wall the deposits reach"],
    cor: ["Fix the water source first or it will come back", "Scrape off loose paint and dry-brush with a stiff bristle brush", "Wash with an efflorescence cleaner or diluted masonry acid, then rinse well", "Let it dry several days until no more white powder forms", "Apply an alkali-resistant masonry sealer/primer", "Topcoat with a breathable masonry paint"],
    pre: ["Let new stucco and plaster cure at least 28 days before painting", "Waterproof exterior walls and seal the base of the wall", "Use breathable coatings on damp-prone masonry"],
    cli: "The salts keep pushing out and lifting the paint; they have to be removed, neutralized and sealed, or it'll be peeling again in a few months."
  },
  trat: { es: "Tratamiento antisalitre", en: "Efflorescence treatment", f: 0.4 },
  img: "Vertical smartphone photo, close-up of white crystalline salt efflorescence pushing flaking paint off the lower part of an interior masonry wall, natural light, no text, no people."
},
{
  id: "humedad_ascendente",
  cat: "humedad",
  sev: 3,
  es: {
    t: "Humedad ascendente (de cimientos)",
    r: "Mancha que sube desde el piso hasta 50-100 cm y deshace pintura y revoque.",
    sen: ["Franja húmeda pareja desde el zócalo hacia arriba", "Línea de marea con borde irregular y salitre", "Revoque flojo, suena hueco o se desgrana", "Zócalos de madera podridos o hinchados"],
    cau: ["Falta o rotura de la capa aisladora horizontal del muro", "Terreno húmedo, napas altas o patio más alto que el piso interior", "Revoques impermeables por fuera que no dejan evaporar", "Desagües o cañerías enterradas con pérdidas"],
    ver: ["Mide la humedad a distintas alturas: si es mayor abajo y baja al subir, es ascendente", "Mira si el problema está en ambas caras del muro", "Revisa el nivel del terreno exterior respecto del piso interior", "Descarta pérdidas de cañerías antes de diagnosticar"],
    cor: ["Avisa al cliente que la solución de fondo es de albañilería (barrera química o corte del muro)", "Retira el revoque dañado hasta unos 50 cm por encima de la mancha", "Una vez hecha la barrera, deja secar el muro el mayor tiempo posible", "Revoca con mortero macroporoso o de saneamiento", "Aplica fondo transpirable compatible", "Pinta con pintura transpirable (no impermeable) para que el muro respire"],
    pre: ["Asegurar la capa aisladora en obra nueva", "Mantener el terreno exterior por debajo del piso y con buen drenaje", "No usar pinturas plásticas impermeables en la base de muros húmedos"],
    cli: "Esto viene del suelo: si solo pinto, en un mes vuelve a manchar; primero hay que cortar la humedad y rehacer el revoque, y después recién pintar."
  },
  en: {
    t: "Rising damp",
    r: "Moisture wicking up from the floor 2-3 feet, ruining paint and plaster.",
    sen: ["Even damp band starting at the baseboard and going up", "Tide mark with a ragged edge and salt deposits", "Plaster sounds hollow or crumbles", "Wood baseboards swollen or rotting"],
    cau: ["Missing or failed damp-proof course in the wall", "Wet soil, high water table or exterior grade above the floor", "Non-breathable coatings outside trapping moisture", "Leaking buried pipes or drains"],
    ver: ["Take meter readings at several heights: wetter low and drier high means rising damp", "Check if both sides of the wall are affected", "Compare the exterior grade with the interior floor level", "Rule out plumbing leaks before you call it"],
    cor: ["Tell the owner the real fix is masonry work (chemical DPC injection or similar)", "Strip damaged plaster to about 20 inches above the stain line", "After the damp barrier is in, let the wall dry as long as possible", "Re-plaster with a breathable salt-resistant render", "Prime with a compatible breathable primer", "Finish with a breathable masonry paint, not a sealed plastic coating"],
    pre: ["Make sure new construction has a damp-proof course", "Keep exterior grade below the floor with good drainage", "Avoid non-breathable paints at the base of damp walls"],
    cli: "This is coming up from the ground; paint alone fails within weeks, so the moisture has to be stopped and the plaster redone before any paint goes on."
  },
  trat: { es: "Saneamiento de humedad ascendente", en: "Rising damp remediation", f: 1.2 },
  img: "Vertical smartphone photo of the lower part of an interior wall with a dark damp band rising from the baseboard, wavy tide line, flaking paint and white salts, natural light, no text, no people."
},
{
  id: "condensacion",
  cat: "humedad",
  sev: 2,
  es: {
    t: "Humedad por condensación",
    r: "Gotas o manchas en paredes y techos fríos, sobre todo en invierno.",
    sen: ["Vidrios empañados y paredes que transpiran por la mañana", "Manchas difusas en esquinas superiores y detrás de placares", "Moho que acompaña las manchas", "Empeora en invierno y mejora en verano"],
    cau: ["Mucho vapor interior (cocinar, duchas, secar ropa, estufas sin salida)", "Poca ventilación", "Muros, vigas o losas frías sin aislación (puentes térmicos)", "Ambientes cerrados con mucha gente"],
    ver: ["Pega un trozo de film plástico con cinta 24 horas: si se moja por dentro (lado pared) es humedad del muro; si se moja por fuera es condensación", "Observa si la mancha coincide con vigas, columnas o esquinas frías", "Pregunta por hábitos: secado de ropa, ventilación, calefacción", "Revisa si hay extractores y si funcionan"],
    cor: ["Explica al cliente que hay que ventilar o mejorar la aislación, no solo pintar", "Limpia y desinfecta el moho con fungicida", "Deja secar bien la superficie", "Aplica fijador o sellador", "Pinta con pintura antihongos o térmica/anticondensación en zonas críticas"],
    pre: ["Ventilar 10 minutos al día y usar extractores en baño y cocina", "No secar ropa adentro sin ventilación", "Aislar puentes térmicos en muros y techos fríos"],
    cli: "La humedad sale del propio ambiente; además de pintar con un producto anticondensación, hay que tratar el moho y explicarle cómo evitar que vuelva."
  },
  en: {
    t: "Condensation damp",
    r: "Water beads or dark patches on cold walls and ceilings, mostly in winter.",
    sen: ["Foggy windows and sweating walls in the morning", "Diffuse stains in upper corners and behind closets", "Mildew growing on the stains", "Worse in winter, better in summer"],
    cau: ["High indoor humidity (cooking, showers, drying laundry, unvented heaters)", "Poor ventilation", "Cold walls, beams or slabs with no insulation (thermal bridges)", "Closed rooms with lots of people"],
    ver: ["Tape a square of plastic wrap to the wall for 24 hours: wet behind it means moisture in the wall, wet on the room side means condensation", "See if stains line up with beams, columns or cold corners", "Ask about habits: laundry, airing out, heating", "Check if exhaust fans exist and actually work"],
    cor: ["Explain that ventilation or insulation has to improve, not just paint", "Clean and kill the mildew with a mildewcide wash", "Let the surface dry completely", "Apply a primer-sealer", "Paint with a mildew-resistant or anti-condensation paint in problem areas"],
    pre: ["Air out 10 minutes a day and run bath and kitchen fans", "Don't dry laundry indoors without ventilation", "Insulate thermal bridges on cold walls and ceilings"],
    cli: "The moisture is coming from inside the room; besides an anti-condensation coating, the mildew has to be treated and the ventilation fixed or it comes right back."
  },
  trat: { es: "Tratamiento anticondensación", en: "Condensation treatment", f: 0.3 },
  img: "Vertical smartphone photo of the cold upper corner of a bedroom wall and ceiling with gray damp shadow and small water droplets, foggy window edge visible, natural light, no text, no people."
},
{
  id: "filtracion",
  cat: "humedad",
  sev: 3,
  es: {
    t: "Manchas de humedad por filtración",
    r: "Manchas amarillas o marrones con aureola que crecen cuando llueve o hay pérdida.",
    sen: ["Mancha con borde marrón o amarillo bien marcado (aureola)", "Pintura abombada, ampollada o descascarada en la zona", "Crece después de la lluvia o del uso de un baño", "Revoque flojo o con olor a humedad"],
    cau: ["Pérdida de cañería o desagüe dentro del muro", "Filtración por techo, terraza, canaleta o babeta", "Fisuras en fachada o juntas de ventanas mal selladas", "Tanques o sanitarios de un piso superior"],
    ver: ["Fíjate si la mancha cambia con la lluvia (techo/fachada) o con el uso de agua (cañería)", "Revisa si arriba o del otro lado hay baño, cocina o tanque", "Mide la humedad: si sigue alta en tiempo seco, la pérdida sigue activa", "Busca fisuras o juntas abiertas por fuera"],
    cor: ["Deriva la reparación del origen a plomero o impermeabilizador; no pintes sobre humedad activa", "Una vez reparado, deja secar hasta que el medidor dé valores normales (puede llevar semanas)", "Retira pintura y masilla flojas y repara el revoque dañado", "Aplica bloqueador de manchas al solvente o sellador para manchas de agua", "Masilla, lija y fija", "Pinta toda la superficie de corte a corte para que no se note el parche"],
    pre: ["Mantener canaletas, terrazas y juntas en buen estado", "Revisar sellados de ventanas y fachada cada pocos años", "Reparar pérdidas apenas aparecen"],
    cli: "Primero hay que cortar el agua y dejar secar; después la mancha necesita un bloqueador especial, porque con pintura común se vuelve a transparentar."
  },
  en: {
    t: "Water stains from leaks",
    r: "Yellow or brown ringed stains that grow after rain or a plumbing leak.",
    sen: ["Stain with a sharp brown or yellow ring", "Paint bubbling, blistering or peeling in the area", "Grows after rain or after a bathroom is used", "Soft or musty-smelling plaster"],
    cau: ["Leaking supply or drain line inside the wall", "Roof, deck, gutter or flashing leak", "Cracked siding or stucco, or poorly sealed windows", "Tank or fixtures on the floor above"],
    ver: ["Check if it changes with rain (roof/exterior) or with water use (plumbing)", "See what's above or on the other side: bathroom, kitchen, tank", "Meter it: still wet in dry weather means an active leak", "Look for open cracks or failed caulk outside"],
    cor: ["Send the leak to a plumber or roofer first; never paint over an active leak", "After the repair, let it dry until readings are normal (can take weeks)", "Scrape loose paint and patch, repair damaged plaster", "Spot-prime with an oil-based or shellac stain blocker", "Skim, sand and prime", "Paint the whole wall or ceiling corner to corner so the patch doesn't flash"],
    pre: ["Keep gutters, decks and flashing in good shape", "Re-caulk windows and exterior joints every few years", "Fix leaks as soon as they show up"],
    cli: "The water has to be stopped and dried out first, then the stain needs a special blocker, because regular paint lets it bleed right back through."
  },
  trat: { es: "Reparación de mancha de filtración", en: "Water damage repair", f: 0.6 },
  img: "Vertical smartphone photo of a white ceiling corner with a large brown water stain ring and slightly bubbling paint, natural daylight, realistic house interior, no text, no people."
},
{
  id: "cielorraso_humedad",
  cat: "humedad",
  sev: 3,
  es: {
    t: "Desconchado en cielorrasos por humedad",
    r: "Trozos de pintura y yeso que se caen del techo, con manchas o abolsamiento.",
    sen: ["Cascarones de pintura y enlucido caídos en el piso", "Zonas abolsadas o hinchadas en el cielorraso", "Mancha marrón o negra alrededor", "Placa de yeso blanda o combada"],
    cau: ["Filtración desde la cubierta, terraza o baño superior", "Condensación en techos de losa sin aislación", "Capas viejas de pintura a la cal o temple debajo del látex", "Placas de yeso mojadas que perdieron resistencia"],
    ver: ["Presiona suavemente con la mano: si está blando o se hunde, el material está dañado", "Golpea con los nudillos para detectar zonas huecas", "Revisa el techo o el piso de arriba buscando el origen", "Raspa un sector: si debajo hay polvo blanco, había cal o temple"],
    cor: ["Deriva la reparación del techo o pérdida al especialista; no trabajes con el agua activa", "Retira todo lo flojo con espátula hasta llegar a base firme", "Reemplaza placas de yeso blandas o combadas", "Aplica fijador al solvente o sellador para consolidar el borde", "Bloquea las manchas, masilla, lija y vuelve a fijar", "Pinta el cielorraso completo con pintura para cielorrasos"],
    pre: ["Revisar y mantener la impermeabilización de techos y terrazas", "Ventilar baños para evitar condensación en el techo", "No pintar látex sobre cal o temple sin fijar antes"],
    cli: "Esto tiene riesgo de caída y viene de un problema arriba; hay que arreglar el origen, sacar todo lo flojo y consolidar antes de pintar, por eso no es solo una mano."
  },
  en: {
    t: "Peeling ceiling from water damage",
    r: "Chunks of paint and plaster falling from the ceiling, with stains or sagging.",
    sen: ["Paint and plaster flakes on the floor", "Sagging or bulging areas in the ceiling", "Brown or black staining around it", "Soft or bowed drywall"],
    cau: ["Leak from the roof, deck or bathroom above", "Condensation on uninsulated concrete ceilings", "Old calcimine or whitewash under latex", "Drywall that got wet and lost strength"],
    ver: ["Press gently: if it's soft or gives, the board is shot", "Knock with your knuckles to find hollow spots", "Check the roof or the floor above for the source", "Scrape a spot: chalky white powder underneath means old calcimine"],
    cor: ["Have the leak fixed by a roofer or plumber first; never work over an active leak", "Scrape everything loose back to sound material", "Replace soft or bowed drywall", "Lock down the edges with an oil-based or penetrating bonding primer", "Stain-block, skim, sand and prime again", "Paint the whole ceiling with flat ceiling paint"],
    pre: ["Maintain roof and deck waterproofing", "Run bathroom fans to stop ceiling condensation", "Never put latex over calcimine without a bonding primer"],
    cli: "This can fall on someone and it's coming from a problem above; the source has to be fixed and everything loose removed and locked down first, so it's more than one coat."
  },
  trat: { es: "Reparación de cielorraso dañado", en: "Ceiling damage repair", f: 0.6 },
  img: "Vertical smartphone photo looking up at a ceiling with large paint and plaster flakes peeling off around a brown water stain, some sagging, natural light, no text, no people."
},
{
  id: "ampollas",
  cat: "humedad",
  sev: 2,
  es: {
    t: "Ampollas o burbujas (por humedad o calor)",
    r: "Bolsitas en la película de pintura, con agua o vacías, que pueden reventar.",
    sen: ["Burbujas de distintos tamaños bajo la película", "Al pincharlas sale agua o están secas", "Aparecen en fachadas al sol, baños o zonas húmedas", "Pueden reventar y dejar cráteres o descascarado"],
    cau: ["Humedad en el sustrato que empuja al evaporarse", "Pintar al sol fuerte o sobre superficie caliente (el disolvente queda atrapado)", "Pintura oscura en fachada muy expuesta", "Látex aplicado sobre esmalte o superficie sucia/grasosa"],
    ver: ["Corta una ampolla con el cúter: si sale agua o está húmeda debajo, es humedad; si está seca y aparece la capa anterior, es calor o adherencia", "Mira hasta qué capa llega: solo la última o hasta el revoque", "Mide humedad del sustrato", "Pregunta cuándo y con qué sol se pintó"],
    cor: ["Si es por humedad, corta primero el origen y deja secar", "Raspa todas las ampollas y bordes flojos", "Lija para emparejar los bordes", "Masilla los cráteres y lija", "Aplica fijador o imprimación adecuada", "Pinta a la sombra, sin sol directo sobre la pared ni superficie caliente"],
    pre: ["No pintar con la superficie caliente ni a pleno sol", "Verificar humedad antes de pintar", "Respetar tiempos de secado entre manos"],
    cli: "Hay que raspar cada burbuja, emparejar y sellar, y si es humedad, primero cortarla; si pinto encima, revientan de nuevo."
  },
  en: {
    t: "Blistering (moisture or heat)",
    r: "Bubbles in the paint film, wet or dry inside, that can pop and peel.",
    sen: ["Bubbles of different sizes under the film", "When you pop them they're wet or dry", "Shows up on sunny exterior walls, bathrooms or damp areas", "Can burst and leave craters or peeling"],
    cau: ["Moisture in the substrate pushing out as it evaporates", "Painting in direct sun or on a hot surface (solvent gets trapped)", "Dark colors on a sun-baked wall", "Latex over oil or over a dirty, greasy surface"],
    ver: ["Slice one open with a utility knife: water or damp underneath means moisture; dry with the old coat showing means heat or adhesion", "See how deep it goes: top coat only or down to the substrate", "Meter the substrate moisture", "Ask when it was painted and in what sun"],
    cor: ["If it's moisture, fix the source and let it dry first", "Scrape all blisters and loose edges", "Sand to feather the edges", "Patch the craters and sand", "Spot-prime with the right primer", "Repaint in the shade, never on a sun-hot surface"],
    pre: ["Don't paint surfaces that are hot or in direct sun", "Check moisture before painting", "Respect recoat times"],
    cli: "Every blister has to be scraped, feathered and primed, and if it's moisture that gets fixed first; painting over them means they'll pop again."
  },
  trat: { es: "Tratamiento de ampollas", en: "Blister repair", f: 0.5 },
  img: "Vertical smartphone photo, close-up of paint blisters of various sizes on an exterior stucco wall in sunlight, one blister cut open, realistic texture, no text, no people."
},

// ───────────────────────── ADHERENCIA ─────────────────────────
{
  id: "saponificacion",
  cat: "adherencia",
  sev: 2,
  es: {
    t: "Saponificación",
    r: "Pintura pegajosa, blanda o que chorrea un líquido amarillento sobre revoque nuevo.",
    sen: ["Película blanda o pegajosa que no endurece", "Gotas o chorreaduras aceitosas amarillentas o marrones", "Pérdida de adherencia y descascarado", "Ocurre sobre revoque, hormigón o fibrocemento"],
    cau: ["Esmalte o pintura alquídica sobre revoque fresco y alcalino", "Revoque o enlucido sin curar (menos de 28 días)", "Humedad que lleva la alcalinidad del cemento a la superficie", "No usar fondo resistente a álcalis"],
    ver: ["Aplica unas gotas de fenolftaleína o tira de pH sobre el revoque húmedo: si da muy alcalino (rosa intenso / pH 10+) el sustrato no está listo", "Confirma la edad del revoque y si se pintó con esmalte o sintético", "Toca la película: si está jabonosa o se marca con la uña, está saponificada", "Revisa si hay humedad activa"],
    cor: ["Retira toda la pintura afectada con espátula o removedor", "Lava con agua y deja secar bien", "Si el revoque es nuevo, espera que cure o neutraliza con lavado ácido diluido y enjuague", "Aplica imprimación o sellador resistente a álcalis", "Pinta con pintura al agua (acrílica) apta para mampostería"],
    pre: ["Esperar al menos 28 días de curado del revoque", "Usar siempre fondo resistente a la alcalinidad en revoques nuevos", "No usar esmaltes alquídicos directo sobre cemento"],
    cli: "La cal del revoque está literalmente convirtiendo la pintura en jabón; hay que sacarla toda y sellar con un fondo especial, si no pasa de nuevo."
  },
  en: {
    t: "Saponification",
    r: "Soft, sticky paint or yellowish oily drips on fresh masonry or stucco.",
    sen: ["Film stays soft or tacky and never hardens", "Yellow or brown oily drips or runs", "Loss of adhesion and peeling", "Happens on stucco, concrete or fiber cement"],
    cau: ["Oil/alkyd paint over fresh, highly alkaline masonry", "Plaster or stucco not cured (under 28 days)", "Moisture carrying alkali to the surface", "No alkali-resistant primer"],
    ver: ["Check pH with a test strip on damp masonry: pH 10+ means it's not ready", "Confirm the age of the stucco and if oil paint was used", "Press the film with a fingernail: soapy or soft means saponified", "Check for active moisture"],
    cor: ["Strip all affected paint with a scraper or stripper", "Wash with water and let it dry fully", "If the masonry is new, let it cure or neutralize with a diluted acid wash and rinse", "Prime with an alkali-resistant masonry primer", "Topcoat with a 100% acrylic masonry paint"],
    pre: ["Wait at least 28 days for stucco to cure", "Always use alkali-resistant primer on new masonry", "Never put oil-based paint straight onto cement"],
    cli: "The alkali in the stucco is literally turning the paint into soap; it all has to come off and get a special primer or it'll fail again."
  },
  trat: { es: "Remoción y sellado antialcalino", en: "Strip and alkali-resistant primer", f: 0.6 },
  img: "Vertical smartphone photo, close-up of sticky soft enamel paint on a new cement render wall with yellowish oily drips and peeling edges, natural light, no text, no people."
},
{
  id: "descascarado",
  cat: "adherencia",
  sev: 2,
  es: {
    t: "Descascarado (peeling)",
    r: "La pintura se levanta en escamas y deja ver la capa o el sustrato de abajo.",
    sen: ["Escamas que se levantan por los bordes", "Se ve la mano anterior o el revoque desnudo", "Al pasar la espátula sale fácil", "Frecuente en fachadas, aleros y zonas húmedas"],
    cau: ["Superficie sucia, polvorienta o con grasa al pintar", "Humedad en el sustrato", "Pintar sobre una capa vieja que ya estaba floja", "Falta de fijador o imprimación"],
    ver: ["Prueba de cinta: corta una cuadrícula con cúter, pega cinta de papel fuerte y arranca de golpe; si sale pintura, no hay adherencia", "Mira el dorso de la escama: si trae polvo o tiza, la superficie no estaba firme", "Mide humedad del sustrato", "Raspa para ver hasta dónde está suelto"],
    cor: ["Raspa toda la pintura suelta con espátula o rasqueta", "Lija los bordes firmes para que no se marquen", "Lava y deja secar", "Aplica fijador sellador para consolidar", "Masilla los desniveles y lija", "Pinta en dos manos"],
    pre: ["Limpiar siempre antes de pintar", "Usar fijador sobre superficies porosas o tizosas", "Controlar la humedad antes de aplicar"],
    cli: "No puedo pintar sobre algo que se está despegando; hay que raspar todo lo flojo, emparejar y fijar, y eso es la mayor parte del trabajo."
  },
  en: {
    t: "Peeling paint",
    r: "Paint lifts in flakes, exposing the coat or substrate underneath.",
    sen: ["Flakes curling up at the edges", "Old coat or bare plaster showing", "Comes off easily with a scraper", "Common on exteriors, eaves and damp areas"],
    cau: ["Dirty, dusty or greasy surface at painting time", "Moisture in the substrate", "Painting over an old coat that was already failing", "No primer or bonding primer"],
    ver: ["Tape test: score a crosshatch, press on strong tape and rip it off; if paint comes up, adhesion is bad", "Look at the back of a flake: dust or chalk means the surface wasn't sound", "Meter for moisture", "Scrape to see how far the loose paint goes"],
    cor: ["Scrape off all loose paint", "Sand and feather the sound edges", "Wash and let it dry", "Apply a bonding or penetrating primer", "Skim coat the low spots and sand", "Apply two finish coats"],
    pre: ["Always clean before painting", "Use a penetrating primer on porous or chalky surfaces", "Check moisture before you start"],
    cli: "I can't paint over something that's coming loose; scraping, feathering and priming is most of the job, and that's what makes it last."
  },
  trat: { es: "Raspado y fijación", en: "Scraping and priming", f: 0.6 },
  img: "Vertical smartphone photo, close-up of exterior wall paint peeling in curled flakes showing older layer and bare plaster underneath, natural daylight, no text, no people."
},
{
  id: "desprendimiento_laminas",
  cat: "adherencia",
  sev: 2,
  es: {
    t: "Desprendimiento en láminas",
    r: "Varias capas de pintura se despegan juntas en planchas grandes, como un cuero.",
    sen: ["Láminas grandes y elásticas que se tiran con la mano", "Se ven varias capas de colores en el borde", "Debajo queda el revoque o una capa de polvo", "Suena hueco al golpear"],
    cau: ["Acumulación de muchas manos sobre una base débil (cal, temple, polvo)", "Pintura vieja muy rígida que tira de las capas inferiores", "Humedad que rompe la unión con el sustrato", "Primera mano aplicada sin fijador sobre superficie tizosa"],
    ver: ["Haz la prueba de cinta en varios sectores", "Mira el dorso de la lámina: si trae polvo blanco, la base es cal o temple", "Golpea con los nudillos para marcar zonas huecas", "Cuenta cuántas capas hay en el borde"],
    cor: ["Retira todas las láminas sueltas; en zonas grandes, decapa o raspa toda la pared", "Cepilla y elimina el polvo de cal o temple", "Aplica fijador al solvente o sellador penetrante", "Repara el revoque si quedó dañado", "Enduido o masilla general si la superficie quedó irregular, y lija", "Pinta en dos manos"],
    pre: ["No acumular capas sin revisar la adherencia de la base", "Fijar siempre sobre superficies viejas o tizosas", "Controlar humedades"],
    cli: "Las capas viejas ya no se sostienen; si pinto encima suman peso y se caen más rápido, así que hay que llevar la pared a base firme y volver a empezar."
  },
  en: {
    t: "Sheet delamination",
    r: "Several layers of paint come off together in large, leathery sheets.",
    sen: ["Large rubbery sheets you can pull off by hand", "Multiple colored layers visible at the edge", "Bare plaster or a dusty layer underneath", "Sounds hollow when tapped"],
    cau: ["Many coats built up over a weak base (calcimine, whitewash, dust)", "Old rigid paint pulling on the layers below", "Moisture breaking the bond to the substrate", "First coat applied without primer over a chalky surface"],
    ver: ["Do a tape test in several spots", "Look at the back of a sheet: white powder means calcimine or whitewash", "Tap with knuckles to map hollow areas", "Count the layers at the edge"],
    cor: ["Remove all loose sheets; on large areas strip or scrape the whole wall", "Brush off all chalk or calcimine residue", "Apply an oil-based or penetrating bonding primer", "Repair any damaged plaster", "Full skim coat if the wall is uneven, then sand", "Apply two finish coats"],
    pre: ["Don't keep stacking coats without checking adhesion", "Always prime old or chalky surfaces", "Control moisture"],
    cli: "The old layers aren't holding anymore; more paint just adds weight, so the wall has to go back to a sound base, and that's real extra labor."
  },
  trat: { es: "Decapado y consolidación", en: "Strip and stabilize", f: 0.9 },
  img: "Vertical smartphone photo of a hand pulling a large rubbery sheet of multi-layer old paint off an interior plaster wall, chalky white surface underneath, natural light, no text."
},
{
  id: "sobre_esmalte",
  cat: "adherencia",
  sev: 2,
  es: {
    t: "Pintura que no agarra sobre esmalte o brillante",
    r: "El látex o acrílico se raya o sale con la uña sobre superficies satinadas o brillantes.",
    sen: ["La pintura nueva se raya con la uña o sale con cinta", "Se pela en marcos, puertas y zócalos con el roce", "Desprendimiento en tiras al despegar cinta de enmascarar", "Debajo aparece una superficie lisa y brillante"],
    cau: ["Pintura al agua sobre esmalte sintético sin preparar", "No lijar ni desengrasar la superficie brillante", "No usar imprimación de adherencia", "Superficie con grasa, ceras o restos de limpiadores"],
    ver: ["Frota un trapo con alcohol en la capa vieja: si no se ablanda ni tiñe, suele ser esmalte sintético (al solvente)", "Haz la prueba de cinta en la pintura nueva", "Mira si la base tiene brillo", "Pregunta qué producto había antes"],
    cor: ["Retira la pintura nueva que no adhirió (raspa o lija)", "Desengrasa con desengrasante o agua con detergente y enjuaga", "Lija toda la superficie hasta matar el brillo (lija 180-220)", "Limpia el polvo con trapo húmedo", "Aplica imprimación de adherencia (puente de adherencia)", "Pinta con el acabado elegido"],
    pre: ["Matar siempre el brillo antes de repintar", "Usar imprimación de adherencia sobre esmaltes y superficies lisas", "Desengrasar puertas y marcos antes de lijar"],
    cli: "Sobre esmalte la pintura nueva no se agarra sola; hay que desengrasar, lijar todo y poner una imprimación especial para que no se pele con el primer roce."
  },
  en: {
    t: "Paint not sticking to oil or gloss",
    r: "Latex scratches or peels off with a fingernail over glossy or oil-based surfaces.",
    sen: ["New paint scratches off with a fingernail or lifts with tape", "Peels on trim, doors and baseboards where they get bumped", "Comes off in strips when you pull masking tape", "Smooth glossy surface underneath"],
    cau: ["Latex over oil-based enamel with no prep", "Gloss not sanded or degreased", "No bonding primer", "Grease, wax or cleaner residue on the surface"],
    ver: ["Rub the old coat with a rag and denatured alcohol: if it doesn't soften, it's likely oil-based", "Tape test the new paint", "Check if the old coat has sheen", "Ask what was on there before"],
    cor: ["Remove the new paint that didn't bond (scrape or sand)", "Degrease with a degreaser or TSP substitute and rinse", "Scuff-sand everything until the gloss is dull (180-220 grit)", "Wipe off dust with a damp rag", "Apply a bonding primer", "Topcoat with your finish"],
    pre: ["Always knock down the gloss before repainting", "Use a bonding primer over oil and slick surfaces", "Degrease doors and trim before sanding"],
    cli: "New paint won't hold on oil-based enamel by itself; it has to be degreased, sanded and bonding-primed or it'll peel the first time something bumps it."
  },
  trat: { es: "Lijado e imprimación de adherencia", en: "Scuff-sand and bonding primer", f: 0.35 },
  img: "Vertical smartphone photo, close-up of white latex paint peeling in strips off a glossy cream-colored enamel door frame, masking tape partly removed, natural light, no text, no people."
},
{
  id: "galvanizado",
  cat: "adherencia",
  sev: 2,
  es: {
    t: "Pintura que se pela sobre galvanizado",
    r: "La pintura se suelta en placas de chapas, caños o rejas galvanizadas.",
    sen: ["Placas de pintura que se sueltan dejando el metal plateado limpio", "Pelado parejo en chapas, canaletas o caños nuevos", "Polvillo blanco en el metal debajo", "La pintura sale entera, sin óxido"],
    cau: ["Pintura común o esmalte alquídico directo sobre galvanizado", "Película de aceite o pasivado de fábrica en el galvanizado nuevo", "Falta de imprimación específica para galvanizado", "Óxido blanco de zinc sin limpiar"],
    ver: ["Mira el metal debajo: si está plateado y limpio, el problema es adherencia, no óxido", "Confirma si la chapa es galvanizada (brillo con dibujo de cristales o gris mate)", "Haz prueba de cinta en sectores sanos", "Revisa si hay óxido rojo, que necesita otro tratamiento"],
    cor: ["Retira toda la pintura floja con espátula y cepillo", "Desengrasa con desengrasante o solvente adecuado", "Lija suave (lija fina o esponja abrasiva) para dar anclaje", "Limpia el polvo", "Aplica imprimación o fondo específico para galvanizado", "Pinta con esmalte o pintura apta para metal"],
    pre: ["Nunca pintar galvanizado nuevo sin desengrasar e imprimar", "Usar fondos específicos para galvanizado", "Dejar envejecer o tratar el galvanizado según indique el fabricante del fondo"],
    cli: "El galvanizado repele la pintura común; necesita desengrase, lijado y un fondo especial, si no se vuelve a pelar entera."
  },
  en: {
    t: "Paint peeling off galvanized metal",
    r: "Paint lets go in sheets from galvanized roofing, gutters, pipes or railings.",
    sen: ["Paint sheets off leaving clean silver metal", "Uniform peeling on new sheet metal, gutters or pipe", "White powder on the metal underneath", "Paint comes off whole, no rust"],
    cau: ["Regular paint or oil enamel straight onto galvanized", "Mill oil or passivation on new galvanized", "No galvanized-metal primer", "White zinc oxide not cleaned off"],
    ver: ["Look at the metal: clean and silver means an adhesion problem, not rust", "Confirm it's galvanized (spangle pattern or dull gray)", "Tape test the areas still holding", "Check for red rust, which needs a different fix"],
    cor: ["Scrape and brush off all loose paint", "Degrease with a degreaser or proper solvent", "Lightly scuff with fine sandpaper or an abrasive pad for tooth", "Wipe off dust", "Apply a primer rated for galvanized metal", "Topcoat with a metal-rated enamel or acrylic"],
    pre: ["Never paint new galvanized without degreasing and priming", "Use a dedicated galvanized primer", "Weather or treat new galvanized as the primer maker recommends"],
    cli: "Galvanized metal rejects regular paint; it needs degreasing, scuffing and a special primer, or it'll peel off in sheets again."
  },
  trat: { es: "Preparación de galvanizado", en: "Galvanized metal prep", f: 0.4 },
  img: "Vertical smartphone photo, close-up of gray paint peeling off in sheets from a galvanized metal gutter, shiny silver zinc visible underneath, outdoor daylight, no text, no people."
},
{
  id: "sobre_cal",
  cat: "adherencia",
  sev: 2,
  es: {
    t: "Pintura sobre cal o temple que se pela",
    r: "El látex aplicado sobre cal o temple viejo se suelta y deja polvo blanco.",
    sen: ["La pintura se levanta y trae polvo blanco pegado atrás", "Mancha la mano o la ropa al rozar la pared vieja", "Se descascara en cielorrasos y casas antiguas", "La cinta arranca pintura con facilidad"],
    cau: ["La cal o el temple son polvorientos y no dan agarre", "Látex aplicado sin fijador sobre la capa de cal", "La cal se ablanda con el agua de la pintura nueva", "Humedad que debilita aún más la base"],
    ver: ["Pasa la mano o un trapo húmedo: si deja blanco, es cal o temple", "Moja un sector: el temple se ablanda y sale con agua; la cal resiste más", "Haz prueba de cinta", "Revisa cuántas capas hay encima de la cal"],
    cor: ["Raspa todo lo flojo; si es temple, lávalo con agua y esponja hasta sacarlo", "Cepilla en seco para quitar el polvo de cal", "Aplica fijador al solvente o sellador penetrante (consolida la cal)", "Repara y masilla donde haga falta", "Vuelve a fijar sobre los parches", "Pinta con látex en dos manos"],
    pre: ["Identificar siempre la base antes de presupuestar", "Fijar con producto penetrante antes de cualquier látex", "En casas antiguas, sacar el temple por completo"],
    cli: "Debajo hay cal o temple que se hace polvo; si no la saco o la consolido con un fijador especial, la pintura nueva se cae con todo."
  },
  en: {
    t: "Paint peeling over lime or calcimine",
    r: "Latex over old whitewash, lime or calcimine lifts off with white powder behind it.",
    sen: ["Paint lifts with white powder stuck to the back", "Old wall rubs off white on your hand", "Peels on ceilings and in older homes", "Tape pulls the paint right off"],
    cau: ["Lime and calcimine are chalky and give no grip", "Latex applied with no bonding primer", "The water in latex softens the calcimine", "Moisture weakening the base further"],
    ver: ["Rub with your hand or a damp rag: white residue means lime or calcimine", "Wet a spot: calcimine softens and washes off, lime holds better", "Tape test", "Count how many coats are on top"],
    cor: ["Scrape all loose paint; wash calcimine off with water and a sponge", "Dry-brush off remaining lime dust", "Apply an oil-based or penetrating binding primer to lock it down", "Patch and skim where needed", "Spot-prime the patches", "Apply two coats of latex"],
    pre: ["Identify the substrate before you bid", "Always use a penetrating primer before latex on old walls", "In old houses, remove calcimine completely"],
    cli: "There's old calcimine under there turning to powder; it has to be removed or locked down with a special primer, or the new paint falls off with it."
  },
  trat: { es: "Remoción de cal/temple y fijación", en: "Calcimine removal and priming", f: 0.9 },
  img: "Vertical smartphone photo, close-up of latex paint peeling off an old ceiling, flakes with chalky white powder on the back, old lime surface visible, natural light, no text, no people."
},
{
  id: "revoque_polvoriento",
  cat: "adherencia",
  sev: 2,
  es: {
    t: "Revoque polvoriento o que se desgrana",
    r: "La superficie suelta arena o polvo y la pintura no tiene dónde agarrarse.",
    sen: ["Al pasar la mano cae arena o polvo", "La espátula raya y saca material fácilmente", "La pintura se pela con granos de arena pegados", "Superficie muy absorbente: chupa la pintura"],
    cau: ["Revoque pobre en cemento o mal curado (secó demasiado rápido)", "Humedad o salitre que deshace el mortero", "Envejecimiento y erosión en fachadas", "Revoque fino aplicado sobre base mojada o helada"],
    ver: ["Raya con una llave o clavo: si se hace surco profundo, el revoque es débil", "Pasa la mano y mira cuánto polvo queda", "Moja con agua: si la absorbe al instante, es muy poroso", "Busca humedad o salitre como causa"],
    cor: ["Cepilla con cepillo de cerdas duras hasta sacar todo lo suelto", "Si hay zonas que se deshacen, pica y rehace el revoque", "Aplica fijador sellador penetrante (puede requerir dos manos) hasta consolidar", "Masilla o enduido para emparejar y lija", "Vuelve a fijar", "Pinta en dos manos"],
    pre: ["Curar bien los revoques (mojarlos los primeros días)", "Controlar humedad y salitre", "Fijar siempre superficies porosas antes de pintar"],
    cli: "La pared se está desarmando; hay que consolidarla con fijador penetrante y en partes rehacer revoque, si no la pintura se cae con la arena."
  },
  en: {
    t: "Dusty or crumbling plaster",
    r: "The surface sheds sand or dust and the paint has nothing to grab onto.",
    sen: ["Sand or dust falls when you run your hand across it", "A scraper gouges it easily", "Peeling paint has sand stuck to the back", "Very thirsty surface that soaks up paint"],
    cau: ["Lean mix or poorly cured stucco/plaster (dried too fast)", "Moisture or salts breaking down the mortar", "Age and weathering on exterior walls", "Finish coat applied over a wet or frozen base"],
    ver: ["Scratch it with a key or nail: a deep groove means weak plaster", "Run your hand over it and see how much dust you pick up", "Splash water: if it soaks in instantly, it's very porous", "Look for moisture or salts as the cause"],
    cor: ["Wire- or bristle-brush off everything loose", "Chip out and re-plaster any areas that keep crumbling", "Apply a penetrating masonry conditioner/primer (may need two coats) until it's firm", "Skim coat to even it out and sand", "Prime again", "Apply two finish coats"],
    pre: ["Cure new plaster properly (keep it damp the first days)", "Control moisture and salts", "Always prime porous surfaces before painting"],
    cli: "The wall itself is breaking down; it needs a penetrating conditioner and some re-plastering, otherwise the paint comes off with the sand."
  },
  trat: { es: "Consolidación de revoque", en: "Masonry consolidation", f: 0.4 },
  img: "Vertical smartphone photo, close-up of a weak sandy plaster wall crumbling under a fingertip, loose sand and grit on the surface, natural side light, only a hand visible, no text."
},
{
  id: "manchas_grasa",
  cat: "adherencia",
  sev: 2,
  es: {
    t: "Manchas de grasa",
    r: "Manchas oscuras y brillosas que repelen la pintura o la vuelven a manchar.",
    sen: ["Zonas oscuras o brillantes cerca de cocinas, interruptores y respaldos", "La pintura se recoge, hace cráteres o no cubre", "La mancha reaparece amarillenta después de pintar", "Al tacto se siente resbaloso"],
    cau: ["Vapor de cocina con grasa", "Roce de manos, cabezas y muebles", "Grasa de motores o herramientas en garajes", "Restos de productos de limpieza con siliconas o ceras"],
    ver: ["Echa unas gotas de agua: si forman gotas y no mojan, hay grasa", "Pasa un trapo con desengrasante: si sale sucio, hay que lavar todo", "Prueba pintar un pequeño sector para ver si la pintura se recoge", "Identifica la fuente (cocina, roce, garaje)"],
    cor: ["Lava con desengrasante o agua caliente con detergente, de abajo hacia arriba", "Enjuaga con agua limpia y deja secar", "Si quedó brillo, lija suave para dar anclaje", "Aplica bloqueador de manchas al solvente sobre las zonas marcadas", "Pinta con pintura lavable o satinada en zonas de roce y cocina"],
    pre: ["Usar pinturas lavables en cocinas y zonas de roce", "Mantener extractor de cocina limpio y funcionando", "Limpiar periódicamente con productos sin siliconas"],
    cli: "La grasa hace que la pintura no se pegue y que la mancha reaparezca; hay que desengrasar a fondo y sellar antes de pintar."
  },
  en: {
    t: "Grease stains",
    r: "Dark, shiny spots that repel paint or bleed back through it.",
    sen: ["Dark or shiny areas near stoves, light switches and headboards", "Paint crawls, craters or won't cover", "Stain bleeds back yellow after painting", "Feels slick to the touch"],
    cau: ["Greasy cooking vapor", "Hands, heads and furniture rubbing the wall", "Oil and grease in garages and shops", "Cleaner residue with silicones or wax"],
    ver: ["Sprinkle some water: if it beads up, there's grease", "Wipe with degreaser: if the rag comes up dirty, wash the whole area", "Test-paint a small spot to see if it crawls", "Find the source (kitchen, rubbing, garage)"],
    cor: ["Wash with a degreaser or hot soapy water, bottom to top", "Rinse with clean water and let it dry", "Scuff-sand if there's any sheen left", "Spot-prime with an oil-based stain blocker", "Finish with a scrubbable or satin paint in kitchens and high-touch areas"],
    pre: ["Use scrubbable paint in kitchens and high-traffic spots", "Keep the range hood clean and working", "Clean with silicone-free products"],
    cli: "Grease keeps paint from sticking and bleeds back through; it has to be degreased and sealed first, or the stain shows up again in a week."
  },
  trat: { es: "Desengrase y sellado", en: "Degrease and stain-block", f: 0.25 },
  img: "Vertical smartphone photo of a painted kitchen wall next to a stove with dark greasy shiny stains and splatter marks, natural light, no text, no people."
},

// ───────────────────────── FISURAS ─────────────────────────
{
  id: "cuarteado",
  cat: "fisuras",
  sev: 2,
  es: {
    t: "Cuarteado o piel de cocodrilo",
    r: "La pintura se agrieta en un dibujo de escamas o cuadritos, como cuero de cocodrilo.",
    sen: ["Red de grietas en forma de cuadritos o escamas", "Solo afecta la película de pintura, no el revoque", "Los bordes de las escamas se levantan con el tiempo", "Frecuente en esmaltes viejos, puertas y fachadas al sol"],
    cau: ["Capa dura (esmalte) sobre otra blanda o sin secar", "Manos muy gruesas o aplicadas sin respetar el secado", "Envejecimiento de esmaltes alquídicos por sol y temperatura", "Látex sobre esmalte viejo, o viceversa"],
    ver: ["Mira con lupa o de cerca: si las grietas no siguen al revoque, es solo la pintura", "Raspa un sector para ver cuántas capas tiene y de qué tipo", "Haz prueba de cinta en los bordes", "Revisa si el resto de la superficie está sano"],
    cor: ["Remueve toda la pintura cuarteada (raspado, removedor químico o pistola de calor en madera)", "Lija hasta dejar la superficie lisa y sin bordes", "Limpia el polvo", "Aplica imprimación adecuada al sustrato", "Masilla los defectos y lija", "Pinta con manos finas respetando el tiempo de secado"],
    pre: ["Respetar tiempos de secado entre manos", "No aplicar capas muy gruesas", "Usar sistemas compatibles (no esmalte duro sobre base blanda)"],
    cli: "No se puede pintar encima porque las grietas se copian; hay que sacar la pintura vieja hasta base sana, y eso es casi un decapado completo."
  },
  en: {
    t: "Alligatoring (crazing)",
    r: "Paint cracks in a scaly pattern like alligator skin.",
    sen: ["Network of square or scaly cracks", "Only in the paint film, not the substrate", "Edges of the scales lift over time", "Common on old enamel, doors and sunny exteriors"],
    cau: ["Hard coat (enamel) over a soft or uncured one", "Heavy coats or recoating too soon", "Old alkyd enamel aging in sun and heat", "Latex over old oil, or the other way around"],
    ver: ["Look up close: if the cracks don't follow the substrate, it's just the paint", "Scrape a spot to see how many layers and what kind", "Tape test the edges", "Check if the rest of the surface is sound"],
    cor: ["Remove all the alligatored paint (scraping, chemical stripper or heat gun on wood)", "Sand smooth with no ridges", "Clean off the dust", "Prime with the right primer for the substrate", "Fill defects and sand", "Apply thin coats and respect dry times"],
    pre: ["Respect recoat times", "Don't lay it on too thick", "Use compatible systems (no hard enamel over a soft base)"],
    cli: "Painting over it just copies the cracks; the old paint has to come off down to sound material, which is basically a full strip job."
  },
  trat: { es: "Remoción de pintura cuarteada", en: "Strip alligatored paint", f: 1.0 },
  img: "Vertical smartphone photo, close-up of old white enamel paint on a wooden door with alligator-skin crack pattern, raking natural light, no text, no people."
},
{
  id: "fisuras_capilares",
  cat: "fisuras",
  sev: 1,
  es: {
    t: "Fisuras capilares",
    r: "Rayitas finas como un pelo en la pintura o el enlucido, sin movimiento.",
    sen: ["Líneas muy finas, menores a 0,3 mm", "Aparecen al azar o en pequeñas zonas", "No se puede meter una uña", "No se agrandan con el tiempo"],
    cau: ["Retracción del enlucido o de la masilla", "Pintura o masilla aplicada muy gruesa", "Secado demasiado rápido (sol, viento, calefacción)", "Pintura de mala calidad o muy rígida"],
    ver: ["Mide con una tarjeta o fisurómetro: si es menos de 0,3 mm es capilar", "Marca los extremos con lápiz y fecha; si en semanas no crece, está quieta", "Revisa si es solo la pintura o también el revoque (raspa un poco)", "Comprueba que no siga un patrón de columnas o vigas"],
    cor: ["Limpia el polvo de la zona", "Abre levemente la fisura con la punta de la espátula si es necesario", "Aplica fijador", "Rellena con masilla elástica o pintura elastomérica de relleno", "Lija suave y vuelve a fijar", "Pinta en dos manos"],
    pre: ["Aplicar masillas en capas finas", "Evitar secado brusco en días de viento o calor", "Usar pinturas de buena elasticidad en zonas propensas"],
    cli: "Son superficiales, pero si no las trato con masilla elástica se vuelven a marcar; es un trabajo de preparación que suma tiempo."
  },
  en: {
    t: "Hairline cracks",
    r: "Fine hair-thin lines in the paint or plaster that aren't moving.",
    sen: ["Very thin lines, under 1/64 inch", "Random or in small patches", "You can't get a fingernail in", "They don't grow over time"],
    cau: ["Shrinkage of the plaster or joint compound", "Paint or mud applied too thick", "Drying too fast (sun, wind, heat)", "Cheap or brittle paint"],
    ver: ["Check with a crack gauge or a credit card: under 1/64 inch is hairline", "Mark the ends with a pencil and date; if they don't grow in a few weeks, they're stable", "Scrape a bit to see if it's just paint or the plaster too", "Make sure it doesn't follow beams or columns"],
    cor: ["Clean off the dust", "Open the crack slightly with a putty knife corner if needed", "Prime", "Fill with an elastomeric patch or crack filler", "Lightly sand and prime again", "Apply two finish coats"],
    pre: ["Apply compound in thin coats", "Avoid fast drying in wind or heat", "Use a flexible, quality paint in crack-prone areas"],
    cli: "They're surface-level, but without a flexible filler they telegraph right back through, so the prep takes real time."
  },
  trat: { es: "Sellado de fisuras capilares", en: "Hairline crack repair", f: 0.2 },
  img: "Vertical smartphone photo, close-up of fine hairline cracks in a white painted interior wall, raking side light from a window, no text, no people."
},
{
  id: "fisuras_retraccion",
  cat: "fisuras",
  sev: 2,
  es: {
    t: "Fisuras por retracción del revoque",
    r: "Fisuras finas a medianas en revoques nuevos, que aparecen al secar.",
    sen: ["Aparecen en las primeras semanas o meses de la obra", "Líneas cortas, a veces en diagonal o en grupos", "Más marcadas cerca de aberturas y esquinas", "Ancho de 0,3 a 1 mm, estables"],
    cau: ["Mortero con exceso de agua o de cemento", "Secado muy rápido por sol, viento o falta de curado", "Revoque muy grueso en una sola capa", "Pintado antes de que el revoque terminara de contraerse"],
    ver: ["Pregunta la edad del revoque: si tiene menos de 2-3 meses, puede seguir moviéndose", "Mide el ancho y marca los extremos para controlar si crece", "Golpea alrededor para detectar zonas huecas", "Descarta que sigan la estructura (columnas, vigas, dinteles)"],
    cor: ["Espera a que el revoque termine de curar (mínimo 28 días)", "Abre la fisura en V con la punta de la espátula o una herramienta de abrir fisuras", "Limpia el polvo y aplica fijador", "Rellena con sellador acrílico elástico o masilla para fisuras", "Si hay muchas, coloca malla o venda de fibra con enduido o pintura elastomérica", "Lija, fija y pinta"],
    pre: ["Curar los revoques mojándolos los primeros días", "Esperar el curado antes de pintar", "Aplicar revoques en capas de espesor correcto"],
    cli: "El revoque todavía se está acomodando; hay que abrir y sellar cada fisura con material elástico para que no vuelvan a abrir debajo de la pintura nueva."
  },
  en: {
    t: "Shrinkage cracks in plaster or stucco",
    r: "Fine to medium cracks in new plaster or stucco that appear as it dries.",
    sen: ["Show up in the first weeks or months after the work", "Short lines, sometimes diagonal or in groups", "Worse around openings and corners", "1/64 to 1/32 inch wide and stable"],
    cau: ["Mix too wet or too rich in cement", "Drying too fast from sun or wind, no curing", "Too thick a coat in one pass", "Painted before shrinkage was done"],
    ver: ["Ask how old the plaster is: under 2-3 months it may still be moving", "Measure width and mark the ends to see if they grow", "Tap around them for hollow spots", "Rule out cracks following the structure (columns, beams, headers)"],
    cor: ["Wait for the plaster or stucco to cure (28 days minimum)", "V-out the crack with a putty knife corner or crack chaser", "Brush out the dust and prime", "Fill with flexible acrylic caulk or crack filler", "If there are many, bed mesh tape in compound or use an elastomeric coating", "Sand, prime and paint"],
    pre: ["Wet-cure new stucco the first few days", "Wait for curing before painting", "Apply plaster in proper coat thicknesses"],
    cli: "The plaster is still settling; each crack has to be opened and filled with flexible material or they'll reopen under the new paint."
  },
  trat: { es: "Tratamiento de fisuras de revoque", en: "Shrinkage crack repair", f: 0.35 },
  img: "Vertical smartphone photo of a newly plastered and painted exterior wall with several short diagonal shrinkage cracks near a window corner, daylight, no text, no people."
},
{
  id: "grietas_estructurales",
  cat: "fisuras",
  sev: 3,
  es: {
    t: "Grietas estructurales",
    r: "Grietas anchas, en diagonal o escalonadas, que crecen: hay que derivar.",
    sen: ["Más de 2 mm de ancho o en las que entra una moneda", "Diagonales desde esquinas de puertas y ventanas, o escalonadas en el ladrillo", "Atraviesan el muro (se ven de los dos lados)", "Puertas o ventanas que empiezan a trabarse"],
    cau: ["Asentamiento de cimientos o suelos expansivos", "Sobrecarga, vigas o dinteles insuficientes", "Pérdidas de agua que lavan el terreno", "Raíces de árboles, vibraciones o sismos"],
    ver: ["Mide el ancho con fisurómetro o una regla fina y anótalo con fecha", "Pega un testigo de yeso o una tira de papel cruzando la grieta: si se rompe, la grieta se mueve", "Verifica si se ve del otro lado del muro", "Mira si las aberturas cierran bien y si el piso tiene desnivel"],
    cor: ["No la tapes solo con masilla: avisa al cliente y deriva a un ingeniero o arquitecto", "Espera el diagnóstico y la reparación estructural (costuras, refuerzos, recalce)", "Una vez estabilizada, abre la grieta y limpia", "Rellena con mortero de reparación y coloca malla de fibra de vidrio sobre la grieta", "Aplica enduido o revoque fino, lija y fija", "Pinta con pintura elastomérica en exteriores"],
    pre: ["Controlar pérdidas de agua cerca de los cimientos", "No plantar árboles grandes junto a la casa", "Revisar grietas y testigos periódicamente"],
    cli: "Esto no es de pintura: la casa se está moviendo y hay que derivarlo a un profesional; si la tapo, se abre de nuevo y además escondo un problema serio."
  },
  en: {
    t: "Structural cracks",
    r: "Wide, diagonal or stair-step cracks that grow: refer it out.",
    sen: ["Over 1/16 inch wide or wide enough to fit a coin", "Diagonal from door and window corners, or stair-stepping through brick", "Go clear through the wall (visible both sides)", "Doors or windows starting to stick"],
    cau: ["Foundation settlement or expansive soil", "Overloading, undersized beams or headers", "Leaks washing out the soil", "Tree roots, vibration or earthquakes"],
    ver: ["Measure the width with a crack gauge and log it with a date", "Glue a plaster tell-tale or paper strip across the crack: if it breaks, the crack is moving", "Check if it shows on the other side of the wall", "See if doors and windows close right and if the floor is out of level"],
    cor: ["Don't just mud over it: tell the owner and refer to a structural engineer", "Wait for the diagnosis and structural repair (stitching, reinforcing, underpinning)", "Once stable, open up and clean the crack", "Fill with repair mortar and bed fiberglass mesh over it", "Skim coat, sand and prime", "Use an elastomeric coating on exteriors"],
    pre: ["Keep water away from the foundation", "Don't plant large trees close to the house", "Check cracks and tell-tales regularly"],
    cli: "This isn't a paint problem: the house is moving and needs an engineer; if I just cover it, it'll open back up and I'd be hiding something serious."
  },
  trat: { es: "Reparación de grieta (post estructural)", en: "Crack repair after structural fix", f: 1.5 },
  img: "Vertical smartphone photo of a wide diagonal crack running from the corner of a window through a painted plaster wall, daylight, realistic, no text, no people."
},
{
  id: "fisuras_mapa",
  cat: "fisuras",
  sev: 2,
  es: {
    t: "Fisuras en mapa",
    r: "Red de fisuras finas en todas direcciones que cubre grandes zonas de la pared.",
    sen: ["Dibujo de red o telaraña, como un mapa", "Cubre paños enteros, sobre todo en fachadas", "Fisuras finas que se marcan más al mojarse", "Suele haber suciedad dentro de las fisuras"],
    cau: ["Retracción del revoque fino o del enlucido de cemento", "Exceso de alisado o fratasado que lleva cemento a la superficie", "Secado rápido y cambios de temperatura", "Capa de terminación muy rica en cemento"],
    ver: ["Moja la pared con un rociador: las fisuras se ven mejor al secar", "Mide el ancho: si son capilares, alcanza con un revestimiento elástico", "Raspa para ver si es la pintura o el revoque", "Golpea para descartar zonas huecas"],
    cor: ["Lava con hidrolavadora o cepillo y deja secar", "Aplica fijador penetrante", "Aplica una mano de pintura elastomérica de relleno o enduido elástico", "Coloca malla de fibra en zonas más dañadas", "Termina con dos manos de pintura elastomérica o impermeabilizante para muros"],
    pre: ["Curar bien el revoque fino", "No sobrealisar las superficies", "Usar sistemas elásticos en fachadas expuestas"],
    cli: "Son cientos de fisuras finas; no se arreglan una por una, hay que cubrir toda la pared con un sistema elástico de varias manos."
  },
  en: {
    t: "Map cracking",
    r: "A web of fine cracks in every direction across large areas of the wall.",
    sen: ["Spiderweb or map pattern", "Covers whole sections, mostly on exterior walls", "Fine cracks that show more when wet", "Dirt usually collects in the cracks"],
    cau: ["Shrinkage of the finish coat or cement plaster", "Over-troweling that brings cement paste to the surface", "Fast drying and temperature swings", "Finish coat too rich in cement"],
    ver: ["Mist the wall: cracks show up best as it dries", "Measure width: hairline cracks can be bridged with an elastomeric coating", "Scrape to see if it's the paint or the plaster", "Tap for hollow spots"],
    cor: ["Pressure wash or scrub and let it dry", "Apply a penetrating masonry primer", "Apply a coat of elastomeric patch or bridging coat", "Embed mesh in the worst areas", "Finish with two coats of elastomeric wall coating"],
    pre: ["Properly cure finish coats", "Don't over-trowel", "Use flexible systems on exposed elevations"],
    cli: "There are hundreds of fine cracks; you can't fix them one by one, the whole wall needs a multi-coat elastomeric system."
  },
  trat: { es: "Sistema elástico para fisuras en mapa", en: "Elastomeric crack-bridging system", f: 0.5 },
  img: "Vertical smartphone photo of an exterior stucco wall covered in a fine map-like web of cracks with dirt in them, overcast daylight, no text, no people."
},
{
  id: "juntas_placa",
  cat: "fisuras",
  sev: 2,
  es: {
    t: "Juntas de placa de yeso marcadas",
    r: "Se ven las líneas de las uniones de placas, como franjas o fisuras rectas.",
    sen: ["Franjas rectas cada 1,20 m en paredes o techos", "Fisura recta en la junta", "Cinta que se marca, se ampolla o se despega", "Juntas con distinto brillo o textura (más visibles con luz rasante)"],
    cau: ["Cinta mal pegada o sin suficiente masilla debajo", "Masillado escaso o sin lijar bien", "Movimiento de la estructura o placas mal atornilladas", "No fijar antes de pintar: la masilla absorbe distinto"],
    ver: ["Ilumina con una linterna rasante para ver relieves", "Presiona sobre la junta: si se mueve o cruje, hay problema de fijación", "Raspa la cinta: si sale sola, está mal pegada", "Mide si la fisura crece (movimiento)"],
    cor: ["Retira cinta suelta o ampollada", "Fija bien las placas con tornillos adicionales si se mueven", "Coloca cinta nueva (papel o malla) embebida en masilla", "Aplica 2-3 manos de masilla cada vez más anchas, lijando entre manos", "Aplica fijador o sellador en toda la superficie", "Pinta toda la pared o techo"],
    pre: ["Masillar con cinta en todas las juntas y lijar fino", "Fijar toda la superficie antes de la pintura final", "Respetar distancia de tornillos y juntas de dilatación"],
    cli: "Las juntas mal hechas se notan con la luz; hay que rehacerlas con cinta y varias manos de masilla, y sellar todo para que la pintura quede pareja."
  },
  en: {
    t: "Visible drywall seams",
    r: "Drywall joints show through as stripes or straight cracks.",
    sen: ["Straight stripes every 4 feet on walls or ceilings", "Straight crack right on the seam", "Tape showing, bubbling or peeling", "Seams with different sheen or texture (worse in raking light)"],
    cau: ["Tape not bedded or not enough mud under it", "Thin finish coats or poor sanding", "Framing movement or under-screwed boards", "No primer: mud and paper absorb paint differently"],
    ver: ["Shine a flashlight across the wall to see ridges", "Push on the seam: if it moves or creaks, it's a fastening problem", "Scrape the tape: if it lifts easily, it wasn't bedded right", "Watch whether the crack grows (movement)"],
    cor: ["Cut out loose or bubbled tape", "Add screws where boards move", "Re-tape (paper or mesh) bedded in compound", "Apply 2-3 coats of mud feathered wider each time, sanding between", "Prime the entire surface with drywall primer", "Paint the whole wall or ceiling"],
    pre: ["Tape and mud every seam and sand smooth", "Prime everything before finish paint", "Follow fastener spacing and control joints"],
    cli: "Bad seams show in the light; they have to be re-taped and feathered with several coats of mud, then primed so the paint looks even."
  },
  trat: { es: "Rehacer juntas de placa de yeso", en: "Drywall seam repair", f: 0.5 },
  img: "Vertical smartphone photo of a painted drywall ceiling with visible straight tape seams and a slightly lifted joint tape, raking window light, no text, no people."
},
{
  id: "tornillos_visibles",
  cat: "fisuras",
  sev: 1,
  es: {
    t: "Cabezas de tornillo o clavo visibles",
    r: "Puntos redondos o manchas que marcan dónde están los tornillos o clavos.",
    sen: ["Pequeños círculos en relieve o hundidos en fila", "Manchas de óxido en puntos alineados", "Masilla que se cayó dejando la cabeza a la vista", "Más visibles con luz rasante"],
    cau: ["Tornillos poco hundidos o pasados (rompieron el papel)", "Clavos que se salen por movimiento de la madera", "Masilla escasa o sin segunda mano", "Tornillos sin protección que se oxidan con la humedad"],
    ver: ["Pasa la espátula: si golpea en la cabeza, sobresale", "Presiona cerca del tornillo: si la placa se mueve, falta fijación", "Mira si hay óxido (marrón) en el punto", "Revisa si la marca sigue el patrón de montantes"],
    cor: ["Hunde las cabezas que sobresalen o coloca un tornillo nuevo al lado y retira el clavo salido", "Si hay óxido, lija y aplica antióxido o bloqueador de manchas", "Masilla cada punto con 2 manos, dejando secar y lijando", "Aplica fijador sobre los parches", "Pinta toda la superficie"],
    pre: ["Hundir los tornillos justo debajo del papel sin romperlo", "Usar tornillos con tratamiento anticorrosivo", "Masillar en dos manos todas las cabezas"],
    cli: "Hay que repasar cada tornillo, fijar y masillar en dos manos; es trabajo minucioso, pero si no lo hago se siguen viendo como lunares."
  },
  en: {
    t: "Nail pops and screw heads showing",
    r: "Round bumps or spots marking where screws or nails are.",
    sen: ["Small round bumps or dimples in a line", "Rust spots in straight rows", "Mud fell out leaving the head exposed", "Worse in raking light"],
    cau: ["Screws not set deep enough or overdriven (paper broken)", "Nails backing out as the framing moves", "Thin mud or no second coat", "Uncoated screws rusting from moisture"],
    ver: ["Drag a putty knife across: if it clicks on the head, it's proud", "Press near the fastener: if the board moves, it needs another screw", "Look for brown rust at the spot", "Check if the marks follow the studs"],
    cor: ["Set proud heads or drive a new screw next to it and pull the popped nail", "If rusty, sand and spot-prime with a rust-inhibiting or stain-blocking primer", "Mud each spot in two coats, letting it dry and sanding", "Spot-prime the patches", "Paint the whole surface"],
    pre: ["Set screws just below the paper without tearing it", "Use coated drywall screws", "Two coats of mud on every fastener"],
    cli: "Each fastener has to be reset, spot-primed and mudded twice; it's detail work, but skip it and they keep showing like polka dots."
  },
  trat: { es: "Repaso de tornillos/clavos", en: "Nail pop and fastener repair", f: 0.2 },
  img: "Vertical smartphone photo of a painted drywall wall with a vertical row of small round nail pops bulging, raking light from the side, no text, no people."
},
{
  id: "fisura_pared_techo",
  cat: "fisuras",
  sev: 2,
  es: {
    t: "Fisura en el encuentro pared-techo",
    r: "Fisura recta que recorre el ángulo entre pared y techo, o entre paredes.",
    sen: ["Línea recta y continua en el rincón", "Se abre y cierra según la estación", "La masilla rígida vuelve a fisurarse", "A veces la cinta del rincón se despega"],
    cau: ["Distinto movimiento de dos materiales (losa y muro, placa y mampostería)", "Dilatación térmica del techo o la cubierta", "Rincón tapado con masilla rígida sin elasticidad", "Placas sin cinta esquinera o mal fijadas"],
    ver: ["Revisa si ya fue reparada antes y volvió a abrir (indica movimiento)", "Comprueba si el techo es de losa, madera o placa", "Mira si la fisura cambia de ancho en el día o la estación", "Descarta humedad en la cubierta"],
    cor: ["Retira la masilla floja y abre levemente el rincón", "Limpia el polvo y aplica fijador", "Rellena con sellador acrílico elástico pintable", "En placa de yeso, coloca cinta de papel para rincones con masilla", "Alisa con espátula o dedo mojado y deja curar", "Pinta con pintura de buena elasticidad"],
    pre: ["Usar sellador elástico en encuentros de materiales distintos", "Colocar buñas o molduras que absorban el movimiento", "Aislar térmicamente cubiertas que se dilatan mucho"],
    cli: "El techo y la pared se mueven distinto; si lo tapo con masilla común se vuelve a abrir, por eso uso sellador elástico y tratamiento del rincón."
  },
  en: {
    t: "Crack where wall meets ceiling",
    r: "Straight crack running along the wall-ceiling corner or between walls.",
    sen: ["Straight continuous line in the corner", "Opens and closes with the seasons", "Rigid mud keeps re-cracking", "Corner tape sometimes peeling"],
    cau: ["Two materials moving differently (slab and wall, drywall and masonry)", "Thermal movement of the roof or ceiling", "Corner filled with rigid mud", "No corner tape or poorly fastened boards"],
    ver: ["Ask if it's been patched before and came back (that means movement)", "Check if the ceiling is concrete, wood or drywall", "See if the width changes during the day or season", "Rule out roof moisture"],
    cor: ["Remove loose mud and open the corner slightly", "Clean the dust and prime", "Fill with paintable flexible acrylic caulk", "On drywall, re-tape the inside corner with paper tape and mud", "Tool smooth with a knife or wet finger and let it cure", "Paint with a flexible, quality paint"],
    pre: ["Use flexible caulk where different materials meet", "Add a reveal or crown molding to hide movement", "Insulate roofs that move a lot with heat"],
    cli: "The ceiling and wall move differently; regular mud just cracks again, so it gets flexible caulk and a proper corner treatment."
  },
  trat: { es: "Sellado elástico de rincones", en: "Flexible corner crack repair", f: 0.3 },
  img: "Vertical smartphone photo looking up at the corner where a white wall meets the ceiling, a long straight crack running along the joint, natural light, no text, no people."
},
{
  id: "pinholes_masilla",
  cat: "fisuras",
  sev: 1,
  es: {
    t: "Burbujas en la masilla (pinholes)",
    r: "Poros diminutos en la masilla que se ven como alfilerazos después de pintar.",
    sen: ["Agujeritos del tamaño de una cabeza de alfiler", "Aparecen sobre zonas masilladas", "Se notan más con luz rasante o pintura satinada", "A veces burbujitas que revientan al pintar"],
    cau: ["Aire atrapado al batir o aplicar la masilla", "Masilla aplicada muy gruesa o sobre superficie muy porosa", "Pintar con rodillo de pelo largo sobre masilla sin fijar", "Masilla en polvo mal mezclada"],
    ver: ["Ilumina con linterna rasante para ver los poros", "Pasa la mano: los poros no se sienten pero se ven", "Revisa si la masilla fue fijada antes de pintar", "Mira si el problema está solo en zonas masilladas"],
    cor: ["Lija suave la zona", "Aplica una mano fina de masilla apretando la espátula para cerrar los poros", "Deja secar y lija con lija fina", "Aplica fijador o sellador sobre la masilla", "Pinta con rodillo de pelo corto"],
    pre: ["Mezclar la masilla sin batir en exceso", "Aplicar en capas finas y apretadas", "Fijar siempre la masilla antes de la pintura"],
    cli: "Son poros chicos pero con luz se ven; hay que darle una mano extra de masilla apretada, lijar y fijar para que quede liso."
  },
  en: {
    t: "Pinholes in joint compound",
    r: "Tiny pores in the mud that look like pinpricks after painting.",
    sen: ["Holes the size of a pinhead", "Show up over mudded areas", "Worse in raking light or with satin paint", "Sometimes small bubbles that pop while rolling"],
    cau: ["Air whipped into the mud when mixing or applying", "Mud too thick or over a very porous surface", "Rolling a thick-nap roller over unprimed mud", "Poorly mixed setting compound"],
    ver: ["Shine a flashlight across to spot the pores", "Run your hand over it: you see them more than feel them", "Check if the mud was primed before painting", "See if it's only on patched areas"],
    cor: ["Lightly sand the area", "Skim a tight coat of mud, pressing hard with the knife to close the holes", "Let it dry and sand with fine grit", "Prime the mud", "Paint with a short-nap roller"],
    pre: ["Don't over-whip the compound", "Apply thin, tight coats", "Always prime mud before finish paint"],
    cli: "The pores are tiny but they show in the light; it takes an extra tight skim coat, sanding and priming to get it smooth."
  },
  trat: { es: "Repaso de masilla (poros)", en: "Pinhole skim coat", f: 0.25 },
  img: "Vertical smartphone photo, extreme close-up of a freshly painted wall patch showing many tiny pinholes in the joint compound, raking flashlight light, no text, no people."
},

// ───────────────────────── APLICACIÓN ─────────────────────────
{
  id: "marcas_rodillo",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Marcas de rodillo",
    r: "Franjas, bordes o líneas que dibujan el paso del rodillo en la pared.",
    sen: ["Líneas paralelas o bordes del rodillo marcados", "Franjas con distinta textura o brillo", "Se notan con luz lateral", "Rebordes de pintura en los extremos de cada pasada"],
    cau: ["Rodillo con poca carga o demasiado cargado", "Apretar el rodillo y dejar cordones en los bordes", "Rodillo de mala calidad o pelo inadecuado", "No terminar en una sola dirección"],
    ver: ["Mira la pared con luz rasante desde una ventana o linterna", "Pasa la mano: si hay rebordes, se sienten", "Revisa el rodillo usado (pelo, estado)", "Comprueba si el problema es en toda la pared o en sectores"],
    cor: ["Deja secar bien la pintura", "Lija suave los rebordes con lija fina", "Limpia el polvo", "Aplica una mano completa con rodillo bien cargado, sin apretar", "Termina cada paño con pasadas suaves en una misma dirección, de arriba abajo"],
    pre: ["Usar rodillo de calidad y pelo adecuado a la superficie", "Cargar bien y descargar en la bandeja o rejilla", "Trabajar con borde húmedo y terminar en una dirección"],
    cli: "Para que quede pareja hay que lijar los rebordes y dar una mano completa bien aplicada, no retocar por partes."
  },
  en: {
    t: "Roller marks",
    r: "Stripes, edges or ridges that show every pass of the roller.",
    sen: ["Parallel lines or roller edges visible", "Bands with different texture or sheen", "Show in side light", "Ridges of paint at the end of each pass"],
    cau: ["Roller too dry or overloaded", "Pressing too hard and leaving ridges at the edges", "Cheap roller or wrong nap", "Not laying off in one direction"],
    ver: ["Look at the wall in raking light from a window or flashlight", "Run your hand over it: ridges can be felt", "Check the roller used (nap, condition)", "See if it's the whole wall or just sections"],
    cor: ["Let the paint dry completely", "Lightly sand the ridges with fine grit", "Wipe off dust", "Roll a full coat with a well-loaded roller, no pressing", "Lay off each section with light strokes in one direction, top to bottom"],
    pre: ["Use a quality roller with the right nap", "Load well and roll off on the grid", "Keep a wet edge and lay off in one direction"],
    cli: "To make it even, the ridges have to be sanded and the wall gets a full, properly rolled coat; spot-fixing makes it worse."
  },
  trat: { es: "Corrección de marcas de rodillo", en: "Roller mark correction", f: 0.3 },
  img: "Vertical smartphone photo of a freshly painted beige interior wall showing visible vertical roller stripes and edge ridges in raking window light, no text, no people."
},
{
  id: "chorreado",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Chorreado o goteo",
    r: "Lágrimas, cortinas o gotas de pintura que bajaron antes de secar.",
    sen: ["Gotas o lágrimas con punta abajo", "Cortinas onduladas en paños verticales", "Acumulación en bordes de molduras, puertas y marcos", "Zonas más gruesas y brillantes"],
    cau: ["Exceso de pintura en una sola mano", "Pintura demasiado diluida", "Frío o humedad que retrasan el secado", "Pistola muy cerca o con demasiado caudal"],
    ver: ["Presiona la gota con la uña: si está blanda por dentro, espera a que seque del todo", "Revisa la dilución usada", "Mira si el defecto se repite en bordes y aristas", "Comprueba temperatura y humedad del día de la aplicación"],
    cor: ["Si está fresco, repasa enseguida con pincel o rodillo descargado", "Si ya secó, espera a que endurezca por completo", "Corta la gota con espátula o cúter y lija a ras con lija fina", "Limpia el polvo", "Aplica una mano fina en todo el paño"],
    pre: ["Aplicar manos finas y parejas", "Respetar la dilución del fabricante", "Repasar bordes y molduras para levantar excesos"],
    cli: "Cada chorreado hay que esperar que endurezca, cortarlo, lijarlo y volver a pintar el paño completo para que no se note."
  },
  en: {
    t: "Runs and sags",
    r: "Drips, curtains or tears of paint that slid down before drying.",
    sen: ["Drips or tears with a bead at the bottom", "Wavy curtains on vertical surfaces", "Build-up at molding edges, doors and frames", "Thicker, glossier spots"],
    cau: ["Too much paint in one coat", "Paint thinned too much", "Cold or humid weather slowing the dry", "Spray gun too close or too much flow"],
    ver: ["Press the drip with a fingernail: if it's soft inside, wait until it's fully cured", "Check how much it was thinned", "See if it repeats on edges and corners", "Check temperature and humidity on painting day"],
    cor: ["If it's wet, brush or roll it out right away with an unloaded tool", "If it's dry, let it cure hard", "Shave the run with a razor or putty knife and sand flush with fine grit", "Wipe off the dust", "Apply a thin coat to the whole section"],
    pre: ["Apply thin, even coats", "Follow the manufacturer's thinning", "Check edges and moldings and pick up excess"],
    cli: "Each run has to cure, get shaved, sanded and the whole section repainted, or it'll still show."
  },
  trat: { es: "Corrección de chorreados", en: "Run and sag repair", f: 0.3 },
  img: "Vertical smartphone photo, close-up of white enamel paint runs and drips sagging down a wooden door panel, natural light, no text, no people."
},
{
  id: "piel_naranja",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Piel de naranja",
    r: "Textura granulada como cáscara de naranja en vez de una superficie lisa.",
    sen: ["Superficie con pequeños hoyuelos y relieve", "Más visible en esmaltes y acabados brillantes", "Frecuente en puertas y muebles pintados con soplete o rodillo de espuma", "Refleja la luz de forma irregular"],
    cau: ["Pintura muy espesa o poco diluida", "Rodillo inadecuado (pelo largo en esmalte)", "Presión de pistola baja o boquilla incorrecta", "Secado demasiado rápido que no deja nivelar"],
    ver: ["Mira el reflejo de una lámpara sobre la superficie: si se deforma, hay piel de naranja", "Revisa la viscosidad y dilución usadas", "Comprueba el rodillo o la configuración de la pistola", "Verifica si el defecto es parejo o por zonas"],
    cor: ["Deja curar bien la pintura", "Lija hasta dejar la superficie plana (lija 280-320 al agua en esmaltes)", "Limpia el polvo con trapo húmedo o paño atrapapolvo", "Ajusta dilución y herramienta (rodillo de espuma fina o pistola calibrada)", "Aplica manos finas dejando nivelar"],
    pre: ["Diluir según ficha técnica", "Usar rodillo de pelo corto o espuma para esmaltes", "Probar la pistola en un cartón antes de pintar"],
    cli: "Para que el acabado quede liso como de fábrica hay que lijar todo y volver a aplicar con la herramienta correcta, y eso lleva tiempo."
  },
  en: {
    t: "Orange peel",
    r: "Bumpy texture like an orange skin instead of a smooth finish.",
    sen: ["Small dimples and bumps across the surface", "Worse in enamels and glossy finishes", "Common on sprayed or foam-rolled doors and cabinets", "Reflections look wavy"],
    cau: ["Paint too thick or not thinned enough", "Wrong roller (long nap with enamel)", "Low spray pressure or wrong tip", "Dries too fast to level out"],
    ver: ["Look at a light's reflection on the surface: if it's distorted, it's orange peel", "Check viscosity and thinning", "Check the roller or spray setup", "See if it's even or just in spots"],
    cor: ["Let the paint fully cure", "Sand flat (320 grit wet sanding on enamels)", "Remove dust with a damp rag or tack cloth", "Adjust thinning and tool (fine foam roller or dialed-in sprayer)", "Apply thin coats and let them level"],
    pre: ["Thin per the tech sheet", "Use a short-nap or foam roller for enamels", "Test your spray pattern on cardboard first"],
    cli: "To get a factory-smooth finish it has to be sanded flat and recoated with the right tool, and that takes time."
  },
  trat: { es: "Lijado y reaplicación (piel de naranja)", en: "Orange peel correction", f: 0.35 },
  img: "Vertical smartphone photo, close-up of a glossy painted cabinet door with orange peel texture visible in the reflection of a window, no text, no people."
},
{
  id: "solapado",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Marcas de solapado (traslape)",
    r: "Franjas más oscuras o brillantes donde se pintó encima de pintura ya seca.",
    sen: ["Bandas horizontales o verticales con distinto tono o brillo", "Se ven donde se cortó el paño o se paró a cargar", "Marcas en la altura del andamio o la escalera", "Más notorias en colores oscuros y acabados satinados"],
    cau: ["No mantener el borde húmedo (pintar sobre zonas que ya empezaron a secar)", "Paños demasiado grandes para una persona", "Calor, viento o sol que aceleran el secado", "Cortar el trabajo a mitad de una pared"],
    ver: ["Mira la pared con luz rasante y desde distintos ángulos", "Ubica si las franjas coinciden con alturas de andamio o recortes", "Revisa las condiciones del día de aplicación", "Confirma si es diferencia de brillo o de color"],
    cor: ["Deja secar bien", "Lija suave las zonas con más carga", "Aplica una mano completa de corte a corte sin pausas", "Trabaja con borde húmedo, en paños angostos y de arriba abajo", "Si hace calor, pinta a primera hora o a la sombra"],
    pre: ["Pintar cada pared de esquina a esquina sin interrumpir", "Trabajar de a dos en paredes grandes (uno corta, otro rodillo)", "Evitar pintar con sol directo o viento"],
    cli: "Para que no se noten las franjas hay que dar otra mano completa de esquina a esquina, sin cortar, y eso requiere más gente o más tiempo."
  },
  en: {
    t: "Lap marks",
    r: "Darker or shinier bands where wet paint went over paint that had already dried.",
    sen: ["Horizontal or vertical bands with different color or sheen", "Show where a section stopped or you went back to reload", "Marks at scaffold or ladder heights", "Worse in dark colors and satin finishes"],
    cau: ["Not keeping a wet edge", "Sections too big for one painter", "Heat, wind or sun speeding up drying", "Stopping in the middle of a wall"],
    ver: ["Look at the wall in raking light from different angles", "See if bands line up with scaffold heights or cut-in stops", "Check the weather on painting day", "Confirm if it's a sheen or a color difference"],
    cor: ["Let it dry fully", "Lightly sand the heavy spots", "Roll a full coat corner to corner without stopping", "Keep a wet edge, work in narrow sections top to bottom", "In hot weather, paint early or in the shade"],
    pre: ["Paint each wall corner to corner in one go", "Team up on big walls (one cuts in, one rolls)", "Avoid direct sun and wind"],
    cli: "To hide the bands the wall needs another full coat corner to corner with no stops, which means more hands or more time."
  },
  trat: { es: "Mano completa por solapado", en: "Full recoat for lap marks", f: 0.3 },
  img: "Vertical smartphone photo of a dark gray painted living room wall with visible horizontal lap mark bands of uneven sheen in side light, no text, no people."
},
{
  id: "falta_cubrimiento",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Falta de cubrimiento (transparenta)",
    r: "Se ve el color anterior, manchas o la masilla a través de la pintura nueva.",
    sen: ["Se trasluce el color de abajo o los parches de masilla", "Tono desparejo entre zonas", "Bordes de los cortes más claros o más oscuros", "Necesita manos de más para tapar"],
    cau: ["Pintura muy diluida o de bajo poder cubriente", "Manos demasiado finas o rendimiento estirado", "Cambio fuerte de color (oscuro a claro o al revés)", "No usar fondo ni fijador sobre masilla"],
    ver: ["Revisa la dilución y cuántos m² se pintaron por litro", "Mira con luz natural, no solo con luz artificial", "Comprueba si debajo hay colores fuertes o parches", "Pregunta qué calidad de pintura se usó"],
    cor: ["Deja secar bien la última mano", "Aplica fijador o fondo de color sobre parches de masilla", "Si el cambio de color es fuerte, aplica una mano de fondo o pintura entonada en gris o similar al color final", "Aplica las manos necesarias sin estirar la pintura", "Revisa con luz natural antes de retirar"],
    pre: ["Respetar el rendimiento indicado en el envase", "Usar fondo entonado en cambios fuertes de color", "Fijar siempre la masilla antes de pintar"],
    cli: "Para que el color quede parejo hace falta un fondo y una mano más; si la estiro, ahorra hoy pero se ve mal."
  },
  en: {
    t: "Poor hide (paint showing through)",
    r: "The old color, stains or patches show through the new paint.",
    sen: ["Old color or mud patches showing through", "Uneven color from area to area", "Cut-in edges lighter or darker", "Needs extra coats to cover"],
    cau: ["Paint thinned too much or low-hide paint", "Coats too thin or stretched past spread rate", "Big color change (dark to light or vice versa)", "No primer over patches"],
    ver: ["Check thinning and how many square feet were covered per gallon", "Look in daylight, not only under lamps", "Check if there are strong colors or patches underneath", "Ask what grade of paint was used"],
    cor: ["Let the last coat dry", "Spot-prime mud patches", "For big color changes, apply a tinted primer (gray shade or close to the finish color)", "Apply as many coats as needed without stretching", "Check in daylight before you pack up"],
    pre: ["Stick to the spread rate on the label", "Use a tinted primer for big color changes", "Always prime patches before painting"],
    cli: "For even color it needs a tinted primer and another coat; stretching the paint saves today but looks bad tomorrow."
  },
  trat: { es: "Fondo y mano adicional", en: "Tinted primer and extra coat", f: 0.4 },
  img: "Vertical smartphone photo of a freshly painted light wall where older dark color and white joint compound patches show through unevenly, natural daylight, no text, no people."
},
{
  id: "flashing",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Diferencia de brillo (flashing)",
    r: "Zonas más brillantes o más mates en la misma pared, sobre todo en parches.",
    sen: ["Manchas de distinto brillo según el ángulo de la luz", "Parches masillados que se ven mates o brillosos", "Cortes con pincel con brillo diferente al rodillo", "Más notorio en satinados y semimates"],
    cau: ["Masilla o revoque nuevo sin fijar: absorbe distinto", "Pintar con pincel y rodillo con distinta carga", "Retoques sobre pintura vieja", "Aplicación en distintas condiciones de temperatura o humedad"],
    ver: ["Mira la pared en ángulo bajo, contra la luz de la ventana", "Identifica si las manchas coinciden con parches de masilla", "Compara cortes de pincel con el centro del paño", "Pregunta si hubo retoques"],
    cor: ["Aplica fijador o sellador sobre toda la superficie (no solo parches)", "Repasa los cortes con rodillo chico para igualar textura", "Aplica una mano completa de esquina a esquina", "En satinados, termina siempre con rodillo en la misma dirección"],
    pre: ["Fijar parches y masillas antes de pintar", "Usar acabado mate en paredes con muchos defectos", "No retocar: pintar paños completos"],
    cli: "Los parches se ven por el brillo; para igualar hay que sellar todo y pintar la pared completa, no solo arriba de los arreglos."
  },
  en: {
    t: "Flashing (uneven sheen)",
    r: "Shinier or flatter spots on the same wall, especially over patches.",
    sen: ["Spots with different sheen depending on the light angle", "Mudded patches look flat or shiny", "Brushed cut-in shows a different sheen than the rolled area", "Worse with satin and eggshell"],
    cau: ["Unprimed patches or new plaster absorbing differently", "Brush and roller laying different film thickness", "Touch-ups over old paint", "Painting in different temperature or humidity"],
    ver: ["Look down the wall at a low angle toward the window", "See if spots match up with patches", "Compare the cut-in to the field", "Ask if there were touch-ups"],
    cor: ["Prime the whole surface, not just the patches", "Roll the cut-in with a mini roller to match texture", "Apply a full coat corner to corner", "With satin, always lay off in the same direction"],
    pre: ["Prime patches before painting", "Use a flat finish on walls with lots of imperfections", "Don't touch up; repaint full sections"],
    cli: "The patches show through the sheen; to even it out the whole wall gets primed and painted, not just the repairs."
  },
  trat: { es: "Igualado de brillo", en: "Sheen equalizing", f: 0.3 },
  img: "Vertical smartphone photo of a satin painted wall viewed at a low angle against window light, showing duller rectangular patches over repaired spots, no text, no people."
},
{
  id: "marcas_pincel",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Marcas de pincel",
    r: "Surcos o rayas visibles que deja la brocha en esmaltes, marcos y puertas.",
    sen: ["Rayas paralelas en relieve", "Más visibles en esmaltes y colores brillantes", "Marcas en distintas direcciones", "Bordes con exceso de pintura"],
    cau: ["Pintura muy espesa o que seca rápido", "Pincel de mala calidad o cerda inadecuada", "Repasar demasiado cuando la pintura ya está tirando", "Calor o viento que no dejan nivelar"],
    ver: ["Mira con luz rasante", "Revisa el tipo de pincel usado (sintético para agua, natural o mixto para solvente)", "Comprueba la dilución", "Verifica la dirección de las marcas"],
    cor: ["Deja curar bien la pintura", "Lija con lija fina hasta borrar los surcos", "Limpia el polvo", "Agrega aditivo nivelador o diluye según ficha técnica", "Aplica con pincel de calidad, en manos finas y terminando en la dirección de la veta o del largo de la pieza"],
    pre: ["Usar pinceles de buena calidad", "Terminar con pasadas largas y suaves en una sola dirección", "No repasar pintura que ya empezó a secar"],
    cli: "En carpintería el acabado se nota mucho; hay que lijar las marcas y volver a pintar con buena herramienta para que quede liso."
  },
  en: {
    t: "Brush marks",
    r: "Visible ridges or streaks left by the brush on enamel, trim and doors.",
    sen: ["Raised parallel streaks", "Worse in enamels and glossy colors", "Marks going in different directions", "Heavy edges"],
    cau: ["Paint too thick or drying too fast", "Cheap brush or wrong bristles", "Overworking paint that's starting to set", "Heat or wind not letting it level"],
    ver: ["Look in raking light", "Check the brush used (synthetic for latex, natural or blend for oil)", "Check thinning", "Note the direction of the marks"],
    cor: ["Let the paint fully cure", "Sand with fine grit until the ridges are gone", "Remove dust", "Add a paint conditioner/extender or thin per the tech sheet", "Brush on thin coats with a quality brush, finishing with the grain or along the length of the piece"],
    pre: ["Use a quality brush", "Finish with long, light strokes in one direction", "Don't go back into paint that's setting up"],
    cli: "On trim the finish really shows; the marks have to be sanded out and repainted with good tools so it lays smooth."
  },
  trat: { es: "Lijado y reaplicación en carpintería", en: "Trim sand and recoat", f: 0.3 },
  img: "Vertical smartphone photo, close-up of white glossy enamel on a door frame with visible brush stroke ridges in raking light, no text, no people."
},
{
  id: "crateres",
  cat: "aplicacion",
  sev: 2,
  es: {
    t: "Cráteres u ojos de pez",
    r: "Huequitos redondos donde la pintura se retira y no moja la superficie.",
    sen: ["Pequeños círculos donde la pintura se abre", "La pintura se recoge como si la superficie la repeliera", "Se ve el fondo en el centro del cráter", "Aparecen al poco tiempo de aplicar"],
    cau: ["Contaminación con siliconas, aceites, ceras o grasa", "Restos de productos de limpieza o lustramuebles", "Aire comprimido con aceite en equipos de pistola", "Herramientas sucias con otros productos"],
    ver: ["Echa unas gotas de agua: si forman perlas, hay contaminación", "Pregunta si se usaron lustramuebles o siliconas", "Revisa el filtro de aire si se pintó con soplete", "Comprueba si pasa en toda la pieza o en zonas"],
    cor: ["Deja secar y lija la zona afectada", "Limpia a fondo con desengrasante y luego con alcohol o solvente limpio, cambiando trapos", "Repite la prueba del agua hasta que moje parejo", "Aplica fondo o imprimación", "Pinta en manos finas"],
    pre: ["Desengrasar siempre antes de pintar muebles y carpintería", "No usar productos con siliconas cerca de la zona de trabajo", "Mantener herramientas y equipos limpios, con filtro de aceite en el compresor"],
    cli: "Hay contaminación invisible en la superficie; hay que lijar y desengrasar a fondo antes de pintar, si no salen cráteres en cada mano."
  },
  en: {
    t: "Cratering (fisheyes)",
    r: "Small round holes where the paint pulls away and won't wet the surface.",
    sen: ["Small circles where the paint opens up", "Paint crawls like the surface repels it", "You can see the substrate in the center", "Shows up right after applying"],
    cau: ["Silicone, oil, wax or grease contamination", "Cleaner or furniture polish residue", "Oily compressed air in spray rigs", "Dirty tools with other products"],
    ver: ["Sprinkle some water: if it beads up, the surface is contaminated", "Ask if furniture polish or silicone sprays were used", "Check the air filter if it was sprayed", "See if it's the whole piece or just areas"],
    cor: ["Let it dry and sand the affected area", "Clean thoroughly with degreaser, then wipe with alcohol or clean solvent, changing rags often", "Repeat the water test until it wets evenly", "Prime", "Apply thin coats"],
    pre: ["Always degrease cabinets and trim before painting", "Keep silicone products away from the work area", "Keep tools clean and use an oil filter on the compressor"],
    cli: "There's invisible contamination on the surface; it has to be sanded and degreased thoroughly or every coat will fisheye."
  },
  trat: { es: "Descontaminación de superficie", en: "Surface decontamination", f: 0.4 },
  img: "Vertical smartphone photo, close-up of fresh paint on a wooden cabinet door with small round fisheye craters where the paint pulled away, natural light, no text, no people."
},
{
  id: "arrugado",
  cat: "aplicacion",
  sev: 2,
  es: {
    t: "Arrugado",
    r: "La película de pintura se frunce y forma arrugas, como piel de pasa.",
    sen: ["Arrugas o pliegues en la superficie", "La capa de arriba seca y la de abajo sigue blanda", "Común en esmaltes y en manos gruesas", "A veces el arrugado aparece en zonas de mayor espesor"],
    cau: ["Mano muy gruesa: seca la superficie y queda blando debajo", "Repintar antes de que seque la mano anterior", "Aplicar con calor fuerte o sol directo", "Solventes fuertes sobre pintura que no curó"],
    ver: ["Presiona con la uña: si se hunde y está blando debajo, todavía no curó", "Revisa el espesor y los tiempos entre manos", "Comprueba las condiciones de aplicación (sol, calor)", "Mira si solo está en zonas gruesas"],
    cor: ["Espera a que cure por completo", "Raspa y lija las arrugas hasta dejar plano (si está muy mal, usa removedor)", "Limpia el polvo", "Aplica fondo si llegaste al sustrato", "Pinta en manos finas respetando el secado entre manos"],
    pre: ["Aplicar manos finas", "Respetar los tiempos de repintado", "No pintar al sol ni con calor extremo"],
    cli: "Las arrugas no se tapan; hay que dejar curar, lijar o remover y repintar en manos finas, por eso lleva días de trabajo."
  },
  en: {
    t: "Wrinkling",
    r: "The paint film puckers into wrinkles, like a raisin skin.",
    sen: ["Wrinkles or folds in the surface", "Top skin dry but soft underneath", "Common with enamels and thick coats", "Usually where the paint went on heaviest"],
    cau: ["Coat too thick: skins over and stays soft below", "Recoating before the first coat dried", "Applying in high heat or direct sun", "Hot solvents over uncured paint"],
    ver: ["Press with a fingernail: if it's soft underneath, it hasn't cured", "Check film build and recoat times", "Check the conditions (sun, heat)", "See if it's only in the heavy spots"],
    cor: ["Let it cure completely", "Scrape and sand the wrinkles flat (use stripper if it's bad)", "Remove dust", "Prime if you're down to the substrate", "Apply thin coats and respect recoat times"],
    pre: ["Apply thin coats", "Respect recoat windows", "Don't paint in direct sun or extreme heat"],
    cli: "Wrinkles can't be painted over; it has to cure, get sanded or stripped and recoated in thin coats, so it takes days."
  },
  trat: { es: "Remoción de arrugado", en: "Wrinkle removal and recoat", f: 0.6 },
  img: "Vertical smartphone photo, close-up of wrinkled puckered enamel paint film on a metal door, natural light, no text, no people."
},
{
  id: "pintura_pegajosa",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Pintura pegajosa o bloqueo",
    r: "Superficies pintadas que se pegan entre sí, como puertas, ventanas o estantes.",
    sen: ["La puerta se pega al marco y arranca pintura al abrir", "Objetos que se pegan al estante pintado", "Marcas de los objetos apoyados en la pintura", "Tacto gomoso aunque parezca seca"],
    cau: ["Cerrar o apoyar objetos antes de que la pintura cure", "Pintura al agua de baja resistencia al bloqueo", "Manos muy gruesas", "Humedad alta y poca ventilación"],
    ver: ["Toca la superficie: si se siente gomosa, todavía no curó", "Pregunta cuándo se pintó y si se cerraron puertas enseguida", "Revisa el tipo de pintura usada", "Comprueba ventilación y temperatura del ambiente"],
    cor: ["Deja abiertas puertas y ventanas y ventila hasta que cure", "Si arrancó pintura, lija el área a ras", "Limpia y aplica una mano fina", "Usa esmalte al agua o acrílico con buena resistencia al bloqueo en puertas y estantes", "Una vez curado, aplica un poco de talco en los cantos de contacto si sigue pegando"],
    pre: ["Esperar el curado (no solo el secado) antes de cerrar o apoyar", "Usar productos de alta resistencia al bloqueo en carpintería", "Aplicar manos finas y ventilar"],
    cli: "En puertas y estantes hay que usar un esmalte que no se pegue y respetar el curado; si no, al cerrar se arranca la pintura."
  },
  en: {
    t: "Blocking (sticky paint)",
    r: "Painted surfaces stick together, like doors, windows or shelves.",
    sen: ["Door sticks to the jamb and tears paint when opened", "Items stick to painted shelves", "Objects leave prints in the paint", "Feels rubbery even though it looks dry"],
    cau: ["Closing or loading surfaces before the paint cures", "Latex with poor block resistance", "Coats too thick", "High humidity and poor airflow"],
    ver: ["Touch it: rubbery means it hasn't cured", "Ask when it was painted and if doors were closed right away", "Check the paint type used", "Check ventilation and room temperature"],
    cor: ["Leave doors and windows open with airflow until cured", "If paint tore, sand the spot flush", "Clean and apply a thin coat", "Use a waterborne enamel or acrylic with good block resistance on doors and shelves", "Once cured, dust a little talc on contact edges if it still sticks"],
    pre: ["Wait for full cure, not just dry, before closing or loading", "Use high block-resistance products on trim", "Apply thin coats and ventilate"],
    cli: "Doors and shelves need a non-blocking enamel and proper cure time; otherwise the paint tears off the first time they're closed."
  },
  trat: { es: "Corrección de bloqueo", en: "Blocking repair", f: 0.3 },
  img: "Vertical smartphone photo, close-up of a painted white door edge and jamb where paint has torn off and stuck from blocking, natural light, no text, no people."
},
{
  id: "no_seca",
  cat: "aplicacion",
  sev: 2,
  es: {
    t: "Pintura que no seca",
    r: "Días después la pintura sigue blanda, pegajosa o se marca con el dedo.",
    sen: ["Pegajosa después de 24-48 horas o más", "Se marca con la uña o con el roce", "Olor fuerte a solvente que no se va", "Junta polvo y pelusa"],
    cau: ["Frío intenso o humedad muy alta", "Manos muy gruesas o repintado sin secar", "Esmalte sintético sobre superficie con grasa, aceites o resinas", "Pintura vencida, mal mezclada o con catalizador incorrecto (en bicomponentes)"],
    ver: ["Revisa temperatura y humedad del ambiente (ideal 10-30 °C y humedad menor a 85 %)", "Comprueba el espesor aplicado y los tiempos entre manos", "Revisa fecha de vencimiento y lote del envase", "Pregunta qué había antes (madera resinosa, cera, aceite)"],
    cor: ["Ventila y sube la temperatura del ambiente si se puede; espera unos días", "Si sigue blanda, remueve con espátula y removedor o solvente adecuado", "Limpia y desengrasa a fondo la superficie", "Lija y aplica fondo compatible", "Vuelve a pintar en manos finas, con buen clima"],
    pre: ["No pintar con frío extremo ni humedad alta", "Aplicar manos finas", "Revisar vencimiento y mezclar bien la pintura"],
    cli: "Si la pintura no cura hay que sacarla toda y volver a empezar; no se puede pintar encima porque queda blando para siempre."
  },
  en: {
    t: "Paint that won't dry",
    r: "Days later the paint is still soft, tacky or marks with a finger.",
    sen: ["Tacky after 24-48 hours or longer", "Marks with a fingernail or when rubbed", "Strong solvent smell that won't go away", "Picks up dust and lint"],
    cau: ["Cold weather or very high humidity", "Coats too thick or recoated too soon", "Oil enamel over grease, oil or resin", "Old paint, poorly mixed, or wrong catalyst ratio (2K products)"],
    ver: ["Check temperature and humidity (ideal 50-85 °F and under 85% RH)", "Check film build and recoat times", "Check the can's date and batch", "Ask what was on the surface before (pitchy wood, wax, oil)"],
    cor: ["Ventilate and warm the room if possible; give it a few days", "If it stays soft, strip with a scraper and stripper or proper solvent", "Clean and degrease thoroughly", "Sand and apply a compatible primer", "Repaint in thin coats in good weather"],
    pre: ["Don't paint in extreme cold or high humidity", "Apply thin coats", "Check expiration dates and mix paint thoroughly"],
    cli: "If the paint doesn't cure it has to come off and start over; painting over it means it stays soft forever."
  },
  trat: { es: "Remoción de pintura sin curar", en: "Uncured paint removal", f: 0.7 },
  img: "Vertical smartphone photo of a fingertip pressing into still-tacky glossy paint on a wooden window frame, leaving a fingerprint mark, natural light, only a hand, no text."
},
{
  id: "retoque_visible",
  cat: "aplicacion",
  sev: 1,
  es: {
    t: "Retoque que se nota",
    r: "La zona retocada queda con otro tono o brillo que el resto de la pared.",
    sen: ["Mancha cuadrada o redonda con distinto brillo", "Tono más claro u oscuro en el retoque", "Se nota según la luz o el ángulo", "Bordes del retoque marcados"],
    cau: ["Pintura de otro lote o envase abierto hace tiempo", "Pintura original desteñida o sucia", "Aplicación con otra herramienta (pincel en vez de rodillo)", "Retocar sobre masilla sin fijar"],
    ver: ["Compara con luz natural el color del envase con la pared", "Pregunta si queda pintura del mismo lote", "Limpia un sector de la pared para ver el color real", "Mira la textura del retoque contra el resto"],
    cor: ["Fija los parches de masilla antes de retocar", "Usa el mismo producto, lote y herramienta que la mano original", "Aplica el retoque descargado, difuminando los bordes", "Si sigue notándose, pinta el paño completo de esquina a esquina"],
    pre: ["Guardar pintura sobrante bien cerrada y etiquetada", "Mezclar varios envases del mismo color en un balde (boxing)", "Elegir acabados mates en zonas de mucho retoque"],
    cli: "Retocar casi nunca queda invisible; para que no se note hay que pintar la pared entera de esquina a esquina."
  },
  en: {
    t: "Touch-ups that show",
    r: "The touched-up spot ends up a different color or sheen than the rest of the wall.",
    sen: ["Square or round spot with different sheen", "Lighter or darker shade on the touch-up", "Shows from certain angles or in certain light", "Visible edges"],
    cau: ["Different batch or a can that's been open a long time", "Original paint faded or dirty", "Different tool (brush instead of roller)", "Touching up over unprimed mud"],
    ver: ["Compare the can and the wall in daylight", "Ask if there's leftover paint from the same batch", "Clean a spot on the wall to see the real color", "Compare the touch-up texture to the field"],
    cor: ["Prime patches before touching up", "Use the same product, batch and tool as the original", "Feather the touch-up out with a dry roller", "If it still shows, repaint the whole wall corner to corner"],
    pre: ["Save leftover paint sealed and labeled", "Box multiple cans of the same color in one bucket", "Choose flat finishes in high-touch-up areas"],
    cli: "Touch-ups almost never disappear; to make it invisible the whole wall has to be painted corner to corner."
  },
  trat: { es: "Pintado de paño completo", en: "Full wall repaint", f: 0.4 },
  img: "Vertical smartphone photo of a painted light gray wall with a visible slightly darker rectangular touch-up patch, side window light, no text, no people."
},

// ───────────────────────── COLOR ─────────────────────────
{
  id: "amarilleamiento",
  cat: "color",
  sev: 1,
  es: {
    t: "Amarilleamiento",
    r: "Blancos y colores claros que se ponen amarillentos con el tiempo.",
    sen: ["Tono amarillo, sobre todo en esmaltes blancos", "Más fuerte en zonas oscuras (detrás de cuadros, placares)", "Diferencia de tono al mover muebles o cuadros", "Zonas cerca de cocina o calefactores más amarillas"],
    cau: ["Esmaltes alquídicos (al solvente) que amarillean en la oscuridad", "Humo, cocina o calefacción a gas", "Calor y falta de luz natural", "Látex aplicado sobre esmalte amarillo sin bloquear"],
    ver: ["Pasa un trapo con desengrasante: si sale amarillo, es suciedad o humo, no la pintura", "Mira si el amarillo es parejo o según la luz que recibe", "Raspa un poco para ver si es esmalte al solvente", "Pregunta por fuentes de humo o calor"],
    cor: ["Lava con desengrasante y enjuaga", "Lija suave para matar el brillo", "Aplica imprimación bloqueadora o fondo de adherencia", "Pinta con esmalte al agua o acrílico que no amarillee"],
    pre: ["Usar esmaltes al agua en interiores", "Ventilar cocinas y evitar humo", "Dar luz natural a carpinterías blancas"],
    cli: "El esmalte viejo se pone amarillo y lo traspasa; hay que lavar, lijar y bloquear antes de pintar con un esmalte que no amarillee."
  },
  en: {
    t: "Yellowing",
    r: "Whites and light colors turning yellow over time.",
    sen: ["Yellow tint, especially on white enamels", "Worse in dark spots (behind pictures, inside closets)", "Shade difference when furniture or frames move", "Areas near the kitchen or heaters yellower"],
    cau: ["Oil-based enamels yellowing in the dark", "Smoke, cooking or gas heat", "Heat and lack of daylight", "Latex over yellowed oil without a blocker"],
    ver: ["Wipe with degreaser: if the rag turns yellow, it's grime or smoke, not the paint", "See if the yellow is even or follows the light", "Scrape a bit to check if it's oil-based", "Ask about smoke or heat sources"],
    cor: ["Wash with degreaser and rinse", "Scuff-sand to dull the sheen", "Apply a stain-blocking or bonding primer", "Paint with a non-yellowing waterborne acrylic enamel"],
    pre: ["Use waterborne enamels indoors", "Vent kitchens and avoid smoke", "Let daylight reach white trim"],
    cli: "The old oil enamel is yellowing and will bleed through; it needs washing, sanding and a blocker before a non-yellowing enamel."
  },
  trat: { es: "Bloqueo de amarilleamiento", en: "Yellowing block and recoat", f: 0.3 },
  img: "Vertical smartphone photo of white enamel kitchen cabinet doors yellowed unevenly, a lighter rectangle where something was mounted, natural light, no text, no people."
},
{
  id: "taninos",
  cat: "color",
  sev: 2,
  es: {
    t: "Manchas de taninos",
    r: "Manchas marrones o rojizas que atraviesan la pintura sobre madera.",
    sen: ["Manchas marrones, rojizas o rosadas sobre madera pintada", "Siguen la veta o aparecen en clavos y uniones", "Salen al poco tiempo de pintar con látex", "Se intensifican con humedad"],
    cau: ["Maderas ricas en taninos (cedro, roble, algarrobo, lapacho, etc.)", "Pintura al agua directo sobre madera sin bloquear", "Humedad que disuelve y arrastra los taninos", "Falta de imprimación bloqueadora"],
    ver: ["Identifica la madera y si es de las ricas en taninos", "Mira si las manchas siguen la veta", "Revisa si se usó imprimación al solvente o solo látex", "Comprueba la humedad de la madera"],
    cor: ["Deja secar la madera", "Lija suave y limpia el polvo", "Aplica imprimación bloqueadora al solvente o goma laca (puede requerir dos manos)", "Deja secar según ficha y comprueba que no traspase", "Pinta con el acabado elegido"],
    pre: ["Siempre imprimar maderas ricas en taninos con bloqueador al solvente", "Controlar la humedad de la madera antes de pintar", "Sellar bien cantos y uniones"],
    cli: "La madera suelta un tinte natural que atraviesa la pintura; necesita un bloqueador especial antes, si no las manchas vuelven en días."
  },
  en: {
    t: "Tannin bleed",
    r: "Brown or reddish stains bleeding through paint on wood.",
    sen: ["Brown, red or pink stains on painted wood", "Follow the grain or show up at nails and joints", "Appear soon after painting with latex", "Get worse with moisture"],
    cau: ["Tannin-rich woods (cedar, redwood, oak, etc.)", "Latex straight over unprimed wood", "Moisture dissolving and carrying the tannins", "No stain-blocking primer"],
    ver: ["Identify the wood and whether it's tannin-rich", "See if the stains follow the grain", "Check if an oil-based primer was used or just latex", "Check the wood moisture"],
    cor: ["Let the wood dry", "Lightly sand and remove dust", "Prime with an oil-based or shellac stain-blocking primer (may need two coats)", "Let it dry per the label and make sure nothing bleeds", "Topcoat"],
    pre: ["Always prime tannin-rich wood with an oil or shellac blocker", "Check wood moisture before painting", "Seal end grain and joints well"],
    cli: "The wood has natural dyes that bleed through paint; it needs a special blocking primer first or the stains come back in days."
  },
  trat: { es: "Bloqueo de taninos", en: "Tannin-blocking primer", f: 0.3 },
  img: "Vertical smartphone photo of white painted cedar siding boards with brownish tannin stains bleeding through along the grain and around nail heads, outdoor daylight, no text, no people."
},
{
  id: "nicotina_hollin",
  cat: "color",
  sev: 2,
  es: {
    t: "Manchas de nicotina u hollín",
    r: "Paredes y techos amarillentos, marrones o grises por humo de cigarrillo, velas o fuego.",
    sen: ["Tono amarillo-marrón parejo en techos y paredes", "Sombras grises sobre estufas, chimeneas o velas", "Contorno limpio donde había cuadros o muebles", "Olor a humo que vuelve con la humedad"],
    cau: ["Humo de cigarrillo acumulado", "Hollín de estufas, chimeneas, calefactores o velas", "Incendios o cocina con mucho humo", "Mala ventilación"],
    ver: ["Pasa un trapo húmedo con desengrasante: si sale marrón o negro, hay residuo", "Prueba pintar un sector chico con látex: si en horas aparece amarillo, traspasa", "Revisa si hay olor a humo", "Mira la extensión: toda la casa o un ambiente"],
    cor: ["Lava paredes y techos con desengrasante fuerte o limpiador para humo, de abajo hacia arriba", "Enjuaga con agua limpia y deja secar", "Aplica imprimación bloqueadora de manchas y olores (al solvente o goma laca)", "Comprueba que no traspase", "Pinta en dos manos"],
    pre: ["Ventilar y mantener chimeneas y estufas en buen estado", "Usar pinturas lavables en ambientes de fumadores", "Limpiar paredes periódicamente"],
    cli: "La nicotina y el hollín traspasan cualquier pintura común; hay que lavar todo y aplicar un bloqueador especial, por eso cuesta más que un repintado normal."
  },
  en: {
    t: "Nicotine and soot stains",
    r: "Walls and ceilings stained yellow, brown or gray by cigarette smoke, candles or fire.",
    sen: ["Even yellow-brown tint on ceilings and walls", "Gray shadows above stoves, fireplaces or candles", "Clean outlines where pictures or furniture hung", "Smoke smell that comes back in humid weather"],
    cau: ["Built-up cigarette smoke", "Soot from fireplaces, heaters or candles", "Fire damage or smoky cooking", "Poor ventilation"],
    ver: ["Wipe with a damp rag and degreaser: brown or black on the rag means residue", "Test-paint a small spot with latex: yellow showing within hours means it bleeds", "Check for smoke odor", "See how far it goes: one room or the whole house"],
    cor: ["Wash walls and ceilings with a heavy degreaser or smoke cleaner, bottom to top", "Rinse with clean water and let dry", "Prime with a stain- and odor-blocking primer (oil-based or shellac)", "Make sure nothing bleeds through", "Apply two finish coats"],
    pre: ["Ventilate and keep fireplaces and heaters maintained", "Use scrubbable paint in smokers' homes", "Wash walls periodically"],
    cli: "Nicotine and soot bleed through any regular paint; everything has to be washed and sealed with a special blocker, which is why it costs more than a normal repaint."
  },
  trat: { es: "Lavado y bloqueo de humo", en: "Smoke wash and stain-block", f: 0.4 },
  img: "Vertical smartphone photo of a yellow-brown nicotine-stained interior wall with a clean white rectangle outline where a picture frame used to hang, natural light, no text, no people."
},
{
  id: "manchas_oxido",
  cat: "color",
  sev: 2,
  es: {
    t: "Manchas de óxido en paredes",
    r: "Manchas marrones o anaranjadas que salen desde clavos, hierros o rejas.",
    sen: ["Puntos o chorreaduras marrón-anaranjadas", "Salen en clavos, tornillos, ganchos o hierros del revoque", "Chorreaduras bajo rejas, barandas o canaletas", "Pueden tener revoque fisurado o abombado alrededor"],
    cau: ["Clavos o tornillos de hierro sin proteger", "Armadura de hormigón expuesta o con poco recubrimiento", "Agua que escurre de rejas o elementos metálicos oxidados", "Humedad que activa la corrosión"],
    ver: ["Rasca la mancha: si encuentras metal, el origen es puntual", "Si el revoque está abombado y suena hueco sobre una viga o columna, puede ser hierro estructural oxidado (derivar)", "Mira si la mancha chorrea desde arriba", "Comprueba si hay humedad en la zona"],
    cor: ["Elimina la fuente: retira el clavo o trata el metal con antióxido", "Si es armadura de hormigón, deriva a un especialista (requiere picar, pasivar y reparar)", "Limpia la mancha con limpiador de óxido o ácido oxálico diluido y enjuaga", "Aplica bloqueador de manchas al solvente", "Masilla, lija, fija y pinta"],
    pre: ["Usar clavos y tornillos galvanizados o inoxidables", "Mantener pintadas las rejas y barandas", "Colocar goterones para que el agua no escurra sobre la pared"],
    cli: "El óxido traspasa la pintura; hay que eliminar el metal o tratarlo y sellar la mancha con un bloqueador, si no vuelve a salir."
  },
  en: {
    t: "Rust stains on walls",
    r: "Brown or orange stains coming from nails, rebar or metal railings.",
    sen: ["Brown-orange spots or streaks", "Show up at nails, screws, hooks or metal in the plaster", "Streaks running down from railings, bars or gutters", "Cracked or bulging plaster around them"],
    cau: ["Uncoated steel nails or screws", "Exposed rebar or thin concrete cover", "Water running off rusty metal", "Moisture driving corrosion"],
    ver: ["Scratch the stain: hitting metal means a point source", "Bulging, hollow-sounding plaster over a beam or column can mean rusting rebar (refer it out)", "See if the stain streaks from above", "Check for moisture in the area"],
    cor: ["Remove the source: pull the nail or treat the metal with rust converter or rust-inhibiting primer", "If it's rebar, refer to a concrete repair specialist", "Clean the stain with a rust remover or diluted oxalic acid and rinse", "Spot-prime with an oil-based stain blocker", "Patch, sand, prime and paint"],
    pre: ["Use galvanized or stainless fasteners", "Keep railings and bars painted", "Add drip edges so water doesn't run down the wall"],
    cli: "Rust bleeds through paint; the metal has to be removed or treated and the stain sealed with a blocker, or it'll be back."
  },
  trat: { es: "Tratamiento de manchas de óxido", en: "Rust stain treatment", f: 0.3 },
  img: "Vertical smartphone photo of a white exterior wall with orange-brown rust streaks running down from a metal window grille, daylight, no text, no people."
},
{
  id: "blanqueamiento",
  cat: "color",
  sev: 1,
  es: {
    t: "Blanqueamiento o manchas blancas",
    r: "Manchas blanquecinas, lechosas o chorreaduras brillantes sobre pintura nueva.",
    sen: ["Manchas lechosas o veladas en barnices o pintura oscura", "Chorreaduras brillosas o pegajosas blancas o marrones en baños y fachadas", "Aparecen después de lluvia, rocío o duchas", "Pueden salir con agua en las primeras semanas"],
    cau: ["Pintura al agua expuesta a humedad o rocío antes de curar (los aditivos migran a la superficie)", "Barnices aplicados con alta humedad: queda humedad atrapada", "Frío y humedad durante el secado", "Ducha usada poco después de pintar el baño"],
    ver: ["Lava un sector con agua tibia y esponja: si sale, son aditivos migrados", "Revisa si llovió o hubo rocío en las primeras 24-48 horas", "En barnices, comprueba si la mancha es interna (no sale al frotar)", "Pregunta cuándo se usó la ducha después de pintar"],
    cor: ["Si son aditivos migrados, lava con agua tibia y jabón neutro y enjuaga (puede repetirse)", "Espera el curado completo antes de repintar", "En barnices, lija la zona blanqueada y vuelve a barnizar con buen clima", "Si persiste, aplica una mano de terminación con baja humedad ambiente"],
    pre: ["No pintar exteriores si se espera lluvia o rocío en las próximas horas", "Ventilar baños y no usar la ducha hasta que la pintura cure", "Barnizar con humedad relativa baja"],
    cli: "Son restos de la pintura que salen por la humedad; se lavan y, si hace falta, se repasa una mano cuando el clima ayude."
  },
  en: {
    t: "Blushing and surfactant leaching",
    r: "Milky white haze, or glossy white-to-brown drips on fresh paint.",
    sen: ["Milky or cloudy patches in clear finishes or dark paint", "Shiny, sticky white or tan streaks in bathrooms and on exteriors", "Show up after rain, dew or showers", "Can wash off in the first few weeks"],
    cau: ["Latex exposed to moisture or dew before curing (surfactants migrate out)", "Clear finishes applied in high humidity trapping moisture", "Cold, damp drying conditions", "Shower used too soon after painting the bathroom"],
    ver: ["Wash a spot with warm water and a sponge: if it comes off, it's surfactant leaching", "Check if it rained or there was dew within 24-48 hours", "On clear finishes, see if the haze is in the film (doesn't rub off)", "Ask when the shower was first used"],
    cor: ["For surfactant leaching, wash with warm water and mild soap, then rinse (may need repeating)", "Let it fully cure before recoating", "On clear finishes, sand the blushed area and recoat in good weather", "If it persists, apply a finish coat in low humidity"],
    pre: ["Don't paint exteriors with rain or dew coming in the next hours", "Ventilate bathrooms and hold off on showers until cured", "Apply clear finishes in low humidity"],
    cli: "It's material from the paint coming out with moisture; it washes off, and if needed I recoat once the weather cooperates."
  },
  trat: { es: "Lavado y repaso por blanqueamiento", en: "Surfactant wash and touch-up", f: 0.15 },
  img: "Vertical smartphone photo of a freshly painted dark blue exterior wall with glossy whitish streaks running down after rain, overcast daylight, no text, no people."
},
{
  id: "colores_fuertes",
  cat: "color",
  sev: 1,
  es: {
    t: "Colores fuertes o rojos que no cubren",
    r: "Rojos, amarillos o naranjas intensos que quedan manchados y necesitan muchas manos.",
    sen: ["Tono desparejo y con nubes tras dos manos", "Se ve el color de abajo", "Marcas de rodillo y cortes más visibles", "El color se ve distinto al de la muestra"],
    cau: ["Pigmentos orgánicos intensos con poco poder cubriente", "Base transparente (deep base) que necesita más manos", "Pintar sobre blanco o colores muy distintos sin fondo", "Estirar el rendimiento de la pintura"],
    ver: ["Revisa en la ficha si el color requiere fondo entonado", "Pinta una muestra grande sobre la pared para ver cómo cubre", "Comprueba la base usada en el tintométrico", "Mira con luz natural"],
    cor: ["Aplica primero un fondo o imprimación entonada (gris o tono base recomendado para ese color)", "Aplica la primera mano del color sin diluir de más", "Deja secar bien entre manos", "Aplica la segunda y, si hace falta, tercera mano con borde húmedo", "Termina cada paño en la misma dirección"],
    pre: ["Presupuestar siempre fondo entonado y una mano extra en colores intensos", "Comprar el color en el mismo lote", "Usar pinturas de alta calidad en tonos fuertes"],
    cli: "Los colores intensos tapan poco: llevan un fondo especial y al menos una mano más, eso suma material y mano de obra."
  },
  en: {
    t: "Bold colors and reds that won't cover",
    r: "Deep reds, yellows or oranges that look blotchy and need lots of coats.",
    sen: ["Blotchy, cloudy color after two coats", "Old color showing through", "Roller marks and cut-in lines more visible", "Color looks different from the sample"],
    cau: ["Bright organic pigments with low hide", "Deep or clear tint base that needs more coats", "Painting over white or very different colors with no primer", "Stretching the spread rate"],
    ver: ["Check if the color calls for a tinted primer", "Paint a big sample on the wall to see the hide", "Check which base was used at the tint counter", "Look in daylight"],
    cor: ["Start with a tinted primer (gray or the shade recommended for that color)", "Roll the first color coat without overthinning", "Let it dry fully between coats", "Apply the second and, if needed, third coat keeping a wet edge", "Lay off each section in the same direction"],
    pre: ["Always bid a tinted primer and an extra coat on bold colors", "Buy the color from the same batch", "Use top-tier paint for strong colors"],
    cli: "Bold colors hide poorly: they need a special tinted primer and at least one extra coat, which adds material and labor."
  },
  trat: { es: "Fondo entonado + mano extra (color intenso)", en: "Tinted primer + extra coat (bold color)", f: 0.5 },
  img: "Vertical smartphone photo of an interior wall being painted bright red, blotchy streaky coverage with white showing through, roller tray at the bottom edge, natural light, no text, no people."
},

// ───────────────────────── MADERA Y METAL ─────────────────────────
{
  id: "nudos_madera",
  cat: "madera_metal",
  sev: 1,
  es: {
    t: "Sangrado de nudos en madera",
    r: "Manchas amarillas o marrones con forma de nudo que atraviesan la pintura.",
    sen: ["Círculos u óvalos amarillentos o marrones sobre la pintura", "Coinciden con los nudos de la madera", "Pueden estar pegajosos", "Aparecen semanas o meses después de pintar"],
    cau: ["Resinas y aceites de los nudos (sobre todo en pino)", "Pintura al agua directo sobre madera sin sellar", "Calor y sol que hacen fluir la resina", "Falta de imprimación bloqueadora sobre los nudos"],
    ver: ["Mira si las manchas coinciden con nudos", "Toca: si están pegajosos, la resina sigue activa", "Revisa qué fondo se usó", "Comprueba si la pieza recibe sol directo"],
    cor: ["Raspa la resina endurecida o limpia con alcohol o solvente", "Lija la zona y limpia el polvo", "Aplica goma laca o sellador de nudos solo sobre los nudos (1-2 manos)", "Aplica imprimación bloqueadora en toda la pieza", "Pinta con el acabado elegido"],
    pre: ["Sellar siempre los nudos antes de imprimar", "Usar madera seca y de buena calidad", "Imprimar con fondo bloqueador en maderas resinosas"],
    cli: "Los nudos sueltan resina que mancha cualquier pintura; hay que sellarlos uno por uno antes, si no aparecen manchas amarillas."
  },
  en: {
    t: "Knot bleed",
    r: "Yellow or brown knot-shaped stains showing through the paint.",
    sen: ["Yellowish or brown circles or ovals on the paint", "Line up with knots in the wood", "May be sticky", "Show up weeks or months after painting"],
    cau: ["Resin and oils in knots (especially pine)", "Latex straight over unsealed wood", "Heat and sun making the sap move", "No knot sealer or stain-blocking primer"],
    ver: ["See if the stains match knots", "Touch them: sticky means the resin is still active", "Check what primer was used", "See if the piece gets direct sun"],
    cor: ["Scrape off hardened resin or wipe with alcohol or mineral spirits", "Sand and wipe off dust", "Spot-seal knots with shellac or knot sealer (1-2 coats)", "Prime the whole piece with a stain-blocking primer", "Topcoat"],
    pre: ["Always spot-seal knots before priming", "Use dry, quality lumber", "Use a stain-blocking primer on resinous wood"],
    cli: "Knots leak resin that stains any paint; each one has to be sealed first, or yellow rings come through."
  },
  trat: { es: "Sellado de nudos", en: "Knot sealing", f: 0.25 },
  img: "Vertical smartphone photo of white painted pine trim boards with yellow-brown circular stains bleeding through over the wood knots, natural light, no text, no people."
},
{
  id: "oxido_metal",
  cat: "madera_metal",
  sev: 2,
  es: {
    t: "Óxido bajo la pintura en metal",
    r: "Ampollas, escamas y manchas de óxido que levantan la pintura de rejas, portones y chapas.",
    sen: ["Pintura abombada con polvo rojizo debajo", "Escamas que se levantan y dejan el metal picado", "Chorreaduras anaranjadas", "Óxido que avanza desde bordes, soldaduras y rayones"],
    cau: ["Pintar sobre óxido sin quitarlo", "Falta de antióxido o fondo anticorrosivo", "Rayones o golpes que dejaron el metal expuesto", "Agua estancada en uniones, bordes y soldaduras"],
    ver: ["Raspa un sector: si el óxido es superficial, se limpia; si está picado o perforado, puede requerir herrería", "Golpea con un destornillador zonas dudosas para ver si el metal está sano", "Revisa uniones, soldaduras y bases donde se junta agua", "Haz prueba de cinta en la pintura sana"],
    cor: ["Retira pintura suelta y óxido con cepillo de alambre, lija o amoladora con disco de cerdas", "Deriva a herrería piezas perforadas o muy debilitadas", "Limpia el polvo y desengrasa", "Aplica convertidor de óxido donde quede óxido firme y luego antióxido o fondo anticorrosivo (2 manos)", "Masilla para metal en picaduras si hace falta, y lija", "Termina con dos manos de esmalte para metal"],
    pre: ["Retocar rayones apenas aparecen", "Evitar que el agua quede estancada", "Repintar cada pocos años antes de que aparezca óxido"],
    cli: "Si pinto sobre el óxido sigue comiendo el metal por debajo; hay que sacarlo, convertirlo y aplicar antióxido, eso es lo que lleva más tiempo."
  },
  en: {
    t: "Rust under paint on metal",
    r: "Blisters, flakes and rust stains lifting paint off railings, gates and sheet metal.",
    sen: ["Bubbled paint with red powder underneath", "Flakes lifting and leaving pitted metal", "Orange streaks", "Rust creeping from edges, welds and scratches"],
    cau: ["Painting over rust without removing it", "No rust-inhibiting primer", "Scratches or dings exposing bare metal", "Water sitting at joints, edges and welds"],
    ver: ["Scrape a spot: surface rust cleans up; pitted or rusted-through metal may need a welder", "Poke questionable spots with a screwdriver to see if the metal is sound", "Check joints, welds and bases where water collects", "Tape test the paint that's still on"],
    cor: ["Remove loose paint and rust with a wire brush, sandpaper or grinder with a wire wheel", "Send rusted-through or weak pieces to a metal shop", "Wipe off dust and degrease", "Apply rust converter on remaining tight rust, then rust-inhibiting primer (2 coats)", "Fill pitting with metal filler if needed, and sand", "Finish with two coats of metal enamel"],
    pre: ["Touch up scratches right away", "Don't let water pool on metal", "Repaint every few years before rust starts"],
    cli: "If I paint over rust it keeps eating the metal underneath; it has to be removed, converted and primed, and that's where the time goes."
  },
  trat: { es: "Desoxidado y antióxido", en: "Rust removal and primer", f: 0.8 },
  img: "Vertical smartphone photo, close-up of a black painted iron gate with paint bubbling and flaking off over orange rust spots near a weld, outdoor daylight, no text, no people."
},
{
  id: "barniz_agrietado",
  cat: "madera_metal",
  sev: 2,
  es: {
    t: "Barniz agrietado o pelado en madera",
    r: "El barniz se cuartea, se blanquea y se levanta en escamas, sobre todo al sol.",
    sen: ["Escamas transparentes que se levantan", "Grietas finas en la película", "Zonas grises o blanqueadas donde se fue el barniz", "Madera oscurecida o manchada debajo"],
    cau: ["Barniz de interior o sin filtro UV usado en exterior", "El sol degrada la madera bajo el barniz y este pierde agarre", "Barniz muy grueso y rígido sobre madera que se mueve", "Humedad que entra por cantos y uniones"],
    ver: ["Haz prueba de cinta: si sale barniz, no tiene adherencia", "Mira si la madera debajo está gris (dañada por UV)", "Comprueba la orientación y horas de sol", "Revisa cantos y uniones por humedad"],
    cor: ["Remueve todo el barniz con removedor, pistola de calor o lijadora", "Lija la madera hasta llegar a madera sana y clara (grano 80, 120 y 180)", "Si quedó gris, aplica limpiador o aclarador de madera y enjuaga", "Deja secar bien la madera", "Aplica protector para madera de poro abierto con filtro UV, o barniz para exterior en manos finas", "Respeta el número de manos del fabricante"],
    pre: ["Usar productos para exterior con filtro UV", "Preferir protectores de poro abierto en madera muy expuesta", "Hacer mantenimiento cada 1-3 años antes de que se pele"],
    cli: "El barniz viejo ya no protege; hay que sacarlo todo hasta madera sana y aplicar un producto con filtro solar, por eso es más trabajo que una mano encima."
  },
  en: {
    t: "Cracked or peeling varnish",
    r: "Varnish cracks, grays out and lifts in flakes, mostly in the sun.",
    sen: ["Clear flakes peeling up", "Fine cracks in the film", "Gray or white areas where the finish is gone", "Dark or stained wood underneath"],
    cau: ["Interior or non-UV varnish used outside", "Sun breaking down the wood under the film so it loses grip", "Thick, rigid film on wood that moves", "Water getting in at end grain and joints"],
    ver: ["Tape test: if varnish lifts, adhesion is gone", "See if the wood underneath is gray (UV damage)", "Check orientation and sun exposure", "Check end grain and joints for moisture"],
    cor: ["Strip all the varnish with stripper, heat gun or sander", "Sand down to clean, sound wood (80, 120 and 180 grit)", "If it's gray, use a wood cleaner/brightener and rinse", "Let the wood dry thoroughly", "Apply a penetrating UV-protective exterior stain, or an exterior spar varnish in thin coats", "Apply the number of coats the maker specifies"],
    pre: ["Use exterior products with UV protection", "Prefer penetrating finishes on very exposed wood", "Maintain every 1-3 years before it peels"],
    cli: "The old varnish isn't protecting anymore; it all has to come off down to good wood and get a UV-rated finish, so it's far more than a coat on top."
  },
  trat: { es: "Decapado y protección de madera", en: "Strip and refinish wood", f: 1.0 },
  img: "Vertical smartphone photo, close-up of an exterior wooden front door with cracked, peeling clear varnish and grayed sun-damaged wood showing, daylight, no text, no people."
},
{
  id: "madera_gris",
  cat: "madera_metal",
  sev: 2,
  es: {
    t: "Madera gris o degradada por sol",
    r: "La madera perdió su color, se puso gris, áspera y con fibras sueltas.",
    sen: ["Color gris plateado parejo", "Superficie áspera con fibras levantadas", "Pequeñas grietas siguiendo la veta", "Absorbe el agua enseguida"],
    cau: ["Radiación UV que destruye la lignina superficial", "Lluvia que lava las fibras dañadas", "Falta de protección o mantenimiento", "Hongos superficiales en climas húmedos"],
    ver: ["Lija un sector chico: si debajo aparece madera sana, el daño es superficial", "Clava la punta de un destornillador: si entra fácil, hay pudrición (derivar a carpintería)", "Echa agua: si se absorbe al instante, no tiene protección", "Revisa si hay manchas negras de hongos"],
    cor: ["Cambia o deriva a carpintería las piezas podridas", "Limpia con limpiador o aclarador para madera y cepillo, y enjuaga", "Deja secar varios días", "Lija hasta eliminar la capa gris y las fibras sueltas", "Aplica protector para madera con filtro UV y fungicida en 2-3 manos"],
    pre: ["Proteger la madera exterior desde el principio", "Renovar el protector antes de que se ponga gris", "Evitar que el agua quede estancada en la madera"],
    cli: "La capa gris es madera muerta; hay que limpiarla, lijarla y proteger con filtro solar, si no el producto nuevo no agarra y se pierde."
  },
  en: {
    t: "Gray, sun-weathered wood",
    r: "Wood has lost its color and turned gray, rough and fuzzy.",
    sen: ["Even silvery-gray color", "Rough surface with raised fibers", "Small checks along the grain", "Soaks up water instantly"],
    cau: ["UV breaking down the lignin at the surface", "Rain washing away damaged fibers", "No protection or maintenance", "Surface mildew in humid climates"],
    ver: ["Sand a small spot: sound wood underneath means surface damage only", "Push a screwdriver tip in: if it sinks easily, there's rot (call a carpenter)", "Splash water: if it soaks in right away, it's unprotected", "Look for black mildew spots"],
    cor: ["Replace or have a carpenter replace any rotten boards", "Scrub with a wood cleaner/brightener and rinse", "Let it dry several days", "Sand off the gray layer and loose fibers", "Apply 2-3 coats of a UV-protective, mildew-resistant wood stain or sealer"],
    pre: ["Protect exterior wood from day one", "Reapply before it turns gray", "Don't let water sit on the wood"],
    cli: "That gray layer is dead wood; it has to be cleaned, sanded and sealed with UV protection or the new finish won't hold."
  },
  trat: { es: "Restauración de madera exterior", en: "Exterior wood restoration", f: 0.9 },
  img: "Vertical smartphone photo of a weathered gray wooden deck railing with raised fibers and checks along the grain, a small sanded patch showing fresh wood, daylight, no text, no people."
},
{
  id: "resina",
  cat: "madera_metal",
  sev: 2,
  es: {
    t: "Resina que exuda de la madera",
    r: "Gotas pegajosas de resina que salen a través de la pintura o el barniz.",
    sen: ["Gotas ámbar o amarillas pegajosas en la superficie", "Aparecen sobre nudos, bolsas de resina o vetas", "Empeora con calor y sol", "La pintura se ampolla o se mancha alrededor"],
    cau: ["Maderas resinosas (pino, abeto) mal secadas", "Calor que licúa la resina", "Pintura oscura que absorbe calor", "Falta de sellado de nudos y bolsas de resina"],
    ver: ["Toca la gota: si está blanda y pegajosa, la resina está activa", "Mira si salen siempre en los mismos puntos", "Comprueba si la pieza recibe sol directo", "Pregunta si la madera es nueva o reciclada"],
    cor: ["Deja que la resina endurezca (o espera días frescos) y raspa con espátula", "Limpia los restos con alcohol o solvente", "Lija suave y limpia el polvo", "Sella la zona con goma laca o sellador de nudos (2 manos)", "Aplica imprimación bloqueadora y pinta, preferentemente en colores claros"],
    pre: ["Usar madera bien seca (secada en horno)", "Sellar nudos y bolsas de resina antes de pintar", "Evitar colores muy oscuros en madera resinosa al sol"],
    cli: "La madera sigue largando resina y la empuja a través de la pintura; hay que limpiarla y sellar cada punto, y puede necesitar retoques en el primer verano."
  },
  en: {
    t: "Sap and resin bleeding",
    r: "Sticky beads of resin pushing through paint or varnish.",
    sen: ["Sticky amber or yellow beads on the surface", "Show up over knots, pitch pockets or grain", "Worse in heat and sun", "Paint blisters or stains around them"],
    cau: ["Resinous wood (pine, fir) not properly dried", "Heat liquefying the sap", "Dark paint soaking up heat", "Knots and pitch pockets not sealed"],
    ver: ["Touch a bead: soft and sticky means active sap", "See if it keeps coming from the same spots", "Check if the piece gets direct sun", "Ask if the wood is new or reclaimed"],
    cor: ["Let the sap harden (or wait for cool weather) and scrape it off", "Clean residue with alcohol or mineral spirits", "Lightly sand and wipe off dust", "Seal with shellac or knot sealer (2 coats)", "Prime with a stain blocker and paint, ideally in lighter colors"],
    pre: ["Use kiln-dried lumber", "Seal knots and pitch pockets before painting", "Avoid very dark colors on resinous wood in the sun"],
    cli: "The wood is still pushing sap through the paint; it has to be cleaned and sealed spot by spot, and might need touch-ups the first summer."
  },
  trat: { es: "Tratamiento de resina", en: "Sap bleed treatment", f: 0.4 },
  img: "Vertical smartphone photo, close-up of sticky amber resin beads oozing through white paint on a pine fascia board, sunny daylight, no text, no people."
},

// ───────────────────────── EXTERIOR ─────────────────────────
{
  id: "tizado",
  cat: "exterior",
  sev: 1,
  es: {
    t: "Tizado o caleo",
    r: "La pintura exterior se hace polvo y deja la mano blanca o del color al tocarla.",
    sen: ["Polvo fino al pasar la mano", "Color apagado y desteñido", "Chorreaduras blancas sobre ladrillo o zócalos debajo", "La lluvia lava el polvo y mancha"],
    cau: ["Envejecimiento normal de la pintura por sol y lluvia", "Pintura de baja calidad o de interior usada afuera", "Pintura muy diluida", "Exposición fuerte al sol"],
    ver: ["Pasa un dedo o un trapo oscuro: si queda polvo, hay tizado", "Mide cuánto polvo deja (leve, moderado, severo)", "Haz prueba de cinta para ver si debajo está firme", "Revisa si el polvo mancha superficies inferiores"],
    cor: ["Lava con hidrolavadora o cepillo y agua con detergente", "Enjuaga bien y deja secar", "Si sigue dejando polvo, aplica fijador penetrante o imprimación para superficies tizosas", "Pinta con pintura exterior de buena calidad (100 % acrílica) en dos manos"],
    pre: ["Usar pinturas de exterior de buena calidad", "No diluir de más", "Repintar a tiempo, antes de que el tizado sea severo"],
    cli: "Si pinto sobre el polvo, la pintura nueva se despega; hay que lavar a presión y fijar antes, y ese paso es el que hace que dure."
  },
  en: {
    t: "Chalking",
    r: "Exterior paint turns to powder and rubs off white or colored on your hand.",
    sen: ["Fine powder when you run your hand over it", "Dull, faded color", "White streaks on brick or foundation below", "Rain washes the chalk down and stains"],
    cau: ["Normal aging from sun and rain", "Cheap paint or interior paint used outside", "Paint thinned too much", "Heavy sun exposure"],
    ver: ["Rub a finger or dark rag on it: powder means chalking", "Rate how much comes off (light, moderate, heavy)", "Tape test to make sure what's under is sound", "See if the chalk stains surfaces below"],
    cor: ["Pressure wash or scrub with detergent and water", "Rinse well and let it dry", "If it still chalks, apply a penetrating primer for chalky surfaces", "Apply two coats of quality 100% acrylic exterior paint"],
    pre: ["Use quality exterior paint", "Don't overthin", "Repaint before chalking gets heavy"],
    cli: "Paint over chalk peels; it has to be power-washed and primed first, and that step is what makes the job last."
  },
  trat: { es: "Lavado y fijación de tizado", en: "Chalk wash and primer", f: 0.25 },
  img: "Vertical smartphone photo of a fingertip rubbed across a faded exterior painted wall, fingertip covered in chalky paint powder, clean streak on the wall, daylight, only a hand, no text."
},
{
  id: "decoloracion_sol",
  cat: "exterior",
  sev: 1,
  es: {
    t: "Decoloración por sol",
    r: "Colores que se destiñen o cambian de tono en las caras más expuestas al sol.",
    sen: ["Color más pálido en la cara más soleada", "Diferencia de tono con zonas protegidas (aleros, detrás de carteles)", "Rojos, azules y amarillos que viran o se apagan", "Suele venir junto con tizado"],
    cau: ["Radiación UV que degrada pigmentos", "Pigmentos orgánicos poco resistentes a la luz", "Pintura de interior o de baja calidad en exterior", "Colores oscuros o intensos muy expuestos"],
    ver: ["Compara el color de la cara expuesta con uno protegido", "Pasa un trapo para ver si además hay tizado", "Revisa qué tipo de pintura y color se usó", "Comprueba la orientación de la fachada"],
    cor: ["Lava la superficie y deja secar", "Si hay tizado, aplica fijador", "Elige pintura exterior con pigmentos resistentes a la luz (preferentemente tonos con base inorgánica u óxidos)", "Aplica dos manos completas de esquina a esquina", "En carpinterías, usa esmaltes con filtro UV"],
    pre: ["Elegir colores y productos aptos para exterior y alta exposición", "Preferir tonos medios o claros en fachadas muy soleadas", "Repintar cada pocos años"],
    cli: "Para que el color dure al sol hay que usar una pintura de exterior con pigmentos resistentes; es más cara, pero no se destiñe en un año."
  },
  en: {
    t: "Sun fading",
    r: "Colors fade or shift on the sides that get the most sun.",
    sen: ["Paler color on the sunniest side", "Shade difference vs. protected spots (under eaves, behind signs)", "Reds, blues and yellows shifting or dulling", "Usually comes with chalking"],
    cau: ["UV breaking down the pigments", "Organic pigments with poor lightfastness", "Interior or cheap paint used outside", "Dark or bright colors in full sun"],
    ver: ["Compare the exposed side with a protected spot", "Rub with a rag to check for chalking too", "Check what paint and color were used", "Note which way the wall faces"],
    cor: ["Wash and let dry", "If chalking, prime", "Pick an exterior paint with fade-resistant pigments (inorganic or oxide-based colorants)", "Apply two full coats corner to corner", "On trim, use UV-resistant enamels"],
    pre: ["Pick colors and products rated for exterior and high exposure", "Prefer mid or light tones on sun-baked walls", "Repaint every few years"],
    cli: "To hold color in the sun it takes an exterior paint with fade-resistant pigments; it costs more, but it won't wash out in a year."
  },
  trat: { es: "Pintura exterior resistente a UV", en: "UV-resistant exterior coating", f: 0.2 },
  img: "Vertical smartphone photo of a sunny exterior wall painted terracotta red, heavily faded and pale, with a darker unfaded rectangle where a sign used to be, daylight, no text, no people."
},
{
  id: "algas_fachada",
  cat: "exterior",
  sev: 2,
  es: {
    t: "Suciedad, algas y líquenes en fachada",
    r: "Manchas verdes, negras o grises que cubren la fachada en las caras húmedas y sombrías.",
    sen: ["Película verde o negra en zonas sombrías", "Chorreaduras oscuras bajo ventanas, cornisas y aleros", "Manchas grises o naranjas en relieve (líquenes)", "Suciedad pegada que no sale con agua sola"],
    cau: ["Humedad persistente y poca exposición al sol", "Vegetación cercana y salpicaduras de lluvia", "Falta de goterones en ventanas y cornisas", "Superficies rugosas que retienen suciedad"],
    ver: ["Echa unas gotas de lavandina diluida: si la mancha se aclara, es biológica", "Mira la orientación: las caras más sombrías son las más afectadas", "Revisa goterones y canaletas", "Comprueba si hay plantas o árboles pegados a la pared"],
    cor: ["Aplica alguicida o fungicida y deja actuar según ficha", "Lava con hidrolavadora a presión moderada o cepillo, de abajo hacia arriba", "Enjuaga y deja secar varios días", "Repite el biocida como tratamiento preventivo", "Aplica fijador y pinta con pintura exterior con fungicida y alguicida"],
    pre: ["Podar vegetación que toque la fachada", "Colocar goterones y mantener canaletas limpias", "Usar pinturas con biocida y repetir lavados cada pocos años"],
    cli: "La fachada tiene algas vivas; hay que matarlas, lavar y usar pintura con biocida, si no en una temporada vuelve a estar verde."
  },
  en: {
    t: "Dirt, algae and lichen on siding",
    r: "Green, black or gray growth covering damp, shady sides of the house.",
    sen: ["Green or black film on shady areas", "Dark streaks below windows, ledges and eaves", "Raised gray or orange patches (lichen)", "Grime that won't rinse off with plain water"],
    cau: ["Constant moisture and little sun", "Nearby plants and rain splash-back", "No drip edges on sills and ledges", "Rough surfaces that hold dirt"],
    ver: ["Dab on some diluted bleach: if it lightens, it's biological", "Check the orientation: the shadiest sides are worst", "Check drip edges and gutters", "See if plants or trees touch the wall"],
    cor: ["Apply an algaecide/mildewcide wash and let it dwell per the label", "Pressure wash at moderate pressure or scrub, bottom to top", "Rinse and let dry several days", "Reapply the biocide as a preventive treatment", "Prime and paint with a mildew- and algae-resistant exterior paint"],
    pre: ["Trim back plants touching the house", "Add drip edges and keep gutters clean", "Use biocide-treated paint and re-wash every few years"],
    cli: "That's live algae on the house; it has to be killed, washed and painted with a biocide paint or it'll be green again in a season."
  },
  trat: { es: "Limpieza biocida de fachada", en: "Algae and mildew wash", f: 0.4 },
  img: "Vertical smartphone photo of the shady lower part of a light-colored stucco house exterior covered in green algae and black streaks below a window sill, overcast daylight, no text, no people."
}
];
