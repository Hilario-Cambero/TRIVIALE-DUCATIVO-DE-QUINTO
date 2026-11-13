/* ==========================================================================
   BANCO DE PREGUNTAS DE MATEMÁTICAS - 5º DE EDUCACIÓN PRIMARIA (210 PREGUNTAS)
   Ajustado al currículo LOMLOE de la editorial Santillana (Construyendo Mundos):
   - Bloque 1: Números naturales, romanos, potencias y operaciones combinadas
   - Bloque 2: Múltiplos, divisores, criterios de divisibilidad, primos y compuestos
   - Bloque 3: Fracciones y operaciones con fracciones
   - Bloque 4: Números decimales y operaciones con decimales
   - Bloque 5: Porcentajes y proporcionalidad
   - Bloque 6: Sistema Métrico Decimal (Longitud, Capacidad, Masa y Superficie)
   - Bloque 7: Tiempo, sistema sexagesimal y sistema monetario
   - Bloque 8: Geometría (ángulos, polígonos, perímetros, áreas y cuerpos)
   - Bloque 9: Estadística y probabilidad
   ========================================================================== */

window.QUESTION_BANK = window.QUESTION_BANK || {};

window.QUESTION_BANK.matematicas = [
  // --- BLOQUE 1: NÚMEROS NATURALES, ROMANOS, POTENCIAS Y OPERACIONES COMBINADAS ---
  {
    q: "¿Qué valor tiene la cifra 7 en el número 4.725.810?",
    options: ["70.000 unidades", "700.000 unidades", "7.000.000 unidades", "7.000 unidades"],
    answer: 1,
    explanation: "La cifra 7 ocupa el lugar de las centenas de millar (7 CM), que equivalen a 700.000 unidades."
  },
  {
    q: "¿Cómo se escribe con cifras el número 'tres millones cuarenta mil doscientos cinco'?",
    options: ["3.400.205", "3.040.205", "3.004.250", "3.402.005"],
    answer: 1,
    explanation: "3 millones (3.000.000) + 40 mil (40.000) + 205 = 3.040.205."
  },
  {
    q: "¿Cuál es la aproximación (redondeo) a las centenas de millar del número 6.482.190?",
    options: ["6.400.000", "6.500.000", "6.000.000", "6.480.000"],
    answer: 1,
    explanation: "Como la cifra siguiente (decenas de millar) es 8 (mayor o igual que 5), redondeamos hacia arriba: 6.500.000."
  },
  {
    q: "¿Qué número romano corresponde al año 2026?",
    options: ["MMXXIV", "MMXXVI", "MMXXXVI", "CCMXXVI"],
    answer: 1,
    explanation: "MM (2000) + XX (20) + VI (6) = MMXXVI."
  },
  {
    q: "¿Qué valor tiene el número romano CMXLIV?",
    options: ["1.144", "944", "964", "1.164"],
    answer: 1,
    explanation: "CM = 900, XL = 40, IV = 4; en total 900 + 40 + 4 = 944."
  },
  {
    q: "¿Cuál es el resultado de la operación combinada: 24 − 6 × 3 + 2?",
    options: ["56", "8", "4", "12"],
    answer: 1,
    explanation: "Primero multiplicamos: 6 × 3 = 18. Luego operamos de izquierda a derecha: 24 − 18 + 2 = 6 + 2 = 8."
  },
  {
    q: "¿Cuál es el resultado de: (15 + 9) : 3 × 2?",
    options: ["4", "16", "12", "18"],
    answer: 1,
    explanation: "Primero el paréntesis: 15 + 9 = 24. Después de izquierda a derecha: 24 : 3 = 8; y 8 × 2 = 16."
  },
  {
    q: "¿Qué propiedad de la multiplicación se aplica en la igualdad: 5 × (8 + 4) = 5 × 8 + 5 × 4?",
    options: ["Propiedad conmutativa", "Propiedad asociativa", "Propiedad distributiva", "Elemento neutro"],
    answer: 2,
    explanation: "La propiedad distributiva permite multiplicar un número por una suma multiplicándolo por cada sumando y sumando los resultados."
  },
  {
    q: "En una división entera, el divisor es 7, el cociente es 12 y el resto es 4. ¿Cuál es el dividendo?",
    options: ["84", "88", "76", "92"],
    answer: 1,
    explanation: "Prueba de la división: Dividendo = divisor × cociente + resto → 7 × 12 + 4 = 84 + 4 = 88."
  },
  {
    q: "¿Cuál es el mayor resto posible que puede tener una división exacta o entera cuyo divisor es 9?",
    options: ["9", "8", "10", "1"],
    answer: 1,
    explanation: "El resto siempre debe ser menor que el divisor; si el divisor es 9, el mayor resto posible es 8."
  },
  {
    q: "¿Cómo se expresa en forma de potencia el producto 4 × 4 × 4 × 4 × 4?",
    options: ["5⁴", "4⁵", "4 × 5", "20"],
    answer: 1,
    explanation: "La base es el factor que se repite (4) y el exponente es el número de veces que se repite (5): 4⁵."
  },
  {
    q: "¿Cuál es el valor de la potencia 3⁴?",
    options: ["12", "27", "81", "64"],
    answer: 2,
    explanation: "3⁴ = 3 × 3 × 3 × 3 = 9 × 9 = 81."
  },
  {
    q: "¿Cómo se lee la potencia 7²?",
    options: ["Siete al cubo", "Siete al cuadrado", "Dos a la séptima", "Siete por dos"],
    answer: 1,
    explanation: "Cuando el exponente es 2 se lee 'al cuadrado' (7² = 49)."
  },
  {
    q: "¿Cómo se lee la potencia 5³ y cuánto vale?",
    options: ["Cinco al cuadrado = 25", "Cinco al cubo = 125", "Cinco al cubo = 15", "Tres a la quinta = 243"],
    answer: 1,
    explanation: "Exponente 3 se lee 'al cubo': 5³ = 5 × 5 × 5 = 125."
  },
  {
    q: "¿Qué número representa la descomposición polinómica: 6 × 10⁵ + 3 × 10³ + 8 × 10 + 2?",
    options: ["63.082", "603.082", "630.802", "6.003.082"],
    answer: 1,
    explanation: "600.000 + 3.000 + 80 + 2 = 603.082."
  },
  {
    q: "Si multiplicamos un número natural por 1.000, ¿qué ocurre con sus cifras?",
    options: [
      "Se añaden dos ceros a la derecha",
      "Se añaden tres ceros a la derecha",
      "Se divide entre 10",
      "No cambia nada"
    ],
    answer: 1,
    explanation: "Al multiplicar un número natural por 1.000, añadimos tres ceros a su derecha."
  },
  {
    q: "¿Cuál es el cociente de dividir 45.000 : 150?",
    options: ["30", "300", "3.000", "3"],
    answer: 1,
    explanation: "Suprimimos un cero en dividendo y divisor: 4.500 : 15 = 300."
  },
  {
    q: "En una resta, si sumamos el sustraendo y la diferencia, ¿qué obtenemos?",
    options: ["Cero", "El minuendo", "El doble del sustraendo", "El cociente"],
    answer: 1,
    explanation: "La prueba de la resta dice que Sustraendo + Diferencia = Minuendo."
  },
  {
    q: "¿Qué número falta en la igualdad: 120 − ___ = 45?",
    options: ["85", "75", "65", "165"],
    answer: 1,
    explanation: "120 − 45 = 75."
  },
  {
    q: "Un camión transporta 245 cajas con 36 botellas de agua en cada caja. ¿Cuántas botellas lleva en total?",
    options: ["8.820 botellas", "7.820 botellas", "8.620 botellas", "9.120 botellas"],
    answer: 0,
    explanation: "245 × 36 = 245 × 30 + 245 × 6 = 7.350 + 1.470 = 8.820 botellas."
  },

  // --- BLOQUE 2: MÚLTIPLOS, DIVISORES Y DIVISIBILIDAD ---
  {
    q: "¿Cuál de los siguientes números es múltiplo de 8?",
    options: ["42", "56", "68", "36"],
    answer: 1,
    explanation: "56 es múltiplo de 8 porque 8 × 7 = 56."
  },
  {
    q: "¿Cuántos múltiplos tiene un número natural distinto de cero?",
    options: ["Solo 10", "Infinitos", "Solo 2", "Depende de si es par"],
    answer: 1,
    explanation: "Los múltiplos de un número son infinitos porque podemos multiplicarlo por 0, 1, 2, 3, 4... sin fin."
  },
  {
    q: "¿Cuál de estos números es divisor de 36?",
    options: ["5", "8", "9", "7"],
    answer: 2,
    explanation: "9 es divisor de 36 porque la división 36 : 9 = 4 es exacta (resto 0)."
  },
  {
    q: "¿Cuál es el conjunto completo de los divisores de 12?",
    options: ["1, 2, 3, 4, 6, 12", "2, 3, 4, 6", "1, 2, 6, 12", "1, 3, 4, 12"],
    answer: 0,
    explanation: "Los divisores de 12 son 1, 2, 3, 4, 6 y 12."
  },
  {
    q: "Según los criterios de divisibilidad, ¿cuándo un número es divisible por 3?",
    options: [
      "Cuando termina en 3",
      "Cuando la suma de sus cifras es múltiplo de 3",
      "Cuando es un número impar",
      "Cuando termina en 0 o en 5"
    ],
    answer: 1,
    explanation: "Un número es divisible por 3 si al sumar todas sus cifras obtenemos un múltiplo de 3 (por ejemplo, 126 → 1+2+6=9)."
  },
  {
    q: "¿Cuál de estos números es divisible a la vez por 2 y por 5?",
    options: ["35", "42", "70", "55"],
    answer: 2,
    explanation: "Para ser divisible por 2 (par) y por 5 (terminar en 0 o 5) a la vez, debe terminar en 0: el 70."
  },
  {
    q: "¿Cuál de estos números es divisible por 9?",
    options: ["235", "468", "512", "304"],
    answer: 1,
    explanation: "La suma de las cifras de 468 es 4 + 6 + 8 = 18, que es múltiplo de 9."
  },
  {
    q: "¿Qué es un número primo?",
    options: [
      "Un número que solo es par",
      "Un número mayor que 1 que solo tiene dos divisores: el 1 y él mismo",
      "Un número que tiene más de tres divisores",
      "Cualquier número impar"
    ],
    answer: 1,
    explanation: "Los números primos solo pueden dividirse de forma exacta entre 1 y entre sí mismos (como 2, 3, 5, 7, 11, 13...)."
  },
  {
    q: "¿Cuál es el único número primo que es par?",
    options: ["El 1", "El 2", "El 4", "El 6"],
    answer: 1,
    explanation: "El 2 solo tiene como divisores al 1 y al 2; todos los demás pares son divisibles entre 2 y son compuestos."
  },
  {
    q: "¿Cuál de los siguientes números es un número primo?",
    options: ["15", "21", "23", "27"],
    answer: 2,
    explanation: "23 solo es divisible por 1 y por 23. En cambio, 15, 21 y 27 son divisibles por 3."
  },
  {
    q: "¿Qué ocurre con el número 1 respecto a los números primos y compuestos?",
    options: [
      "Es el primer número primo",
      "Es un número compuesto",
      "No es ni primo ni compuesto porque solo tiene un divisor",
      "Es múltiplo de todos los números"
    ],
    answer: 2,
    explanation: "El número 1 solo tiene un divisor (él mismo), por lo que no se considera ni primo ni compuesto."
  },
  {
    q: "Queremos repartir 24 caramelos en bolsas iguales sin que sobre ninguno. ¿De cuántas maneras distintas podemos hacerlo?",
    options: ["4 maneras", "8 maneras (1, 2, 3, 4, 6, 8, 12 o 24 bolsas)", "6 maneras", "12 maneras"],
    answer: 1,
    explanation: "El número 24 tiene exactamente 8 divisores: 1, 2, 3, 4, 6, 8, 12 y 24."
  },
  {
    q: "¿Cuál es el mínimo común múltiplo (m.c.m.) de 4 y 6?",
    options: ["24", "12", "2", "10"],
    answer: 1,
    explanation: "Múltiplos de 4: 4, 8, 12, 16... Múltiplos de 6: 6, 12, 18... El menor múltiplo común distinto de cero es 12."
  },
  {
    q: "¿Cuál es el máximo común divisor (m.c.d.) de 12 y 18?",
    options: ["3", "6", "9", "36"],
    answer: 1,
    explanation: "Divisores de 12: 1, 2, 3, 4, 6, 12. Divisores de 18: 1, 2, 3, 6, 9, 18. El mayor divisor común es 6."
  },
  {
    q: "Dos autobuses salen de la estación a las 9:00. Uno pasa cada 10 minutos y otro cada 15 minutos. ¿A qué hora volverán a coincidir?",
    options: ["A las 9:25", "A las 9:30", "A las 9:45", "A las 10:00"],
    answer: 1,
    explanation: "El m.c.m. de 10 y 15 es 30 minutos; por tanto, vuelven a coincidir a las 9:30."
  },

  // --- BLOQUE 3: FRACCIONES Y OPERACIONES CON FRACCIONES ---
  {
    q: "En una fracción, ¿qué indica el denominador?",
    options: [
      "Las partes que tomamos",
      "El número total de partes iguales en que se divide la unidad",
      "El resultado de la suma",
      "El número de unidades enteras"
    ],
    answer: 1,
    explanation: "El denominador (abajo) indica en cuántas partes iguales dividimos la unidad; el numerador (arriba), cuántas tomamos."
  },
  {
    q: "¿Cómo se lee la fracción 5/12?",
    options: ["Cinco doce", "Cinco doceavos", "Doce quintos", "Cinco décimos"],
    answer: 1,
    explanation: "A partir del denominador 11 se añade la terminación '-avos': cinco doceavos."
  },
  {
    q: "¿Cuándo una fracción es menor que la unidad (fracción propia)?",
    options: [
      "Cuando el numerador es mayor que el denominador",
      "Cuando el numerador es menor que el denominador",
      "Cuando numerador y denominador son iguales",
      "Cuando el denominador es 1"
    ],
    answer: 1,
    explanation: "Si tomamos menos partes de las que tiene la unidad (ej. 3/5), la fracción es menor que 1."
  },
  {
    q: "¿A qué número natural equivale la fracción 24/6?",
    options: ["3", "4", "6", "18"],
    answer: 1,
    explanation: "Una fracción es una división: 24 : 6 = 4 unidades enteras."
  },
  {
    q: "¿Qué número mixto corresponde a la fracción impropia 11/4?",
    options: ["2 y 3/4", "3 y 1/4", "2 y 1/4", "1 y 3/4"],
    answer: 0,
    explanation: "Al dividir 11 : 4 obtenemos cociente 2 y resto 3, es decir, 2 unidades y 3/4."
  },
  {
    q: "¿Qué fracción impropia equivale al número mixto 3 y 2/5?",
    options: ["15/5", "17/5", "11/5", "10/5"],
    answer: 1,
    explanation: "3 × 5 + 2 = 17 quintos (17/5)."
  },
  {
    q: "¿Cómo sabemos si dos fracciones son equivalentes, como 2/3 y 6/9?",
    options: [
      "Porque tienen el mismo numerador",
      "Porque al multiplicar sus términos en cruz se obtiene el mismo resultado (2 × 9 = 3 × 6 = 18)",
      "Porque suman 10",
      "Porque tienen el mismo denominador"
    ],
    answer: 1,
    explanation: "Dos fracciones son equivalentes cuando representan la misma cantidad y sus productos cruzados son iguales."
  },
  {
    q: "¿Cuál de estas fracciones es equivalente a 3/4?",
    options: ["6/12", "9/12", "4/3", "6/9"],
    answer: 1,
    explanation: "Si multiplicamos numerador y denominador de 3/4 por 3 obtenemos 9/12."
  },
  {
    q: "¿Cuál es la fracción irreducible de 12/18?",
    options: ["6/9", "4/6", "2/3", "3/4"],
    answer: 2,
    explanation: "Dividiendo numerador y denominador entre su m.c.d. (6): 12:6 = 2 y 18:6 = 3 → 2/3."
  },
  {
    q: "Entre las fracciones 5/9 y 7/9, ¿cuál es mayor?",
    options: ["5/9", "7/9", "Son iguales", "No se pueden comparar"],
    answer: 1,
    explanation: "A igual denominador, es mayor la fracción que tiene mayor numerador: 7/9 > 5/9."
  },
  {
    q: "Entre las fracciones 4/7 y 4/11, ¿cuál es mayor?",
    options: ["4/7", "4/11", "Son iguales", "4/18"],
    answer: 0,
    explanation: "A igual numerador, es mayor la que tiene menor denominador (porque las partes son más grandes): 4/7 > 4/11."
  },
  {
    q: "¿Cuál es el resultado de: 3/8 + 4/8 − 2/8?",
    options: ["5/24", "5/8", "9/8", "5/0"],
    answer: 1,
    explanation: "Sumamos y restamos los numeradores dejando el mismo denominador: (3 + 4 − 2)/8 = 5/8."
  },
  {
    q: "¿Cuánto es 1 − 3/7?",
    options: ["2/7", "4/7", "3/6", "10/7"],
    answer: 1,
    explanation: "La unidad 1 equivale a 7/7; restamos 7/7 − 3/7 = 4/7."
  },
  {
    q: "Calcula los 3/5 de 40 alumnos.",
    options: ["15 alumnos", "24 alumnos", "20 alumnos", "30 alumnos"],
    answer: 1,
    explanation: "Dividimos 40 entre 5 (40 : 5 = 8) y multiplicamos por 3 (8 × 3 = 24 alumnos)."
  },
  {
    q: "En una caja hay 36 lápices. Si 2/9 son rojos, ¿cuántos lápices rojos hay?",
    options: ["4 lápices", "8 lápices", "12 lápices", "18 lápices"],
    answer: 1,
    explanation: "36 : 9 = 4; y 4 × 2 = 8 lápices rojos."
  },
  {
    q: "María ha leído 3/4 de un libro de 120 páginas. ¿Cuántas páginas le faltan por leer?",
    options: ["90 páginas", "30 páginas", "40 páginas", "60 páginas"],
    answer: 1,
    explanation: "Ha leído 3/4 de 120 = 90 páginas, por lo que le falta 1/4 = 30 páginas."
  },
  {
    q: "¿Cuánto es la suma de 1/2 + 1/4?",
    options: ["2/6", "3/4", "2/4", "1/6"],
    answer: 1,
    explanation: "1/2 equivale a 2/4; entonces 2/4 + 1/4 = 3/4."
  },
  {
    q: "¿Cuánto es 2/3 × 5?",
    options: ["10/15", "10/3", "7/3", "2/15"],
    answer: 1,
    explanation: "Para multiplicar una fracción por un número natural se multiplica el numerador por el número: (2 × 5)/3 = 10/3."
  },

  // --- BLOQUE 4: NÚMEROS DECIMALES Y OPERACIONES ---
  {
    q: "¿Cuántas centésimas hay en 3 décimas?",
    options: ["3 centésimas", "30 centésimas", "300 centésimas", "0,3 centésimas"],
    answer: 1,
    explanation: "1 décima = 10 centésimas, por lo que 3 décimas = 30 centésimas (0,3 = 0,30)."
  },
  {
    q: "¿Cómo se lee el número decimal 14,08?",
    options: [
      "Catorce unidades y ocho décimas",
      "Catorce unidades y ocho centésimas",
      "Catorce unidades y ocho milésimas",
      "Mil cuatrocientos ocho"
    ],
    answer: 1,
    explanation: "Al tener dos cifras decimales, el 8 ocupa el lugar de las centésimas."
  },
  {
    q: "¿Qué número decimal corresponde a 45 milésimas?",
    options: ["0,45", "0,045", "4,5", "0,0045"],
    answer: 1,
    explanation: "Las milésimas ocupan la tercera cifra decimal: 45/1000 = 0,045."
  },
  {
    q: "Ordena de menor a mayor estos números decimales: 2,45 - 2,5 - 2,09.",
    options: [
      "2,45 < 2,5 < 2,09",
      "2,09 < 2,45 < 2,5",
      "2,5 < 2,45 < 2,09",
      "2,09 < 2,5 < 2,45"
    ],
    answer: 1,
    explanation: "Comparando décimas y centésimas (2,09; 2,45; 2,50), el orden creciente es 2,09 < 2,45 < 2,5."
  },
  {
    q: "¿Cuál es el redondeo a las décimas del número 7,384?",
    options: ["7,3", "7,4", "7,0", "7,38"],
    answer: 1,
    explanation: "Como la cifra de las centésimas es 8 (≥ 5), aproximamos las décimas hacia arriba: 7,4."
  },
  {
    q: "¿Cuál es el resultado de sumar 12,45 + 3,8?",
    options: ["12,83", "16,25", "15,25", "16,43"],
    answer: 1,
    explanation: "Alineando las comas: 12,45 + 3,80 = 16,25."
  },
  {
    q: "¿Cuál es el resultado de restar 10 − 4,35?",
    options: ["6,35", "5,65", "6,65", "5,75"],
    answer: 1,
    explanation: "10,00 − 4,35 = 5,65."
  },
  {
    q: "¿Cuál es el resultado de multiplicar 4,25 × 100?",
    options: ["42,5", "425", "4.250", "0,0425"],
    answer: 1,
    explanation: "Al multiplicar por 100 desplazamos la coma dos lugares a la derecha: 425."
  },
  {
    q: "¿Cuál es el resultado de dividir 38,6 : 10?",
    options: ["386", "3,86", "0,386", "38,06"],
    answer: 1,
    explanation: "Al dividir entre 10 desplazamos la coma un lugar hacia la izquierda: 3,86."
  },
  {
    q: "¿Cuál es el resultado de dividir 7 : 100?",
    options: ["0,7", "0,07", "700", "0,007"],
    answer: 1,
    explanation: "7 : 100 = 0,07 (siete centésimas)."
  },
  {
    q: "Calcula el producto: 3,4 × 2,5.",
    options: ["8,5", "85", "0,85", "7,5"],
    answer: 0,
    explanation: "34 × 25 = 850; como hay dos cifras decimales en total, colocamos la coma: 8,50 = 8,5."
  },
  {
    q: "Un bolígrafo cuesta 1,35 €. ¿Cuánto costarán 4 bolígrafos iguales?",
    options: ["4,40 €", "5,40 €", "5,20 €", "4,35 €"],
    answer: 1,
    explanation: "1,35 × 4 = 5,40 €."
  },
  {
    q: "Hemos pagado 15,60 € por 6 cuadernos iguales. ¿Cuánto cuesta cada cuaderno?",
    options: ["2,40 €", "2,60 €", "2,50 €", "3,10 €"],
    answer: 1,
    explanation: "15,60 : 6 = 2,60 € cada cuaderno."
  },
  {
    q: "¿Qué número decimal está exactamente a mitad de camino entre 3,4 y 3,5?",
    options: ["3,41", "3,45", "3,49", "3,55"],
    answer: 1,
    explanation: "Entre 3,40 y 3,50 el punto medio es 3,45."
  },
  {
    q: "¿A qué número decimal equivale la fracción 3/4?",
    options: ["0,34", "0,75", "0,25", "0,5"],
    answer: 1,
    explanation: "Al dividir 3 : 4 = 0,75."
  },

  // --- BLOQUE 5: PORCENTAJES Y PROPORCIONALIDAD ---
  {
    q: "¿Qué significa el porcentaje 35%?",
    options: ["35 de cada 10", "35 de cada 100 (35/100)", "35 de cada 1.000", "3,5 unidades"],
    answer: 1,
    explanation: "Un porcentaje representa una fracción de denominador 100: 35% = 35/100 = 0,35."
  },
  {
    q: "¿A qué porcentaje equivale la fracción 1/2 (la mitad)?",
    options: ["20%", "50%", "25%", "100%"],
    answer: 1,
    explanation: "La mitad de 100 es 50, por tanto 1/2 = 50%."
  },
  {
    q: "¿A qué porcentaje equivale la fracción 1/4 (la cuarta parte)?",
    options: ["14%", "25%", "40%", "75%"],
    answer: 1,
    explanation: "La cuarta parte de 100 es 25, por tanto 1/4 = 25%."
  },
  {
    q: "Calcula el 10% de 250 euros.",
    options: ["10 euros", "25 euros", "50 euros", "2,5 euros"],
    answer: 1,
    explanation: "Calcular el 10% equivale a dividir entre 10: 250 : 10 = 25 euros."
  },
  {
    q: "Calcula el 20% de 80.",
    options: ["16", "20", "40", "8"],
    answer: 0,
    explanation: "(20 × 80) : 100 = 1.600 : 100 = 16."
  },
  {
    q: "Una camiseta cuesta 30 € y tiene un descuento del 10%. ¿Cuánto pagaremos finalmente por ella?",
    options: ["20 €", "27 €", "3 €", "33 €"],
    answer: 1,
    explanation: "El 10% de 30 € es 3 € de descuento; 30 − 3 = 27 €."
  },
  {
    q: "En una clase de 25 alumnos, el 40% lleva gafas. ¿Cuántos alumnos llevan gafas?",
    options: ["4 alumnos", "10 alumnos", "15 alumnos", "8 alumnos"],
    answer: 1,
    explanation: "40% de 25 = (40 × 25) : 100 = 1.000 : 100 = 10 alumnos."
  },
  {
    q: "Si 3 entradas de cine cuestan 18 €, ¿cuánto costarán 5 entradas al mismo precio (proporcionalidad directa)?",
    options: ["25 €", "30 €", "36 €", "24 €"],
    answer: 1,
    explanation: "Reducción a la unidad: 1 entrada cuesta 18 : 3 = 6 €; por tanto, 5 entradas cuestan 5 × 6 = 30 €."
  },
  {
    q: "Para hacer un bizcocho para 4 personas se necesitan 200 g de harina. ¿Cuánta harina necesitaremos para 6 personas?",
    options: ["250 g", "300 g", "400 g", "350 g"],
    answer: 1,
    explanation: "Para 1 persona son 200 : 4 = 50 g; para 6 personas son 50 × 6 = 300 g."
  },
  {
    q: "En un mapa a escala 1 : 10.000, ¿cuántos metros en la realidad representa 1 centímetro del mapa?",
    options: ["10 metros", "100 metros", "1.000 metros", "10.000 metros"],
    answer: 1,
    explanation: "1 cm en el mapa son 10.000 cm en la realidad; pasando cm a metros (dividiendo entre 100) son 100 metros."
  },

  // --- BLOQUE 6: SISTEMA MÉTRICO DECIMAL (LONGITUD, CAPACIDAD, MASA, SUPERFICIE) ---
  {
    q: "¿Cuál es la unidad principal de medida de longitud en el Sistema Internacional?",
    options: ["El kilómetro", "El metro", "El centímetro", "El litro"],
    answer: 1,
    explanation: "La unidad principal de longitud es el metro (m)."
  },
  {
    q: "¿Cuántos centímetros hay en 4,2 metros?",
    options: ["42 cm", "420 cm", "4.200 cm", "0,42 cm"],
    answer: 1,
    explanation: "De metros a centímetros multiplicamos por 100: 4,2 × 100 = 420 cm."
  },
  {
    q: "Expresa en metros la medida compleja: 2 km 3 hm 5 dam.",
    options: ["235 m", "2.350 m", "20.350 m", "2.035 m"],
    answer: 1,
    explanation: "2.000 m + 300 m + 50 m = 2.350 m."
  },
  {
    q: "¿Cuántos milímetros mide un lápiz de 14,5 cm?",
    options: ["1,45 mm", "145 mm", "1.450 mm", "14500 mm"],
    answer: 1,
    explanation: "1 cm = 10 mm, por tanto 14,5 × 10 = 145 mm."
  },
  {
    q: "¿Cuántos vasos de 250 ml (un cuarto de litro) se pueden llenar con una botella de 2 litros?",
    options: ["4 vasos", "8 vasos", "6 vasos", "10 vasos"],
    answer: 1,
    explanation: "2 litros son 2.000 ml; 2.000 : 250 = 8 vasos."
  },
  {
    q: "¿Cuántos centilitros hay en 3,5 litros?",
    options: ["35 cl", "350 cl", "3.500 cl", "0,35 cl"],
    answer: 1,
    explanation: "1 litro = 100 cl → 3,5 × 100 = 350 cl."
  },
  {
    q: "¿Cuántos kilogramos son 3,5 toneladas (t)?",
    options: ["35 kg", "350 kg", "3.500 kg", "35.000 kg"],
    answer: 2,
    explanation: "1 tonelada = 1.000 kg; por tanto, 3,5 × 1.000 = 3.500 kg."
  },
  {
    q: "¿Cuántos gramos son 3 cuartos de kilo (3/4 kg)?",
    options: ["250 g", "500 g", "750 g", "800 g"],
    answer: 2,
    explanation: "1 kg = 1.000 g; 3/4 de 1.000 = 750 g."
  },
  {
    q: "Ordena de menor a mayor: 1.500 g — 2 kg — 18 hg.",
    options: [
      "1.500 g < 18 hg < 2 kg",
      "2 kg < 18 hg < 1.500 g",
      "18 hg < 1.500 g < 2 kg",
      "1.500 g < 2 kg < 18 hg"
    ],
    answer: 0,
    explanation: "Pasamos todo a gramos: 1.500 g, 18 hg = 1.800 g, y 2 kg = 2.000 g."
  },
  {
    q: "En las unidades de superficie, ¿por cuánto multiplicamos o dividimos para pasar de una unidad a la inmediatamente siguiente (ej. de m² a dm²)?",
    options: ["Por 10", "Por 100", "Por 1.000", "Por 2"],
    answer: 1,
    explanation: "Las unidades de superficie van de 100 en 100 (1 m² = 100 dm²)."
  },
  {
    q: "¿Cuántos decímetros cuadrados (dm²) son 5 m²?",
    options: ["50 dm²", "500 dm²", "5.000 dm²", "0,05 dm²"],
    answer: 1,
    explanation: "5 × 100 = 500 dm²."
  },
  {
    q: "¿A cuántos metros cuadrados equivale 1 hectárea (1 hm²)?",
    options: ["100 m²", "1.000 m²", "10.000 m²", "100.000 m²"],
    answer: 2,
    explanation: "1 hectárea = 1 hm² = 10.000 m²."
  },

  // --- BLOQUE 7: TIEMPO, SISTEMA SEXAGESIMAL Y DINERO ---
  {
    q: "¿Por qué decimos que las unidades de tiempo (horas, minutos y segundos) forman un sistema sexagesimal?",
    options: [
      "Porque van de 10 en 10",
      "Porque cada unidad equivale a 60 unidades del orden inferior",
      "Porque van de 100 en 100",
      "Porque tienen 6 días"
    ],
    answer: 1,
    explanation: "1 hora = 60 minutos y 1 minuto = 60 segundos (base 60)."
  },
  {
    q: "¿Cuántos segundos hay en 1 hora?",
    options: ["60 segundos", "360 segundos", "3.600 segundos", "6.000 segundos"],
    answer: 2,
    explanation: "60 minutos × 60 segundos = 3.600 segundos."
  },
  {
    q: "¿Cuántos minutos son 2 horas y cuarto?",
    options: ["115 minutos", "135 minutos", "125 minutos", "145 minutos"],
    answer: 1,
    explanation: "2 horas = 120 minutos + 15 minutos (un cuarto de hora) = 135 minutos."
  },
  {
    q: "Expresa en horas y minutos 150 minutos.",
    options: ["1 h 50 min", "2 h 30 min", "2 h 50 min", "3 h 00 min"],
    answer: 1,
    explanation: "120 minutos son 2 horas y sobran 30 minutos: 2 h 30 min."
  },
  {
    q: "Una película empieza a las 17:45 y dura 1 hora y 35 minutos. ¿A qué hora termina?",
    options: ["A las 18:80", "A las 19:20", "A las 19:10", "A las 18:20"],
    answer: 1,
    explanation: "17:45 + 1 h = 18:45; sumamos 35 min → 18:45 + 15 min = 19:00 + 20 min = 19:20."
  },
  {
    q: "¿Cuántos años son 3 siglos y 2 décadas?",
    options: ["32 años", "320 años", "302 años", "50 años"],
    answer: 1,
    explanation: "3 siglos (300 años) + 2 décadas (20 años) = 320 años."
  },
  {
    q: "¿En qué siglo estamos en el año 2026?",
    options: ["Siglo XX", "Siglo XXI", "Siglo XIX", "Siglo XXII"],
    answer: 1,
    explanation: "Los años comprendidos entre 2001 y 2100 pertenecen al siglo XXI."
  },
  {
    q: "Compramos un libro de 14,75 € y un estuche de 6,50 €. Si pagamos con un billete de 50 €, ¿cuánto nos devuelven?",
    options: ["28,75 €", "29,75 €", "28,25 €", "21,25 €"],
    answer: 0,
    explanation: "Gasto total: 14,75 + 6,50 = 21,25 €. Vuelta: 50,00 − 21,25 = 28,75 €."
  },

  // --- BLOQUE 8: GEOMETRÍA PLANA, ÁNGULOS, PERÍMETROS Y ÁREAS ---
  {
    q: "¿Cuánto mide un ángulo recto y cuánto un ángulo llano?",
    options: [
      "Recto = 45º y llano = 90º",
      "Recto = 90º y llano = 180º",
      "Recto = 180º y llano = 360º",
      "Recto = 60º y llano = 120º"
    ],
    answer: 1,
    explanation: "Un ángulo recto mide exactamente 90º y un ángulo llano mide 180º."
  },
  {
    q: "¿Cómo se llaman dos ángulos cuya suma es igual a 90º?",
    options: ["Suplementarios", "Complementarios", "Opuestos por el vértice", "Obtusos"],
    answer: 1,
    explanation: "Dos ángulos complementarios suman 90º (un recto); los suplementarios suman 180º (un llano)."
  },
  {
    q: "Si un ángulo mide 115º, ¿cuánto mide su ángulo suplementario?",
    options: ["65º", "75º", "25º", "245º"],
    answer: 0,
    explanation: "180º − 115º = 65º."
  },
  {
    q: "¿Cuánto suman siempre los tres ángulos interiores de cualquier triángulo?",
    options: ["90º", "180º", "360º", "270º"],
    answer: 1,
    explanation: "La suma de los ángulos interiores de un triángulo es siempre 180º."
  },
  {
    q: "En un triángulo rectángulo, uno de sus ángulos agudos mide 35º. ¿Cuánto mide el otro ángulo agudo?",
    options: ["65º", "55º", "45º", "145º"],
    answer: 1,
    explanation: "180º − 90º (recto) − 35º = 55º."
  },
  {
    q: "¿Cómo se clasifica un triángulo que tiene dos lados iguales y uno desigual?",
    options: ["Equilátero", "Isósceles", "Escaleno", "Obtusángulo"],
    answer: 1,
    explanation: "Según sus lados: equilátero (3 iguales), isósceles (2 iguales) y escaleno (3 desiguales)."
  },
  {
    q: "¿Cómo se llaman los cuadriláteros que tienen sus lados opuestos paralelos dos a dos (cuadrado, rectángulo, rombo y romboide)?",
    options: ["Trapecios", "Paralelogramos", "Trapezoides", "Pentágonos"],
    answer: 1,
    explanation: "Los paralelogramos tienen dos pares de lados paralelos."
  },
  {
    q: "¿Qué cuadrilátero tiene solo dos lados paralelos (llamados base mayor y base menor)?",
    options: ["El rombo", "El trapecio", "El trapezoide", "El romboide"],
    answer: 1,
    explanation: "El trapecio tiene únicamente dos lados paralelos."
  },
  {
    q: "¿Cuántos lados tiene un octógono y cuánto mide su perímetro si es regular y cada lado mide 6 cm?",
    options: [
      "6 lados y 36 cm de perímetro",
      "8 lados y 48 cm de perímetro",
      "8 lados y 14 cm de perímetro",
      "10 lados y 60 cm de perímetro"
    ],
    answer: 1,
    explanation: "Un octógono tiene 8 lados; si es regular, su perímetro es 8 × 6 = 48 cm."
  },
  {
    q: "¿Cuál es el área de un rectángulo cuya base mide 9 cm y su altura mide 4 cm?",
    options: ["13 cm²", "26 cm²", "36 cm²", "18 cm²"],
    answer: 2,
    explanation: "Área del rectángulo = base × altura = 9 × 4 = 36 cm²."
  },
  {
    q: "¿Cuál es el área de un triángulo de 10 cm de base y 6 cm de altura?",
    options: ["60 cm²", "30 cm²", "16 cm²", "32 cm²"],
    answer: 1,
    explanation: "Área del triángulo = (base × altura) : 2 = (10 × 6) : 2 = 30 cm²."
  },
  {
    q: "Si el perímetro de un cuadrado es 28 cm, ¿cuánto mide su área?",
    options: ["7 cm²", "49 cm²", "14 cm²", "56 cm²"],
    answer: 1,
    explanation: "Cada lado mide 28 : 4 = 7 cm; por tanto, su área es 7 × 7 = 49 cm²."
  },
  {
    q: "¿Qué diferencia hay entre una circunferencia y un círculo?",
    options: [
      "No hay diferencia",
      "La circunferencia es la línea curva cerrada exterior y el círculo es la superficie interior delimitada por ella",
      "El círculo es cuadrado",
      "La circunferencia tiene área y el círculo no"
    ],
    answer: 1,
    explanation: "La circunferencia es el borde (longitud) y el círculo es el interior (superficie)."
  },
  {
    q: "Si el radio de una circunferencia mide 4,5 cm, ¿cuánto mide su diámetro?",
    options: ["2,25 cm", "9 cm", "13,5 cm", "18 cm"],
    answer: 1,
    explanation: "El diámetro es el doble del radio: 4,5 × 2 = 9 cm."
  },
  {
    q: "¿Cómo se calcula la longitud de una circunferencia conocida la medida de su diámetro (D)?",
    options: ["D × 2", "D × π (aprox. D × 3,14)", "D + π", "D : 3,14"],
    answer: 1,
    explanation: "Longitud de la circunferencia = Diámetro × π = 2 × π × radio."
  },
  {
    q: "¿Cómo se llama el movimiento geométrico que consiste en doblar una figura por una recta de modo que sus dos mitades coincidan exactamente?",
    options: ["Traslación", "Simetría (respecto a un eje)", "Giro", "Ampliación"],
    answer: 1,
    explanation: "La simetría axial divide la figura en dos mitades idénticas mediante un eje de simetría."
  },
  {
    q: "¿Cuántas caras, vértices y aristas tiene un cubo (hexaedro)?",
    options: [
      "6 caras, 8 vértices y 12 aristas",
      "8 caras, 6 vértices y 12 aristas",
      "4 caras, 4 vértices y 6 aristas",
      "6 caras, 12 vértices y 8 aristas"
    ],
    answer: 0,
    explanation: "Un cubo tiene 6 caras cuadradas, 8 vértices (esquinas) y 12 aristas."
  },
  {
    q: "¿Qué diferencia principal hay entre un prisma y una pirámide?",
    options: [
      "El prisma tiene dos bases iguales y paralelas y caras laterales rectangulares; la pirámide tiene una sola base y caras laterales triangulares que se unen en un vértice",
      "El prisma es redondo y la pirámide no",
      "La pirámide tiene dos bases",
      "No tienen caras planas"
    ],
    answer: 0,
    explanation: "Los prismas tienen 2 bases y caras laterales rectangulares; las pirámides tienen 1 base y caras triangulares."
  },
  {
    q: "¿Cuáles son los tres cuerpos redondos principales?",
    options: [
      "Cubo, prisma y pirámide",
      "Cilindro, cono y esfera",
      "Círculo, triángulo y cuadrado",
      "Tetraedro, octaedro y dodecaedro"
    ],
    answer: 1,
    explanation: "El cilindro (2 bases circulares), el cono (1 base circular y un vértice) y la esfera (toda curva) son cuerpos redondos."
  },

  // --- BLOQUE 9: ESTADÍSTICA Y PROBABILIDAD ---
  {
    q: "En un estudio estadístico, ¿qué es la frecuencia absoluta de un dato?",
    options: [
      "El dato que más se repite",
      "El número de veces que aparece ese dato en el recuento",
      "La suma de todos los datos",
      "El dato más pequeño"
    ],
    answer: 1,
    explanation: "La frecuencia absoluta indica cuántas veces se repite cada resultado."
  },
  {
    q: "¿Cómo se llama el valor que tiene mayor frecuencia absoluta (el que más se repite) en un conjunto de datos?",
    options: ["La media", "La moda", "El rango", "La mediana"],
    answer: 1,
    explanation: "La moda es el dato que aparece con mayor frecuencia."
  },
  {
    q: "Calcula la media aritmética de estas cuatro notas de Matemáticas: 6, 8, 7 y 9.",
    options: ["7", "7,5", "8", "30"],
    answer: 1,
    explanation: "Sumamos todos los datos (6 + 8 + 7 + 9 = 30) y dividimos entre el número de datos (4): 30 : 4 = 7,5."
  },
  {
    q: "¿Cómo se calcula el rango de un conjunto de datos numéricos?",
    options: [
      "Sumando todos los datos",
      "Restando el dato menor al dato mayor",
      "Dividiendo entre dos",
      "Eligiendo el dato del centro"
    ],
    answer: 1,
    explanation: "Rango = Valor máximo − Valor mínimo."
  },
  {
    q: "En una bolsa hay 5 bolas rojas y 3 bolas verdes. Si sacamos una bola sin mirar, ¿qué tipo de suceso es 'sacar una bola azul'?",
    options: ["Suceso seguro", "Suceso posible", "Suceso imposible", "Suceso muy probable"],
    answer: 2,
    explanation: "Como no hay ninguna bola azul en la bolsa, es un suceso imposible (probabilidad 0)."
  },
  {
    q: "Si lanzamos un dado cúbico normal del 1 al 6, ¿qué probabilidad hay de sacar un número par?",
    options: ["1/6", "3/6 (o 1/2)", "2/6", "4/6"],
    answer: 1,
    explanation: "Hay 3 casos favorables (2, 4 y 6) de 6 casos posibles: 3/6 = 1/2."
  },

  // --- BLOQUE 10: PROBLEMAS Y REPASO INTEGRAL 5º PRIMARIA (PREGUNTAS 111 - 210) ---
  {
    q: "¿Qué número es 100 unidades menor que 50.000?",
    options: ["49.000", "49.900", "49.990", "50.100"],
    answer: 1,
    explanation: "50.000 − 100 = 49.900."
  },
  {
    q: "¿Cuál es el resultado de 125 × 8?",
    options: ["800", "1.000", "1.200", "900"],
    answer: 1,
    explanation: "125 × 8 = 1.000 (truco muy útil de cálculo mental)."
  },
  {
    q: "¿Cuál es el resultado de 25 × 40?",
    options: ["100", "1.000", "10.000", "800"],
    answer: 1,
    explanation: "25 × 4 = 100, y añadiendo el cero del 40 obtenemos 1.000."
  },
  {
    q: "Si 12 × 15 = 180, ¿cuánto vale 12 × 16 sin hacer toda la multiplicación?",
    options: ["192", "195", "181", "196"],
    answer: 0,
    explanation: "Es un grupo más de 12: 180 + 12 = 192."
  },
  {
    q: "¿Qué número elevado al cuadrado da 64?",
    options: ["6", "7", "8", "32"],
    answer: 2,
    explanation: "8² = 8 × 8 = 64."
  },
  {
    q: "¿Cuánto vale 10⁶?",
    options: ["60", "100.000", "1.000.000", "10.000"],
    answer: 2,
    explanation: "Una potencia de base 10 es un 1 seguido de tantos ceros como indica el exponente: 1.000.000 (un millón)."
  },
  {
    q: "Calcula: 50 − (12 + 8) : 4.",
    options: ["45", "7,5", "30", "40"],
    answer: 0,
    explanation: "Paréntesis: 12 + 8 = 20. División: 20 : 4 = 5. Resta: 50 − 5 = 45."
  },
  {
    q: "Un teatro tiene 18 filas con 24 butacas cada una. Si se han vendido 350 entradas, ¿cuántas butacas quedan libres?",
    options: ["82 butacas", "72 butacas", "92 butacas", "62 butacas"],
    answer: 0,
    explanation: "Total butacas: 18 × 24 = 432. Libres: 432 − 350 = 82 butacas."
  },
  {
    q: "¿Cuál es el menor número de 4 cifras distintas que se puede formar con 5, 0, 8 y 2?",
    options: ["0258", "2.058", "2.508", "2.085"],
    answer: 1,
    explanation: "Un número de 4 cifras no puede empezar por 0; por tanto empieza por 2 seguido del 0: 2.058."
  },
  {
    q: "¿Qué cifra hay que poner en lugar de la X para que el número 4.32X sea divisible por 2 y por 3 a la vez?",
    options: ["0", "6", "4", "8"],
    answer: 1,
    explanation: "Para ser divisible por 2 debe ser par, y para serlo por 3 la suma de cifras debe ser múltiplo de 3: 4+3+2+6 = 15 (múltiplo de 3)."
  },
  {
    q: "¿Cuál es el m.c.m. de 3, 4 y 6?",
    options: ["24", "12", "18", "6"],
    answer: 1,
    explanation: "12 es múltiplo de 3 (3×4), de 4 (4×3) y de 6 (6×2)."
  },
  {
    q: "Tengo entre 30 y 40 cromos. Si los agrupo de 4 en 4 no sobra ninguno, y si los agrupo de 6 en 6 tampoco sobra ninguno. ¿Cuántos cromos tengo?",
    options: ["32 cromos", "36 cromos", "30 cromos", "38 cromos"],
    answer: 1,
    explanation: "36 es múltiplo común de 4 y 6 comprendido entre 30 y 40."
  },
  {
    q: "¿Qué fracción representa la parte coloreada si dividimos una barra en 10 partes iguales y pintamos 7?",
    options: ["7/10", "3/10", "10/7", "7/3"],
    answer: 0,
    explanation: "7 partes pintadas de 10 totales = 7/10."
  },
  {
    q: "¿Cuál de estas fracciones es mayor que la unidad?",
    options: ["5/6", "8/8", "9/7", "11/12"],
    answer: 2,
    explanation: "9/7 tiene el numerador mayor que el denominador (9 > 7), por lo que es mayor que 1."
  },
  {
    q: "En una carrera de 1.000 metros, Carlos ha recorrido ya 4/5 del recorrido. ¿Cuántos metros le faltan para llegar a la meta?",
    options: ["800 metros", "200 metros", "250 metros", "400 metros"],
    answer: 1,
    explanation: "Ha recorrido 4/5 de 1.000 = 800 m; le falta 1/5 = 200 m."
  },
  {
    q: "¿Qué fracción es equivalente a 15/20 tras simplificarla entre 5?",
    options: ["3/4", "5/4", "3/5", "2/3"],
    answer: 0,
    explanation: "15 : 5 = 3 y 20 : 5 = 4 → 3/4."
  },
  {
    q: "Suma estas fracciones con distinto denominador: 1/3 + 1/6.",
    options: ["2/9", "3/6 (o 1/2)", "2/6", "1/9"],
    answer: 1,
    explanation: "1/3 = 2/6; sumamos 2/6 + 1/6 = 3/6 = 1/2."
  },
  {
    q: "Resta estas fracciones: 5/6 − 1/2.",
    options: ["4/4", "2/6 (o 1/3)", "4/6", "1/6"],
    answer: 1,
    explanation: "1/2 = 3/6; restamos 5/6 − 3/6 = 2/6 = 1/3."
  },
  {
    q: "¿Cuántas milésimas son 2 unidades y 4 décimas?",
    options: ["24 milésimas", "240 milésimas", "2.400 milésimas", "204 milésimas"],
    answer: 2,
    explanation: "2,4 × 1.000 = 2.400 milésimas."
  },
  {
    q: "¿Qué número decimal es mayor: 0,8 o 0,799?",
    options: ["0,799", "0,8", "Son iguales", "0,08"],
    answer: 1,
    explanation: "0,8 = 0,800, que tiene 8 décimas frente a las 7 décimas de 0,799."
  },
  {
    q: "Calcula: 6,4 + 2,75 − 1,15.",
    options: ["8,00", "7,90", "8,10", "7,00"],
    answer: 0,
    explanation: "6,40 + 2,75 = 9,15; luego 9,15 − 1,15 = 8,00 = 8."
  },
  {
    q: "Calcula: 0,6 × 0,4.",
    options: ["2,4", "0,24", "0,024", "24"],
    answer: 1,
    explanation: "6 × 4 = 24; como hay dos cifras decimales en total, el resultado es 0,24."
  },
  {
    q: "¿Por qué número hay que multiplicar 0,045 para obtener 45?",
    options: ["Por 10", "Por 100", "Por 1.000", "Por 10.000"],
    answer: 2,
    explanation: "Al desplazar la coma tres lugares a la derecha multiplicamos por 1.000."
  },
  {
    q: "Un paquete de 100 folios pesa 480 gramos. ¿Cuánto pesa un solo folio?",
    options: ["48 gramos", "4,8 gramos", "0,48 gramos", "4.800 gramos"],
    answer: 1,
    explanation: "480 : 100 = 4,8 gramos por folio."
  },
  {
    q: "Calcula el 50% de 640.",
    options: ["320", "160", "64", "32"],
    answer: 0,
    explanation: "El 50% es la mitad: 640 : 2 = 320."
  },
  {
    q: "Calcula el 25% de 120.",
    options: ["25", "30", "40", "60"],
    answer: 1,
    explanation: "El 25% es la cuarta parte: 120 : 4 = 30."
  },
  {
    q: "Calcula el 75% de 200.",
    options: ["75", "150", "125", "175"],
    answer: 1,
    explanation: "75% = 3/4 de 200 = 150."
  },
  {
    q: "Un videojuego costaba 40 € y ha subido su precio un 15%. ¿Cuánto cuesta ahora?",
    options: ["46 €", "55 €", "44 €", "34 €"],
    answer: 0,
    explanation: "El 15% de 40 € es (15 × 40) : 100 = 6 €. Sumamos: 40 + 6 = 46 €."
  },
  {
    q: "Si 4 kg de naranjas cuestan 6 €, ¿cuánto costarán 10 kg de esas mismas naranjas?",
    options: ["12 €", "15 €", "16 €", "14 €"],
    answer: 1,
    explanation: "1 kg cuesta 6 : 4 = 1,50 €; por tanto, 10 kg cuestan 1,50 × 10 = 15 €."
  },
  {
    q: "¿Cuántos metros son 450 cm + 1,5 m + 20 dm?",
    options: ["8 metros", "6,5 metros", "47,5 metros", "10 metros"],
    answer: 0,
    explanation: "450 cm = 4,5 m; 1,5 m = 1,5 m; 20 dm = 2 m. Total: 4,5 + 1,5 + 2 = 8 metros."
  },
  {
    q: "¿Cuántos litros son 3 kl 5 hl 2 dal?",
    options: ["352 litros", "3.520 litros", "35.200 litros", "3.052 litros"],
    answer: 1,
    explanation: "3.000 l + 500 l + 20 l = 3.520 litros."
  },
  {
    q: "Una botella tiene una capacidad de 1,5 litros. ¿Cuántos mililitros contiene?",
    options: ["150 ml", "1.500 ml", "15.000 ml", "15 ml"],
    answer: 1,
    explanation: "1,5 × 1.000 = 1.500 ml."
  },
  {
    q: "Un ascensor admite una carga máxima de 450 kg. Si suben 5 personas que pesan 72 kg cada una, ¿cuántos kilos más admite?",
    options: ["360 kg", "90 kg", "80 kg", "100 kg"],
    answer: 1,
    explanation: "5 × 72 = 360 kg; quedan disponibles 450 − 360 = 90 kg."
  },
  {
    q: "¿Cuántos centímetros cuadrados (cm²) hay en 3 dm²?",
    options: ["30 cm²", "300 cm²", "3.000 cm²", "0,3 cm²"],
    answer: 1,
    explanation: "1 dm² = 100 cm², por tanto 3 dm² = 300 cm²."
  },
  {
    q: "Un campo rectangular mide 100 m de largo y 50 m de ancho. ¿Cuál es su superficie en metros cuadrados?",
    options: ["300 m²", "5.000 m²", "500 m²", "1.500 m²"],
    answer: 1,
    explanation: "100 × 50 = 5.000 m² (media hectárea)."
  },
  {
    q: "¿Cuántos minutos hay en medio día (12 horas)?",
    options: ["600 minutos", "720 minutos", "120 minutos", "360 minutos"],
    answer: 1,
    explanation: "12 horas × 60 minutos = 720 minutos."
  },
  {
    q: "Un atleta tarda 3 minutos y 45 segundos en dar una vuelta al circuito. ¿Cuántos segundos son en total?",
    options: ["180 segundos", "225 segundos", "345 segundos", "215 segundos"],
    answer: 1,
    explanation: "3 × 60 = 180 s; 180 + 45 = 225 segundos."
  },
  {
    q: "¿Qué ángulo forman las agujas de un reloj cuando marca exactamente las 3 en punto?",
    options: ["Un ángulo agudo (45º)", "Un ángulo recto (90º)", "Un ángulo obtuso (120º)", "Un ángulo llano (180º)"],
    answer: 1,
    explanation: "A las 3:00 la aguja horaria apunta al 3 y el minutero al 12, formando un ángulo recto de 90º."
  },
  {
    q: "¿Qué ángulo forman las agujas de un reloj cuando marca las 6 en punto?",
    options: ["90º", "180º (ángulo llano)", "120º", "360º"],
    answer: 1,
    explanation: "A las 6:00 las dos agujas están en línea recta opuesta, formando un ángulo llano de 180º."
  },
  {
    q: "¿Cómo se llama el segmento que une dos puntos de una circunferencia pasando por su centro?",
    options: ["Radio", "Diámetro", "Cuerda", "Arco"],
    answer: 1,
    explanation: "El diámetro es la cuerda más larga de la circunferencia y pasa por el centro."
  },
  {
    q: "¿Cómo se llama una recta que toca a una circunferencia en un único punto?",
    options: ["Recta secante", "Recta tangente", "Recta exterior", "Recta paralela"],
    answer: 1,
    explanation: "Una recta tangente tiene un solo punto en común con la circunferencia."
  },
  {
    q: "¿Cuál es el área de un romboide cuya base mide 12 cm y su altura mide 5 cm?",
    options: ["17 cm²", "34 cm²", "60 cm²", "30 cm²"],
    answer: 2,
    explanation: "Área del romboide = base × altura = 12 × 5 = 60 cm²."
  },
  {
    q: "¿Cuál es el perímetro de un triángulo equilátero cuyo lado mide 8,5 cm?",
    options: ["17 cm", "25,5 cm", "24,5 cm", "34 cm"],
    answer: 1,
    explanation: "8,5 × 3 = 25,5 cm."
  },
  {
    q: "¿Cuántos vértices tiene una pirámide de base cuadrada?",
    options: ["4 vértices", "5 vértices", "8 vértices", "6 vértices"],
    answer: 1,
    explanation: "Tiene 4 vértices en la base cuadrada más 1 vértice superior (cúspide) = 5 vértices."
  },
  {
    q: "¿Cuántas aristas tiene un prisma triangular?",
    options: ["6 aristas", "9 aristas", "12 aristas", "5 aristas"],
    answer: 1,
    explanation: "3 aristas en la base inferior + 3 en la base superior + 3 aristas laterales = 9 aristas."
  },
  {
    q: "¿Qué cuerpo redondo se obtiene al hacer girar un triángulo rectángulo alrededor de uno de sus catetos?",
    options: ["Un cilindro", "Un cono", "Una esfera", "Un cubo"],
    answer: 1,
    explanation: "Al girar un triángulo rectángulo se genera un cono."
  },
  {
    q: "En una tabla de frecuencias, la suma de todas las frecuencias absolutas es siempre igual a...",
    options: ["100", "El número total de datos recogidos", "La moda", "La media aritmética"],
    answer: 1,
    explanation: "Si sumamos cuántas veces aparece cada dato obtenemos el total de encuestados o datos."
  },
  {
    q: "Las edades de 5 amigos son: 10, 11, 10, 12 y 12 años. ¿Cuál es la media de edad del grupo?",
    options: ["10 años", "11 años", "12 años", "10,5 años"],
    answer: 1,
    explanation: "(10 + 11 + 10 + 12 + 12) : 5 = 55 : 5 = 11 años."
  },
  {
    q: "Si lanzamos una moneda al aire dos veces, ¿cuántos resultados distintos pueden salir en total?",
    options: ["2 resultados", "4 resultados (CC, CX, XC, XX)", "3 resultados", "6 resultados"],
    answer: 1,
    explanation: "Los 4 casos posibles son: cara-cara, cara-cruz, cruz-cara y cruz-cruz."
  },
  {
    q: "¿Qué número romano representa el 500?",
    options: ["L", "C", "D", "M"],
    answer: 2,
    explanation: "En números romanos: I=1, V=5, X=10, L=50, C=100, D=500 y M=1.000."
  },
  {
    q: "¿Cuál es el resultado de 1.000 − 368?",
    options: ["642", "632", "732", "638"],
    answer: 1,
    explanation: "1.000 − 368 = 632 (368 + 632 = 1.000)."
  },
  {
    q: "En un almacén hay 4.800 latas de conserva y se empaquetan en cajas de 24 latas. ¿Cuántas cajas se llenan?",
    options: ["20 cajas", "200 cajas", "2.000 cajas", "120 cajas"],
    answer: 1,
    explanation: "4.800 : 24 = 200 cajas."
  },
  {
    q: "¿Cuál de estos números NO es múltiplo de 4?",
    options: ["32", "44", "54", "60"],
    answer: 2,
    explanation: "54 : 4 = 13 con resto 2, por lo que 54 no es múltiplo de 4."
  },
  {
    q: "¿Qué fracción del día han pasado cuando son las 6 de la mañana?",
    options: ["1/2", "1/4", "1/3", "1/6"],
    answer: 1,
    explanation: "6 horas de 24 horas que tiene el día: 6/24 = 1/4."
  },
  {
    q: "¿Cuánto es 0,25 × 4?",
    options: ["0,1", "1", "10", "0,01"],
    answer: 1,
    explanation: "Un cuarto (0,25) multiplicado por 4 es igual a la unidad (1)."
  },
  {
    q: "¿Cuántos euros son 15 monedas de 20 céntimos?",
    options: ["2,00 €", "3,00 €", "1,50 €", "30,00 €"],
    answer: 1,
    explanation: "15 × 20 = 300 céntimos = 3,00 €."
  },
  {
    q: "Un triángulo tiene un ángulo de 110º, otro de 40º y otro de 30º. ¿Cómo se clasifica según sus ángulos?",
    options: ["Acutángulo", "Rectángulo", "Obtusángulo", "Equilátero"],
    answer: 2,
    explanation: "Como tiene un ángulo obtuso (110º > 90º), es un triángulo obtusángulo."
  },
  {
    q: "¿Cuántos ejes de simetría tiene un cuadrado?",
    options: ["1 eje", "2 ejes", "4 ejes", "Ninguno"],
    answer: 2,
    explanation: "Un cuadrado tiene 4 ejes de simetría: dos diagonales y dos mediatrices de sus lados."
  },
  {
    q: "¿Cuál es el área de un círculo cuyo radio mide 10 cm? (Usa π ≈ 3,14)",
    options: ["31,4 cm²", "314 cm²", "62,8 cm²", "100 cm²"],
    answer: 1,
    explanation: "Área del círculo = π × r² = 3,14 × 10² = 3,14 × 100 = 314 cm²."
  },
  {
    q: "¡Has completado el bloque de Matemáticas de 5º de Primaria! Si aciertas 6 preguntas de quesito de 6 áreas, ¿qué porcentaje de áreas has completado?",
    options: ["50%", "100%", "60%", "75%"],
    answer: 1,
    explanation: "6 de 6 áreas completadas equivale al total: ¡el 100%!"
  }
];