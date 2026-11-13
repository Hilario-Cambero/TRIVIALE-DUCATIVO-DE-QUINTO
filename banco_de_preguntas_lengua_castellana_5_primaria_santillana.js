/* ==========================================================================
   BANCO DE PREGUNTAS DE LENGUA CASTELLANA Y LITERATURA - 5º PRIMARIA (210 PREGUNTAS)
   Ajustado al currículo LOMLOE de la editorial Santillana (Construyendo Mundos):
   - Bloque 1: Comunicación, lenguas de España y tipología textual
   - Bloque 2: Vocabulario (sinónimos, polisemia, formación de palabras, campos)
   - Bloque 3: Ortografía (acentuación, diptongos/hiatos, grafías y puntuación)
   - Bloque 4: Gramática I (sustantivo, adjetivo, determinantes, pronombres, verbo)
   - Bloque 5: Gramática II (adverbios, enlaces, enunciados, sujeto y predicado)
   - Bloque 6: Educación Literaria (métrica, rima, recursos y géneros literarios)
   ========================================================================== */

window.QUESTION_BANK = window.QUESTION_BANK || {};

window.QUESTION_BANK.lengua = [
  // --- BLOQUE 1: COMUNICACIÓN, LENGUAS DE ESPAÑA Y TIPOLOGÍA TEXTUAL ---
  {
    q: "En un acto de comunicación, ¿cómo se llama la persona que transmite o envía el mensaje?",
    options: ["Receptor", "Emisor", "Canal", "Código"],
    answer: 1,
    explanation: "El emisor es quien elabora y transmite el mensaje; el receptor es quien lo recibe e interpreta."
  },
  {
    q: "¿Qué elemento de la comunicación es el medio físico por el que viaja el mensaje (como el aire, el papel o el teléfono)?",
    options: ["El código", "El canal", "El contexto", "El emisor"],
    answer: 1,
    explanation: "El canal es el medio físico a través del cual se transmite la información."
  },
  {
    q: "¿Qué diferencia existe entre la comunicación verbal y la comunicación no verbal?",
    options: [
      "La verbal usa palabras (orales o escritas) y la no verbal emplea gestos, imágenes o sonidos",
      "La verbal solo se usa por teléfono",
      "La no verbal utiliza únicamente libros",
      "No existe ninguna diferencia"
    ],
    answer: 0,
    explanation: "La comunicación verbal utiliza el lenguaje hablado o escrito; la no verbal usa gestos, señales de tráfico, emoticonos, etc."
  },
  {
    q: "¿Cuáles son las lenguas cooficiales de España junto con el castellano o español?",
    options: [
      "Inglés, francés y portugués",
      "Catalán, gallego, euskera (vasco) y valenciano",
      "Asturiano, aragonés y latín",
      "Italiano, catalán y alemán"
    ],
    answer: 1,
    explanation: "Además del castellano (oficial en todo el Estado), son cooficiales en sus respectivas comunidades el catalán, valenciano, gallego y euskera."
  },
  {
    q: "¿Cuál de las lenguas de España es la única que NO procede del latín?",
    options: ["El gallego", "El catalán", "El euskera", "El castellano"],
    answer: 2,
    explanation: "El euskera es una lengua prerromana muy antigua que no deriva del latín."
  },
  {
    q: "¿Cómo se llaman las partes en que se divide una narración como un cuento o una novela?",
    options: [
      "Título, índice y portada",
      "Planteamiento (inicio), nudo y desenlace",
      "Verso, estrofa y rima",
      "Sujeto, verbo y complementos"
    ],
    answer: 1,
    explanation: "En el planteamiento se presentan personajes y lugar; en el nudo ocurre el conflicto; y en el desenlace se resuelve."
  },
  {
    q: "¿Qué clase de texto explica detalladamente cómo es una persona, un animal, un paisaje o un objeto?",
    options: ["Texto narrativo", "Texto descriptivo", "Texto instructivo", "Texto teatral"],
    answer: 1,
    explanation: "La descripción pinta con palabras cómo es algo o alguien, utilizando muchos adjetivos."
  },
  {
    q: "¿Qué diferencia un retrato de una prosopografía o una etopeya en la descripción de personas?",
    options: [
      "El retrato describe tanto los rasgos físicos como el carácter de una persona",
      "El retrato solo describe la ropa",
      "La etopeya describe paisajes",
      "Son exactamente lo mismo"
    ],
    answer: 0,
    explanation: "La prosopografía describe el físico, la etopeya el carácter y el retrato combina ambos."
  },
  {
    q: "¿Qué tipo de texto es una receta de cocina o las instrucciones para montar un juego?",
    options: ["Texto poético", "Texto instructivo", "Texto biográfico", "Texto publicitario"],
    answer: 1,
    explanation: "Los textos instructivos dan pasos ordenados para realizar una tarea o manejar un objeto."
  },
  {
    q: "¿Qué es una biografía?",
    options: [
      "Un poema sobre la naturaleza",
      "El relato de los hechos más importantes de la vida de una persona",
      "Una noticia deportiva",
      "Un diccionario de sinónimos"
    ],
    answer: 1,
    explanation: "La biografía narra la vida de una persona; si la escribe ella misma se llama autobiografía."
  },
  {
    q: "¿Cómo se llama el texto breve que aparece debajo de una fotografía en un periódico para explicarla?",
    options: ["Titular", "Pie de foto", "Entradilla", "Columna"],
    answer: 1,
    explanation: "El pie de foto aporta información sobre la imagen que acompaña a la noticia."
  },
  {
    q: "¿Qué seis preguntas básicas suele responder una noticia periodística?",
    options: [
      "Qué, quién, cuándo, dónde, cómo y por qué",
      "Cuál, cuánto, cuál es tu nombre y dónde vives",
      "Inicio, nudo y desenlace",
      "Sujeto, verbo y predicado"
    ],
    answer: 0,
    explanation: "Una noticia completa informa de qué pasó, a quién, cuándo, dónde, cómo y por qué ocurrió."
  },

  // --- BLOQUE 2: VOCABULARIO Y SEMÁNTICA ---
  {
    q: "¿Qué son las palabras sinónimas?",
    options: [
      "Palabras que tienen significados opuestos",
      "Palabras que tienen el mismo significado o muy parecido",
      "Palabras que se escriben al revés",
      "Palabras que solo tienen una sílaba"
    ],
    answer: 1,
    explanation: "Por ejemplo: 'alegre' y 'contento' o 'empezar' y 'comenzar' son sinónimas."
  },
  {
    q: "¿Cuál de estas parejas está formada por palabras antónimas?",
    options: ["Bonito / Hermoso", "Generoso / Tacaño", "Rápido / Veloz", "Caminar / Andar"],
    answer: 1,
    explanation: "Los antónimos expresan ideas contrarias u opuestas, como 'generoso' y 'tacaño'."
  },
  {
    q: "¿Qué prefijo podemos añadir a las palabras 'posible', 'paciente' y 'prudente' para formar sus antónimos?",
    options: ["des-", "im-", "sub-", "pre-"],
    answer: 1,
    explanation: "Delante de 'p' o 'b' se escribe 'im-': imposible, impaciente, imprudente."
  },
  {
    q: "¿Cómo se llaman las palabras que tienen un único significado, como 'estetoscopio' o 'ornitorrinco'?",
    options: ["Polisémicas", "Monosémicas", "Homófonas", "Compuestas"],
    answer: 1,
    explanation: "Las palabras monosémicas poseen un solo significado, a diferencia de las polisémicas que tienen varios."
  },
  {
    q: "¿Cuál de estas palabras es polisémica (tiene varios significados)?",
    options: ["Sierra", "Abril", "Jueves", "Kilómetro"],
    answer: 0,
    explanation: "'Sierra' puede ser una herramienta para cortar madera o una cordillera de montañas."
  },
  {
    q: "¿Cómo se llaman las palabras que se pronuncian igual pero se escriben de forma diferente y tienen distinto significado (ej. 'vaca' y 'baca', 'hola' y 'ola')?",
    options: ["Sinónimas", "Homófonas", "Derivadas", "Primitivas"],
    answer: 1,
    explanation: "Las palabras homófonas suenan igual al pronunciarlas pero varían en su escritura y significado."
  },
  {
    q: "¿Qué diferencia hay entre 'hecho' (con h) y 'echo' (sin h)?",
    options: [
      "'Hecho' es del verbo hacer y 'echo' es del verbo echar",
      "Significan exactamente lo mismo",
      "'Echo' es del verbo hacer",
      "Ninguna de las dos existe"
    ],
    answer: 0,
    explanation: "'He hecho los deberes' (hacer) frente a 'Echo la carta al buzón' (echar)."
  },
  {
    q: "¿Qué son las palabras primitivas?",
    options: [
      "Palabras que proceden de otras",
      "Palabras que no proceden de ninguna otra palabra de nuestra lengua (como 'pan', 'flor' o 'mar')",
      "Palabras formadas por dos raíces",
      "Palabras muy antiguas en desuso"
    ],
    answer: 1,
    explanation: "De las palabras primitivas nacen las palabras derivadas al añadir prefijos o sufijos."
  },
  {
    q: "¿Qué es un prefijo y dónde se coloca?",
    options: [
      "Una partícula que se añade detrás de la raíz",
      "Una partícula que se añade delante de la raíz de una palabra para formar otra nueva (ej. 're-hacer', 'sub-marino')",
      "Una palabra que acompaña al verbo",
      "Un signo de puntuación"
    ],
    answer: 1,
    explanation: "Los prefijos van delante de la raíz y cambian su significado (pre-, sub-, des-, anti-, re-)."
  },
  {
    q: "¿Qué es un sufijo?",
    options: [
      "La partícula que se añade detrás de la raíz de una palabra (ej. 'pan-adero', 'libr-ería')",
      "La partícula que va al principio de la palabra",
      "Un sinónimo",
      "Una palabra compuesta"
    ],
    answer: 0,
    explanation: "Los sufijos se añaden al final de la raíz para formar sustantivos, adjetivos o verbos derivados."
  },
  {
    q: "¿Cuál de estas palabras es una palabra compuesta?",
    options: ["Panadería", "Sacapuntas", "Subterráneo", "Inútil"],
    answer: 1,
    explanation: "'Sacapuntas' se forma uniendo dos palabras simples: 'saca' + 'puntas'."
  },
  {
    q: "¿Qué es una familia de palabras?",
    options: [
      "Un grupo de palabras que comparten la misma raíz (ej. mar, marino, marea, submarino)",
      "Palabras que significan lo mismo",
      "Palabras que pertenecen al mismo tema aunque tengan distinta raíz",
      "Los nombres de los miembros de una familia"
    ],
    answer: 0,
    explanation: "Todas las palabras de una misma familia comparten la misma raíz o lexema."
  },
  {
    q: "¿Qué es un campo semántico?",
    options: [
      "Palabras con la misma raíz",
      "Un conjunto de palabras de la misma clase gramatical que comparten un rasgo de significado (ej. violín, flauta, piano, guitarra)",
      "Un grupo de palabras opuestas",
      "Palabras de otro idioma"
    ],
    answer: 1,
    explanation: "En el ejemplo, todas son sustantivos del campo semántico de los instrumentos musicales."
  },
  {
    q: "¿Qué diferencia un campo léxico de un campo semántico?",
    options: [
      "En el campo léxico se agrupan palabras de distintas clases (sustantivos, verbos, adjetivos) relacionadas con un mismo tema (ej. estudiar, examen, profesor, aprobado)",
      "No hay ninguna diferencia",
      "El campo léxico solo tiene verbos",
      "El campo semántico solo tiene adjetivos"
    ],
    answer: 0,
    explanation: "El campo léxico reúne palabras de diferente categoría gramatical asociadas a una misma temática."
  },
  {
    q: "¿Qué significa la frase hecha 'costar un ojo de la cara'?",
    options: ["Ser muy barato", "Ser extremadamente caro", "Tener dolor de ojos", "Ser muy fácil de conseguir"],
    answer: 1,
    explanation: "Las frases hechas tienen un sentido figurado que no coincide con el significado literal de cada palabra."
  },
  {
    q: "¿Qué son los refranes?",
    options: [
      "Poemas largos de aventuras",
      "Dichos populares breves que transmiten una enseñanza o consejo",
      "Definiciones del diccionario",
      "Noticias de última hora"
    ],
    answer: 1,
    explanation: "Por ejemplo: 'A buen entendedor, pocas palabras bastan' o 'Quien mucho abarca, poco aprieta'."
  },
  {
    q: "¿Qué son las siglas (como ONU, DNI o RAE)?",
    options: [
      "Palabras formadas por las letras iniciales de varias palabras",
      "Palabras muy largas",
      "Sinónimos de adjetivos",
      "Abreviaturas con punto final"
    ],
    answer: 0,
    explanation: "Las siglas se escriben con mayúsculas y sin puntos (DNI = Documento Nacional de Identidad)."
  },

  // --- BLOQUE 3: ORTOGRAFÍA ---
  {
    q: "¿Cómo se llama la sílaba que se pronuncia con mayor intensidad en una palabra?",
    options: ["Sílaba átona", "Sílaba tónica", "Diptongo", "Hiato"],
    answer: 1,
    explanation: "La sílaba tónica es la que suena más fuerte; las demás sílabas de la palabra son átonas."
  },
  {
    q: "¿Cuándo llevan tilde las palabras agudas (aquellas cuya sílaba tónica es la última)?",
    options: [
      "Siempre",
      "Cuando terminan en vocal, en -n o en -s",
      "Cuando NO terminan en vocal, -n ni -s",
      "Nunca llevan tilde"
    ],
    answer: 1,
    explanation: "Ejemplos de agudas con tilde: 'café' (vocal), 'camión' (-n), 'compás' (-s)."
  },
  {
    q: "¿Cuándo llevan tilde las palabras llanas (cuya sílaba tónica es la penúltima)?",
    options: [
      "Cuando terminan en vocal, -n o -s",
      "Cuando NO terminan en vocal, ni en -n, ni en -s",
      "Siempre llevan tilde",
      "Solo si tienen cuatro sílabas"
    ],
    answer: 1,
    explanation: "Ejemplos de llanas con tilde: 'árbol' (-l), 'lápiz' (-z), 'césped' (-d)."
  },
  {
    q: "¿Cuándo llevan tilde las palabras esdrújulas y sobresdrújulas?",
    options: [
      "Solo si terminan en vocal",
      "Siempre llevan tilde",
      "Nunca llevan tilde",
      "Solo si terminan en consonante"
    ],
    answer: 1,
    explanation: "Todas las palabras esdrújulas (ej. 'música', 'pájaro') y sobresdrújulas (ej. 'cuéntamelo') llevan tilde siempre."
  },
  {
    q: "¿Qué es un diptongo?",
    options: [
      "La unión de dos vocales que se pronuncian en la misma sílaba",
      "Dos vocales seguidas que se pronuncian en sílabas distintas",
      "Una palabra de dos sílabas",
      "Dos consonantes juntas"
    ],
    answer: 0,
    explanation: "El diptongo une una vocal abierta (a, e, o) y una cerrada (i, u) átona, o dos cerradas distintas, en una sola sílaba (ej. 'cie-lo', 'cui-da-do')."
  },
  {
    q: "¿Qué es un hiato?",
    options: [
      "Dos vocales que van en la misma sílaba",
      "El encuentro de dos vocales seguidas que pertenecen a sílabas diferentes (ej. 'a-é-re-o', 'pa-ís')",
      "Una palabra sin vocales",
      "Una tilde diacrítica"
    ],
    answer: 1,
    explanation: "Forman hiato dos vocales abiertas juntas (te-a-tro) o una vocal abierta y una cerrada tónica con tilde (rí-o, ba-úl)."
  },
  {
    q: "¿Por qué lleva tilde la palabra 'día' si es llana y termina en vocal?",
    options: [
      "Porque es una excepción sin motivo",
      "Porque tiene un hiato formado por vocal cerrada tónica (í) y vocal abierta (a), y siempre lleva tilde sobre la vocal cerrada",
      "Porque es esdrújula",
      "Porque es un monosílabo"
    ],
    answer: 1,
    explanation: "Los hiatos de vocal abierta + vocal cerrada tónica (o viceversa) llevan tilde siempre en la vocal cerrada (i, u) para romper el diptongo."
  },
  {
    q: "¿Para qué sirve la tilde diacrítica en monosílabos como 'él / el', 'tú / tu' o 'té / te'?",
    options: [
      "Para diferenciar palabras que se escriben igual pero tienen distinto significado y función gramatical",
      "Para indicar que la palabra es plural",
      "Para separar sílabas",
      "Para indicar una pregunta"
    ],
    answer: 0,
    explanation: "Por ejemplo: 'él' (pronombre personal) frente a 'el' (artículo); 'té' (infusión) frente a 'te' (pronombre)."
  },
  {
    q: "¿Cuál de estas oraciones usa correctamente la tilde diacrítica?",
    options: [
      "Tu me dijiste que tú perro es muy bueno",
      "Tú me dijiste que tu perro es muy bueno",
      "Tu me dijiste que tu perro es muy bueno",
      "Tú me dijiste que tú perro es muy bueno"
    ],
    answer: 1,
    explanation: "'Tú' (pronombre personal) lleva tilde; 'tu' (determinante posesivo) no lleva tilde."
  },
  {
    q: "¿Qué regla ortográfica explica que se escriban con 'b' palabras como 'amabilidad', 'responsabilidad' y 'contabilidad'?",
    options: [
      "Todas las palabras que empiezan por 'a-' van con 'b'",
      "Se escriben con 'b' las palabras terminadas en -bilidad (excepto movilidad y civilidad)",
      "Todas las palabras largas llevan 'b'",
      "Siempre se escribe 'b' antes de 'i'"
    ],
    answer: 1,
    explanation: "Los sustantivos terminados en -bilidad se escriben con 'b' (salvo movilidad y civilidad)."
  },
  {
    q: "¿Con qué letra se escriben siempre las formas del pretérito imperfecto de indicativo de los verbos de la 1ª conjugación (cantaba, jugábamos, saltaban)?",
    options: ["Con 'v'", "Con 'b'", "Con 'h'", "Con 'g'"],
    answer: 1,
    explanation: "Las terminaciones -aba, -abas, -aba, -ábamos, -abais, -aban de los verbos en -ar se escriben siempre con 'b'."
  },
  {
    q: "¿Con qué letra se escriben los adjetivos llanos terminados en -avo, -ava, -evo, -eva, -ivo, -iva (como 'nuevo', 'suave', 'deportivo')?",
    options: ["Con 'b'", "Con 'v'", "Con 'h'", "Con 'z'"],
    answer: 1,
    explanation: "Se escriben con 'v' los adjetivos llanos terminados en -ave, -avo, -ava, -eve, -evo, -eva, -ivo, -iva."
  },
  {
    q: "¿Cuál de estas palabras está escrita correctamente?",
    options: ["Conserge", "Proteger", "Tejer con g (teger)", "Crujir con g (crugir)"],
    answer: 1,
    explanation: "Los verbos terminados en -ger y -gir se escriben con 'g' (proteger, dirigir), excepto 'tejer' y 'crujir'."
  },
  {
    q: "¿Por qué se escriben con 'h' palabras como 'hielo', 'huevo', 'huella' y 'hierba'?",
    options: [
      "Porque son verbos",
      "Porque se escriben con 'h' todas las palabras que empiezan por los diptongos hie- y hue-",
      "Porque tienen más de dos sílabas",
      "Porque vienen del inglés"
    ],
    answer: 1,
    explanation: "Todas las palabras que comienzan por hie- o hue- llevan 'h' inicial."
  },
  {
    q: "¿Qué signo de puntuación se utiliza para introducir las palabras exactas que dice un personaje o antes de una enumeración anunciada?",
    options: ["El punto y coma (;)", "Los dos puntos (:)", "Los puntos suspensivos (...)", "El guion (-)"],
    answer: 1,
    explanation: "Los dos puntos (:) anuncian una enumeración, una cita textual o van tras el saludo de una carta."
  },
  {
    q: "¿Cuántos puntos tienen exactamente los puntos suspensivos?",
    options: ["Dos", "Tres (...)", "Cuatro", "Cinco"],
    answer: 1,
    explanation: "Los puntos suspensivos son siempre tres (...) y sirven para dejar una enumeración abierta o expresar duda o sorpresa."
  },

  // --- BLOQUE 4: GRAMÁTICA I (SUSTANTIVO, ADJETIVO, DETERMINANTES, PRONOMBRES, VERBO) ---
  {
    q: "¿Cómo se llama el sustantivo que nombra en singular a un conjunto de seres u objetos (como 'rebaño', 'flota', 'bandada' o 'arboleda')?",
    options: ["Sustantivo abstracto", "Sustantivo colectivo", "Sustantivo propio", "Sustantivo incontable"],
    answer: 1,
    explanation: "Los sustantivos colectivos designan en singular a un grupo de elementos de la misma especie."
  },
  {
    q: "¿Qué diferencia un sustantivo concreto de uno abstracto?",
    options: [
      "El concreto nombra seres u objetos que se perciben por los sentidos (mesa, aroma); el abstracto nombra ideas o sentimientos (alegría, justicia)",
      "El concreto siempre va en plural",
      "El abstracto es un verbo",
      "No tienen diferencia"
    ],
    answer: 0,
    explanation: "Los sustantivos abstractos designan conceptos, emociones o valores que no se pueden tocar ni ver."
  },
  {
    q: "¿Cuáles son los tres grados del adjetivo calificativo?",
    options: [
      "Presente, pasado y futuro",
      "Positivo, comparativo y superlativo",
      "Masculino, femenino y neutro",
      "Singular, plural y colectivo"
    ],
    answer: 1,
    explanation: "Positivo (alto), comparativo (más alto que / tan alto como / menos alto que) y superlativo (altísimo / el más alto)."
  },
  {
    q: "En la oración 'Este libro es tan interesante como aquel', ¿en qué grado está el adjetivo 'interesante'?",
    options: [
      "Comparativo de superioridad",
      "Comparativo de igualdad",
      "Comparativo de inferioridad",
      "Superlativo absoluto"
    ],
    answer: 1,
    explanation: "La estructura 'tan + adjetivo + como' expresa el grado comparativo de igualdad."
  },
  {
    q: "¿Cuál es el superlativo irregular de los adjetivos 'bueno' y 'malo'?",
    options: ["Buenísimo y malísimo", "Óptimo y pésimo", "Mayor y menor", "Superior e inferior"],
    answer: 1,
    explanation: "Aunque existen buenísimo y malísimo, sus formas cultas irregulares son 'óptimo' (muy bueno) y 'pésimo' (muy malo)."
  },
  {
    q: "¿Qué clase de palabra va delante del sustantivo para concretarlo y concuerda con él en género y número?",
    options: ["El adverbio", "El determinante", "La preposición", "La conjunción"],
    answer: 1,
    explanation: "Los determinantes (artículos, demostrativos, posesivos, numerales e indefinidos) acompañan y precisan al sustantivo."
  },
  {
    q: "¿Qué indican los determinantes demostrativos ('este', 'ese', 'aquel')?",
    options: [
      "La cantidad exacta",
      "La distancia (cercanía, distancia media o lejanía) entre el hablante y lo nombrado",
      "A quién pertenece algo",
      "Una acción pasada"
    ],
    answer: 1,
    explanation: "'Este' indica cercanía, 'ese' distancia media y 'aquel' lejanía."
  },
  {
    q: "¿Qué clase de determinante aparece en 'Vivo en el quinto piso'?",
    options: ["Numeral cardinal", "Numeral ordinal", "Indefinido", "Posesivo"],
    answer: 1,
    explanation: "Los numerales ordinales expresan orden (primero, segundo, quinto...), mientras los cardinales expresan cantidad (uno, dos, cinco...)."
  },
  {
    q: "¿Qué tipo de determinante es 'bastantes' en 'Vinieron bastantes amigos a la fiesta'?",
    options: ["Demostrativo", "Posesivo", "Indefinido", "Artículo"],
    answer: 2,
    explanation: "Los determinantes indefinidos (algún, muchos, pocos, bastantes, varios...) expresan una cantidad imprecisa."
  },
  {
    q: "¿Cuál es la diferencia entre un determinante y un pronombre?",
    options: [
      "El determinante acompaña a un sustantivo; el pronombre sustituye al sustantivo para no repetirlo",
      "El pronombre siempre va en plural",
      "El determinante se conjuga",
      "Son exactamente lo mismo"
    ],
    answer: 0,
    explanation: "En 'Este lápiz es mío', 'Este' es determinante (acompaña a lápiz). En 'Este es mío', 'Este' es pronombre (sustituye al sustantivo)."
  },
  {
    q: "¿Cuáles son los pronombres personales tónicos de 1ª, 2ª y 3ª persona del singular?",
    options: [
      "Me, te, se",
      "Yo, tú, él / ella",
      "Nosotros, vosotros, ellos",
      "Mí, ti, sí"
    ],
    answer: 1,
    explanation: "Yo (1ª persona), tú (2ª persona) y él/ella (3ª persona) son los pronombres personales de singular."
  },
  {
    q: "¿Qué dos partes forman cualquier forma verbal, como 'cant-ábamos'?",
    options: [
      "Prefijo y sufijo",
      "Raíz (o lexema) y desinencias",
      "Sujeto y predicado",
      "Artículo y sustantivo"
    ],
    answer: 1,
    explanation: "La raíz ('cant-') aporta el significado básico y las desinencias ('-ábamos') indican persona, número, tiempo y modo."
  },
  {
    q: "¿Cómo averiguamos a qué conjugación pertenece un verbo?",
    options: [
      "Mirando su terminación en infinitivo: 1ª (-ar), 2ª (-er) y 3ª (-ir)",
      "Contando sus sílabas",
      "Mirando si lleva tilde",
      "Pasándolo a plural"
    ],
    answer: 0,
    explanation: "1ª conjugación: terminados en -ar (saltar); 2ª conjugación: en -er (comer); 3ª conjugación: en -ir (vivir)."
  },
  {
    q: "¿Cuáles son las tres formas no personales del verbo (que no expresan persona, número, tiempo ni modo)?",
    options: [
      "Presente, pretérito y futuro",
      "Infinitivo, gerundio y participio",
      "Indicativo, subjuntivo e imperativo",
      "Singular, plural y dual"
    ],
    answer: 1,
    explanation: "Son el infinitivo (cantar), el gerundio (cantando) y el participio (cantado)."
  },
  {
    q: "¿Qué modo verbal empleamos para expresar deseos, dudas o posibilidades (ej. 'Ojalá llueva mañana')?",
    options: ["Modo indicativo", "Modo subjuntivo", "Modo imperativo", "Infinitivo"],
    answer: 1,
    explanation: "El indicativo expresa hechos reales; el subjuntivo, deseos o posibilidades; y el imperativo, órdenes o ruegos."
  },
  {
    q: "¿Qué diferencia a un verbo regular de un verbo irregular?",
    options: [
      "El verbo regular mantiene su raíz igual en todas sus formas y toma las desinencias del verbo modelo; el irregular cambia su raíz o sus desinencias (ej. tener → tengo, tuve)",
      "Los verbos regulares solo tienen presente",
      "Los verbos irregulares siempre terminan en -ir",
      "No existe diferencia"
    ],
    answer: 0,
    explanation: "Verbos como 'ser', 'ir', 'tener' o 'hacer' son irregulares porque alteran su raíz o terminaciones al conjugarse."
  },

  // --- BLOQUE 5: GRAMÁTICA II (ADVERBIOS, ENLACES Y LA ORACIÓN) ---
  {
    q: "¿Por qué decimos que los adverbios, preposiciones y conjunciones son palabras invariables?",
    options: [
      "Porque nunca cambian de forma (no tienen género ni número)",
      "Porque siempre llevan tilde",
      "Porque solo tienen una letra",
      "Porque van al principio de la oración"
    ],
    answer: 0,
    explanation: "Las palabras invariables no admiten morfemas de género, número, tiempo ni persona."
  },
  {
    q: "¿De qué clase es el adverbio 'ayer' en 'Ayer fuimos de excursión'?",
    options: ["Adverbio de lugar", "Adverbio de tiempo", "Adverbio de modo", "Adverbio de cantidad"],
    answer: 1,
    explanation: "'Ayer', 'hoy', 'mañana', 'pronto' y 'tarde' son adverbios de tiempo."
  },
  {
    q: "¿Cuál de estas palabras es un adverbio de lugar?",
    options: ["Despacio", "Cerca", "Bastante", "Quizás"],
    answer: 1,
    explanation: "'Aquí', 'ahí', 'allí', 'cerca', 'lejos', 'dentro' y 'fuera' son adverbios de lugar."
  },
  {
    q: "¿Cuál de las siguientes listas contiene únicamente preposiciones?",
    options: [
      "Y, e, ni, pero, aunque",
      "A, ante, bajo, con, contra, de, desde, en, entre, hacia, hasta, para, por, según, sin, sobre, tras",
      "Yo, tú, él, nosotros, vosotros",
      "Hoy, ayer, mañana, ahora"
    ],
    answer: 1,
    explanation: "Las preposiciones sirven para enlazar palabras haciendo que una complemente a la otra."
  },
  {
    q: "¿Qué diferencia a una oración de una frase (enunciado no oracional)?",
    options: [
      "La oración tiene al menos un verbo en forma personal; la frase no tiene verbo (ej. '¡Qué buen día!')",
      "La frase es más larga que la oración",
      "La oración nunca lleva punto final",
      "No hay diferencia"
    ],
    answer: 0,
    explanation: "Todo enunciado tiene sentido completo, pero solo los enunciados oracionales poseen un verbo conjugado."
  },
  {
    q: "¿Cuáles son los dos constituyentes principales de una oración?",
    options: ["Sustantivo y adjetivo", "Sujeto y predicado", "Prefijo y sufijo", "Verso y estrofa"],
    answer: 1,
    explanation: "El sujeto indica quién realiza o experimenta la acción, y el predicado expresa lo que se dice del sujeto."
  },
  {
    q: "En la oración 'Mis primos pequeños llegaron ayer de Sevilla', ¿cuál es el sujeto y cuál su núcleo?",
    options: [
      "Sujeto: 'llegaron ayer'; Núcleo: 'llegaron'",
      "Sujeto: 'Mis primos pequeños'; Núcleo: 'primos'",
      "Sujeto: 'Sevilla'; Núcleo: 'Sevilla'",
      "Es una oración sin sujeto"
    ],
    answer: 1,
    explanation: "El sujeto concuerda en número y persona con el verbo ('llegaron' - 3ª plural → 'Mis primos pequeños'). Su núcleo es el sustantivo 'primos'."
  },
  {
    q: "¿Cómo se llama el sujeto que NO aparece escrito en la oración pero se sobreentiende por la terminación del verbo (ej. 'Comimos paella el domingo' → Nosotros)?",
    options: ["Sujeto agente", "Sujeto omitido o elíptico", "Predicado nominal", "Sujeto compuesto"],
    answer: 1,
    explanation: "El sujeto omitido o elíptico se deduce gracias a las desinencias de persona y número del verbo."
  },
  {
    q: "¿Qué tipo de oración es '¿A qué hora empieza la función de teatro?' según la actitud del hablante?",
    options: ["Enunciativa afirmativa", "Interrogativa", "Exclamativa", "Exhortativa"],
    answer: 1,
    explanation: "Las oraciones interrogativas sirven para formular una pregunta y van entre signos de interrogación (¿?)."
  },
  {
    q: "¿Cómo se llaman las oraciones que expresan una orden, un consejo o una prohibición (ej. 'Cierra la puerta, por favor')?",
    options: ["Dubitativas", "Desiderativas", "Exhortativas o imperativas", "Enunciativas negativas"],
    answer: 2,
    explanation: "Las oraciones exhortativas buscan influir en el receptor para que haga o deje de hacer algo."
  },

  // --- BLOQUE 6: EDUCACIÓN LITERARIA ---
  {
    q: "¿Qué diferencia fundamental existe entre escribir en prosa y escribir en verso?",
    options: [
      "En prosa se ocupa todo el renglón de margen a margen; en verso el texto se divide en líneas cortas sujetas a ritmo, medida y rima",
      "En prosa solo se escriben poesías",
      "En verso no se usan signos de puntuación",
      "No existe diferencia"
    ],
    answer: 0,
    explanation: "La prosa es la forma natural de escribir cuentos o novelas; el verso es propio de la poesía."
  },
  {
    q: "¿Cómo se llama el conjunto de versos agrupados en un poema separados por un espacio en blanco?",
    options: ["Párrafo", "Estrofa", "Capítulo", "Acotación"],
    answer: 1,
    explanation: "Los versos se agrupan formando estrofas (como pareados, tercetos, cuartetos o redondillas)."
  },
  {
    q: "¿En qué consiste la sinalefa al medir un verso?",
    options: [
      "En sumar dos sílabas si el verso es largo",
      "En unir en una sola sílaba métrica la vocal final de una palabra y la vocal inicial de la siguiente",
      "En cambiar la rima del poema",
      "En repetir una palabra"
    ],
    answer: 1,
    explanation: "La sinalefa une vocales contiguas de palabras distintas (ej. 'la_a-le-grí-a'), reduciendo el cómputo silábico."
  },
  {
    q: "Al medir versos, ¿qué ocurre si la última palabra del verso es aguda?",
    options: [
      "Se resta una sílaba",
      "Se suma una sílaba más (+1)",
      "Se queda exactamente igual",
      "Se suman dos sílabas"
    ],
    answer: 1,
    explanation: "Si el verso acaba en palabra aguda se suma 1 sílaba; si acaba en llana se queda igual; si acaba en esdrújula se resta 1."
  },
  {
    q: "¿Qué diferencia hay entre la rima consonante y la rima asonante?",
    options: [
      "En la consonante coinciden vocales y consonantes desde la última vocal acentuada; en la asonante solo coinciden las vocales",
      "La rima consonante no lleva vocales",
      "La rima asonante solo se usa en teatro",
      "Son iguales"
    ],
    answer: 0,
    explanation: "Por ejemplo: 'canción / corazón' tienen rima consonante (-ón); 'casa / cama' tienen rima asonante (a-a)."
  },
  {
    q: "¿Cómo se llaman los versos que miden 8 sílabas o menos (arte menor) frente a los que miden 9 sílabas o más (arte mayor)?",
    options: [
      "Versos cortos y largos",
      "Versos de arte menor y versos de arte mayor",
      "Versos libres y sueltos",
      "Prosa y diálogo"
    ],
    answer: 1,
    explanation: "Los versos de hasta 8 sílabas son de arte menor (se indican con letra minúscula) y los de 9 o más, de arte mayor (mayúscula)."
  },
  {
    q: "¿Qué recurso literario aparece en 'Sus dientes son perlas blancas'?",
    options: ["Comparación o símil", "Metáfora", "Personificación", "Aliteración"],
    answer: 1,
    explanation: "La metáfora identifica directamente un término real (dientes) con uno imaginario (perlas) sin usar 'como'."
  },
  {
    q: "¿Qué recurso literario aparece en 'Sus ojos brillaban como dos luceros'?",
    options: ["Metáfora", "Comparación o símil", "Hipérbole", "Onomatopeya"],
    answer: 1,
    explanation: "La comparación o símil relaciona dos elementos mediante un enlace comparativo como 'como', 'parece' o 'cual'."
  },
  {
    q: "¿Qué recurso literario consiste en exagerar enormemente la realidad (ej. 'Érase un hombre a una nariz pegado' o 'Te llamé un millón de veces')?",
    options: ["Personificación", "Hipérbole", "Comparación", "Anáfora"],
    answer: 1,
    explanation: "La hipérbole es una exageración expresiva."
  },
  {
    q: "¿Qué recurso literario aparece en 'En el silencio solo se escuchaba un susurro de abejas que sonaba'?",
    options: ["Aliteración", "Hipérbole", "Metáfora", "Antítesis"],
    answer: 0,
    explanation: "La aliteración repite un mismo sonido (en este caso la 's') para producir un efecto sonoro."
  },
  {
    q: "¿Cuáles son los tres grandes géneros literarios?",
    options: [
      "Cuento, fábula y leyenda",
      "Narrativa, lírica (poesía) y teatro (dramática)",
      "Prosa, verso y rima",
      "Novela, periódico y diccionario"
    ],
    answer: 1,
    explanation: "La narrativa cuenta historias, la lírica expresa sentimientos y el teatro está escrito para ser representado."
  },
  {
    q: "En una obra de teatro, ¿cómo se llaman las indicaciones del autor (normalmente entre paréntesis y en cursiva) sobre los movimientos, gestos o decorado?",
    options: ["Estrofas", "Acotaciones", "Versos", "Titulares"],
    answer: 1,
    explanation: "Las acotaciones orientan a los actores y al director sobre cómo debe representarse la escena."
  },

  // --- BLOQUE 7: REPASO INTEGRAL SANTILLANA 5º PRIMARIA (PREGUNTAS 95 - 210) ---
  {
    q: "¿Qué es un código en el proceso de comunicación?",
    options: [
      "El lugar donde ocurre la conversación",
      "El conjunto de signos y reglas que comparten el emisor y el receptor para entenderse (como el idioma español)",
      "El ruido de la calle",
      "El papel de una carta"
    ],
    answer: 1,
    explanation: "Emisor y receptor deben conocer el mismo código (lengua, señales, lengua de signos...) para comunicarse."
  },
  {
    q: "¿Qué es un dialecto de una lengua?",
    options: [
      "Un idioma totalmente distinto",
      "La variedad geográfica con la que se habla una misma lengua en una zona concreta (como el andaluz o el canario respecto al español)",
      "Una lengua muerta",
      "Un diccionario antiguo"
    ],
    answer: 1,
    explanation: "Los dialectos son variedades regionales de una lengua común con rasgos propios de pronunciación y vocabulario."
  },
  {
    q: "¿Qué es una leyenda?",
    options: [
      "Una noticia científica actual",
      "Un relato tradicional que mezcla hechos reales o históricos con elementos fantásticos o maravillosos",
      "Una lista de la compra",
      "Un poema sin rima"
    ],
    answer: 1,
    explanation: "Las leyendas suelen explicar el origen de un lugar o costumbre mezclando realidad y fantasía."
  },
  {
    q: "¿Qué diferencia a una fábula de otros cuentos tradicionales?",
    options: [
      "Sus protagonistas suelen ser animales que hablan y siempre termina con una enseñanza moral llamada moraleja",
      "Siempre ocurre en el espacio exterior",
      "No tiene personajes",
      "Está escrita en otro idioma"
    ],
    answer: 0,
    explanation: "Fabulistas famosos como Esopo, Samaniego o Iriarte escribieron fábulas con moraleja."
  },
  {
    q: "¿Qué es un diario personal?",
    options: [
      "Un periódico que se vende en el quiosco",
      "Un cuaderno en el que una persona escribe en primera persona sus experiencias, pensamientos y emociones día a día",
      "Una enciclopedia",
      "Un libro de instrucciones"
    ],
    answer: 1,
    explanation: "En el diario se narra en 1ª persona indicando la fecha de cada anotación."
  },
  {
    q: "¿Cuál es el sinónimo más adecuado de 'efímero'?",
    options: ["Eterno", "Pasajero / Breve", "Gigante", "Antiguo"],
    answer: 1,
    explanation: "'Efímero' significa que dura muy poco tiempo, es pasajero."
  },
  {
    q: "¿Cuál es el antónimo de 'valiente'?",
    options: ["Atrevido", "Cobarde", "Audaz", "Fuerte"],
    answer: 1,
    explanation: "'Cobarde' es lo opuesto a 'valiente'."
  },
  {
    q: "¿Qué palabra es homófona de 'bello' (hermoso)?",
    options: ["Feo", "Vello (pelo corto y suave)", "Bueno", "Viejo"],
    answer: 1,
    explanation: "'Bello' (con b) significa hermoso, mientras que 'vello' (con v) es el pelo suave del cuerpo."
  },
  {
    q: "¿Qué significa el prefijo 'tele-' en palabras como 'teléfono', 'televisión' o 'telescopio'?",
    options: ["Pequeño", "A distancia / Lejos", "Debajo", "Contra"],
    answer: 1,
    explanation: "El prefijo griego 'tele-' significa 'lejos' o 'a distancia'."
  },
  {
    q: "¿Qué significa el prefijo 'sub-' en 'submarino' o 'subterráneo'?",
    options: ["Encima de", "Debajo de", "Antes de", "Alrededor de"],
    answer: 1,
    explanation: "'Sub-' indica inferioridad o posición debajo de algo."
  },
  {
    q: "¿Qué sufijo indica profesión u oficio en palabras como 'carpintero', 'zapatero' y 'panadero'?",
    options: ["-ería", "-ero", "-oso", "-ante"],
    answer: 1,
    explanation: "El sufijo '-ero / -era' suele indicar oficio o profesión."
  },
  {
    q: "¿Cuál de estas palabras NO pertenece al campo semántico de los medios de transporte?",
    options: ["Tren", "Bicicleta", "Semáforo", "Avión"],
    answer: 2,
    explanation: "El semáforo es una señal de tráfico, no un vehículo o medio de transporte."
  },
  {
    q: "¿Qué son los gentilicios (como 'extremeño', 'madrileño', 'andaluz' o 'gallego')?",
    options: [
      "Palabras que indican el lugar de nacimiento o procedencia de una persona",
      "Nombres de ríos",
      "Adjetivos de color",
      "Verbos en pasado"
    ],
    answer: 0,
    explanation: "Los gentilicios expresan el origen geográfico de personas o cosas."
  },
  {
    q: "¿Cómo se escriben correctamente los gentilicios en español: con mayúscula o con minúscula inicial?",
    options: [
      "Siempre con mayúscula",
      "Con minúscula inicial (ej. 'los alumnos españoles')",
      "Todo en mayúsculas",
      "Entre comillas"
    ],
    answer: 1,
    explanation: "A diferencia del inglés, en español los gentilicios, días de la semana y meses se escriben con minúscula."
  },
  {
    q: "¿Cuál es la palabra intrusa según su acentuación: 'camión', 'pared', 'árbol', 'reloj'?",
    options: ["Camión", "Pared", "Árbol (es llana; las otras tres son agudas)", "Reloj"],
    answer: 2,
    explanation: "'Camión', 'pared' y 'reloj' tienen tónica la última sílaba (agudas); 'árbol' tiene tónica la penúltima (llana)."
  },
  {
    q: "Separa en sílabas correctamente la palabra 'murciélago':",
    options: ["mur-ci-é-la-go", "mur-cié-la-go (4 sílabas, contiene un diptongo 'ié')", "mur-cié-lag-o", "mu-rcié-la-go"],
    answer: 1,
    explanation: "En 'mur-cié-la-go', 'ié' forma un diptongo en la misma sílaba y lleva tilde por ser palabra esdrújula."
  },
  {
    q: "¿Por qué la palabra 'examen' no lleva tilde, pero su plural 'exámenes' sí lleva tilde?",
    options: [
      "Porque 'examen' es llana terminada en -n (no lleva tilde) y 'exámenes' pasa a ser esdrújula (siempre lleva tilde)",
      "Porque los plurales siempre llevan tilde",
      "Porque empieza por vocal",
      "Es una falta de ortografía"
    ],
    answer: 0,
    explanation: "Al añadir '-es', la palabra gana una sílaba y la tónica queda en antepenúltimo lugar (esdrújula)."
  },
  {
    q: "¿Cuál de estas palabras lleva tilde diacrítica porque es un adverbio de cantidad (y no una conjunción equivalente a 'pero')?",
    options: ["Mas", "Más", "Sé", "Dé"],
    answer: 1,
    explanation: "'Más' con tilde indica cantidad ('Quiero más agua'); 'mas' sin tilde equivale a 'pero'."
  },
  {
    q: "¿Cuál de estas palabras lleva tilde diacrítica cuando es forma del verbo 'saber' o del verbo 'ser'?",
    options: ["Se", "Sé", "Si", "Mi"],
    answer: 1,
    explanation: "'Sé' lleva tilde en 'Yo lo sé' (saber) y 'Sé valiente' (ser); 'se' sin tilde es pronombre."
  },
  {
    q: "¿Qué regla ortográfica explica que se escriban con 'b' palabras como 'burla', 'burbuja' y 'buscar'?",
    options: [
      "Se escriben con 'b' las palabras que empiezan por bu-, bur- y bus-",
      "Todas las palabras con 'u' llevan 'b'",
      "Porque son verbos",
      "Porque terminan en vocal"
    ],
    answer: 0,
    explanation: "Las palabras que comienzan por las sílabas bu-, bur- y bus- se escriben con 'b'."
  },
  {
    q: "¿Con qué letra se escriben las formas de los verbos 'ir', 'estar', 'andar' y 'tener' en pasado como 'estuve', 'anduvo' y 'tuvieron'?",
    options: ["Con 'b'", "Con 'v'", "Con 'h'", "Con 'll'"],
    answer: 1,
    explanation: "El pretérito perfecto simple de estar, andar y tener se escribe con 'v' (excepto iba, ibas... del verbo ir que va con 'b')."
  },
  {
    q: "¿Cómo se escriben las palabras terminadas en -aje y -eje (como 'equipaje', 'garaje', 'mensaje' y 'hereje')?",
    options: ["Con 'g'", "Con 'j'", "Con 'y'", "Con 'll'"],
    answer: 1,
    explanation: "Todas las palabras terminadas en -aje y -eje se escriben con 'j'."
  },
  {
    q: "¿Por qué se escribe con 'y' la palabra 'reyes' si su singular 'rey' acaba en -y?",
    options: [
      "Porque los plurales de palabras terminadas en -y se escriben con 'y' (rey → reyes, ley → leyes, buey → bueyes)",
      "Porque todas las palabras con 'e' llevan 'y'",
      "Porque es un verbo",
      "Porque es una palabra extranjera"
    ],
    answer: 0,
    explanation: "El plural de los sustantivos terminados en -y conserva esa letra."
  },
  {
    q: "¿Qué signo de puntuación se emplea para encerrar aclaraciones o datos complementarios dentro de una oración (como fechas o lugares)?",
    options: ["Los signos de exclamación", "Los paréntesis ( )", "El punto y aparte", "La interrogación"],
    answer: 1,
    explanation: "Los paréntesis ( ) intercalan información adicional o aclaratoria en un texto."
  },
  {
    q: "¿Para qué se utilizan las comillas (« » o “ ”) en un texto?",
    options: [
      "Para separar dos párrafos",
      "Para reproducir citas textuales, destacar títulos o indicar que una palabra se usa con sentido irónico",
      "Para indicar una pregunta",
      "Para terminar una carta"
    ],
    answer: 1,
    explanation: "Las comillas enmarcan citas exactas o palabras especiales."
  },
  {
    q: "¿Qué género tienen los sustantivos 'el mar / la mar' o 'el calor / la calor'?",
    options: [
      "Género epiceno",
      "Género ambiguo (admiten tanto el artículo masculino como el femenino)",
      "Solo femenino",
      "Solo plural"
    ],
    answer: 1,
    explanation: "Los sustantivos ambiguos en cuanto al género pueden usarse en masculino o femenino sin cambiar de significado."
  },
  {
    q: "¿Cómo se llaman los sustantivos que tienen una única forma para masculino y femenino y diferencian el sexo añadiendo 'macho' o 'hembra' (ej. 'la jirafa macho / la jirafa hembra')?",
    options: ["Sustantivos colectivos", "Sustantivos epicenos", "Sustantivos compuestos", "Sustantivos abstractos"],
    answer: 1,
    explanation: "Nombres de animales como 'ballena', 'águila' o 'hormiga' son sustantivos epicenos."
  },
  {
    q: "¿Cuáles son los artículos contractos del español?",
    options: [
      "El y la",
      "Al (a + el) y del (de + el)",
      "Un y una",
      "Los y las"
    ],
    answer: 1,
    explanation: "Cuando las preposiciones 'a' o 'de' preceden al artículo 'el', se contraen en 'al' y 'del'."
  },
  {
    q: "En 'Mi mochila pesa menos que la tuya', ¿qué clase de palabra es 'Mi'?",
    options: ["Pronombre personal", "Determinante posesivo", "Adverbio", "Preposición"],
    answer: 1,
    explanation: "'Mi' acompaña al sustantivo 'mochila' indicando posesión: es un determinante posesivo."
  },
  {
    q: "¿Qué tiempo verbal expresa una acción que ya ha terminado en el pasado (ej. 'Ayer ganamos el partido')?",
    options: [
      "Presente",
      "Pretérito perfecto simple",
      "Futuro imperfecto",
      "Condicional"
    ],
    answer: 1,
    explanation: "El pretérito perfecto simple (canté, comí, ganamos) expresa acciones pasadas ya concluidas."
  },
  {
    q: "¿Qué tiempo compuesto se forma con el presente del verbo 'haber' + el participio del verbo principal (ej. 'he comido', 'has estudiado')?",
    options: [
      "Pretérito perfecto compuesto",
      "Pretérito pluscuamperfecto",
      "Futuro perfecto",
      "Condicional compuesto"
    ],
    answer: 0,
    explanation: "Los tiempos compuestos se construyen siempre con el verbo auxiliar 'haber' más un participio."
  },
  {
    q: "¿Cuál es el participio irregular de los verbos 'escribir', 'romper' y 'volver'?",
    options: [
      "Escribido, rompido y volvido",
      "Escrito, roto y vuelto",
      "Escribiendo, rompiendo y volviendo",
      "Escribir, romper y volver"
    ],
    answer: 1,
    explanation: "Algunos verbos tienen participios irregulares terminados en -to, -so o -cho (escrito, roto, vuelto, impreso, dicho, hecho)."
  },
  {
    q: "¿Cuál es el predicado en la oración 'El viento frío agitaba las hojas de los árboles'?",
    options: [
      "El viento frío",
      "agitaba las hojas de los árboles",
      "las hojas de los árboles",
      "El viento"
    ],
    answer: 1,
    explanation: "El sujeto es 'El viento frío' y todo lo demás (que contiene el verbo 'agitaba') es el predicado."
  },
  {
    q: "¿Qué clase de palabra es siempre el núcleo del predicado verbal?",
    options: ["Un sustantivo", "Un adjetivo", "Un verbo conjugado", "Un determinante"],
    answer: 2,
    explanation: "El verbo en forma personal es siempre el núcleo del predicado."
  },
  {
    q: "¿Qué tipo de predicado tienen las oraciones con los verbos copulativos 'ser', 'estar' o 'parecer' (ej. 'La película fue divertidísima')?",
    options: ["Predicado verbal", "Predicado nominal (cuyo complemento principal es el atributo)", "Sujeto paciente", "Oración impersonal"],
    answer: 1,
    explanation: "Los verbos ser, estar y parecer forman predicados nominales acompañados de un atributo."
  },
  {
    q: "¿Qué clase de oración es 'Quizás vayamos al museo el viernes'?",
    options: ["Dubitativa", "Exclamativa", "Imperativa", "Enunciativa negativa"],
    answer: 0,
    explanation: "Las oraciones dubitativas expresan duda o posibilidad mediante palabras como 'quizás', 'tal vez' o 'acaso'."
  },
  {
    q: "¿Cómo se llama la estrofa formada por dos versos que riman entre sí?",
    options: ["Terceto", "Pareado", "Cuarteto", "Redondilla"],
    answer: 1,
    explanation: "El pareado es una estrofa de dos versos que riman (aa o AA)."
  },
  {
    q: "¿Cómo se llama la estrofa de cuatro versos de arte menor (octosílabos) con rima consonante abba?",
    options: ["Cuarteto", "Redondilla", "Serventesio", "Pareado"],
    answer: 1,
    explanation: "La redondilla tiene 4 versos de arte menor con rima abba; si son de arte mayor (ABBA), se llama cuarteto."
  },
  {
    q: "¿Qué figura literaria consiste en repetir una o varias palabras al principio de varios versos seguidos?",
    options: ["Anáfora", "Metáfora", "Hipérbole", "Símil"],
    answer: 0,
    explanation: "La anáfora da ritmo al poema repitiendo palabras al inicio de cada verso (ej. 'Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada...')."
  },
  {
    q: "¿Qué son los romances en la literatura española?",
    options: [
      "Poemas populares compuestos por una serie indefinida de versos octosílabos en los que riman en asonante los versos pares y quedan sueltos los impares",
      "Obras de teatro cómicas",
      "Novelas de ciencia ficción",
      "Sonetos de catorce versos"
    ],
    answer: 0,
    explanation: "Los romances son poemas narrativos tradicionales muy importantes en la literatura española."
  },
  {
    q: "¿Quién escribió la obra universal 'Don Quijote de la Mancha'?",
    options: ["Federico García Lorca", "Miguel de Cervantes", "Lope de Vega", "Gustavo Adolfo Bécquer"],
    answer: 1,
    explanation: "Miguel de Cervantes Saavedra publicó la primera parte del Quijote en 1605 y la segunda en 1615."
  },
  {
    q: "¿Quién escribió 'Platero y yo', famosa obra poética en prosa sobre un burro plateado en Moguer?",
    options: ["Antonio Machado", "Juan Ramón Jiménez", "Rafael Alberti", "Gloria Fuertes"],
    answer: 1,
    explanation: "Juan Ramón Jiménez, premio Nobel de Literatura, es el autor de 'Platero y yo'."
  },
  {
    q: "¡Has completado el bloque de Lengua Castellana y Literatura de 5º! ¿Qué palabra es el núcleo de 'Los valientes exploradores'? ",
    options: ["Los", "valientes", "exploradores", "Ninguna"],
    answer: 2,
    explanation: "'Exploradores' es el sustantivo que funciona como núcleo de ese grupo nominal."
  }
];