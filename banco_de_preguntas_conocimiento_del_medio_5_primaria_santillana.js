/* ==========================================================================
   BANCO DE PREGUNTAS DE CONOCIMIENTO DEL MEDIO - 5º DE PRIMARIA (210 PREGUNTAS)
   Ajustado al currículo LOMLOE de la editorial Santillana (Construyendo Mundos):
   - Bloque 1: Los seres vivos, la célula y los cinco reinos
   - Bloque 2: Las plantas y los ecosistemas
   - Bloque 3: El cuerpo humano (relación, nutrición y salud)
   - Bloque 4: La Tierra, el relieve de España y Europa, hidrografía y clima
   - Bloque 5: Población, sectores económicos y organización de España
   - Bloque 6: La Prehistoria y la Edad Antigua (Hispania)
   - Bloque 7: La Edad Media en la Península Ibérica
   - Bloque 8: Materia, energía, máquinas y cultura digital
   ========================================================================== */

window.QUESTION_BANK = window.QUESTION_BANK || {};

window.QUESTION_BANK.conocimiento = [
  // --- BLOQUE 1: LOS SERES VIVOS, LA CÉLULA Y LOS REINOS ---
  {
    q: "¿Cuáles son las tres funciones vitales que realizan todos los seres vivos?",
    options: ["Nacer, crecer y morir", "Nutrición, relación y reproducción", "Respirar, comer y dormir", "Moverse, sentir y alimentarse"],
    answer: 1,
    explanation: "Todos los seres vivos realizan las tres funciones vitales: nutrición, relación y reproducción."
  },
  {
    q: "¿Cuál es la unidad más pequeña que forma todos los seres vivos y que realiza las funciones vitales?",
    options: ["El tejido", "El órgano", "La célula", "El aparato"],
    answer: 2,
    explanation: "La célula es la unidad básica y funcional de todos los seres vivos."
  },
  {
    q: "¿Qué instrumento óptico necesitamos para observar las células?",
    options: ["El telescopio", "El microscopio", "Los prismáticos", "El periscopio"],
    answer: 1,
    explanation: "Las células son microscópicas, por lo que necesitamos un microscopio para verlas."
  },
  {
    q: "¿Qué parte de la célula controla su funcionamiento y contiene el material genético?",
    options: ["La membrana celular", "El citoplasma", "El núcleo", "La pared celular"],
    answer: 2,
    explanation: "El núcleo dirige las actividades de la célula y guarda la información hereditaria."
  },
  {
    q: "¿Qué sustancia líquida ocupa el interior de la célula entre la membrana y el núcleo?",
    options: ["El citoplasma", "La clorofila", "La savia", "El plasma sanguíneo"],
    answer: 0,
    explanation: "El citoplasma es el líquido donde flotan los orgánulos celulares."
  },
  {
    q: "¿Qué estructura tienen las células vegetales que NO tienen las células animales?",
    options: ["Núcleo y membrana", "Pared celular rígida y cloroplastos", "Citoplasma y orgánulos", "Mitocondrias y núcleo"],
    answer: 1,
    explanation: "Las células vegetales poseen una pared celular rígida que les da forma y cloroplastos con clorofila para hacer la fotosíntesis."
  },
  {
    q: "¿Cómo se llaman los seres vivos formados por una sola célula?",
    options: ["Pluricelulares", "Unicelulares", "Vertebrados", "Autótrofos"],
    answer: 1,
    explanation: "Los organismos unicelulares, como las bacterias o las amebas, están formados por una única célula."
  },
  {
    q: "En un ser vivo pluricelular, ¿qué se forma al agruparse varias células del mismo tipo que realizan una función común?",
    options: ["Un órgano", "Un tejido", "Un sistema", "Un organismo"],
    answer: 1,
    explanation: "La agrupación de células especializadas forma un tejido (como el tejido muscular o el tejido óseo)."
  },
  {
    q: "¿Cuál es el orden correcto de organización interna de un ser vivo pluricelular de menor a mayor complejidad?",
    options: [
      "Órgano → Célula → Tejido → Aparato → Organismo",
      "Célula → Tejido → Órgano → Aparato o sistema → Organismo",
      "Tejido → Célula → Aparato → Órgano → Organismo",
      "Célula → Órgano → Tejido → Organismo → Sistema"
    ],
    answer: 1,
    explanation: "Los niveles de organización van de lo más simple a lo más complejo: célula, tejido, órgano, aparato/sistema y organismo."
  },
  {
    q: "¿En cuántos grandes reinos se clasifican los seres vivos en la naturaleza?",
    options: ["Tres reinos", "Cuatro reinos", "Cinco reinos", "Seis reinos"],
    answer: 2,
    explanation: "Se clasifican en cinco reinos: animales, plantas, hongos, protoctistas y bacterias (moneras)."
  },
  {
    q: "¿A qué reino pertenecen los seres vivos pluricelulares que fabrican su propio alimento mediante la fotosíntesis?",
    options: ["Reino de los hongos", "Reino de las plantas", "Reino de los protoctistas", "Reino animal"],
    answer: 1,
    explanation: "Las plantas son pluricelulares, no se desplazan y tienen nutrición autótrofa (fotosíntesis)."
  },
  {
    q: "¿Por qué los hongos (como las setas o los mohos) NO pertenecen al reino de las plantas?",
    options: ["Porque son unicelulares", "Porque no fabrican su propio alimento (son heterótrofos)", "Porque se desplazan corriendo", "Porque no tienen células"],
    answer: 1,
    explanation: "Los hongos no tienen clorofila ni hacen la fotosíntesis; se alimentan de restos de otros seres vivos."
  },
  {
    q: "¿Qué tipo de hongo unicelular se utiliza para elaborar pan o yogur?",
    options: ["El moho", "La seta", "La levadura", "El liquen"],
    answer: 2,
    explanation: "Las levaduras son hongos unicelulares microscópicos muy útiles en alimentación."
  },
  {
    q: "¿Qué dos grupos principales de seres vivos forman el reino de los protoctistas?",
    options: ["Bacterias y virus", "Protozoos y algas", "Musgos y helechos", "Setas y mohos"],
    answer: 1,
    explanation: "El reino de los protoctistas incluye a los protozoos (unicelulares heterótrofos) y a las algas (unicelulares o pluricelulares autótrofas)."
  },
  {
    q: "¿Cuál es la principal característica de las bacterias?",
    options: ["Son los seres vivos más grandes", "Son unicelulares y sus células no tienen núcleo definido", "Tienen raíces y hojas", "Solo viven en los volcanes"],
    answer: 1,
    explanation: "Las bacterias son los organismos más sencillos y abundantes; son unicelulares procariotas (sin núcleo)."
  },
  {
    q: "¿Qué grupo de animales vertebrados tiene el cuerpo cubierto de escamas, respira por branquias y tiene aletas?",
    options: ["Anfibios", "Reptiles", "Peces", "Mamíferos"],
    answer: 2,
    explanation: "Los peces son vertebrados acuáticos con escamas, aletas y respiración branquial."
  },
  {
    q: "¿Qué grupo de vertebrados sufre metamorfosis desde que nace en el agua hasta que es adulto?",
    options: ["Aves", "Anfibios", "Reptiles", "Mamíferos"],
    answer: 1,
    explanation: "Los anfibios (como ranas y salamandras) nacen como renacuajos acuáticos con branquias y cambian mediante metamorfosis."
  },
  {
    q: "¿A qué grupo de invertebrados pertenecen las arañas, los escorpiones, los cangrejos y las mariposas?",
    options: ["Moluscos", "Equinodermos", "Artrópodos", "Anélidos"],
    answer: 2,
    explanation: "Los artrópodos tienen esqueleto externo y patas articuladas; incluyen insectos, arácnidos, crustáceos y miriápodos."
  },
  {
    q: "¿Cuántas patas tienen los insectos como las hormigas, las abejas o los escarabajos?",
    options: ["Cuatro patas", "Seis patas", "Ocho patas", "Diez patas"],
    answer: 1,
    explanation: "Todos los insectos tienen el cuerpo dividido en cabeza, tórax y abdomen, y poseen 6 patas."
  },
  {
    q: "¿A qué grupo de invertebrados pertenecen el pulpo, el mejillón y el caracol?",
    options: ["Poríferos", "Cnidarios", "Moluscos", "Equinodermos"],
    answer: 2,
    explanation: "Los moluscos tienen el cuerpo blando y muchos lo protegen con una o dos conchas."
  },

  // --- BLOQUE 2: LAS PLANTAS Y LOS ECOSISTEMAS ---
  {
    q: "¿Cómo se llama el proceso por el cual las plantas fabrican su propio alimento usando la luz del Sol?",
    options: ["Respiración", "Fotosíntesis", "Polinización", "Germinación"],
    answer: 1,
    explanation: "Mediante la fotosíntesis, las plantas transforman agua, sales minerales y dióxido de carbono en alimento gracias a la luz solar."
  },
  {
    q: "¿Qué sustancia absorben las raíces de las plantas del suelo?",
    options: ["Savia elaborada", "Agua y sales minerales (savia bruta)", "Dióxido de carbono", "Clorofila"],
    answer: 1,
    explanation: "Los pelos absorbentes de la raíz absorben agua y sales minerales, formando la savia bruta."
  },
  {
    q: "¿Por qué conductos sube la savia bruta desde la raíz hasta las hojas?",
    options: ["Por los vasos liberianos", "Por los vasos leñosos", "Por los estomas", "Por los pistilos"],
    answer: 1,
    explanation: "La savia bruta asciende por el tallo a través de los vasos leñosos hasta llegar a las hojas."
  },
  {
    q: "¿Qué gas expulsan las plantas a la atmósfera como resultado de la fotosíntesis?",
    options: ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Vapor de agua"],
    answer: 1,
    explanation: "Durante la fotosíntesis, la planta toma dióxido de carbono y libera oxígeno, indispensable para los seres vivos."
  },
  {
    q: "¿Cuándo respiran las plantas?",
    options: ["Solo por el día", "Solo por la noche", "Durante todo el día y toda la noche", "Únicamente en primavera"],
    answer: 2,
    explanation: "Las plantas respiran continuamente (día y noche), tomando oxígeno y expulsando dióxido de carbono."
  },
  {
    q: "¿Cuál es la parte masculina de una flor donde se produce el polen?",
    options: ["El pistilo", "Los estambres", "Los sépalos", "Los pétalos"],
    answer: 1,
    explanation: "Los estambres son los órganos masculinos de la flor y en sus anteras se forman los granos de polen."
  },
  {
    q: "¿Cómo se llama el órgano reproductor femenino de la flor que contiene los óvulos?",
    options: ["El cáliz", "La corola", "El pistilo", "El estambre"],
    answer: 2,
    explanation: "El pistilo tiene forma de botella y en su interior (ovario) se encuentran los óvulos."
  },
  {
    q: "¿En qué se transforma el ovario del pistilo tras la fecundación del óvulo?",
    options: ["En una hoja", "En el fruto (y el óvulo en la semilla)", "En una raíz", "En un pétalo"],
    answer: 1,
    explanation: "Tras la fecundación, el óvulo se convierte en semilla y el ovario madura formando el fruto."
  },
  {
    q: "¿Qué plantas sin flores ni semillas se reproducen mediante esporas?",
    options: ["Pinos y abetos", "Musgos y helechos", "Rosales y margaritas", "Encinas y robles"],
    answer: 1,
    explanation: "Los musgos y los helechos son plantas sin flores que se reproducen por medio de esporas."
  },
  {
    q: "¿Cómo se llaman las plantas con semillas que NO tienen frutos verdaderos, como los pinos y cipreses?",
    options: ["Angiospermas", "Gimnospermas", "Briofitas", "Pteridofitas"],
    answer: 1,
    explanation: "Las gimnospermas tienen flores sencillas y sus semillas se forman en piñas, sin fruto carnoso."
  },
  {
    q: "¿Qué dos componentes principales forman un ecosistema?",
    options: ["Animales y plantas", "El biotopo (medio físico) y la biocenosis (seres vivos)", "El agua y el aire", "Productores y descomponedores"],
    answer: 1,
    explanation: "Un ecosistema está formado por el medio físico (biotopo), los seres vivos que lo habitan (biocenosis) y las relaciones entre ellos."
  },
  {
    q: "¿Qué papel ocupan las plantas y las algas en una cadena alimentaria?",
    options: ["Consumidores primarios", "Productores", "Consumidores secundarios", "Descomponedores"],
    answer: 1,
    explanation: "Son productores porque fabrican su propia materia orgánica a partir de sustancias inorgánicas y luz solar."
  },
  {
    q: "¿Qué tipo de seres vivos son los consumidores primarios en un ecosistema?",
    options: ["Los animales carnívoros", "Los animales herbívoros", "Los hongos y bacterias", "Las plantas con flores"],
    answer: 1,
    explanation: "Los consumidores primarios son los animales herbívoros, ya que se alimentan directamente de los productores (plantas)."
  },
  {
    q: "¿Qué función realizan los descomponedores (hongos y bacterias) en el ecosistema?",
    options: ["Cazan a otros animales", "Transforman los restos de seres vivos en sales minerales que vuelven al suelo", "Producen oxígeno", "Polinizan las flores"],
    answer: 1,
    explanation: "Los descomponedores reciclan la materia orgánica muerta devolviendo nutrientes minerales al suelo para las plantas."
  },
  {
    q: "¿Cómo se llama la relación en la que dos especies diferentes se benefician mutuamente (como la abeja y la flor)?",
    options: ["Parasitismo", "Mutualismo", "Depredación", "Competencia"],
    answer: 1,
    explanation: "En el mutualismo ambas especies salen ganando: la abeja obtiene néctar y la flor es polinizada."
  },
  {
    q: "¿Qué relación se da cuando un ser vivo (como una pulga o garrapata) vive a costa de otro perjudicándolo?",
    options: ["Mutualismo", "Comensalismo", "Parasitismo", "Cooperación"],
    answer: 2,
    explanation: "En el parasitismo, el parásito se beneficia y el huésped resulta perjudicado."
  },
  {
    q: "¿Cuál es el ecosistema terrestre típico del clima mediterráneo español, con encinas, alcornoques y jaras?",
    options: ["La tundra", "El bosque mediterráneo y la dehesa", "La selva tropical", "La taiga"],
    answer: 1,
    explanation: "El bosque mediterráneo (y su aprovechamiento tradicional, la dehesa) es característico de gran parte de España."
  },
  {
    q: "¿Qué nombre reciben los ecosistemas acuáticos de agua dulce donde el agua está estancada o en calma?",
    options: ["Ríos y torrentes", "Lagos, lagunas y humedales", "Mares y océanos", "Arrecifes de coral"],
    answer: 1,
    explanation: "Los lagos, lagunas y marismas o humedales son ecosistemas de aguas quietas o poco corrientes."
  },
  {
    q: "¿Cuál de estas acciones humanas ayuda a proteger los ecosistemas y la biodiversidad?",
    options: ["La deforestación", "La creación de Parques Nacionales y la reforestación", "La sobrepesca", "El vertido de plásticos"],
    answer: 1,
    explanation: "Los espacios protegidos como los Parques Nacionales y la reforestación conservan la fauna y la flora."
  },
  {
    q: "¿Qué es el desarrollo sostenible?",
    options: ["Consumir todos los recursos naturales lo más rápido posible", "Satisfacer nuestras necesidades actuales sin comprometer los recursos de las generaciones futuras", "Construir más fábricas sin control", "Talar todos los bosques para hacer ciudades"],
    answer: 1,
    explanation: "El desarrollo sostenible busca el equilibrio entre progreso económico, bienestar social y cuidado del medio ambiente."
  },

  // --- BLOQUE 3: EL CUERPO HUMANO Y LA SALUD ---
  {
    q: "¿Qué tres elementos intervienen en la función de relación del cuerpo humano?",
    options: [
      "Estómago, pulmones y corazón",
      "Los órganos de los sentidos, el sistema nervioso y el aparato locomotor",
      "Riñones, hígado y piel",
      "Arterias, venas y capilares"
    ],
    answer: 1,
    explanation: "Captamos estímulos con los sentidos, el sistema nervioso los interpreta y elabora una respuesta que ejecuta el aparato locomotor."
  },
  {
    q: "¿Cómo se llaman las células especializadas que forman el sistema nervioso?",
    options: ["Glóbulos rojos", "Neuronas", "Plaquetas", "Osteocitos"],
    answer: 1,
    explanation: "Las neuronas transmiten información mediante impulsos nerviosos por todo el cuerpo."
  },
  {
    q: "¿Qué dos partes principales forman el sistema nervioso central?",
    options: ["Los nervios sensitivos y motores", "El encéfalo y la médula espinal", "El cerebro y los músculos", "El cráneo y las costillas"],
    answer: 1,
    explanation: "El sistema nervioso central está formado por el encéfalo (protegido por el cráneo) y la médula espinal (protegida por la columna vertebral)."
  },
  {
    q: "¿Qué parte del encéfalo controla el equilibrio y la coordinación de los movimientos?",
    options: ["El cerebro", "El cerebelo", "El bulbo raquídeo", "La médula espinal"],
    answer: 1,
    explanation: "El cerebelo coordina los movimientos finos y mantiene el equilibrio corporal."
  },
  {
    q: "¿Qué parte del encéfalo regula funciones involuntarias vitales como el latido del corazón y la respiración?",
    options: ["El cerebro", "El bulbo raquídeo", "El cerebelo", "La retina"],
    answer: 1,
    explanation: "El bulbo raquídeo conecta el encéfalo con la médula y controla funciones automáticas esenciales."
  },
  {
    q: "¿Cuál es el órgano receptor del sentido de la vista donde se forman las imágenes?",
    options: ["La córnea", "El iris", "La retina", "El cristalino"],
    answer: 2,
    explanation: "La retina está en el fondo del ojo, capta la luz y envía la información al cerebro por el nervio óptico."
  },
  {
    q: "¿En qué parte del oído se encuentra el caracol (cóclea), encargado de transformar las vibraciones en impulsos nerviosos?",
    options: ["Oído externo", "Oído medio", "Oído interno", "Pabellón auditivo"],
    answer: 2,
    explanation: "El caracol está en el oído interno y envía la señal auditiva a través del nervio auditivo."
  },
  {
    q: "¿Cómo se llaman los cordones resistentes que unen los músculos a los huesos?",
    options: ["Ligamentos", "Tendones", "Cartílagos", "Articulaciones"],
    answer: 1,
    explanation: "Los tendones unen los músculos a los huesos para que al contraerse tiren de ellos y produzcan movimiento."
  },
  {
    q: "¿Cómo se llaman las bandas elásticas que mantienen unidos los huesos en una articulación?",
    options: ["Tendones", "Ligamentos", "Músculos", "Nervios"],
    answer: 1,
    explanation: "Los ligamentos unen hueso con hueso en las articulaciones móviles (como la rodilla o el tobillo)."
  },
  {
    q: "¿Cuál es el hueso más largo del cuerpo humano, situado en el muslo?",
    options: ["El húmero", "La tibia", "El fémur", "El radio"],
    answer: 2,
    explanation: "El fémur está en el muslo y es el hueso más largo y resistente de nuestro esqueleto."
  },
  {
    q: "¿Qué cuatro aparatos intervienen en la función de nutrición?",
    options: [
      "Digestivo, respiratorio, circulatorio y excretor",
      "Nervioso, locomotor, digestivo y reproductor",
      "Respiratorio, óseo, muscular y circulatorio",
      "Excretor, endocrino, nervioso y digestivo"
    ],
    answer: 0,
    explanation: "La nutrición requiere obtener nutrientes (digestivo), oxígeno (respiratorio), transportarlos (circulatorio) y eliminar desechos (excretor)."
  },
  {
    q: "¿En qué órgano del aparato digestivo se absorben la mayor parte de los nutrientes para pasar a la sangre?",
    options: ["En el estómago", "En el intestino delgado", "En el intestino grueso", "En el esófago"],
    answer: 1,
    explanation: "Las vellosidades del intestino delgado absorben los nutrientes digeridos hacia la sangre."
  },
  {
    q: "¿Qué glándula aneja del aparato digestivo produce la bilis para ayudar a digerir las grasas?",
    options: ["El páncreas", "El hígado", "Las glándulas salivales", "El bazo"],
    answer: 1,
    explanation: "El hígado segrega la bilis, que se almacena en la vesícula biliar y actúa en el intestino delgado."
  },
  {
    q: "¿En qué diminutas bolsitas de los pulmones se produce el intercambio de gases (oxígeno y dióxido de carbono)?",
    options: ["En los bronquios", "En los alvéolos pulmonares", "En la tráquea", "En la faringe"],
    answer: 1,
    explanation: "Los alvéolos pulmonares están rodeados de capilares sanguíneos donde el oxígeno pasa a la sangre."
  },
  {
    q: "¿Qué músculo situado debajo de los pulmones sube y baja durante los movimientos respiratorios?",
    options: ["El bíceps", "El diafragma", "El gemelo", "El trapecio"],
    answer: 1,
    explanation: "El diafragma se contrae y baja en la inspiración, y se relaja y sube en la espiración."
  },
  {
    q: "¿Qué componentes de la sangre se encargan de transportar el oxígeno por todo el cuerpo?",
    options: ["Los glóbulos blancos", "Los glóbulos rojos", "Las plaquetas", "El plasma"],
    answer: 1,
    explanation: "Los glóbulos rojos contienen hemoglobina y transportan el oxígeno desde los pulmones hasta las células."
  },
  {
    q: "¿Qué células sanguíneas nos defienden de las infecciones y microorganismos?",
    options: ["Glóbulos rojos", "Glóbulos blancos", "Plaquetas", "Neuronas"],
    answer: 1,
    explanation: "Los glóbulos blancos (leucocitos) forman parte de nuestro sistema inmunitario de defensa."
  },
  {
    q: "¿Qué vasos sanguíneos llevan la sangre que sale del corazón hacia los órganos del cuerpo?",
    options: ["Las venas", "Las arterias", "Los capilares", "Los bronquiolos"],
    answer: 1,
    explanation: "Las arterias conducen la sangre desde el corazón hacia el resto del organismo."
  },
  {
    q: "¿Qué órganos del aparato excretor filtran la sangre para fabricar la orina?",
    options: ["Los pulmones", "Los riñones", "Los uréteres", "La vejiga"],
    answer: 1,
    explanation: "Los dos riñones limpian la sangre de sustancias de desecho y producen la orina."
  },
  {
    q: "¿Cuál de estos alimentos pertenece al grupo de los alimentos constructores (ricos en proteínas)?",
    options: ["El pan y la pasta", "El pescado, la carne, los huevos y las legumbres", "El aceite de oliva", "Las golosinas"],
    answer: 1,
    explanation: "Las proteínas de carnes, pescados, huevos, lácteos y legumbres ayudan a crecer y reparar tejidos."
  },

  // --- BLOQUE 4: LA TIERRA, EL RELIEVE, EL CLIMA Y EL AGUA ---
  {
    q: "¿Cuáles son las tres capas sólidas internas de la Tierra (la geosfera) desde el exterior hacia el interior?",
    options: [
      "Atmósfera, hidrosfera y biosfera",
      "Corteza, manto y núcleo",
      "Núcleo, corteza y manto",
      "Litosfera, troposfera y estratosfera"
    ],
    answer: 1,
    explanation: "La geosfera se divide en corteza (capa externa), manto (capa intermedia) y núcleo (capa más profunda)."
  },
  {
    q: "¿Cómo se llaman las rocas que se forman al enfriarse y solidificarse el magma del interior de la Tierra?",
    options: ["Rocas sedimentarias", "Rocas magmáticas o ígneas", "Rocas metamórficas", "Fósiles"],
    answer: 1,
    explanation: "Las rocas magmáticas (como el granito o el basalto) proceden del enfriamiento del magma."
  },
  {
    q: "¿Qué propiedad de los minerales mide la resistencia que oponen a ser rayados (escala de Mohs)?",
    options: ["El brillo", "La dureza", "La densidad", "El color"],
    answer: 1,
    explanation: "La dureza mide si un mineral puede rayar a otro; el talco es el más blando (1) y el diamante el más duro (10)."
  },
  {
    q: "¿Cuál es la gran unidad de relieve que ocupa el centro de la Península Ibérica con una altitud media de 650 metros?",
    options: ["La Depresión del Ebro", "La Meseta Central", "Los Pirineos", "La Cordillera Cantábrica"],
    answer: 1,
    explanation: "La Meseta Central es una extensa llanura elevada dividida por el Sistema Central en Submeseta Norte y Submeseta Sur."
  },
  {
    q: "¿Qué cordillera separa la Península Ibérica de Francia y del resto del continente europeo?",
    options: ["Los Sistemas Béticos", "Los Pirineos", "El Sistema Ibérico", "Sierra Morena"],
    answer: 1,
    explanation: "Los Pirineos forman una barrera montañosa natural entre España y Francia."
  },
  {
    q: "¿Cuál es el pico más alto de toda España, situado en la isla de Tenerife (Canarias)?",
    options: ["El Mulhacén", "El Aneto", "El Teide", "El Torre Cerredo"],
    answer: 2,
    explanation: "El volcán del Teide, con 3.715 metros, es el pico más alto de España."
  },
  {
    q: "¿En qué tres vertientes hidrográficas desembocan los ríos de España?",
    options: [
      "Norte, Sur y Oeste",
      "Cantábrica, Atlántica y Mediterránea",
      "Pirenaica, Ibérica y Bética",
      "Gallega, Andaluza y Catalana"
    ],
    answer: 1,
    explanation: "Los ríos españoles vierten sus aguas al mar Cantábrico, al océano Atlántico o al mar Mediterráneo."
  },
  {
    q: "¿Cómo son los ríos de la vertiente cantábrica (como el Nalón, el Nervión o el Bidasoa)?",
    options: [
      "Muy largos y poco caudalosos",
      "Cortos, muy caudalosos y regulares todo el año",
      "Secos en verano y muy largos",
      "Nacen en los Pirineos y van al Mediterráneo"
    ],
    answer: 1,
    explanation: "Al nacer cerca de la costa en zonas muy lluviosas, los ríos cantábricos son cortos y caudalosos."
  },
  {
    q: "¿Cuál es el río más largo de la Península Ibérica?",
    options: ["El río Ebro", "El río Tajo", "El río Guadalquivir", "El río Duero"],
    answer: 1,
    explanation: "El río Tajo mide más de 1.000 km; nace en la Sierra de Albarracín y desemboca en Lisboa (Atlántico)."
  },
  {
    q: "¿Cuál es el río más caudaloso de España y el más largo de la vertiente mediterránea?",
    options: ["El río Júcar", "El río Ebro", "El río Segura", "El río Guadiana"],
    answer: 1,
    explanation: "El Ebro recorre el noreste peninsular y es el río más caudaloso de España."
  },
  {
    q: "¿Qué instrumento meteorológico sirve para medir la cantidad de precipitaciones (lluvia o nieve)?",
    options: ["El termómetro", "El pluviómetro", "El anemómetro", "La veleta"],
    answer: 1,
    explanation: "El pluviómetro mide los litros de lluvia caídos por metro cuadrado."
  },
  {
    q: "¿Qué instrumento mide la velocidad del viento?",
    options: ["El barómetro", "El anemómetro", "El higrómetro", "El pluviómetro"],
    answer: 1,
    explanation: "El anemómetro mide la velocidad del viento, mientras que la veleta indica su dirección."
  },
  {
    q: "¿En qué capa de la atmósfera se producen los fenómenos meteorológicos como las nubes, la lluvia y el viento?",
    options: ["En la estratosfera", "En la troposfera", "En la mesosfera", "En la exosfera"],
    answer: 1,
    explanation: "La troposfera es la capa más baja de la atmósfera, en contacto con la superficie terrestre."
  },
  {
    q: "¿Qué capa de la atmósfera absorbe los rayos ultravioleta perjudiciales del Sol?",
    options: ["La capa de ozono (en la estratosfera)", "La troposfera", "La hidrosfera", "La corteza"],
    answer: 0,
    explanation: "La capa de ozono actúa como un escudo protector frente a la radiación ultravioleta."
  },
  {
    q: "¿Qué clima predomina en el norte de España (Galicia, Asturias, Cantabria y País Vasco)?",
    options: ["Clima subtropical", "Clima oceánico", "Clima mediterráneo seco", "Clima desértico"],
    answer: 1,
    explanation: "El clima oceánico presenta temperaturas suaves y precipitaciones abundantes durante todo el año."
  },
  {
    q: "¿Qué tipo de clima tienen las islas Canarias debido a su cercanía al trópico de Cáncer?",
    options: ["Clima de montaña", "Clima subtropical", "Clima continental", "Clima polar"],
    answer: 1,
    explanation: "Canarias tiene clima subtropical, con temperaturas cálidas todo el año y escasas lluvias."
  },
  {
    q: "¿Cuál es la montaña más alta de Europa, situada en la cordillera del Cáucaso?",
    options: ["El Mont Blanc", "El Elbrús", "El Aneto", "El Olimpo"],
    answer: 1,
    explanation: "El monte Elbrús (5.642 m) es el pico más alto de Europa; el Mont Blanc (4.808 m) es el más alto de los Alpes."
  },
  {
    q: "¿Qué dos largos ríos europeos atraviesan gran parte del continente?",
    options: ["El Nilo y el Amazonas", "El Volga y el Danubio", "El Tajo y el Ebro", "El Támesis y el Sena"],
    answer: 1,
    explanation: "El Volga es el río más largo de Europa y el Danubio atraviesa diez países europeos."
  },
  {
    q: "¿Qué océano baña las costas occidentales de Europa?",
    options: ["El océano Pacífico", "El océano Atlántico", "El océano Índico", "El mar Rojo"],
    answer: 1,
    explanation: "Europa limita al oeste con el océano Atlántico y al norte con el océano Glacial Ártico."
  },
  {
    q: "¿Qué consecuencia principal tiene el cambio climático provocado por el aumento de gases de efecto invernadero?",
    options: [
      "El enfriamiento global de los océanos",
      "El calentamiento global, el deshielo de los polos y fenómenos meteorológicos extremos",
      "La desaparición de las estaciones",
      "El aumento de los glaciares"
    ],
    answer: 1,
    explanation: "El exceso de gases de efecto invernadero retiene más calor y provoca el calentamiento global del planeta."
  },

  // --- BLOQUE 5: POBLACIÓN, ECONOMÍA Y ORGANIZACIÓN DE ESPAÑA ---
  {
    q: "¿Cómo se calcula el crecimiento natural de una población?",
    options: [
      "Sumando inmigrantes y emigrantes",
      "Restando el número de fallecimientos (defunciones) al número de nacimientos",
      "Dividiendo la población entre la superficie",
      "Multiplicando los nacimientos por dos"
    ],
    answer: 1,
    explanation: "Crecimiento natural = Nacimientos − Defunciones."
  },
  {
    q: "¿Cómo se llama el indicador que relaciona el número de habitantes de un territorio con su superficie (hab./km²)?",
    options: ["Tasa de natalidad", "Densidad de población", "Crecimiento real", "Población activa"],
    answer: 1,
    explanation: "Densidad de población = Número de habitantes / Superficie en km²."
  },
  {
    q: "¿Cómo se distribuye la población en España?",
    options: [
      "De forma totalmente uniforme por todo el país",
      "Se concentra principalmente en la costa, las islas y Madrid, mientras el interior está menos poblado",
      "Vive mayoritariamente en pueblos pequeños",
      "No vive nadie en las zonas costeras"
    ],
    answer: 1,
    explanation: "En España existen grandes contrastes: zonas muy densamente pobladas (Madrid y costas) y áreas rurales poco pobladas."
  },
  {
    q: "¿Qué nombre recibe el desplazamiento de población desde el campo hacia las ciudades en busca de trabajo?",
    options: ["Inmigración exterior", "Éxodo rural", "Turismo", "Trashumancia"],
    answer: 1,
    explanation: "El éxodo rural es la migración del campo a la ciudad, muy intensa en España en la segunda mitad del siglo XX."
  },
  {
    q: "¿Qué actividades pertenecen al sector primario?",
    options: [
      "La industria y la construcción",
      "La agricultura, la ganadería, la pesca y la explotación forestal",
      "El comercio, el transporte y el turismo",
      "La educación y la sanidad"
    ],
    answer: 1,
    explanation: "El sector primario obtiene materias primas directamente de la naturaleza."
  },
  {
    q: "¿Qué diferencia hay entre los cultivos de secano y los de regadío?",
    options: [
      "Los de secano solo reciben agua de lluvia y los de regadío reciben agua artificial mediante riego",
      "Los de secano crecen en el mar",
      "Los de regadío no necesitan tierra",
      "No existe ninguna diferencia"
    ],
    answer: 0,
    explanation: "El olivo, la vid y los cereales son típicos de secano; las hortalizas y frutales suelen ser de regadío."
  },
  {
    q: "¿Qué actividades forman el sector secundario?",
    options: [
      "La pesca y la minería",
      "La industria, la artesanía, la producción de energía y la construcción",
      "La banca y el transporte",
      "La ganadería extensiva"
    ],
    answer: 1,
    explanation: "El sector secundario transforma las materias primas en productos elaborados."
  },
  {
    q: "¿Cuál es el sector económico que ocupa a mayor porcentaje de trabajadores en España y en Europa?",
    options: ["El sector primario", "El sector secundario", "El sector terciario (servicios)", "La minería"],
    answer: 2,
    explanation: "Más del 70% de la población activa en España trabaja en el sector terciario (comercio, turismo, sanidad, educación, transporte...)."
  },
  {
    q: "¿En cuántas Comunidades Autónomas y Ciudades Autónomas está organizada España?",
    options: [
      "15 Comunidades y 3 Ciudades Autónomas",
      "17 Comunidades Autónomas y 2 Ciudades Autónomas (Ceuta y Melilla)",
      "50 Comunidades Autónomas",
      "19 provincias"
    ],
    answer: 1,
    explanation: "España se organiza territorialmente en 17 Comunidades Autónomas y 2 Ciudades Autónomas (Ceuta y Melilla), divididas en 50 provincias."
  },
  {
    q: "¿Cuál es la ley más importante de España, aprobada en 1978, que recoge los derechos y deberes de los ciudadanos?",
    options: ["El Estatuto de Autonomía", "La Constitución Española", "El Código Civil", "La Carta Europea"],
    answer: 1,
    explanation: "La Constitución Española de 1978 es la norma suprema del Estado español."
  },
  {
    q: "¿Qué tres poderes del Estado se distinguen en una democracia como la española?",
    options: [
      "Real, militar y religioso",
      "Legislativo (Cortes Generales), Ejecutivo (Gobierno) y Judicial (Jueces y Tribunales)",
      "Municipal, provincial y europeo",
      "Primario, secundario y terciario"
    ],
    answer: 1,
    explanation: "Las Cortes elaboran leyes (legislativo), el Gobierno las aplica (ejecutivo) y los jueces velan por su cumplimiento (judicial)."
  },
  {
    q: "¿Cuántos países forman actualmente la Unión Europea (UE)?",
    options: ["12 países", "27 países", "50 países", "15 países"],
    answer: 1,
    explanation: "La Unión Europea está integrada por 27 países democráticos europeos, entre ellos España desde 1986."
  },
  {
    q: "¿Cuál es la moneda oficial de la mayoría de los países de la Unión Europea, incluida España?",
    options: ["La libra", "El euro (€)", "El dólar", "La peseta"],
    answer: 1,
    explanation: "El euro es la moneda común de la zona euro desde el año 2002."
  },

  // --- BLOQUE 6: LA PREHISTORIA Y LA EDAD ANTIGUA (HISPANIA) ---
  {
    q: "¿Con qué acontecimiento comienza la Prehistoria y con cuál termina?",
    options: [
      "Comienza con la aparición del ser humano y termina con la invención de la escritura",
      "Comienza con los romanos y termina con Colón",
      "Comienza con el fuego y termina con la rueda",
      "Comienza con los dinosaurios y termina con las pirámides"
    ],
    answer: 0,
    explanation: "La Prehistoria abarca desde la aparición de los primeros homínidos hasta la invención de la escritura (hace unos 5.000 años)."
  },
  {
    q: "¿En qué tres etapas se divide la Prehistoria?",
    options: [
      "Antigua, Media y Moderna",
      "Paleolítico, Neolítico y Edad de los Metales",
      "Edad de Piedra, Edad de Oro y Edad de Plata",
      "Íberos, Celtas y Romanos"
    ],
    answer: 1,
    explanation: "Las tres etapas de la Prehistoria son Paleolítico, Neolítico y Edad de los Metales."
  },
  {
    q: "¿Cómo vivían los seres humanos durante el Paleolítico?",
    options: [
      "Eran sedentarios y vivían en ciudades",
      "Eran nómadas, vivían en cuevas o cabañas y se alimentaban de la caza, la pesca y la recolección",
      "Cultivaban cereales y domesticaban ovejas",
      "Fabricaban espadas de hierro"
    ],
    answer: 1,
    explanation: "En el Paleolítico eran nómadas depredadores y fabricaban herramientas de piedra tallada y hueso."
  },
  {
    q: "¿Qué gran descubrimiento cambió la vida en el Neolítico haciendo que los humanos se volvieran sedentarios?",
    options: [
      "El descubrimiento del fuego",
      "El descubrimiento de la agricultura y la ganadería",
      "La invención de la imprenta",
      "El uso del hierro"
    ],
    answer: 1,
    explanation: "Al aprender a cultivar plantas y criar animales, construyeron poblados estables junto a los ríos."
  },
  {
    q: "¿Qué dos inventos artesanales surgieron en el Neolítico para guardar alimentos y vestirse?",
    options: ["El vidrio y el plástico", "La cerámica y los tejidos", "El papel y la brújula", "El bronce y el acero"],
    answer: 1,
    explanation: "En el Neolítico inventaron la cerámica de barro cocido y los telares para tejer lana y lino."
  },
  {
    q: "¿Dónde se encuentran las famosas pinturas rupestres paleolíticas de bisontes policromados en Cantabria?",
    options: ["En la cueva de Nerja", "En la cueva de Altamira", "En Atapuerca", "En Numancia"],
    answer: 1,
    explanation: "La cueva de Altamira (Cantabria) alberga algunas de las pinturas rupestres más famosas del mundo."
  },
  {
    q: "¿En qué orden se utilizaron los metales durante la Edad de los Metales?",
    options: [
      "Hierro, bronce y cobre",
      "Cobre, bronce y hierro",
      "Oro, plata y aluminio",
      "Bronce, hierro y cobre"
    ],
    answer: 1,
    explanation: "Primero trabajaron el cobre, después el bronce (aleación de cobre y estaño) y finalmente el hierro."
  },
  {
    q: "¿Qué nombre reciben las grandes construcciones de piedra de finales del Neolítico y la Edad de los Metales (menhires, dólmenes y crómlechs)?",
    options: ["Acueductos", "Monumentos megalíticos", "Anfiteatros", "Catedrales"],
    answer: 1,
    explanation: "Los megalitos son monumentos construidos con grandes bloques de piedra."
  },
  {
    q: "¿Qué dos grandes grupos de pueblos prerromanos habitaban la Península Ibérica antes de la llegada de los romanos?",
    options: ["Vikingos y francos", "Íberos y celtas", "Griegos y egipcios", "Visigodos y musulmanes"],
    answer: 1,
    explanation: "Los íberos vivían en el sur y este peninsular; los celtas habitaban el centro, norte y oeste."
  },
  {
    q: "¿Cuál de estas esculturas famosas pertenece al arte íbero?",
    options: ["El Discóbolo", "La Dama de Elche", "El David", "Los Toros de Guisando"],
    answer: 1,
    explanation: "La Dama de Elche es la obra maestra más conocida del arte íbero."
  },
  {
    q: "¿Qué tres pueblos colonizadores llegaron por el mar Mediterráneo a la Península para comerciar?",
    options: [
      "Vikingos, normandos y sajones",
      "Fenicios, griegos y cartagineses",
      "Árabes, bereberes y turcos",
      "Incas, mayas y aztecas"
    ],
    answer: 1,
    explanation: "Fenicios (fundaron Gadir/Cádiz), griegos (fundaron Emporion/Ampurias) y cartagineses (fundaron Cartago Nova)."
  },
  {
    q: "¿Qué nombre dieron los romanos a la Península Ibérica tras conquistarla?",
    options: ["Al-Ándalus", "Hispania", "Britannia", "Galia"],
    answer: 1,
    explanation: "Los romanos llamaron Hispania a la Península Ibérica y la dividieron en provincias."
  },
  {
    q: "¿Cómo se llama el proceso por el cual los habitantes de Hispania adoptaron la lengua (el latín), las leyes y las costumbres de Roma?",
    options: ["Cristianización", "Romanización", "Colonización", "Feudalización"],
    answer: 1,
    explanation: "La romanización transformó la cultura de Hispania; del latín nacieron lenguas como el castellano, catalán o gallego."
  },
  {
    q: "¿Para qué servían los acueductos romanos, como el famoso Acueducto de Segovia?",
    options: [
      "Para celebrar carreras de carros",
      "Para transportar agua desde los manantiales hasta las ciudades",
      "Para defender las murallas",
      "Para enterrar a los emperadores"
    ],
    answer: 1,
    explanation: "Los acueductos eran obras de ingeniería hidráulica que abastecían de agua a las ciudades romanas."
  },
  {
    q: "¿Qué edificio romano servía para representar obras de teatro y cuál para luchas de gladiadores?",
    options: [
      "El circo y las termas",
      "El teatro y el anfiteatro (como los de Mérida)",
      "El templo y el arco de triunfo",
      "La calzada y el puente"
    ],
    answer: 1,
    explanation: "En el teatro se representaban comedias y tragedias, y en el anfiteatro tenían lugar luchas de gladiadores."
  },

  // --- BLOQUE 7: LA EDAD MEDIA EN ESPAÑA ---
  {
    q: "¿Con qué hecho histórico comienza la Edad Media en el año 476 d. C.?",
    options: [
      "Con el descubrimiento de América",
      "Con la caída del Imperio romano de Occidente",
      "Con la invención de la escritura",
      "Con la Revolución Francesa"
    ],
    answer: 1,
    explanation: "La caída del Imperio romano en el año 476 marca el inicio de la Edad Media."
  },
  {
    q: "¿Qué pueblo germánico fundó un reino en Hispania con capital en Toledo tras la caída de Roma?",
    options: ["Los suevos", "Los visigodos", "Los vándalos", "Los francos"],
    answer: 1,
    explanation: "Los visigodos unificaron la Península Ibérica en el siglo VI y establecieron su capital en Toledo."
  },
  {
    q: "¿En qué año entraron los musulmanes en la Península Ibérica derrotando al rey visigodo Rodrigo en la batalla de Guadalete?",
    options: ["En el año 1492", "En el año 711", "En el año 476", "En el año 1212"],
    answer: 1,
    explanation: "En el año 711 los musulmanes cruzaron el estrecho de Gibraltar y conquistaron casi toda la Península, llamándola Al-Ándalus."
  },
  {
    q: "¿Cuál fue la capital del Emirato y del Califato de Al-Ándalus en su época de mayor esplendor?",
    options: ["Granada", "Córdoba", "Sevilla", "Toledo"],
    answer: 1,
    explanation: "Córdoba fue la capital de Al-Ándalus y una de las ciudades más cultas y pobladas del mundo en el siglo X."
  },
  {
    q: "¿Cuál fue el último territorio musulmán en la Península Ibérica, conquistado por los Reyes Católicos en 1492?",
    options: ["El reino de Toledo", "El reino nazarí de Granada", "El reino de Zaragoza", "El reino de Sevilla"],
    answer: 1,
    explanation: "El reino nazarí de Granada resistió hasta enero de 1492; su monumento más famoso es la Alhambra."
  },
  {
    q: "¿Qué grupo social privilegiado de la sociedad feudal medieval vivía en castillos y se dedicaba a la guerra?",
    options: ["El clero", "La nobleza", "Los campesinos", "Los artesanos"],
    answer: 1,
    explanation: "La nobleza (reyes, condes, caballeros) poseía las tierras y defendía el territorio."
  },
  {
    q: "¿Cómo se llamaba la ruta de peregrinación cristiana más importante de la Edad Media en Europa que llegaba a Galicia?",
    options: ["La Vía de la Plata", "El Camino de Santiago", "La Ruta de la Seda", "La Vía Augusta"],
    answer: 1,
    explanation: "El Camino de Santiago atrajo a peregrinos de toda Europa y favoreció el intercambio cultural y comercial."
  },
  {
    q: "¿Qué estilo artístico medieval se caracteriza por iglesias con muros gruesos, pocas ventanas, arcos de medio punto y aspecto robusto?",
    options: ["El estilo gótico", "El estilo románico", "El estilo mudéjar", "El estilo barroco"],
    answer: 1,
    explanation: "El arte románico (siglos XI-XII) tiene muros muy anchos, arcos de medio punto y bóvedas de cañón."
  },
  {
    q: "¿Qué estilo artístico medieval construyó catedrales muy altas y luminosas con arcos apuntados y grandes vidrieras?",
    options: ["El románico", "El gótico", "El visigodo", "El neoclásico"],
    answer: 1,
    explanation: "El arte gótico (siglos XIII-XV) usó el arco apuntado y los arbotantes para levantar catedrales altas y llenas de luz."
  },
  {
    q: "¿Qué nombre recibe el estilo artístico hispánico que mezcló elementos cristianos y musulmanes usando ladrillo y yeso?",
    options: ["Estilo mudéjar", "Estilo románico", "Estilo griego", "Estilo megalítico"],
    answer: 0,
    explanation: "El arte mudéjar surgió de la convivencia cultural en la Península Ibérica."
  },

  // --- BLOQUE 8: MATERIA, ENERGÍA, MÁQUINAS Y CULTURA DIGITAL ---
  {
    q: "¿Cuáles son las dos propiedades generales de toda la materia?",
    options: [
      "El color y el olor",
      "La masa y el volumen",
      "La dureza y la elasticidad",
      "La temperatura y el brillo"
    ],
    answer: 1,
    explanation: "Toda materia tiene masa (cantidad de materia, medida en kg) y volumen (espacio que ocupa, medido en litros o m³)."
  },
  {
    q: "¿Cómo se calcula la densidad de un cuerpo y por qué flota un corcho en el agua?",
    options: [
      "Porque el corcho pesa más que el agua",
      "Densidad = Masa / Volumen; el corcho flota porque su densidad es menor que la del agua",
      "Porque el agua no tiene densidad",
      "Porque el corcho es magnético"
    ],
    answer: 1,
    explanation: "Un objeto flota en un líquido cuando su densidad es menor que la de dicho líquido."
  },
  {
    q: "¿Qué tipo de mezcla es el agua del mar o el aire, en la que NO se distinguen sus componentes a simple vista?",
    options: ["Mezcla heterogénea", "Mezcla homogénea (o disolución)", "Sustancia pura", "Compuesto sólido"],
    answer: 1,
    explanation: "En las mezclas homogéneas sus componentes están tan bien unidos que presentan un aspecto uniforme."
  },
  {
    q: "¿Qué método de separación de mezclas usarías para separar arena mezclada con agua?",
    options: ["La imantación", "La filtración", "La destilación", "La combustión"],
    answer: 1,
    explanation: "La filtración permite separar un sólido insoluble (arena) de un líquido (agua) mediante un filtro."
  },
  {
    q: "¿Qué método usarías para separar limaduras de hierro mezcladas con serrín o arena?",
    options: ["La decantación", "La separación magnética (imantación)", "La evaporación", "La filtración"],
    answer: 1,
    explanation: "El imán atrae únicamente al hierro, separándolo fácilmente del resto."
  },
  {
    q: "¿Qué diferencia un cambio físico de un cambio químico en la materia?",
    options: [
      "En el cambio físico la sustancia sigue siendo la misma (como derretir hielo); en el químico se forman sustancias nuevas (como quemar madera)",
      "No hay diferencia entre ambos",
      "Los cambios químicos siempre son reversibles",
      "Los cambios físicos producen fuego"
    ],
    answer: 0,
    explanation: "Los cambios de estado o de forma son físicos; la combustión, la oxidación y la fermentación son cambios químicos."
  },
  {
    q: "¿Cómo se llama el cambio de estado cuando un líquido pasa a gas al calentarse?",
    options: ["Fusión", "Solidificación", "Vaporización (evaporación o ebullición)", "Condensación"],
    answer: 2,
    explanation: "El paso de líquido a gas se denomina vaporización."
  },
  {
    q: "¿Cómo se llama el paso de gas a líquido, como cuando se empaña un espejo en el baño?",
    options: ["Fusión", "Condensación", "Sublimación", "Solidificación"],
    answer: 1,
    explanation: "Al enfriarse el vapor de agua, se condensa formando gotitas líquidas."
  },
  {
    q: "¿Qué forma de energía poseen los cuerpos que están en movimiento (como el viento o un coche circulando)?",
    options: ["Energía luminosa", "Energía mecánica (cinética)", "Energía química", "Energía nuclear"],
    answer: 1,
    explanation: "La energía mecánica es la que tienen los cuerpos debida a su movimiento y a su posición."
  },
  {
    q: "¿Qué forma de energía está almacenada en los alimentos, las pilas y los combustibles?",
    options: ["Energía sonora", "Energía química", "Energía luminosa", "Energía eólica"],
    answer: 1,
    explanation: "Los alimentos, las baterías y los combustibles almacenan energía química que se libera al transformarse."
  },
  {
    q: "¿Cuál de estas fuentes de energía es RENOVABLE y no se agota con su uso?",
    options: ["El carbón", "El petróleo", "La energía solar y la eólica", "El gas natural"],
    answer: 2,
    explanation: "El Sol (solar), el viento (eólica) y el agua en movimiento (hidráulica) son fuentes renovables."
  },
  {
    q: "¿Por qué el carbón, el petróleo y el gas natural son fuentes de energía no renovables?",
    options: [
      "Porque se fabrican en laboratorios cada día",
      "Porque tardaron millones de años en formarse y se agotan al consumirlos",
      "Porque no producen energía",
      "Porque vienen del viento"
    ],
    answer: 1,
    explanation: "Son combustibles fósiles limitados que además emiten gases contaminantes al quemarse."
  },
  {
    q: "¿Cómo se comportan los materiales aislantes térmicos como la madera, el corcho o la lana?",
    options: [
      "Dejan pasar el calor muy rápidamente",
      "Dificultan el paso del calor y mantienen la temperatura",
      "Conducen la electricidad",
      "Se derriten con el frío"
    ],
    answer: 1,
    explanation: "Los aislantes térmicos no transmiten bien el calor, a diferencia de los conductores como los metales."
  },
  {
    q: "¿Qué máquina simple consiste en una barra rígida que gira sobre un punto de apoyo para levantar pesos con menos esfuerzo?",
    options: ["La polea", "La palanca", "El plano inclinado", "La rueda dentada"],
    answer: 1,
    explanation: "La palanca (como un balancín, unas tijeras o una carretilla) multiplica la fuerza aplicada."
  },
  {
    q: "¿Qué máquina simple es una rueda con un canal por donde pasa una cuerda para subir objetos cómodamente?",
    options: ["El plano inclinado", "La polea", "La cuña", "El tornillo"],
    answer: 1,
    explanation: "La polea cambia la dirección de la fuerza y facilita elevar cargas."
  },
  {
    q: "¿Qué es una máquina compuesta (como una bicicleta o una lavadora)?",
    options: [
      "Una máquina formada por una sola pieza",
      "Una máquina formada por la combinación de varias máquinas simples y operadores mecánicos",
      "Una herramienta sin movimiento",
      "Un imán natural"
    ],
    answer: 1,
    explanation: "Las máquinas compuestas combinan ruedas, ejes, palancas, engranajes o motores para funcionar."
  },
  {
    q: "¿Qué buena práctica de seguridad digital debemos seguir al usar Internet en 5º de Primaria?",
    options: [
      "Compartir nuestra dirección y contraseñas con desconocidos",
      "No compartir datos personales privados y avisar a un adulto ante cualquier mensaje sospechoso",
      "Descargar cualquier archivo desconocido",
      "Usar la misma contraseña fácil '1234' en todas partes"
    ],
    answer: 1,
    explanation: "La protección de datos personales y el acompañamiento adulto son esenciales para navegar seguros."
  },

  // --- BLOQUE 9: REPASO TRANSVERSAL SANTILLANA 5º PRIMARIA (PREGUNTAS 141 - 210) ---
  {
    q: "¿Qué órgano de las plantas tiene unos poros llamados estomas por donde entran y salen los gases?",
    options: ["La raíz", "La hoja", "El fruto", "La semilla"],
    answer: 1,
    explanation: "En el envés de las hojas están los estomas, por donde se realiza el intercambio de gases."
  },
  {
    q: "¿Cómo se llama la sustancia verde de las hojas que capta la energía de la luz del Sol?",
    options: ["Hemoglobina", "Clorofila", "Savia bruta", "Melanina"],
    answer: 1,
    explanation: "La clorofila da el color verde a las plantas y captura la luz solar para la fotosíntesis."
  },
  {
    q: "¿Cuál de estos animales es un mamífero marino y NO un pez?",
    options: ["El tiburón", "La ballena y el delfín", "La sardina", "El atún"],
    answer: 1,
    explanation: "Las ballenas y delfines son mamíferos: respiran por pulmones, son vivíparos y maman leche."
  },
  {
    q: "¿Qué característica distingue a las aves de todos los demás animales vertebrados?",
    options: ["Tienen alas", "Tienen el cuerpo cubierto de plumas", "Ponen huevos", "Tienen dos patas"],
    answer: 1,
    explanation: "Las plumas son exclusivas de las aves (otros animales como insectos o murciélagos tienen alas, pero no plumas)."
  },
  {
    q: "¿Qué función realiza la savia elaborada en una planta?",
    options: [
      "Subir desde la raíz",
      "Repartir el alimento fabricado en las hojas por toda la planta a través de los vasos liberianos",
      "Absorber agua del suelo",
      "Atraer a los insectos"
    ],
    answer: 1,
    explanation: "La savia elaborada lleva los nutrientes producidos en la fotosíntesis a todas las células de la planta."
  },
  {
    q: "¿Qué ocurre durante la polinización?",
    options: [
      "La semilla cae al suelo y germina",
      "El grano de polen viaja desde los estambres de una flor hasta el pistilo de otra",
      "La planta pierde sus hojas en otoño",
      "La raíz absorbe sales minerales"
    ],
    answer: 1,
    explanation: "La polinización puede ocurrir gracias al viento (anemógama) o a los insectos (entomógama)."
  },
  {
    q: "¿Qué tipo de reproducción vegetal ocurre cuando nace una nueva planta a partir de un trozo de tallo (esqueje, tubérculo o bulbo) sin flores?",
    options: ["Reproducción sexual", "Reproducción asexual", "Fecundación", "Polinización"],
    answer: 1,
    explanation: "La patata (tubérculo), la cebolla (bulbo) o la fresa (estolón) se reproducen asexualmente."
  },
  {
    q: "¿Qué es la biosfera?",
    options: [
      "La capa de gases que rodea la Tierra",
      "El conjunto de todos los seres vivos que habitan en la Tierra",
      "El agua de los océanos",
      "El núcleo metálico del planeta"
    ],
    answer: 1,
    explanation: "La biosfera engloba todos los seres vivos y los ecosistemas del planeta."
  },
  {
    q: "¿Qué nombre recibe el deterioro del suelo fértil que lo convierte en un terreno árido parecido a un desierto?",
    options: ["Reforestación", "Desertificación", "Condensación", "Sedimentación"],
    answer: 1,
    explanation: "La tala abusiva, los incendios y la sequía provocan la pérdida de suelo fértil o desertificación."
  },
  {
    q: "¿Qué órgano de nuestro cuerpo controla las acciones voluntarias como leer, pensar, hablar o correr?",
    options: ["El cerebro", "El bulbo raquídeo", "La médula espinal", "El corazón"],
    answer: 0,
    explanation: "El cerebro interpreta la información de los sentidos, almacena recuerdos y ordena movimientos voluntarios."
  },
  {
    q: "¿Cómo se llaman los movimientos rápidos e involuntarios en los que interviene la médula espinal (como retirar la mano al pincharse)?",
    options: ["Movimientos voluntarios", "Actos reflejos", "Movimientos peristálticos", "Latidos"],
    answer: 1,
    explanation: "Los actos reflejos son respuestas inmediatas de protección coordinadas por la médula espinal."
  },
  {
    q: "¿Qué huesecillos del oído medio transmiten la vibración del tímpano al oído interno?",
    options: [
      "Fémur, tibia y peroné",
      "Martillo, yunque y estribo",
      "Radio, cúbito y húmero",
      "Cráneo, costilla y esternón"
    ],
    answer: 1,
    explanation: "La cadena de huesecillos está formada por el martillo, el yunque y el estribo (el hueso más pequeño del cuerpo)."
  },
  {
    q: "¿Dónde se encuentran las papilas gustativas que nos permiten distinguir los sabores dulce, salado, ácido, amargo y umami?",
    options: ["En las fosas nasales", "En la lengua", "En la dermis", "En la retina"],
    answer: 1,
    explanation: "La lengua es el órgano principal del sentido del gusto y contiene las papilas gustativas."
  },
  {
    q: "¿Qué sustancia se forma en la boca al mezclar los alimentos triturados con la saliva?",
    options: ["El quimo", "El bolo alimenticio", "El quilo", "Las heces"],
    answer: 1,
    explanation: "Los dientes trituran la comida y la saliva la humedece formando el bolo alimenticio."
  },
  {
    q: "¿Qué cavidades tiene el corazón humano?",
    options: [
      "Dos pulmones y una tráquea",
      "Dos aurículas (superiores) y dos ventrículos (inferiores)",
      "Tres arterias y una vena",
      "Dos riñones y una vejiga"
    ],
    answer: 1,
    explanation: "El corazón es un órgano musculoso dividido en cuatro cavidades: dos aurículas y dos ventrículos."
  },
  {
    q: "¿Cuál es la diferencia entre la circulación pulmonar (menor) y la circulación general (mayor)?",
    options: [
      "La pulmonar lleva la sangre a los pulmones para oxigenarse; la general reparte la sangre oxigenada a todo el cuerpo",
      "La pulmonar va a las piernas y la general a la cabeza",
      "No existen dos circuitos",
      "La pulmonar solo ocurre al dormir"
    ],
    answer: 0,
    explanation: "La circulación humana es doble y completa: un circuito oxigena la sangre en los pulmones y otro la lleva al organismo."
  },
  {
    q: "¿Qué son las glándulas sudoríparas de la piel?",
    options: [
      "Órganos que producen saliva",
      "Glándulas que expulsan el sudor para eliminar desechos y regular la temperatura corporal",
      "Células de los huesos",
      "Parte del ojo"
    ],
    answer: 1,
    explanation: "El sudor está compuesto por agua y sales de desecho, y ayuda a refrescar el cuerpo."
  },
  {
    q: "¿Qué son los nutrientes energéticos como los hidratos de carbono y las grasas?",
    options: [
      "Sustancias que aportan energía para realizar nuestras actividades diarias",
      "Sustancias que solo sirven para hidratarnos",
      "Sustancias que no necesitamos",
      "Únicamente vitaminas"
    ],
    answer: 0,
    explanation: "Los glúcidos (hidratos de carbono) y los lípidos (grasas) proporcionan energía al organismo."
  },
  {
    q: "¿Qué son las vacunas y para qué sirven?",
    options: [
      "Son medicamentos que curan huesos rotos",
      "Son preparados que previenen enfermedades infecciosas enseñando a nuestras defensas a combatir los microbios",
      "Son vitaminas para crecer más rápido",
      "Son analgésicos para el dolor de cabeza"
    ],
    answer: 1,
    explanation: "Las vacunas son una medida fundamental de prevención que inmuniza frente a enfermedades graves."
  },
  {
    q: "¿Cuál es el archipiélago español situado en el mar Mediterráneo?",
    options: ["Las Islas Canarias", "Las Islas Baleares", "Las Islas Cíes", "Las Islas Columbretes"],
    answer: 1,
    explanation: "Las Islas Baleares (Mallorca, Menorca, Ibiza, Formentera y Cabrera) están en el mar Mediterráneo."
  },
  {
    q: "¿Qué cordillera rodea la Meseta por el norte y tiene cumbres como los Picos de Europa?",
    options: ["Sierra Morena", "La Cordillera Cantábrica", "Los Sistemas Béticos", "El Sistema Central"],
    answer: 1,
    explanation: "La Cordillera Cantábrica bordea la Meseta por el norte paralela al mar Cantábrico."
  },
  {
    q: "¿Qué dos grandes depresiones exteriores a la Meseta existen en la Península Ibérica?",
    options: [
      "La Depresión del Duero y la del Tajo",
      "La Depresión del Ebro y la Depresión del Guadalquivir",
      "La Depresión del Segura y del Júcar",
      "La Submeseta Norte y Sur"
    ],
    answer: 1,
    explanation: "Las dos grandes llanuras triangulares exteriores a la Meseta son las depresiones del Ebro y del Guadalquivir."
  },
  {
    q: "¿Qué factor geográfico hace que las temperaturas bajen aproximadamente 0,6 ºC cada 100 metros que subimos?",
    options: ["La cercanía al mar", "La altitud", "La latitud", "Las corrientes marinas"],
    answer: 1,
    explanation: "A mayor altitud, menor temperatura; por eso en las cumbres de las montañas hace más frío y nieva."
  },
  {
    q: "¿Por qué en las zonas costeras las temperaturas son más suaves que en el interior peninsular?",
    options: [
      "Porque el mar se calienta y se enfría más despacio que la tierra, suavizando el clima",
      "Porque en la costa nunca hace viento",
      "Porque están más cerca del Sol",
      "Porque no hay nubes"
    ],
    answer: 0,
    explanation: "El mar actúa como regulador térmico, evitando inviernos muy fríos y veranos excesivamente calurosos."
  },
  {
    q: "¿Qué es el ciclo integral del agua urbana?",
    options: [
      "El agua que cae en los océanos",
      "Captación, potabilización, distribución, alcantarillado y depuración antes de devolverla al río",
      "La evaporación de los lagos",
      "El riego de los bosques"
    ],
    answer: 1,
    explanation: "Antes de llegar al grifo el agua se potabiliza (ETAP) y tras usarla se limpia en una depuradora (EDAR)."
  },
  {
    q: "¿Qué es la población activa de un país?",
    options: [
      "Solo los niños y los jubilados",
      "El conjunto de personas en edad de trabajar que tienen un empleo (ocupada) o lo buscan (parada)",
      "Únicamente los deportistas",
      "Toda la población menor de 16 años"
    ],
    answer: 1,
    explanation: "La población activa incluye a la población ocupada y a la población desempleada que busca trabajo."
  },
  {
    q: "¿Qué tipo de ganadería cría al ganado al aire libre aprovechando los pastos naturales?",
    options: ["Ganadería intensiva", "Ganadería extensiva", "Acuicultura", "Apicultura"],
    answer: 1,
    explanation: "La ganadería extensiva aprovecha los pastos naturales en libertad, mientras que la intensiva se realiza en granjas."
  },
  {
    q: "¿Qué es el comercio exterior de un país?",
    options: [
      "Las compras en las tiendas del barrio",
      "El intercambio de productos con otros países mediante exportaciones (ventas) e importaciones (compras)",
      "El transporte en autobús urbano",
      "La venta de entradas de cine"
    ],
    answer: 1,
    explanation: "Exportar es vender productos al extranjero e importar es comprar productos de otros países."
  },
  {
    q: "¿Qué institución de la Unión Europea está formada por diputados elegidos por los ciudadanos europeos cada 5 años?",
    options: ["El Banco Central Europeo", "El Parlamento Europeo", "El Tribunal Supremo", "La ONU"],
    answer: 1,
    explanation: "El Parlamento Europeo representa a los ciudadanos de la Unión Europea y aprueba leyes junto al Consejo."
  },
  {
    q: "¿Qué importancia tiene el yacimiento arqueológico de Atapuerca (Burgos)?",
    options: [
      "Es un teatro romano",
      "Contiene los restos de los primeros seres humanos que habitaron Europa hace más de 800.000 años",
      "Es una catedral gótica",
      "Es un castillo medieval"
    ],
    answer: 1,
    explanation: "En la Sierra de Atapuerca se hallaron restos de Homo antecessor, los europeos más antiguos conocidos."
  },
  {
    q: "¿Qué legado cultural nos dejaron los musulmanes de Al-Ándalus en España?",
    options: [
      "El latín y los acueductos",
      "Monumentos como la Alhambra y la Mezquita de Córdoba, técnicas de riego, el ajedrez y miles de palabras (almohada, aceituna, alcalde...)",
      "Las cuevas de Altamira",
      "Los castros celtas"
    ],
    answer: 1,
    explanation: "Al-Ándalus dejó una huella profunda en nuestra arquitectura, agricultura de regadío, ciencia y vocabulario."
  },
  {
    q: "¿Qué significa que un material sea biodegradable?",
    options: [
      "Que tarda miles de años en desaparecer",
      "Que puede descomponerse de forma natural por la acción de microorganismos sin contaminar",
      "Que está hecho de plástico duro",
      "Que es radiactivo"
    ],
    answer: 1,
    explanation: "Los materiales biodegradables (como el papel, el cartón o los restos orgánicos) se reintegran en la naturaleza."
  },
  {
    q: "¿Qué fenómeno luminoso ocurre cuando la luz blanca atraviesa gotas de lluvia o un prisma y se descompone en los siete colores?",
    options: ["La reflexión", "La dispersión de la luz (arcoíris)", "La sombra", "La opacidad"],
    answer: 1,
    explanation: "La luz blanca está formada por todos los colores del espectro visible, que se separan al refractarse."
  },
  {
    q: "¿Por qué vemos un objeto de color rojo cuando le da la luz blanca?",
    options: [
      "Porque absorbe todos los colores menos el rojo, que lo refleja hacia nuestros ojos",
      "Porque emite fuego",
      "Porque es transparente",
      "Porque absorbe solo el color rojo"
    ],
    answer: 0,
    explanation: "El color de los objetos opacos depende de la luz que reflejan y no absorben."
  },
  {
    q: "¿Cuál es la regla de las '3 R' para cuidar el planeta y reducir los residuos?",
    options: [
      "Romper, regalar y recoger",
      "Reducir, reutilizar y reciclar",
      "Correr, saltar y jugar",
      "Reforestar, regar y recolectar"
    ],
    answer: 1,
    explanation: "Reducir el consumo innecesario, reutilizar objetos y reciclar en el contenedor adecuado son claves para la sostenibilidad."
  }
];