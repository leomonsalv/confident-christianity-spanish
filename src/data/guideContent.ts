// Guía del Facilitador: Cristianismo con Confianza (ICMDA / CMF)
// Complete structured dataset for all 32 pages

export interface VisualTable {
  type: 'table';
  title: string;
  headers: string[];
  rows: string[][];
}

export interface VisualCards {
  type: 'cards3';
  title: string;
  cards: { title: string; ref: string }[];
}

export type VisualData = VisualTable | VisualCards;

export interface CommonObjection {
  objection: string;
  response: string;
}

export interface ModuleItem {
  id: number;
  number: number;
  title: string;
  workbookChapter: string;
  objective: string;
  whatDrPeterPresents: string;
  cannotCut: string;
  discussionQuestions: string[];
  commonObjections: CommonObjection[];
  workbookRef: string;
  vueltaRef: string;
  pageNumber: number;
  driverAlert?: string | null;
  visualData?: VisualData | null;
}

export const GUIDE_METADATA = {
  "title": "Guía del Facilitador",
  "course": "Cristianismo con Confianza",
  "subtitle": "Los 20 módulos, módulo a módulo",
  "organization": "ICMDA · Unidad de Formación",
  "fellowship": "CMF · Christian Medical Fellowship",
  "workbookComplement": "Complemento del Cuaderno de trabajo del participante",
  "terminologyBase": "Cuaderno en español, edición NBLA",
  "edition": "Edición española · 2026",
  "coverImage": "/cover.png"
};

export const ABOUT_SECTION = {
  "title": "Acerca de esta guía",
  "intro": "El curso Cristianismo con Confianza funciona desde 2020 en 91 países. Hasta ahora no había ninguna guía para las personas que efectivamente lo conducen: los facilitadores aprendían el papel haciéndolo, y la calidad de una cohorte dependía de lo bien que alguien lograra improvisar. Esta guía cierra esa brecha.",
  "items": [
    {
      "heading": "Qué es",
      "content": "Está escrita para el facilitador, no para el alumno. Y es prescriptiva: dice qué hacer."
    },
    {
      "heading": "No es un segundo cuaderno de trabajo",
      "content": "Los alumnos tienen los videos y el cuaderno. Nada de lo que hay aquí fue escrito para leerse en voz alta ante ellos."
    },
    {
      "heading": "Cómo leerla",
      "content": "Lea las Partes A y B una vez, completas, antes de su primera sesión. Después, relea solo el módulo de la semana."
    },
    {
      "heading": "Fuentes y terminología",
      "content": "El contenido proviene de las charlas grabadas del Dr. Peter Saunders y del cuaderno de trabajo en su edición española (NBLA). Los nombres de capítulo, los términos técnicos y las referencias bíblicas siguen los del cuaderno en español: cuando el facilitador remita al alumno al cuaderno, las palabras deben coincidir."
    },
    {
      "heading": "Si no está de acuerdo",
      "content": "La sesión no es el lugar para resolver un desacuerdo con el material. Consulte los recursos del TTCC, o llévelo al Coordinador Global de CC con su sugerencia, para que se considere en una próxima edición."
    }
  ]
};

export const PARTE_A = {
  "title": "Parte A — El papel del facilitador",
  "subtitle": "Requisitos, postura pastoral y prevención de errores",
  "a1": {
    "title": "A.1 Qué se espera de usted",
    "description": "Estos son los requisitos escritos del ICMDA. Valen para todas las pistas de formación.",
    "requirements": [
      {
        "title": "Haber completado el programa antes de facilitar",
        "desc": "En Cristianismo con Confianza esto significa 80 % de asistencia a lo largo de las diez semanas."
      },
      {
        "title": "Tener carga por el tema",
        "desc": "Interés real por el asunto que va a facilitar, no estar simplemente disponible."
      },
      {
        "title": "Estar presente",
        "desc": "Comprometerse con la mayoría de las sesiones. Si no puede asistir, avisar y coordinar la cobertura con el cofacilitador."
      },
      {
        "title": "Saber conducir una conversación",
        "desc": "Capacidad de facilitación, de lenguaje y de construir relación con los participantes."
      },
      {
        "title": "Dejar de lado la opinión personal",
        "desc": "Priorizar siempre el aprendizaje compartido sobre imponer posturas particulares."
      },
      {
        "title": "Estar dispuesto a ser vulnerable",
        "desc": "Compartir las propias luchas, admitir los límites del propio conocimiento y pedir ayuda."
      },
      {
        "title": "Tener conexión a internet estable",
        "desc": "En las cohortes en línea esto es un requisito indispensable, no un detalle."
      }
    ]
  },
  "a2": {
    "title": "A.2 Qué no necesita ser",
    "content": "Usted no necesita dominar la apologética. El contenido ya está en las charlas del Dr. Peter y en el cuaderno de trabajo. Lo que falta en una cohorte no es información: es alguien que sostenga la conversación.",
    "goldenRule": {
      "quote": "«Buena pregunta. No lo sé. Voy a investigarlo y lo traigo la semana que viene»",
      "explanation": "Y entonces lo trae. Eso construye más confianza en usted que cualquier improvisación."
    }
  },
  "a3": {
    "title": "A.3 Las tres cosas que salen mal",
    "pitfalls": [
      {
        "number": 1,
        "title": "Volverse secretario",
        "desc": "Aparecer solo en la semana asignada, presentar, marcar la asistencia, desaparecer. La tarea está técnicamente cumplida, y esa cohorte termina menos y no genera ningún facilitador nuevo. Lo que hace que el alumno vuelva la semana siguiente no es el video —el video está en YouTube y podría verlo solo—; es que alguien notó que faltó."
      },
      {
        "number": 2,
        "title": "No saber manejar las salas simultáneas",
        "desc": "Esto traba la sesión y obliga al equipo coordinador a estar de guardia en cada reunión. Su autonomía técnica libera a otras personas."
      },
      {
        "number": 3,
        "title": "Apartarse del material original",
        "desc": "Le pasa a quien habla bien: toma el módulo, encuentra un gancho y da la charla que quería dar. El alumno recibe otro curso. La Parte C de esta guía existe para establecer el piso."
      }
    ]
  },
  "a4": {
    "title": "A.4 La mitad del trabajo que ocurre fuera de la sesión",
    "pastoralDuties": [
      {
        "timing": "Antes de la cohorte",
        "action": "Invite personalmente",
        "desc": "Los alumnos que llegan por invitación personal terminan en una proporción notablemente mayor que los que llegan por publicidad, y la mayoría de nuestros alumnos llega por invitación. Invitar no es marketing; es el primer acto pastoral del facilitador."
      },
      {
        "timing": "Después de cada sesión",
        "action": "Busque a quien faltó",
        "desc": "El mismo día. Individualmente, no en el grupo."
      },
      {
        "timing": "Durante la semana",
        "action": "Esté en el grupo",
        "desc": "Responda, comente, envíe el material."
      },
      {
        "timing": "Siempre",
        "action": "Esté listo para asumir",
        "desc": "Si el facilitador asignado no aparece, la sesión ocurre igual."
      }
    ]
  }
};

export const PARTE_B = {
  "title": "Parte B — Conducir la sesión",
  "subtitle": "Estructura de la sesión en línea y formato presencial",
  "corePrinciple": "La interacción en grupos pequeños debe ocupar la mayor parte posible de la hora. El éxito de su sesión es inversamente proporcional al tiempo que usted habla. Usted habla 10 de los 60 minutos.",
  "schedule": [
    {
      "time": "0–5 min",
      "minutes": 5,
      "block": "Llegada",
      "action": "Dé margen a los que llegan tarde. Refuerce la invitación en el grupo. Pida a la pareja del día que abra las diapositivas. Pida a un participante que ore.",
      "icon": "Users"
    },
    {
      "time": "5–15 min",
      "minutes": 10,
      "block": "Resumen de los videos",
      "action": "Un resumen. Solo los principales puntos de aprendizaje del video y del cuaderno de la semana. No es volver a presentar el módulo: el alumno ya lo vio. Si la pareja del día empieza a dar clase, intervenga con amabilidad.",
      "icon": "Video"
    },
    {
      "time": "15–25 min",
      "minutes": 10,
      "block": "Primera dinámica",
      "action": "Parejas o tríos en salas simultáneas. Diga el tiempo en voz alta antes de dividir la sala. Envíe un mensaje general a la mitad del tiempo.",
      "icon": "MessagesSquare"
    },
    {
      "time": "25–35 min",
      "minutes": 10,
      "block": "Puesta en común",
      "action": "Grupo grande. Ellos hablan; usted interviene poco.",
      "icon": "MessageCircle"
    },
    {
      "time": "35–55 min",
      "minutes": 20,
      "block": "Repetición",
      "action": "Segunda dinámica (salas) y segunda puesta en común (grupo grande).",
      "icon": "Repeat"
    },
    {
      "time": "55–60 min",
      "minutes": 5,
      "block": "Cierre",
      "action": "Agradezca a la pareja del día. Dé retroalimentación constructiva. Anuncie la pareja de la semana siguiente. Refuerce que vean los videos antes.",
      "icon": "CheckCircle2"
    }
  ],
  "practicalTips": [
    "Las salas simultáneas tardan cerca de un minuto en cerrarse después del comando. Ciérrelas antes.",
    "El botón de mensaje general llega a todas las salas a la vez. Úselo a la mitad del tiempo.",
    "Deje la lista de participantes abierta antes de entrar. Usar el nombre del alumno en la segunda semana cambia su relación con el curso."
  ],
  "inPersonChanges": {
    "title": "B.2 Qué cambia en el presencial",
    "points": [
      "Todos los módulos son presentados por facilitadores. No hay video que cargue con el contenido: la carga de preparación es mucho mayor.",
      "La logística es ministerio: lugar, comida, materiales impresos, la lista de asistencia que genera los certificados.",
      "El formato que funciona es el de estaciones: tres grupos rotando entre tres módulos, con tiempo fijo. Hay un modelo de cronograma en la carpeta del curso.",
      "Arme el cronograma junto con el equipo coordinador de la pista (TTCC), no solo.",
      "Las cohortes presenciales terminan en una proporción mucho mayor que las de en línea, pero generan menos facilitadores nuevos. Las cohortes en línea terminan menos y son de donde proviene la mayoría de los facilitadores. Ningún formato sustituye al otro."
    ]
  }
};

export const PARTE_C_INTRO = {
  "title": "Parte C — Los 20 módulos",
  "description": "Cómo está estructurado el curso: doce módulos centrales (1–12) y ocho preguntas difíciles (13–20). Dos módulos por semana, a lo largo de diez semanas.",
  "tracks": [
    {
      "name": "Módulos 1–12",
      "badge": "Centrales",
      "desc": "Cosmovisión, teísmo cristiano, evangelio, diálogo, persuasión, decisión."
    },
    {
      "name": "Módulos 13–20",
      "badge": "Preguntas Difíciles",
      "desc": "Las ocho preguntas difíciles — la agenda que su propia cohorte levanta en el Módulo 8."
    }
  ],
  "readingGuide": [
    {
      "field": "Objetivo",
      "desc": "Lo que el alumno debe llevarse. Si no se lo llevó, el módulo no ocurrió."
    },
    {
      "field": "Lo que el Dr. Peter presenta",
      "desc": "El contenido del video en resumen — para que usted lo reconozca, no para volver a presentarlo."
    },
    {
      "field": "Lo que no se puede recortar",
      "desc": "El piso del módulo. Es la parte que nunca se recorta por falta de tiempo."
    },
    {
      "field": "Preguntas de discusión",
      "desc": "Las oficiales. Úselas tal como están."
    },
    {
      "field": "Objeciones comunes",
      "desc": "Lo que aparece en la sala, y qué decir — incluido «esa es del Módulo X, la registro y la retomo»."
    },
    {
      "field": "Cuaderno de trabajo",
      "desc": "El capítulo del cuaderno del alumno que trae el material."
    }
  ],
  "notes": "Los módulos 1, 2, 3 y 10 no tienen un capítulo propio en el cuaderno: su contenido está en las charlas y las diapositivas. Para esos módulos se indica el capítulo del cuaderno más cercano. Cada uno de los Módulos 13 a 20 tiene además su vuelta correspondiente en la Parte D.1 para devolver a Jesús al centro."
};

export const MODULES_DATA: ModuleItem[] = [
  {
    "id": 1,
    "number": 1,
    "title": "Cosmovisión",
    "workbookChapter": "sin capítulo propio",
    "objective": "Hacer que el alumno perciba que toda persona —él incluido— interpreta el mundo a partir de un conjunto de presuposiciones que rara vez examina.",
    "whatDrPeterPresents": "Una cosmovisión (del alemán Weltanschauung) es el modo particular de percibir e interpretar el mundo: un conjunto de creencias sobre\nla vida y el universo. Todo el mundo tiene una, sea consciente de ello o no. Funciona como un par de anteojos: uno no mira hacia ellos,\nmira a través de ellos.\nLa imagen central es la del iceberg. Lo que vemos en la otra persona es su conducta: una décima parte, sobre la línea del agua. Debajo\nestán sus valores, debajo de estos sus creencias, y en la base sus presuposiciones sobre la naturaleza del universo. Quien discute solo la\nconducta está discutiendo con la punta.\nSeis preguntas descubren una cosmovisión: ¿Qué es Dios? (teología) • ¿Qué son los seres humanos? (antropología) • ¿Cuál es la mejor\nforma de descubrir la verdad? (epistemología) • ¿Por qué tienen valor los seres humanos? (valores) • ¿Cómo decidimos lo que está bien y lo\nque está mal? (ética) • ¿Qué le sucede a una persona después de la muerte?\nCuatro grandes cosmovisiones: panteísmo (hinduismo, budismo, Nueva Era), politeísmo (religiones tribales, animismo, religiones\npopulares), teísmo (islam, judaísmo, cristianismo) y ateísmo (naturalismo, existencialismo, nihilismo). Y la distribución en la población\ngeneral comparada con la de los estudiantes de medicina:\nCOSMOVISIÓN\nPOBLACIÓN\nESTUDIANTES DE\nMEDICINA\nAteísmo\n13 %\n65 %\n20 %\nPanteísmo\n5%\n11 %\nPoliteísmo\n0 %\nTeísmo\n56 %\n30 %",
    "cannotCut": "Las cinco conclusiones, en este orden: (1) existen al menos cuatro cosmovisiones diferentes; (2) personas inteligentes y bien formadas sostienen cada una de ellas; (3) son mutuamente excluyentes; (4) a lo sumo una puede ser verdadera; (5) por lo tanto, muchas personas inteligentes sostienen creencias que no son verdaderas. El punto 5 es lo que el módulo existe para entregar. No lo recorte por falta de tiempo.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Cuál es la cosmovisión más común en su entorno cultural?",
      "¿Cómo afecta esto a las opiniones y comportamientos éticos sobre temas como el aborto y las relaciones sexuales fuera del",
      "matrimonio?"
    ],
    "commonObjections": [
      {
        "objection": "«¿No es arrogante decir que los demás están equivocados?»",
        "response": "Devuelva la lógica. Las cuatro cosmovisiones hacen afirmaciones contradictorias sobre la misma realidad. Decir que todas son verdaderas es la única posición que no puede ser verdadera. Eso no es arrogancia; es aritmética. (El Módulo 11 profundiza.)"
      },
      {
        "objection": "«Yo no tengo cosmovisión, solo soy racional.»",
        "response": "Buena entrada para las seis preguntas. Pida a la persona que las responda todas. Describirá una cosmovisión."
      }
    ],
    "workbookRef": "sin capítulo propio. El material afín está en Preevangelismo → «Cuestionar las falsas creencias» y «Quitar la tapa».",
    "vueltaRef": "",
    "pageNumber": 8,
    "visualData": {
      "type": "table",
      "title": "Distribución de Cosmovisiones",
      "headers": [
        "Cosmovisión",
        "Población General",
        "Estudiantes de Medicina"
      ],
      "rows": [
        [
          "Ateísmo (naturalismo, nihilismo)",
          "13 %",
          "65 %"
        ],
        [
          "Panteísmo (hinduismo, budismo, Nueva Era)",
          "20 %",
          "5 %"
        ],
        [
          "Politeísmo (animismo, religiones tribales)",
          "11 %",
          "0 %"
        ],
        [
          "Teísmo (cristianismo, judaísmo, islam)",
          "56 %",
          "30 %"
        ]
      ]
    }
  },
  {
    "id": 2,
    "number": 2,
    "title": "Teísmo cristiano",
    "workbookChapter": "sin capítulo propio",
    "objective": "Que el alumno pueda decir, sin vacilar, qué distingue al cristianismo de toda otra religión, incluidas las demás religiones teistas.",
    "whatDrPeterPresents": "Él estrecha la pregunta a propósito. No qué tiene de bueno el cristianismo, sino qué elementos de la cosmovisión\ncristiana son distintivos. Descarta las respuestas sobre el carácter y el fruto del Espíritu: importantes, pero no distintivas.\nSeis marcas: la autoridad de la Biblia; la deidad de Cristo y la Trinidad; Cristo como el único camino de salvación; su\nmuerte física y resurrección corporal; la centralidad de la cruz —su muerte sustitutiva-; y la salvación por gracia,\nmediante arrepentimiento y fe.\n1. La deidad de Cristo\n2. La autoridad de las Escrituras\n3. La salvación por gracia\nmediante la fe\n2 Tim 3:16\nJn 1:18\nEf 2:8\nEl cuaderno reduce esas seis marcas a tres afirmaciones distintivas con las que ninguna otra religión está de acuerdo\n(arriba). Negar cualquiera de ellas es negar el cristianismo.\nLa deidad de Cristo se declara directamente en al menos ocho pasajes del Nuevo Testamento (Jn 1:1-2; 1:18; 20:28; Hch\n20:28; Rom 9:5; Tit 2:13; Heb 1:8; 2 P 1:1) y está fuertemente implícita en otros (Mt 1:23; Jn 17:3, 5; Col 2:2; 2 Tes 1:12; 1 Tim\n1:17; Stg 1:1; 1 Jn 5:20).\nLa ilustración de cierre es la de los billetes falsos. Otras religiones у sectas subcristianas funcionan como falsificaciones\neficaces: se parecen mucho a lo auténtico. Medidas contra estas marcas, casi todas fallan en todos los criterios.",
    "cannotCut": "Las tres afirmaciones distintivas del cuaderno, y el criterio detrás de ellas: distintivo, no meramente bueno.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿En qué particularidades del cristianismo cree el islam?",
      "¿Cuáles son los puntos de desacuerdo entre el islam y el cristianismo?"
    ],
    "commonObjections": [
      {
        "objection": "«Pero todas las religiones enseñan la misma ética.»",
        "response": "Concuerde: el cuaderno mismo admite que las religiones del mundo"
      },
      {
        "objection": "«¿Esto vale para católicos / testigos de Jehová / mormones?»",
        "response": "No permita que la sesión se convierta en disputa denominacional. Aplique los tres criterios y deje que el alumno saque la conclusión."
      }
    ],
    "workbookRef": "sin capítulo propio. Las tres afirmaciones distintivas están en ¿Es Cristo el único camino hacia Dios?",
    "vueltaRef": "",
    "pageNumber": 9,
    "visualData": {
      "type": "cards3",
      "title": "Tres Afirmaciones Distintivas",
      "cards": [
        {
          "title": "1. La deidad de Cristo",
          "ref": "Jn 1:18"
        },
        {
          "title": "2. La autoridad de las Escrituras",
          "ref": "2 Tim 3:16"
        },
        {
          "title": "3. La salvación por gracia mediante la fe",
          "ref": "Ef 2:8"
        }
      ]
    }
  },
  {
    "id": 3,
    "number": 3,
    "title": "El camino de fe",
    "workbookChapter": "La escala de Engel",
    "objective": "Sustituir la idea de la conversión como evento único por la de conversión como proceso, y mostrar dónde entra el evangelismo personal en ese proceso.",
    "whatDrPeterPresents": "Pasa rápido por las presuposiciones: todos necesitan el evangelio, incluidos los temerosos de Dios aún no convertidos (el\ncenturión de Hch 10); Jesús es el único camino, mediante Su muerte en la cruz (Jn 14:6; Hch 4:12; 1 Tim 2:5); y damos\ntestimonio porque el amor y el gozo de Dios nos impulsan (2 Cor 5:14; Heb 12:2).\nEl centro del módulo es la escala de Engel, que va de 10 (conciencia de lo sobrenatural) a 0 (regeneración). La escala\ncompleta está en la Parte D.3.\nLuego viene la tabla de eficacia, que responde a ¿ cómo llegó usted a Cristo?:\n4-6 %\nPor iniciativa propia\nInfluidos por un ministro\n4-7 %\nRespondieron a la visitación\n2-4 %\n1-2%\nLes gustó el programa de la iglesia\n4-6%\nCruzada o programa de televisión\nAlcanzados por la Escuela Dominical\n0,1 %\n75-85%\nInfluencia de amigos y familiares\nCierra con cuatro fases: cultivar (preparar el suelo — habla al corazón), sembrar (plantar la Palabra — habla a la mente),\ncosechar (la decisión de seguir a Cristo — habla a la voluntad), multiplicar (crecer en el señorío de Cristo — habla a la\npersona entera). Afirma explícitamente que este curso trata de sembrar, no de cosechar.\n«Nuestra tarea es sembrar la semilla, y dejar que Aquel que nutre la semilla escondida la haga fructificar a su\ndebido tiempo.»",
    "cannotCut": "La cifra de 75-85 % y lo que se sigue de ella. Y la ubicación del curso en la fase de sembrar: las iglesias que solo saben cosechar no cosechan, porque no se ha alcanzado el corazón ni se ha comprometido la mente.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Qué personas o acontecimientos le han influido más para creer en Cristo? ¿Por qué?",
      "¿Cuánto tiempo pasó desde su primer interés por el cristianismo hasta su conversión?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Entonces las cruzadas evangelísticas no sirven de nada?»",
        "response": "No. Las cuatro fases son todas necesarias; el problema es la iglesia que solo hace una. La cruzada cosecha lo que otros sembraron."
      },
      {
        "objection": "«¿Esto no le quita el poder de Dios a la conversión?»",
        "response": "El Módulo 5 trata exactamente de eso. Registre la pregunta y retómela la semana siguiente."
      }
    ],
    "workbookRef": "La escala de Engel.",
    "vueltaRef": "",
    "pageNumber": 10,
    "visualData": {
      "type": "table",
      "title": "Tabla de Eficacia: ¿Cómo llegó usted a Cristo?",
      "headers": [
        "Medio / Vía",
        "Porcentaje"
      ],
      "rows": [
        [
          "Por iniciativa propia",
          "4–6 %"
        ],
        [
          "Influenciados por un ministro",
          "4–7 %"
        ],
        [
          "Les gustó el programa de la iglesia",
          "2–4 %"
        ],
        [
          "Respondieron a la visitación",
          "1–2 %"
        ],
        [
          "Alcanzados por la Escuela Dominical",
          "4–6 %"
        ],
        [
          "Cruzada o programa de televisión",
          "0,1 %"
        ],
        [
          "Influencia de amigos y familiares (Clave)",
          "75–85 %"
        ]
      ]
    }
  },
  {
    "id": 4,
    "number": 4,
    "title": "Preevangelismo",
    "workbookChapter": "Preevangelismo",
    "objective": "Enseñar a salir de la conversación superficial y llegar al punto en que una conversación espiritual se vuelve posible, sin forzarla.",
    "whatDrPeterPresents": "Los cinco niveles de conversación, tal como los nombra el cuaderno: Nivel 1, conversación de clichés; Nivel 2, informar sobre\nhechos; Nivel 3, expresar ideas y juicios; Nivel 4, expresar sentimientos y emociones; Nivel 5, completamente abierta. Él lo\nilustra con la vida quirúrgica: el informe del caso (hecho), el diagnóstico (juicio), la ansiedad antes de operar (sentimiento).\n«Si nuestra conversación con los no cristianos nunca va más allá de soltar clichés e informar sobre hechos, si no podemos ser\nsinceros sobre lo que realmente pensamos, no seremos evangelistas eficaces.»\nConstruir amistad: encontrar intereses y experiencias en común; pasar tiempo juntos; encontrar una tarea conjunta;\nayudarlos — y dejar que ellos lo ayuden a usted; tener conversaciones de corazón a corazón.\nEntonces el concepto central: «quitar la tapa», de Francis Schaeffer. El pensamiento no cristiano está reñido con la realidad;\nmediante preguntas de sondeo se encuentran los puntos de tensión entre la visión del mundo del no creyente y el mundo tal\ncomo es. El trabajo no es atacar la creencia de la persona, sino partir de sus propias presuposiciones y conducir con suavidad\nla conversación hacia sus implicaciones lógicas.\nLos ejemplos del cuaderno: si los seres humanos no son más que monos inteligentes, ¿qué tiene de malo la eutanasia o el\ninfanticidio de personas con discapacidad? Si la muerte es el fin, ¿qué sentido tiene vivir moralmente en esta vida? Si Dios no\nexiste, ¿sobre qué base podemos creer en valores morales absolutos?\nPara un pensador serio esto es doloroso. Nada de esto requiere «hablar de Dios». Una vez derribada la fortaleza, puede surgir\nla oportunidad de conversar sobre una visión diferente del mundo.",
    "cannotCut": "«Dejar que ellos lo ayuden a usted»: la línea más fácil de saltarse y la que más cambia la relación. Y la lógica del punto de tensión: se parte de las presuposiciones del otro, no de las suyas.",
    "driverAlert": "Nota de terminología. El cuaderno titula la sección «Quitar la tapa», pero en el cuerpo cita a Schaeffer como «quitar el techo». Ambas formas aparecen en el material del alumno; no lo corrija en sesión.",
    "discussionQuestions": [
      "¿Qué actividades de su vida generan las mejores oportunidades para mantener conversaciones profundas con no",
      "cristianos?",
      "¿Cómo argumentaría en una discusión sobre la eutanasia?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Esto no es manipulación?»",
        "response": "La diferencia está en el objetivo. La manipulación lleva a alguien a una conclusión que no ha examinado. Aquí se hace lo contrario: se le pide que examine lo que ya cree."
      },
      {
        "objection": "«Yo no logro entrar en temas espirituales.»",
        "response": "Buen momento para admitir que a usted también le cuesta. El Módulo 8 trata el miedo directamente."
      }
    ],
    "workbookRef": "Preevangelismo (todas las secciones).",
    "vueltaRef": "",
    "pageNumber": 11,
    "visualData": {
      "type": "table",
      "title": "Los Cinco Niveles de Conversación",
      "headers": [
        "Nivel",
        "Tipo de Conversación",
        "Ejemplo Médico / Quirúrgico"
      ],
      "rows": [
        [
          "Nivel 1",
          "Conversación de clichés",
          "Saludo formal, cortesía superficial"
        ],
        [
          "Nivel 2",
          "Informar sobre hechos",
          "El informe clínico del caso"
        ],
        [
          "Nivel 3",
          "Expresar ideas y juicios",
          "El diagnóstico y plan de tratamiento"
        ],
        [
          "Nivel 4",
          "Expresar sentimientos y emociones",
          "La ansiedad y miedo antes de entrar a quirófano"
        ],
        [
          "Nivel 5",
          "Conversación completamente abierta",
          "Vulnerabilidad total y apertura espiritual"
        ]
      ]
    }
  },
  {
    "id": 5,
    "number": 5,
    "title": "La soberanía de Dios en el evangelismo",
    "workbookChapter": "El evangelismo y la soberanía de Dios",
    "objective": "Corregir dos errores opuestos: la parálisis («Dios tiene el control, así que no tiene sentido que yo haga nada») y la culpa («depende de mí»).",
    "whatDrPeterPresents": "El cuaderno las llama trampas, y son cuatro frases que casi todo cristiano se ha dicho a sí mismo:\n«Si Dios tiene el control, no tiene sentido que yo haga nada.» • «Me siento muy culpable por no compartir mi fe con todos los\nque conozco.» • «Debo encontrar una técnica mejor para hacer que la gente venga a Cristo.» • «¡Me rindo! Ninguna de las\npersonas con las que hablo ha seguido a Cristo.»\nCada una esconde un malentendido sobre dónde termina la parte de Dios y dónde empieza la nuestra. El panorama general —\nel papel de Dios en el universo: Creador (Gn 1:1-2; Sal 8:3; 2 P 3:5), Dueño (Sal 24:1; Job 41:11), Sustentador (Heb 1:3; Sal 147:8-\n9, 15-18), Director (Dn 2:21; 4:17; Is 40:15, 22-24), Redentor (Rom 8:20-22; 2 Cor 4:16-5:5).\nY, específicamente en el evangelismo, es Él quien: nos da la Palabra que hemos de proclamar (Rom 1:1, 16); abre puertas de\noportunidad (Hch 14:27; Col 4:3); nos da el valor para hablar (2 Tim 4:17; Hch 4:29; Ef 6:19-20); capacita a los oyentes para\ncomprender el mensaje (Hch 16:14); convence de pecado (Jn 16:8); capacita a los pecadores para arrepentirse (Hch 5:31; 11:18;\nEf 2:8); produce el nuevo nacimiento (Hch 2:38; Rom 8:9; Jn 3:3-8).\nLa ilustración histórica es William Carey, a quien los hipercalvinistas de su época le dijeron que, si Dios quería salvar a los\nperdidos, lo haría sin su ayuda. Su negativa a creerlo condujo a la difusión masiva del evangelio en el siglo XIX.\nEl cuaderno añade un punto que suele pasarse por alto: «El mayor obstáculo para el evangelismo no es la técnica, sino la\noposición» — y que a menudo nuestra indiferencia hace que el enemigo «apenas necesite molestarse en hacer otra cosa».\nConclusión: Dios tiene el control; el evangelismo es obra Suya; nosotros somos Sus instrumentos. Por eso oramos y\nobedecemos, no una cosa u otra.",
    "cannotCut": "La «y». La sala intentará salir con la mitad: solo oración, o solo acción. El módulo existe para impedirlo.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Qué es lo que más le ha llamado la atención de los pasajes sobre el papel de Dios en la evangelización?",
      "¿Puede compartir un ejemplo de cómo Dios le ha ayudado a compartir su fe?"
    ],
    "commonObjections": [
      {
        "objection": "«Si Dios escoge quién va a creer, ¿mi esfuerzo cambia algo?»",
        "response": "No permita que la sesión se vuelva un debate entre calvinismo y arminianismo. Hch 16:14 lo resuelve en la práctica: el Señor abrió el corazón de Lidia mientras Pablo hablaba. Las dos cosas en la misma frase."
      },
      {
        "objection": "«Yo ya hablé con mucha gente y nadie se convirtió.»",
        "response": "Eso es una persona herida, no una objeción intelectual. No responda con argumentos. Vuelva a la escala de Engel: mover a alguien de 8 a 5 es un éxito."
      }
    ],
    "workbookRef": "El evangelismo y la soberanía de Dios.",
    "vueltaRef": "",
    "pageNumber": 12,
    "visualData": null
  },
  {
    "id": 6,
    "number": 6,
    "title": "¿Qué es el evangelio?",
    "workbookChapter": "¿Qué es el evangelio?",
    "objective": "Que el alumno logre presentar el evangelio, desde cero, en dos minutos, y perciba lo que estaba dejando fuera.",
    "whatDrPeterPresents": "Este módulo se construye en torno a un ejercicio, no a una exposición. El encuadre: un misil está por llegar en dos minutos, y el\namigo no cristiano que está al lado pregunta qué cree usted y qué debe hacer él. En parejas, cada uno presenta el evangelio\ndurante dos minutos sin interrupción. Después, cada uno relata lo que oyó, y el grupo anota la lista. El aprendizaje no está en lo\nque aparece en la lista: está en lo que quedó fuera, y en el orden en que aparecieron las cosas.\nLuego va a los nueve sermones apostólicos de Hechos y trabaja Hch 5:29-32 en detalle. Los elementos esenciales del mensaje:\nDios se ha revelado en la historia: por medio de los padres (los profetas y patriarcas) y por medio de Jesús.\nLos hechos esenciales sobre Jesús: fue muerto (crucificado) y resucitado.\nDios ha hecho así de Jesús Príncipe (Señor y Juez) y Salvador.\nDios nos pide que nos arrepintamos (apartarnos de nuestra manera anterior de vivir) y obedezcamos (poner nuestra fe en\nJesús).\nÉl entonces nos dará perdón (por la sangre de Cristo) y el Espíritu Santo (para vivir una vida nueva).\n«Los errores más comunes son omitir la necesidad del arrepentimiento y la realidad del juicio.» Un evangelio sin\narrepentimiento deja a las personas falsamente tranquilas de que tienen fe salvadora. Un evangelio sin advertencia del juicio\ndeja a las personas pensando que no hay decisión que tomar.\nDe ahí sale el esquema de John Chapman, con sus cinco encabezados —DIOS (GOBERNANTE), EL HOMBRE (REBELDE), DIOS\n(RESCATE), ¿Y SI NO LO HAGO? (RECHAZADO), ¿Y SI LO HAGO? (RECONCILIADO) —. El texto completo está en la Parte D.4. Y el\nejercicio se repite: dos minutos otra vez, ahora con el esquema. ¿Fue más fácil?\nA Cuando el grupo enumere lo que oyó, el juicio y el arrepentimiento casi siempre faltarán. No lo señale antes: deje\nque la lista lo revele. El cuaderno cuenta el mismo experimento — un grupo de estudiantes cristianos llegó a doce\nelementos esenciales del evangelio, iy el arrepentimiento no era uno de ellos!",
    "cannotCut": "El ejercicio. Si lo recorta y simplemente muestra el esquema, el módulo pierde su razón de ser: funciona por el contraste entre el primer intento y el segundo.",
    "driverAlert": "⚠ Cuando el grupo enumere lo que oyó, el juicio y el arrepentimiento casi siempre faltarán. No lo señale antes: deje que la lista lo revele. El cuaderno cuenta el mismo experimento — un grupo de estudiantes cristianos llegó a doce elementos esenciales del evangelio, ¡y el arrepentimiento no era uno de ellos!",
    "discussionQuestions": [
      "¿Qué punto importante del mensaje evangélico omiten los cristianos la mayoría de las veces? ¿A qué cree que se",
      "¿Cuál es la ventaja de conocer una línea de presentación del evangelio como «Dios - Hombre - Dios»?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Esto no reduce el evangelio a una fórmula?»",
        "response": "Es un esquema, no un guion. Existe para que usted no olvide una pieza bajo presión."
      },
      {
        "objection": "«Hablar del infierno aleja a la gente.»",
        "response": "Note que"
      }
    ],
    "workbookRef": "¿Qué es el evangelio? • ¿Qué hace que un esquema del evangelio sea bueno? . Un esquema del evangelio •",
    "vueltaRef": "",
    "pageNumber": 13,
    "visualData": null
  },
  {
    "id": 7,
    "number": 7,
    "title": "El lugar del diálogo",
    "workbookChapter": "Cómo lo hicieron los apóstoles",
    "objective": "Mostrar que el problema de comunicación en el evangelismo rara vez es de contenido: es de vocabulario y de entorno.",
    "whatDrPeterPresents": "Abre con la viñeta de Gary Larson que el cuaderno describe: alguien le grita instrucciones a un perro, y la única palabra que\nel perro entiende de una orden complicada es su propio nombre. Las demás palabras «simplemente no están en el\nvocabulario de un perro».\nHacemos exactamente lo mismo en el evangelismo: usamos palabras que no están en el vocabulario del otro. Jerga cristiana\ncomo justificación, santificación, «lavado en la sangre» o «expiación sustitutiva». Pero también palabras más comunes como\nsalvo, Dios, bendecido o incluso Jesús, a las que ellos dan significados completamente distintos.\nPablo enfrentó exactamente este problema en Atenas (Hch 17): en la plaza usó las palabras griegas para resurrección,\nevangelio y Jesús, y lo acusaron de ser un charlatán. Cuando tuvo la oportunidad de hablar en el Areópago, explicó el\nevangelio usando solo palabras que sus oyentes entendían, y la reacción fue muy distinta. Como Pablo, también nosotros\nnecesitamos «desjergonizar» nuestro evangelismo.\nHablar de modo que la gente entienda no es solo cuestión de palabras: también implica partir de ideas que ya les son\nfamiliares para introducirles lo nuevo del cristianismo. Eso se llama contextualización, y el Módulo 10 la desarrolla.\nEl patrón apostólico tenía tres marcas:\nCon palabras que la gente entienda (Hch 17:18).\nEn un entorno donde se sientan cómodos (Hch 16:13; 17:17; 19:9; 28:30).\nCon la oportunidad de dialogar (Hch 17:2, 4; 18:4, 28; 19:9). El término griego dialegomai —«tráfico de palabras en dos\ndirecciones»— aparece diez veces entre Hechos 17 y 24.\nEl cuaderno cierra este capítulo con la frase que abre el Módulo 8: «Si somos sinceros, la verdadera razón es el miedo.»",
    "cannotCut": "Las tres marcas con sus referencias de Hechos, y la observación de que elegir el monólogo es frecuentemente una elección por comodidad propia, no por eficacia.",
    "driverAlert": null,
    "discussionQuestions": [
      "Repase los 3 principios de la evangelización apostólica y lea los versículos de la diapositiva de resumen.",
      "¿Por qué cree que los apóstoles seguían estos 3 principios a la hora de compartir el evangelio?",
      "¿Por qué cree que hoy en día los cristianos suelen ignorarlos?"
    ],
    "commonObjections": [
      {
        "objection": "«Pero la predicación es bíblica.»",
        "response": "Lo es. El punto no es abolir la predicación, sino notar que, fuera del contexto de culto, los apóstoles dialogaban. Hch 19:9-10 describe discusiones diarias en la escuela de Tirano."
      },
      {
        "objection": "«En mi contexto no se puede discutir, solo escuchar.»",
        "response": "Restricción legítima. Vale explorar con el grupo: ¿ cuál sería el equivalente local de"
      }
    ],
    "workbookRef": "Cómo lo hicieron los apóstoles.",
    "vueltaRef": "",
    "pageNumber": 14,
    "visualData": null
  },
  {
    "id": 8,
    "number": 8,
    "title": "La naturaleza del diálogo",
    "workbookChapter": "La naturaleza del diálogo",
    "objective": "Nombrar el miedo y convertirlo, de obstáculo, en lista de preparación.",
    "whatDrPeterPresents": "El cuaderno abre con una frase que conviene leer tal cual: «¡Hablar abiertamente de su fe en Dios puede dar miedo!» Los tres temores\nmás comunes: perder amigos; parecer una persona que juzga; no saber responder a sus preguntas.\nSobre el primero, la respuesta del cuaderno es directa: «¡Sí, es un riesgo! Ser discípulo es algo costoso». Pero en la práctica, si tratamos a\nlos demás con mansedumbre y respeto (1 P 3:15-16), rara vez nos dan la espalda.\nSobre el segundo: la crítica surge de un malentendido común. La mayoría de la gente cree la ecuación ser bueno = ser cristiano. Por eso,\nsi usted insinúa que es cristiano y ellos no, entienden que se está diciendo mejor que ellos. Eso pone el evangelio de cabeza, y cuanto\nSobre el tercero no hay excusa, porque «¡las cosas comunes ocurren comúnmente!». Y el cuaderno es punzante: si usted no ha pensado a\nfondo estas preguntas, «merece que le dé un sudor frío cada vez que comparte su fe».\nEncuesta de Paul Weston (600 personas, Gran Bretaña)\nLas siete preguntas mortales (Paul Little)\n¿Es Cristo el único camino hacia Dios? • ¿No está la Biblia llena\nNo hay pruebas • el cristianismo es irrelevante • nunca lo he\npensado en serio • el mayor obstáculo es la iglesia • hay\nde errores? • ¿No es la experiencia cristiana solo psicológica? •\n¿Cómo pueden ser posibles los milagros? • La resurrección •\ndemasiado sufrimiento en el mundo • el cristianismo no puede\nser el único camino hacia Dios.\n¿Qué pasa con los que nunca han oído el evangelio? • ¿Por qué\nsufren los inocentes? • ¿No me llevará al cielo una buena vida\nmoral?\nY la observación que el cuaderno guarda para el final: la verdadera razón por la que las personas no siguen a Cristo no es intelectual,\nsino moral: no están dispuestas a arrepentirse. Pero antes de que puedan verlo con claridad, hay que despejar eficazmente los\nescombros intelectuales.\nA Dos notas de conducción. La lista se llama «las siete preguntas mortales» y contiene ocho ítems: está así en el material del\nalumno; no es un error que haya que corregir ante el grupo. Y las listas de objeciones incluyen material sensible: trátelas como\npreguntas que hay que enfrentar, no como posiciones que hay que debatir. El grupo tiene una hora, y el debate no es el objetivo\nde este módulo.",
    "cannotCut": "El ejercicio de escribir los propios temores. Este módulo es diagnóstico: la lista de su cohorte le dice qué va a necesitar de los Módulos 13 a 20.",
    "driverAlert": "⚠ Dos notas de conducción. La lista se llama «las siete preguntas mortales» y contiene ocho ítems: está así en el material del alumno; no es un error que haya que corregir ante el grupo. Y las listas de objeciones incluyen material sensible: trátelas como preguntas que hay que enfrentar, no como posiciones que hay que debatir. El grupo tiene una hora, y el debate no es el objetivo de este módulo.",
    "discussionQuestions": [
      "¿Qué es lo que más le asusta de la evangelización y cuál es la mejor manera de afrontar este miedo?",
      "¿Cuáles son las preguntas más frecuentes que le hacen los no creyentes en su entorno social?",
      "¿Se siente seguro al responderlas y, en caso negativo, cuál es la mejor manera de corregirlo?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Y si me bloqueo?»",
        "response": "Diga que bloquearse es aceptable, y que"
      }
    ],
    "workbookRef": "La naturaleza del diálogo.",
    "vueltaRef": "",
    "pageNumber": 15,
    "visualData": {
      "type": "table",
      "title": "Temores vs Realidad de la Audiencia",
      "headers": [
        "Las 7 Preguntas Mortales (Paul Little)",
        "Encuesta Real (600 británicos, Paul Weston)"
      ],
      "rows": [
        [
          "1. ¿Es Cristo el único camino hacia Dios?",
          "No hay pruebas"
        ],
        [
          "2. ¿No está la Biblia llena de errores?",
          "El cristianismo es irrelevante"
        ],
        [
          "3. ¿No es la experiencia solo psicológica?",
          "Nunca lo he pensado en serio"
        ],
        [
          "4. ¿Cómo pueden ser posibles los milagros?",
          "El mayor obstáculo es la iglesia"
        ],
        [
          "5. La evidencia de la resurrección",
          "Hay demasiado sufrimiento en el mundo"
        ],
        [
          "6. ¿Qué pasa con los que nunca han oído?",
          "El cristianismo no puede ser el único camino"
        ],
        [
          "7. ¿Por qué sufren los inocentes?",
          "—"
        ],
        [
          "8. ¿No me llevará al cielo una buena moral?",
          "—"
        ]
      ]
    }
  },
  {
    "id": 9,
    "number": 9,
    "title": "Razones para la fe cristiana",
    "workbookChapter": "La pregunta básica",
    "objective": "Dar al alumno sus propios enfoques de respuesta, y enseñarle a elegir qué temas pone en la agenda de la conversación.",
    "whatDrPeterPresents": "El cuaderno llama a esto la pregunta básica: ¿ por qué cree USTED en Dios? Y ofrece tres enfoques válidos:\n• La belleza y el diseño en el orden natural (p. ej., Sal 19:1; Rom 1:19-20).\n• La conciencia interior (p. ej., Hch 17:27; Rom 2:15).\n• Dios se ha revelado en Jesucristo (p. ej., Col 1:13-15).\nY a continuación, tres conjuntos diferentes de objeciones, que es el punto estratégico del módulo:\n3 • Jesucristo\n1 • La creación\n2 • La experiencia\nGénesis y la evolución; los\nlas religiones del mundo; ¿no es\nla fiabilidad de los evangelios\ntodo psicológico?; el relativismo y\nproblemas del sufrimiento y del\nmal\nla naturaleza de la verdad y la\nmoral\nEl cuaderno lo dice con precisión: tarde o temprano, cualquier conversación sobre la fe cristiana implicará alguna\ndiscusión sobre la naturaleza de los documentos del Nuevo Testamento —«aquí está el punto de fondo de la\napologética»-. Pero si usted responde a la pregunta básica usando los enfoques (1) o (2), es usted, el evangelista,\nquien ha puesto esos otros temas en la agenda de la conversación.\n«¿La respuesta básica? Vaya al corazón del evangelio: ¡hable de Jesús!»",
    "cannotCut": "La distinción entre los tres conjuntos de objeciones, y la elección deliberada de conducir la conversación hacia Jesús. Eso es habilidad de conducción más que contenido, y es lo que el alumno se lleva a las conversaciones reales.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Cuál es el mejor argumento a favor de la fe cristiana y por qué?",
      "¿Cómo podemos ser más eficaces a la hora de alejar el diálogo de los problemas secundarios y centrarnos en",
      "lo más importante?"
    ],
    "commonObjections": [
      {
        "objection": "«¿ La evolución no refutó el diseño?»",
        "response": "No entre en el debate. Señale que ese es exactamente el conjunto de objeciones (1) que el módulo enseña a no elegir, y devuelva al grupo: ¿por qué esa conversación tan rara vez lleva a alguien a Cristo?"
      },
      {
        "objection": "«¿La conciencia no es solo condicionamiento social?»",
        "response": "El Módulo 20 trata eso. Registre y aplace."
      }
    ],
    "workbookRef": "La pregunta básica.",
    "vueltaRef": "",
    "pageNumber": 16,
    "visualData": null
  },
  {
    "id": 10,
    "number": 10,
    "title": "El proceso de persuasión",
    "workbookChapter": "sin capítulo propio",
    "objective": "Dar un método replicable de conversación y mostrarlo aplicado a tres cosmovisiones concretas.",
    "whatDrPeterPresents": "El modelo apostólico, en tres movimientos: Identificar — encontrar algo en lo que estén de acuerdo (Hch 13:13-51; 14:14-18; 17:22-31);\nConfrontar — desafiar las creencias erróneas (Hch 17:17; 13:46; 18:28; 19:8-9; 2 Cor 5:11; 10:5); Invitar — presentar la verdad cristiana\n(Rom 1:16; 15:20; 1 Cor 1:23).\nEsto es lo que el cuaderno llama contextualización, y lo ilustra con Pablo: en la sinagoga estableció un terreno común con un público\njudío comenzando por la historia judía y el Antiguo Testamento (Hch 13:13-51); con la gente del campo en Listra habló del control de\nDios sobre las estaciones (14:14-18); con los filósofos de Atenas citó su propia poesía (17:22-31).\n«Jesús es el único camino hacia Dios, pero hay muchos caminos hacia Jesús.»\nIDENTIFICAR\nCONFRONTAR\nINVITAR\nIslam\nla revelación, la Trinidad, la cruz\nel pecado, los medios de\nDios, la creación, los profetas,\nsalvación, la naturaleza de Dios, la\nJesús, el juicio, la historia común,\nla corrupción de Occidente\nfiabilidad y coherencia del islam\nJudaísmo\nla profecía bíblica, Jesús, la cruz\nDios, la creación, los profetas, el\nla vida después de la muerte, la\nAntiguo Testamento\nprofecía mesiánica, la ética, las\notras naciones\nAteísmo\nla ciencia, la verdad, la evidencia,\nCristo, la resurrección, la\nla autoconciencia, la conciencia\nla historia\nmoral, el libre albedrío, la\nrevelación, la vida después de la\nmoralidad, la creatividad, el\nmuerte\nsentido de destino\nY el modelo «submarino»: preguntas, no afirmaciones; evitar la jerga cristiana; empezar por los puntos de acuerdo (buscar «señales\nde verdad»); avanzar hacia los desacuerdos; mostrar inconsistencias; pedir permiso para compartir; presentar el evangelio de\nforma adecuada.",
    "cannotCut": "El orden: identificar va siempre primero. Y «pedir permiso», la línea más subestimada de la lista y la que más cambia la temperatura de una conversación.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Cómo modificó el apóstol Pablo la presentación del evangelio para comunicarse con distintos tipos de oyentes y por qué?",
      "¿Cuál es la cosmovisión no cristiana en su contexto cultural? ¿Cuál es su principal similitud y diferencia con el cristianismo",
      "que podría aprovechar?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Estar de acuerdo con el islam no es ceder?»",
        "response": "Identificar no es estar de acuerdo con todo; es encontrar el punto de partida. Pablo citó a poetas paganos en Atenas."
      },
      {
        "objection": "«¿Confrontar no es agresivo?»",
        "response": "Confrontar aquí es hacer preguntas difíciles, no acusar. Note que, en el modelo submarino, todo se hace por medio de preguntas."
      }
    ],
    "workbookRef": "sin capítulo propio. La contextualización está en Cómo lo hicieron los apóstoles → «Con palabras que la gente",
    "vueltaRef": "",
    "pageNumber": 17,
    "visualData": {
      "type": "table",
      "title": "Matriz de Persuasión y Contextualización (Pablo)",
      "headers": [
        "Cosmovisión",
        "IDENTIFICAR (Puntos de Acuerdo)",
        "CONFRONTAR (Tensión e Inconsistencias)",
        "INVITAR (Presentación de Cristo)"
      ],
      "rows": [
        [
          "Islam",
          "Dios, la creación, los profetas, Jesús, el juicio, la historia común, la corrupción de Occidente",
          "El pecado, los medios de salvación, la naturaleza de Dios, la fiabilidad y coherencia del islam",
          "La revelación, la Trinidad, la cruz"
        ],
        [
          "Judaísmo",
          "Dios, la creación, los profetas, el Antiguo Testamento",
          "La vida después de la muerte, la profecía mesiánica, la ética, las otras naciones",
          "La profecía bíblica, Jesús, la cruz"
        ],
        [
          "Ateísmo",
          "La ciencia, la verdad, la evidencia, la historia",
          "La autoconciencia, la conciencia moral, el libre albedrío, la moralidad, la creatividad, el sentido de destino",
          "Cristo, la resurrección, la revelación, la vida después de la muerte"
        ]
      ]
    }
  },
  {
    "id": 11,
    "number": 11,
    "title": "Circularidad y relativismo",
    "workbookChapter": "Evitar el argumento circular • El relativismo",
    "objective": "Enseñar la salida de dos callejones sin salida: el argumento circular y el «es verdad para ti».",
    "whatDrPeterPresents": "El argumento circular. El cuaderno lo describe paso a paso: el cristiano dice que Jesús es el Hijo de Dios y presenta textos de\nprueba tomados de la Palabra de Dios. El no creyente responde que no cree en la Biblia. El cristiano presenta entonces dichos de\nCristo que muestran que las Escrituras son la Palabra de Dios. El no cristiano responde que no acepta eso, «¡solo para que le digan\nque debe confiar en Jesús porque Él es el Hijo de Dios!».\nDos razones por las que caemos ahí. Primera: la práctica habitual de Pablo con los judíos era razonar a partir de Escrituras que\nellos ya tenían por inspiradas; pero con los gentiles (Hechos 14 y 17) su enfoque era muy distinto, y su teología «seguía siendo\nbíblica, pero sin presuponer que los textos bíblicos debían ser el tribunal de última instancia». Segunda: no pensamos con\nclaridad sobre el objeto de la fe cristiana. Debemos pedir a las personas que pongan su confianza en una persona, no en un libro\nNuestro argumento es lineal, no circular. Apelamos a los documentos del Nuevo Testamento no como Escritura con autoridad\ndivina, sino como documentos históricos creíbles. «Comenzamos donde ellos están.» Y la tarea queda formulada así: «Nuestra\ntarea consiste en argumentar, a partir de la historia, que Jesús es el Hijo de Dios.»\nEl relativismo. El cuaderno abre con Keith Ward: «¿Podemos imaginarnos diciendo: \"Bueno, para mí la tierra es redonda, pero para\nti puede ser plana\"? La tierra es redonda o es plana; no puede ser ambas cosas.» Y describe el síntoma: usted presenta el evangelio\ncon claridad y recibe como respuesta «Qué bueno que tú creas eso. Yo, personalmente, me inclino por el budismo zen». El\nevangelio «parece resbalar como el agua sobre las plumas de un pato».\nSe autorrefuta: no se puede sostener que el relativismo sea verdadero en sentido absoluto; a lo sumo sería relativamente\nNadie es consecuente: nadie es relativista hasta el final; las personas se deslizan entre hablar de verdad absoluta y hablar\ncomo si nada fuera verdadero fuera de su percepción.\nExige establecer la antítesis (Schaeffer): no avance hasta estar seguro de que están hablando en términos de lo que Schaeffer\nllamó «verdad verdadera».\nY el recurso práctico: la tumba o estaba vacía aquella primera Pascua, o no lo estaba. No pudo estar vacía para unos y no\npara otros.",
    "cannotCut": "La autorrefutación y la reformulación lineal-y-no-circular, que es la mitad constructiva del módulo. Y el ejemplo de la tumba, que es el más concreto.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Cómo podemos evitar el argumento circular y por qué es importante hacerlo?",
      "¿Cuál es la mejor manera de responder a alguien que dice: «bueno, entiendo que el cristianismo es verdad para ti, pero",
      "no lo es para mí»?"
    ],
    "commonObjections": [
      {
        "objection": "«Pero existe la verdad subjetiva.»",
        "response": "Sí: las preferencias. La distinción es hecho frente a opinión. Si Jesús resucitó es un hecho: igualmente verdadero o falso para todos."
      },
      {
        "objection": "«Decir que se equivocan es intolerante.»",
        "response": "Devuelva la pregunta sin usar etiquetas: ¿es intolerante decir que la tierra no es plana?"
      }
    ],
    "workbookRef": "Evitar el argumento circular • El relativismo.",
    "vueltaRef": "",
    "pageNumber": 18,
    "visualData": null
  },
  {
    "id": 12,
    "number": 12,
    "title": "El evangelismo exitoso",
    "workbookChapter": "¿Qué es el evangelismo exitoso?",
    "objective": "Cerrar los módulos centrales con el paso práctico: cómo conducir a una decisión a alguien que ya entendió el evangelio.",
    "whatDrPeterPresents": "Primero, el marco: dado que el evangelio mismo es el poderoso agente de Dios y que está en la mente de Dios a quién\ndecide revelarse, sin esa perspectiva «seremos propensos a ver el éxito en términos de conteo de cabezas».\nTres criterios para medir el éxito:\nDeben estar presentes personas no cristianas. «En todo intento de evangelismo masivo existe el temor perpetuo de\nque más del 95 % de los presentes sean el rebaño fiel.»\nEl evangelio debe presentarse con claridad y de forma persuasiva, «manejando con precisión la palabra de verdad»\n(2 Tim 2:15), sin distorsionar el mensaje para hacerlo más agradable (2 Cor 4:2).\nLa atmósfera debe ser propicia para escuchar. Una cena de diálogo arruinada por el ruido de los platos en la\nhabitación de al lado; una reunión al aire libre arruinada por el tráfico.\n«No puedo oír lo que dices, porque tu vida grita demasiado fuerte.»\nSi se cumplen los tres, el trabajo se ha realizado con éxito, independientemente de cuántas personas se conviertan. Es\nobra del Espíritu Santo hacer que las personas nazcan de nuevo.\nEl cuaderno dedica un capítulo entero a las cenas de diálogo como método concreto, con una lista de diez maneras en\nque salen mal. Vale leerla antes de organizar una.\nY la herramienta más inmediatamente aplicable del curso: las preguntas de Directo a la yugular, en orden creciente de\ncompromiso. Están completas en la Parte D.2.",
    "cannotCut": "Las preguntas de «Directo a la yugular», en orden. Pida al grupo que las anote.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Cuál es el elemento del evangelismo exitoso que los cristianos omiten con más frecuencia y por qué?",
      "¿Qué pregunta difícil le hace reflexionar más y por qué?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Preguntar \"qué tan avanzado vas\" no es presionar?»",
        "response": "Es lo contrario: es diagnóstico. La pregunta permite que la persona diga"
      },
      {
        "objection": "«¿No es manipulador llevar a alguien por una secuencia de preguntas?»",
        "response": "Cada pregunta admite un"
      }
    ],
    "workbookRef": "¿Qué es el evangelismo exitoso? • Directo a la yugular • Cenas de diálogo.",
    "vueltaRef": "",
    "pageNumber": 19,
    "visualData": null
  },
  {
    "id": 13,
    "number": 13,
    "title": "La evidencia de la resurrección",
    "workbookChapter": "La resurrección",
    "objective": "Dar al alumno las líneas de evidencia histórica y mostrar por qué esta es la pregunta central de las ocho.",
    "whatDrPeterPresents": "Dos citas de apertura. «El cristianismo se sostiene o se derrumba sobre la afirmación de que Jesucristo resucitó de entre los\nmuertos» — Ludovic Kennedy. Y Pablo, aún más crudamente: «Y si Cristo no ha resucitado, vana es entonces nuestra predicación, y vana\ntambién la fe de ustedes» (1 Cor 15:14).\nPrimero: nadie discutió que Jesús murió en la cruz. Su muerte fue certificada por soldados romanos «cuyo oficio era\nprecisamente matar». No le quebraron las piernas porque estaban convencidos de que ya estaba muerto, y lo confirmó la «sangre y\nagua» de Su costado traspasado, que solo ocurre después de la muerte. Contra la teoría del «desmayo»: implicaría creer que un\nhombre golpeado casi hasta la muerte, clavado en una cruz y envuelto en unos 34 kilos de vendas y especias pudo desenvolverse,\napartar una roca de una tonelada, vencer él solo a una guardia romana armada y persuadir a más de 500 personas de que había\nconquistado la muerte.\nSegundo: el cuerpo había desaparecido. Si los judíos lo hubieran retirado, lo habrían exhibido ante el primer rumor. Si los\ndiscípulos lo hubieran retirado, no habrían estado dispuestos después a morir por algo que sabían falso. «Los peregrinos nunca\nacudieron en masa a la tumba de Jesús. Estaba vacía.»\nTercero: las apariciones posteriores fueron impresionantes. María, los doce, los caminantes de Emaús, Pablo y otros 500 (1 Cor\n15:6). Contra la alucinación: «las alucinaciones no se dan en grupos variados, en múltiples ocasiones, en lugares diferentes y a lo\nlargo de varias semanas. ¡Tampoco encienden fogatas en la playa ni comen pescado!»\nCuarto: la rápida expansión del cristianismo. Llegaron a creer en la divinidad de Cristo después de convencerse de que había\nresucitado. «Fue esta convicción la que los transformó de cobardes temerosos en los audaces apóstoles que literalmente pusieron\nel mundo de cabeza.»\nQuinto: la experiencia personal de los cristianos, generaciones que han llegado a conocer a Jesús como persona. «El cristianismo\nno es solo un credo que seguir ni una ideología que abrazar; es una relación dinámica con un Dios real y vivo.»\nQuien no se convence suele tener uno de dos problemas: duda de la fiabilidad de los documentos del NT (Módulo 19), o tiene\nobjeciones filosóficas contra los milagros (Módulo 14). Y el cuaderno añade: «En realidad, el verdadero milagro es la encarnación. Una\nvez que aceptamos que Dios puede hacerse hombre, la resurrección no presenta ninguna dificultad.» Y el fondo del asunto: «Si no\noyen a Moisés y a los Profetas, tampoco se persuadirán si alguien se levanta de entre los muertos» (Lc 16:31).",
    "cannotCut": "El emparejamiento de cada evidencia con su objeción. Presentar la evidencia sin las objeciones deja al alumno desarmado exactamente donde será atacado.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Por qué la resurrección es tan esencial para la fe cristiana?",
      "Resuma brevemente las pruebas de la resurrección."
    ],
    "commonObjections": [
      {
        "objection": "«Los evangelios fueron escritos por interesados.»",
        "response": "Módulo 19. Registre y aplace."
      },
      {
        "objection": "«La alucinación colectiva existe.»",
        "response": "Explore con el grupo: las alucinaciones corresponden a la expectativa. Los discípulos no esperaban la resurrección; pensaron primero en otras explicaciones para el cuerpo desaparecido."
      }
    ],
    "workbookRef": "La resurrección.",
    "vueltaRef": "Vuelta: Parte D.1, ítem 5 — pasa por la encarnación.",
    "pageNumber": 20,
    "visualData": {
      "type": "cards3",
      "title": "Cinco Líneas de Evidencia Histórica",
      "cards": [
        {
          "title": "1. Muerte certificada por soldados romanos",
          "ref": "Jn 19:34; Mc 15:44-45"
        },
        {
          "title": "2. Tumba vacía y cuerpo desaparecido",
          "ref": "Lc 24:1-3"
        },
        {
          "title": "3. Apariciones posteriores (>500 testigos)",
          "ref": "1 Cor 15:6; Lc 24:36-43"
        },
        {
          "title": "4. Rápida expansión de la Iglesia primitiva",
          "ref": "Hch 2:41; 4:4"
        },
        {
          "title": "5. Vidas transformadas de los discípulos",
          "ref": "Jn 20:19-22; Hch 4:13"
        }
      ]
    }
  },
  {
    "id": 14,
    "number": 14,
    "title": "¿Cómo pueden ser posibles los milagros?",
    "workbookChapter": "¿Cómo pueden ser posibles los milagros?",
    "objective": "Desarmar la objeción filosófica antes de la discusión sobre la evidencia, porque quien sostiene que los milagros son imposibles no va a sopesar ninguna evidencia.",
    "whatDrPeterPresents": "El marco del cuaderno es tajante: quienes no pueden creer en los milagros «al menos son capaces de ver con claridad lo que algunos\nteólogos liberales no ven: que creer en el Dios de la Biblia implica creer en lo milagroso. Negar lo milagroso es negar a Dios mismo.»\nSi los milagros no ocurrieron, la resurrección no ocurrió y nuestra fe es vana (1 Cor 15:32).\nCuatro respuestas típicas, cada una con su tratamiento:\n«No hay evidencia de que ocurrieran.» Presente la evidencia de milagros bíblicos seleccionados, señalando que muchos\n«convencieron a escépticos empedernidos, sorprendieron incluso a los fieles y fueron aceptados como hechos por testigos\noculares que tenían fuertes intereses creados en no creer». Esto generalmente empuja a la persona hacia otro de los tres\nargumentos.\n«Hay explicaciones naturales.» Sodoma destruida por un volcán, el Mar Rojo abierto por un fuerte viento, el Jordán secado por\nun deslizamiento. Primero: una explicación natural no significa que Dios no estuviera involucrado — Él es el sustentador del\nuniverso (Heb 1:3), pone y quita reyes (Dn 4:17; Rom 13:1; Is 40:23), y «es Dios incluso quien determina la suerte que se echa» (Pr\n16:33). Los acontecimientos naturales forman parte de la providencia de Dios (Ex 14:21). Segundo: hay milagros sin\nexplicación natural posible — una vara que se convierte en serpiente (Ex 4:2-4), la cabeza de un hacha de hierro que flota (2 R\n6:6), la sanidad instantánea de una ceguera congénita (Jn 9:1-34).\n«Los milagros no pueden ocurrir. » Esta es la objeción real, y es filosófica. «Las teorías científicas no son prescriptivas, sino\ndescriptivas.» No prescriben cómo debe comportarse la naturaleza; describen cómo se ha comportado, como base para\npredecir. Ninguna teoría está tallada en piedra: cualquiera puede ser refutada por un solo hecho. «Un verdadero científico no\nignora los hechos que no encajan en su teoría. Más bien, modifica su teoría para dar cabida a esos hechos.»\n«Yo nunca he visto un milagro.» Si se les presiona, admitirán sin dificultad que creen muchas otras cosas sobre la base de\ntestimonios orales o escritos.\nLa conclusión: la verdadera razón por la que las personas no creen los relatos bíblicos de milagros es que no creen en Dios mismo.",
    "cannotCut": "La tercera respuesta. Las dos primeras son discusiones sobre evidencia; la tercera es una decisión previa sobre qué se admite como posible. Si el alumno no percibe la diferencia, discutirá evidencia con quien ya decidió que ninguna evidencia serviría.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Por qué hizo Jesús milagros?",
      "¿Cuál es la principal objeción que tienen las personas de su entorno a creer en los milagros y por qué?"
    ],
    "commonObjections": [
      {
        "objection": "«Si los milagros existen, ¿por qué no los vemos hoy?»",
        "response": "No prometa ni cesación ni continuación; eso es debate denominacional. Vuelva a la pregunta del módulo: ¿qué aceptaría esta persona como evidencia?"
      },
      {
        "objection": "«Las sanidades por fe son efecto placebo.»",
        "response": "Concuerde en que algunas lo son. Luego señale que la resurrección no es candidata a placebo."
      }
    ],
    "workbookRef": "¿Cómo pueden ser posibles los milagros? •",
    "vueltaRef": "Vuelta: Parte D.1, ítem 5.",
    "pageNumber": 21,
    "visualData": null
  },
  {
    "id": 15,
    "number": 15,
    "title": "¿Es Cristo el único camino hacia Dios?",
    "workbookChapter": "¿Es Cristo el único camino hacia Dios?",
    "objective": "Mostrar que la exclusividad de Cristo no es una preferencia cristiana, sino una consecuencia de la identidad de Jesús.",
    "whatDrPeterPresents": "El cuaderno abre situando el problema: vivimos en una «aldea global», una sociedad multirreligiosa donde las afirmaciones\nexclusivas pueden ofender. «¿No estamos siendo, entonces, arrogantes, intolerantes y estrechos de mente al sugerir que Él es el\núnico camino?»\nY concede todo lo que puede concederse: las religiones del mundo «sí tienen algunas cosas en común: todas reconocen una\ndimensión espiritual y tienen códigos morales muy semejantes». Compare la enseñanza de las seis principales religiones\n(cristianismo, judaísmo, islam, hinduismo, budismo, sijismo) sobre la naturaleza de Dios, la vida después de la muerte, la\ncreación, el pecado y la salvación.\n«¡No pueden estar todas en lo cierto! Quizá todas contengan aspectos de la verdad. Quizá. Pero si una es verdadera en sentido\nabsoluto, se sigue lógicamente que ninguna de las demás puede serlo también. Es una o ninguna.»\nLas tres afirmaciones distintivas con las que ninguna otra religión está de acuerdo: la deidad de Cristo (Jn 1:18); la autoridad de\nlas Escrituras (2 Tim 3:16); la salvación por gracia mediante la fe (Ef 2:8). La exclusividad la afirman Pedro, Pablo y Jesús mismo\n(Hch 4:12; 1 Tim 2:5; Jn 14:6), y descansa sobre la enseñanza de que Él mismo es Dios: declarada directamente en al menos ocho\npasajes del NT e implícita en otros.\nAdemás, Jesús dijo e hizo cosas que en el Antiguo Testamento solo Dios dijo e hizo. Se llamó a sí mismo YO SOY (Ex 3:14; cf. Jn\n8:58), el esposo, el pastor, el primero y el último; otros lo llamaron Señor (heb. = YHWH; gr. = Kyrios). Aceptó adoración. Creó el\nmundo. Existía antes de Su nacimiento. Perdonó pecados. Dijo que juzgaría al mundo.\nEl argumento de cierre es el más fuerte: por las reacciones de la gente vemos que no había ninguna duda sobre lo que estaba\nafirmando. O lo adoraban, o lo acusaban de blasfemia. «Lo mataron porque afirmaba ser Dios.» Y de ahí las cuatro opciones del\ncuaderno: o es un mentiroso, o un loco, o una leyenda, o el Señor.",
    "cannotCut": "La estructura lógica: la exclusividad no es una afirmación sobre religiones, es una consecuencia de quién es Jesús. Si no establece primero la deidad, la exclusividad suena arbitraria. Y las cuatro opciones, con las palabras del cuaderno.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Qué es lo que diferencia al cristianismo de cualquier otra fe?",
      "¿En qué se basa la afirmación de que Jesús es Dios encarnado?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Y las personas buenas de otras religiones?»",
        "response": "Módulos 16 y 17. Registre y aplace; no improvise."
      },
      {
        "objection": "«Jesús nunca afirmó ser Dios.»",
        "response": "Use las reacciones: si no lo afirmó, ¿por qué lo acusaron de blasfemia y lo mataron por ello?"
      }
    ],
    "workbookRef": "¿Es Cristo el único camino hacia Dios? •",
    "vueltaRef": "Vuelta: Parte D.1, ítem 2.",
    "pageNumber": 22,
    "visualData": null
  },
  {
    "id": 16,
    "number": 16,
    "title": "¿Qué pasa con los que nunca han oído el evangelio?",
    "workbookChapter": "capítulo homónimo",
    "objective": "Enseñar al alumno a responder con precisión, separando lo que la Escritura afirma, lo que sugiere y lo que no dice.",
    "whatDrPeterPresents": "El punto de partida del cuaderno es desarmante: «En pocas palabras: ¡no lo sabemos! \"Las cosas secretas pertenecen al SEÑOR\nnuestro Dios\" (Dt 29:29).» Ciertamente no podemos pronunciarnos sobre ningún individuo en particular. Pero la Biblia no nos deja\ntotalmente a oscuras.\nY delimita el alcance: no se trata del destino de quienes rechazan abiertamente a Jesús (2 Tes 1:8-10), sino del de quienes, sin culpa\npropia, nunca han oído hablar de Él. «Basta pensar en todos los que murieron antes de que Jesús naciera para darnos cuenta de la\nmagnitud del problema.»\nLa justicia de Dios. Si el cristianismo es verdadero, Dios es moralmente perfecto y justo, lo sabe todo y Su naturaleza es amor.\nUn enorme error judicial en el día del juicio «es inconcebible. Un Dios así sería un tirano malvado, no el Señor misericordioso\nrevelado por Jesús». Sea lo que sea que ocurra, dejará a cualquier observador moral satisfecho de que el Dios de toda la tierra\nha hecho lo que es justo (Gn 18:25).\nLa revelación general. «Nadie ignora por completo al Dios vivo y verdadero» (Rom 1:20), incluido Su carácter moral, del que da\ntestimonio la conciencia (Rom 2).\nLos héroes del Antiguo Testamento. Tenían poco conocimiento de Jesús y hallaron misericordia; Jesús describe a Abraham,\nIsaac y Jacob sentados a la mesa en el reino de los cielos (Mt 8:11). La muerte de Cristo «parece haber obrado\nretrospectivamente a favor de ellos» (Rom 3:25; Heb 9:15). Pero el cuaderno pone el freno de inmediato: «aquellos hombres\nfueron las excepciones luminosas, no la regla» — Moisés bajó del monte y encontró a Israel adorando un becerro de oro.\nEl que busca sinceramente. Quienes buscan a Dios lo encontrarán (Mt 7:7). Puede significar que oigan las buenas nuevas en esta\nvida; o puede significar que vivan sin ninguna seguridad de perdón y, aun así, sean perdonados mediante la muerte expiatoria\nde Jesús. «El evangelio, entonces, traería a tales buscadores no tanto el perdón mismo, cuanto la seguridad de haber sido\nperdonados.»\nResumen: solo Dios sabe cómo le irá a cada persona. «Mía es la venganza, Yo pagaré» (Rom 12:19). Todos tienen suficiente\nconocimiento de Dios para buscarlo, pero en general no lo hacen, aun cuando su conciencia los condena. Por eso proclamamos el\nevangelio (2 Cor 5:20).",
    "cannotCut": "Dt 29:29 y la frase «no lo sabemos». Este es el único módulo en que reconocer el límite es parte de la respuesta correcta, y no un fallo del facilitador. Dígalo al grupo explícitamente.",
    "driverAlert": "⚠ Reconocer el límite es parte de la respuesta correcta: Dt 29:29 y la frase «no lo sabemos». Este es el único módulo en que reconocer el límite es parte de la respuesta correcta, y no un fallo del facilitador.",
    "discussionQuestions": [
      "¿Puede alguien salvarse sin Cristo?",
      "¿Qué nos enseña la Biblia sobre los que nunca han oído hablar del evangelio?"
    ],
    "commonObjections": [
      {
        "objection": "«Entonces Dios es injusto.»",
        "response": "Invierta la pregunta: injusto sería que alguien recibiera peor de lo que merece. La pregunta bíblica no es por qué algunos se pierden, sino por qué alguien es salvo."
      },
      {
        "objection": "«Entonces es mejor no predicar, así nadie se hace responsable.»",
        "response": "El cuaderno lo anticipa: la predicación es"
      }
    ],
    "workbookRef": "¿Qué pasa con los que nunca han oído el evangelio? •",
    "vueltaRef": "Vuelta: Parte D.1, ítem 6.",
    "pageNumber": 23,
    "visualData": null
  },
  {
    "id": 17,
    "number": 17,
    "title": "¿No me llevará al cielo una buena vida moral?",
    "workbookChapter": "capítulo homónimo",
    "objective": "Desmontar la religión del hacer y sustituirla por la del hecho.",
    "whatDrPeterPresents": "El cuaderno empieza por la cultura popular. En una entrevista televisiva, al actor Peter Ustinov se le pidió su «doctrina del\nhombre»; respondió «¡El hombre es esencialmente bueno!» y fue premiado con un aplauso sostenido. Incluso entre quienes\ncreen en el cielo y el infierno, la concepción popular es que el infierno «está reservado únicamente para archivillanos como Stalin,\nHitler o Gengis Kan».\nY el principio que ordena todo: «Nuestra aceptación por parte de Dios no depende de nuestra bondad, sino de Su misericordia»\n(Lc 18:9-14; Tit 3:5). Cinco puntos, con los títulos del cuaderno:\nLa realidad del juicio. La muerte no conduce a la extinción de la percepción, ni a la reencarnación, ni a una existencia\nincorpórea del alma, sino al juicio (Heb 9:27). A quienes duden hay que recordarles «que esta es la enseñanza del propio\nJesucristo y de Sus apóstoles».\nLa nota mínima exigida: la perfección. «La norma de Dios no es que seamos mejores que los demás, sino que seamos\nperfectos» (Mt 5:48). Tropezar en un solo punto es fracasar por completo (Stg 2:10). La lujuria equivale al adulterio y la ira al\nhomicidio (Mt 5:21-22, 27-28).\nLa universalidad del pecado. No hay nadie «que haga el bien y nunca peque» (Ec 7:20). Incluso nuestras buenas obras son\nmalas a los ojos de Dios (Is 64:6).\nLa perfección de Cristo. Su impecabilidad se enseña como hecho establecido (Is 53:9; 2 Cor 5:21; Heb 4:15; 1 P 2:22; 1 Jn 3:5).\n«¿Quién de ustedes me prueba que tengo pecado?» (Jn 8:46).\nLa salvación, solo por la fe. Un don gratuito que debe recibirse por la fe -«confianza que cree»— en Cristo (Rom 6:23; Ef 2:8-\n9). «Si pudiéramos alcanzarla por nuestros propios esfuerzos, no habría sido necesario que Cristo entregara Su vida perfecta\npor nosotros» (Gál 2:21).\n«No son las personas buenas las que van al cielo, porque nadie es suficientemente bueno. Las personas \"buenas\" (las que se\ncreen suficientemente buenas) van al infierno. Las personas \"malas\" (las que reconocen que no alcanzan las normas de Dios y\nacuden a Su misericordia) van al cielo si ponen su fe en Cristo.»",
    "cannotCut": "El punto 2. Sin «la nota mínima exigida: la perfección», todo el argumento se derrumba, porque la persona sigue comparándose con el vecino en lugar de con la norma.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Por qué tanta gente cree que la salvación se basa en las buenas obras?",
      "¿Cómo podemos explicar la «gracia» a alguien que piensa que se salva por ser una buena persona?"
    ],
    "commonObjections": [
      {
        "objection": "«Esto quita cualquier motivo para hacer el bien.»",
        "response": "Ef 2:10 viene justo después de 2:8-9: las buenas obras son el fruto, no la raíz."
      },
      {
        "objection": "«Mi abuelo era la mejor persona que conocí.»",
        "response": "No argumente. Eso no es una objeción intelectual, es duelo. Reconózcalo, у recuerde el Módulo 16: solo Dios juzga."
      }
    ],
    "workbookRef": "¿No me llevará al cielo una buena vida moral? •",
    "vueltaRef": "Vuelta: Parte D.1, ítem 7.",
    "pageNumber": 24,
    "visualData": null
  },
  {
    "id": 18,
    "number": 18,
    "title": "¿Por qué el sufrimiento?",
    "workbookChapter": "¿Por qué el sufrimiento?",
    "objective": "Dar las respuestas que el cristianismo ofrece y, antes de ellas, enseñar a identificar de dónde viene la pregunta.",
    "whatDrPeterPresents": "El capítulo se subtitula «Una guía de estudio sobre un tema recurrente en el diálogo», y abre con una afirmación fuerte: «La cosmovisión cristiana tiene\nmucho más que decir sobre el sufrimiento que cualquier otra religión o filosofía. Ofrece respuestas sustanciales (aunque incompletas) a nuestras\npreguntas.» Y con una advertencia sobre el registro: «La Biblia es un libro práctico: no satisface nuestra ociosa curiosidad intelectual (Mt 11:25), pero\nnos da información suficiente para vivir».\nEl cuaderno no organiza el material en teodiceas, sino como una lista de verdades que parecen claras. Las principales:\n• Dios es bueno, y todo lo que creó era «bueno en gran manera» (Sal 100:5; Gn 1:31). Su naturaleza es amor (1 Jn 4:8), e hizo al hombre a Su imagen,\ncapaz de responder a Su amor o de rechazarlo: «El hombre no es una máquina programada, sino que fue creado con libre albedrío» (Gn 1:26-27).\nLa desobediencia deliberada del hombre desató el mal en el mundo (Gn 3:1-19; Rom 5:12), y la caída afectó cada parte de nuestra naturaleza,\nincluidos la mente, la conciencia y el libre albedrío (2 Cor 4:2-4; Tit 1:15; Rom 7:15-24). La inmensa mayoría del sufrimiento del mundo se debe,\ndirecta o indirectamente, al hombre.\nParte del sufrimiento se debe simplemente a cómo es el mundo: «los hábitos alimenticios de las polillas y la oxidación del hierro son moralmente\nneutros en sí mismos, a diferencia de los ladrones que penetran y roban» (Mt 6:19). Toda la creación fue afectada por la caída (Gn 3:17-18; Rom\n8:20-22), y hay fuerzas espirituales de maldad «en las regiones celestes» (Ef 6:12).\nNadie es inocente (Mc 10:18; Rom 3:23). Y nuestro sufrimiento no está directamente relacionado con nuestros pecados (Lc 13:2-5).\nDios finalmente erradicará el mal, pero retrasa el juicio por misericordia (2 P 3:9). Por Su amor, el Juez se ha convertido en el Rescatador (Jn\n3:16): Él bebió la copa del sufrimiento hasta las heces para salvarnos (Is 53:3ss; Mt 26:38; Lc 22:44; Mt 27:46).\n• Está convocando un ejército de discípulos para combatir el mal y el sufrimiento dondequiera que los encuentren (Mt 25:31-46; Jn 17:18). Ha\nrevelado todo lo que necesitamos saber (Jn 20:31), pero no todo lo que nos gustaría saber (Mt 24:36; 1 Cor 13:12). Y un día el sufrimiento\nterminará (Ap 21:1-5).\nEl capítulo termina reconociendo el límite: «Los misterios permanecen.» Incluyen «las cosas secretas» que «pertenecen al SEÑOR nuestro Dios», pero\n«las cosas reveladas nos pertenecen a nosotros y a nuestros hijos para siempre» (Dt 29:29).\nA Es alta la probabilidad de que alguien en la sala esté de duelo o enfermo. Avise al inicio que es un módulo pesado y que nadie está obligado\na hablar. Si alguien trae su propio dolor, detenga el reloj: la sesión puede atrasarse; la persona importa más.",
    "cannotCut": "La nota final del capítulo, que es la instrucción de conducción más importante del curso entero: «La cuestión del sufrimiento no es solo un asunto académico. Es muy posible que quien pregunta tenga en mente alguna amarga experiencia personal: razón de más para tratar el tema con mansedumbre y reverencia (1 P 3:15).» Si tiene que elegir entre las verdades de la lista y esta nota, quédese con la nota.",
    "driverAlert": "⚠ Es alta la probabilidad de que alguien en la sala esté de duelo o enfermo. Avise al inicio que es un módulo pesado y que nadie está obligado a hablar. Si alguien trae su propio dolor, detenga el reloj: la sesión puede atrasarse; la persona importa más.",
    "discussionQuestions": [
      "¿Qué defensa contra el argumento del sufrimiento le parece más convincente y por qué?",
      "¿Cuál es la mejor respuesta para alguien que tiene una profunda experiencia personal de sufrimiento?"
    ],
    "commonObjections": [
      {
        "objection": "«Esto no consuela a nadie.»",
        "response": "Correcto, y el cuaderno concuerda. El argumento sirve para la pregunta intelectual. Para el dolor: presencia y silencio. El libre albedrío explica la guerra, no el cáncer infantil» — Objeción legítima y fuerte. La respuesta del cuaderno es que toda la creación fue afectada por l aída, no solo la voluntad humana. No finja que lo resuelve todo: el propio cuaderno admite que las respuestas son"
      }
    ],
    "workbookRef": "¿Por qué el sufrimiento? •",
    "vueltaRef": "Vuelta: Parte D.1, ítem 1 — el cuaderno recomienda llevar la conversación «a las cuestiones",
    "pageNumber": 25,
    "visualData": null
  },
  {
    "id": 19,
    "number": 19,
    "title": "¿No está la Biblia llena de errores?",
    "workbookChapter": "capítulo homónimo",
    "objective": "Dar lo esencial sobre la transmisión y la fiabilidad del texto bíblico, y enseñar al alumno a distinguir la duda real de la duda de fachada.",
    "whatDrPeterPresents": "El cuaderno organiza el capítulo en cuatro preguntas distintas, y esa estructura es en sí misma la herramienta: sirve para averiguar «por\nqué y cuándo creen nuestros amigos que la Biblia fue cambiada».\n¿Ocurrieron realmente los hechos tal como afirmaron los testigos oculares? Si no, solo hay dos posibilidades: se equivocaron o\nmintieron. «Los individuos pueden sufrir errores de percepción, pero no grupos enteros.» Muchos acontecimientos fueron\npresenciados por más de una persona: las historias paralelas de Reyes, Crónicas y los Profetas; los cuatro evangelios; los 500 que\nvieron a Cristo resucitado (1 Cor 15:6). ¿Y mentirían? «Once de los doce discípulos sufrieron una muerte violenta a causa de su fe en\nSu resurrección.»\n¿Cambió el relato antes de ser puesto por escrito? Las tradiciones orales «se componen en formatos fáciles de memorizar y se\nrepiten y verifican constantemente»; algunos de los primeros conversos musulmanes memorizaron con exactitud más de 6.000\nversículos del Corán. Pero, sobre todo, no hubo una cadena de transmisión oral: las palabras y los hechos de Jesús fueron\nregistrados por testigos oculares (2 P 1:16; 1 Jn 1:3; Jn 19:35) o por quienes los entrevistaron cuidadosamente (Lc 1:1-3).\n¿Es lo que tenemos ahora lo que se escribió originalmente? Existen copias completas del NT en griego de los siglos III y IV (los\ncódices Vaticano, Sinaítico y Alejandrino), y fragmentos como el de John Rylands, «de la época de quienes conocieron\npersonalmente a los apóstoles». El AT hebreo más antiguo era el Texto Masorético (c. 900 d. C.) hasta que los Rollos del Mar Muerto\nde Qumrán, de la década de 1940, resultaron ser «1.000 años más antiguos y prácticamente idénticos». La comparación que fija la\nidea: de Julio César sabemos por menos de una docena de copias, las más antiguas mil años posteriores a su muerte; de la vida de\nCristo hay más de 24.000 testimonios de los primeros dos o tres siglos.\n¿ Hay contradicciones? «Quienes hablan de las \"miles\" de contradicciones no suelen ser capaces de nombrar ni una.» La mayoría\nson errores menores de copia, versículos sacados de contexto, o la misma historia contada desde perspectivas distintas. Y el\nargumento que da vuelta la objeción: «Si en un juicio varios testigos sucesivos dieran testimonios idénticos, se podría sospechar\nque la evidencia fue fabricada.» Las contradicciones aparentes «más que arrojar dudas sobre la autenticidad de la Biblia, la\nconfirman: en una falsificación habrían sido cuidadosamente eliminadas».\nFuera del NT, la literatura judía y romana antigua también menciona a Cristo (Tácito, Luciano, Josefo, Suetonio, Plinio y Talo). Y el\ndiagnóstico final: quienes más cuestionan la Biblia «o se acercan a ella con presuposiciones (p. ej., que los milagros no pueden ocurrir),\no no están dispuestos a aceptar las implicaciones personales de su enseñanza».",
    "cannotCut": "Los Rollos del Mar Muerto y lo que demostraron. Es el dato más concreto del módulo y el que más queda.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Hasta qué punto son fiables los documentos del Nuevo Testamento y por qué?",
      "¿Qué nos dice sobre Jesús la literatura de los siglos I y II, ajena al Nuevo Testamento?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Y las contradicciones entre los evangelios?»",
        "response": "Use el argumento del juicio: la concordancia total sería más sospechosa, no menos."
      },
      {
        "objection": "«La Biblia fue editada en el Concilio de Nicea.»",
        "response": "Muy común. El fragmento de John Rylands es de la época de quienes conocieron a los apóstoles, dos siglos antes de Nicea."
      }
    ],
    "workbookRef": "¿No está la Biblia llena de errores? •",
    "vueltaRef": "Vuelta: Parte D.1, ítem 3.",
    "pageNumber": 26,
    "visualData": null
  },
  {
    "id": 20,
    "number": 20,
    "title": "¿No es la experiencia cristiana solo psicológica?",
    "workbookChapter": "capítulo homónimo",
    "objective": "Enseñar al alumno a dar la vuelta a la pregunta, y anclar la seguridad de la fe en hechos, no en sentimientos.",
    "whatDrPeterPresents": "Abre con Voltaire: «Si Dios no existiera, habría que inventarlo.» Y con el riesgo: si nuestra convicción se basa únicamente en que el\ncristianismo «nos trae paz y gozo», estaremos en problemas cuando esas emociones se desvanezcan, o cuando conozcamos a alguien\nigualmente «seguro» de otra fe. El cuaderno advierte además que «el sentimiento emocional también puede ser una trampa» (Jer 17:9;\nPr 14:12).\nLa imagen central del capítulo: la seguridad es un banco de tres patas. La primera pata: el testimonio interior del Espíritu Santo, que nos\ntestifica que somos hijos de Dios (Rom 8:16; 2 Cor 1:22). La segunda: creemos en Cristo como Señor y Salvador resucitado (Jn 5:24; Rom\n10:9; 1 Jn 5:9-13). La tercera: la realidad de una vida transformada (1 Jn 3:18-19; 5:2). «Las sensaciones subjetivas, las convicciones\nconscientes y las acciones externas obran juntas: corazón, mente y voluntad.»\nLa base de nuestra fe: hechos, no sentimientos. Sabemos que el cristianismo es verdadero porque Jesús resucitó (hecho histórico) y nos\nda Su palabra como garantía. Por eso «nuestra seguridad en Cristo no peligra cuando cambian nuestros sentimientos».\nY el punto lógico decisivo: la presuposición detrás de la pregunta es que, explicando psicológicamente por qué alguien tiene creencias\ncristianas, se refuta la creencia. «Esto confunde dos cuestiones distintas: cómo se llega a sostener una creencia y si esa creencia es\nverdadera o no. Así como una persona puede sostener creencias falsas por buenas razones, también puede sostener creencias\nverdaderas por malas razones.»\n«¡Es solo la forma en que te criaron!» Dos observaciones: muchas personas se convierten desde trasfondos profundamente no\ncristianos -«hoy hay cristianos de prácticamente todos los grupos lingüísticos, trasfondos culturales y tradiciones religiosas del\nmundo»—, y muchos criados como cristianos reniegan más tarde de esa formación.\n«¡Solo estás en esto por lo que puedes sacar!» Somos cristianos «no para ganar el cielo ni para escapar del infierno, sino porque\nestamos convencidos de que las afirmaciones de Cristo son verdaderas». Y la vida cristiana «no es todo color de rosa»: seguir a Cristo a\nla sombra de la cruz implica dificultades y persecución (Jn 15:20; 2 Tim 3:12; Heb 12:7).\n«No eres más que un...» Un mono inteligente, una máquina de estímulo y respuesta (Skinner), un manojo de impulsos reprimidos\n(Freud), una compleja reacción química. Reconozca el elemento de verdad: cada modelo explica en cierta medida la conducta. Pero\n«este reduccionismo del \"no es más que\" excluye la posibilidad del libre albedrío y de la conciencia independiente», sin los cuales\n«no podríamos hacer juicios objetivos sobre nada». Y la vuelta: si insisten en que todo está predeterminado, «solo tenemos que\nresponderles que, entonces, isu pensamiento de que todo está predeterminado debe estar igualmente predeterminado!».\nY el capítulo cierra con algo que no conviene saltarse: ¿ una agenda oculta? A veces la persona que pregunta querría hacerse cristiana, pero\nsiente que su propia crianza la pone en desventaja. «Debemos ser sensibles a esto.» Dios «sabe que somos polvo» (Sal 103:14) y «nunca\nrechazará a nadie que venga a Él» (Jn 6:37).",
    "cannotCut": "La distinción entre cómo se llega a una creencia y si la creencia es verdadera — es la que hace funcionar todo lo demás. Y la agenda oculta, porque no percibirla cuesta una persona.",
    "driverAlert": null,
    "discussionQuestions": [
      "¿Cómo responder a alguien que dice que sólo creemos por la forma en que fuimos criados?",
      "¿Cuál es la relación entre la fe, los hechos y los sentimientos?"
    ],
    "commonObjections": [
      {
        "objection": "«¿Dar la vuelta no es solo devolver el problema?»",
        "response": "La vuelta expone que la objeción prueba demasiado. Eso no prueba el cristianismo; despeja el terreno para la evidencia."
      },
      {
        "objection": "«Pero yo siento a Dios.»",
        "response": "No lo descalifique. Ordénelo con el banco de tres patas: el sentimiento es una de las patas, no el suelo."
      }
    ],
    "workbookRef": "¿No es la experiencia cristiana solo psicológica? •",
    "vueltaRef": "Vuelta: Parte D.1, ítem 4.",
    "pageNumber": 27,
    "visualData": {
      "type": "cards3",
      "title": "El Banco de Tres Patas (Seguridad de la Fe)",
      "cards": [
        {
          "title": "Pata 1: Testimonio interior del Espíritu Santo",
          "ref": "Rom 8:16; 2 Cor 1:22"
        },
        {
          "title": "Pata 2: Fe en Cristo resucitado (Hecho histórico)",
          "ref": "Jn 5:24; Rom 10:9; 1 Jn 5:9-13"
        },
        {
          "title": "Pata 3: Realidad de una vida transformada",
          "ref": "1 Jn 3:18-19; 5:2"
        }
      ]
    }
  }
];

export const PARTE_D = {
  "title": "Parte D — Referencia",
  "subtitle": "Herramientas de conducción, esquemas y notas técnicas",
  "d1": {
    "title": "D.1 Dar la vuelta a las preguntas",
    "intro": "Nuestro objetivo no es ganar discusiones, sino personas. A la mayoría de las siete preguntas mortales se les puede «dar la vuelta» para que Jesús vuelva al centro del escenario. Estos son los guiones del cuaderno de trabajo, palabra por palabra; vale leerlos en voz alta en la sesión, para que los alumnos oigan el tono.",
    "turns": [
      {
        "id": 1,
        "question": "¿Por qué permite Dios el sufrimiento?",
        "script": "«El tema del sufrimiento es difícil; pero, en última instancia, Dios va a poner fin a todo sufrimiento creando un cielo nuevo y una tierra nueva. Sin embargo, antes de que esto suceda, Jesús debe volver para juzgar. Cuando lo haga, será demasiado tarde para que nadie cambie de bando, y por eso Dios se demora. No quiere ponerle fin a todo antes de que cada uno haya tenido la oportunidad de arrepentirse. Quizá tú seas precisamente una de las personas a las que Él está esperando. ¿No crees que ya es hora de que hagas algo al respecto?»",
        "references": "2 Tes 1:8-10; 2 P 3:9",
        "moduleRef": 18
      },
      {
        "id": 2,
        "question": "¿Cómo puede ser Cristo el único camino hacia Dios?",
        "script": "«Tienes que darte cuenta de que el cristianismo y las demás religiones se excluyen mutuamente. No más de una de ellas puede ser verdadera. Si Cristo es realmente quien afirmó ser, entonces todas las demás religiones, por verdaderas que parezcan, están equivocadas. No hay otra opción. Yo creo que Cristo es el único camino, porque eso es lo que Él mismo dijo, y porque creo, sobre la evidencia de Su vida, muerte y resurrección, que Jesucristo es Dios. ¿Quién crees tú que era?»",
        "references": "Jn 3:16-18",
        "moduleRef": 15
      },
      {
        "id": 3,
        "question": "¿No está la Biblia llena de errores?",
        "script": "«Jesús creía la Biblia. Puso Su sello de autoridad sobre el Antiguo Testamento (creyendo su historia y su profecía, usándolo como tribunal de última instancia en los debates y obedeciendo su enseñanza), y comisionó la escritura del Nuevo Testamento. Yo acepto Su juicio sobre el asunto, y todavía no he oído ningún argumento que me convenza de lo contrario. Si conoces alguno, me fascinaría oírlo, y también saber por qué tú mismo dudas de la palabra de Cristo».",
        "references": "2 Tim 3:16-17",
        "moduleRef": 19
      },
      {
        "id": 4,
        "question": "¿No es la experiencia cristiana solo psicológica?",
        "script": "«Soy cristiano porque creo que Jesucristo es Dios. Y lo creo sobre la base de la evidencia de Su vida, muerte y resurrección. La psicología no tiene nada que ver. Sin embargo, empiezo a preguntarme si no habrá una razón psicológica por la que tú eliges no creerlo. ¿Sería justo decir que, si empezaras a creer en Cristo, ciertas cosas de tu vida tendrían que cambiar?»",
        "references": "Rom 1:18-20",
        "moduleRef": 20
      },
      {
        "id": 5,
        "question": "¿Cómo pueden ocurrir los milagros?",
        "script": "«Creo que los milagros son posibles porque creo que Dios existe. Si Dios creó el universo de la nada, un milagro no es una dificultad para Él. Pero lo crucial es que los milagros de Jesús fueron señales que autenticaban Su identidad como el Hijo de Dios. No podemos descartar los milagros de Su vida de ninguna otra manera. Me fascinaría saber cómo los explicas tú».",
        "references": "1 Jn 4:2-3",
        "moduleRef": 14
      },
      {
        "id": 6,
        "question": "¿Qué pasa con los que nunca han oído?",
        "script": "«Es una pregunta difícil, pero al fin de cuentas es un problema de Dios, no nuestro. Él es el Juez, y Su decisión será justa, imparcial y definitiva. Pero sí necesito recalcar que la Biblia es muy clara sobre lo que les sucede a quienes han oído el evangelio y han decidido no creerlo; y creo que esa es la categoría de personas en la que estás tú, ¿no es cierto? ¿Qué dices de ti?»",
        "references": "Rom 1:20",
        "moduleRef": 16
      },
      {
        "id": 7,
        "question": "¿No me llevará al cielo una buena vida moral?",
        "script": "«Sí, una buena vida moral te llevará al cielo, pero hay un problema: tiene que ser tan buena como la vida de Jesús para alcanzar la norma exigida. Los cristianos no creen que son buenas personas. Más bien, reconocen que son malas y que su única esperanza es recibir la misericordia y el perdón de Dios a través de Jesucristo. Como cristiano, esa es mi posición personal. ¿Y tú? ¿Crees que das la talla?»",
        "references": "Rom 3:23; 6:23",
        "moduleRef": 17
      }
    ],
    "keyMechanism": "Las vueltas no son argumentos para ganar: cada una termina en una pregunta devuelta a la persona. Ese es el mecanismo. Si recorta la pregunta final, la vuelta deja de funcionar."
  },
  "d2": {
    "title": "D.2 Directo a la yugular",
    "description": "Si percibe que la persona puede estar cerca de una decisión, no dude. Cada pregunta abre la siguiente; a un «no», responda con «¿por qué no?»",
    "questions": [
      "1. ¿Alguna vez has considerado hacerte cristiano?",
      "2. ¿Ya llegaste, o todavía estás en camino?",
      "3. ¿Qué tan avanzado vas en el camino? (deliberadamente abierta)",
      "4. ¿Qué crees que te impide avanzar más? (puede indicar la cuestión clave que bloquea la fe)",
      "5. ¿Quieres hacerte cristiano?",
      "6. ¿Estás listo para hacerte cristiano?",
      "7. ¿Te gustaría hacerte cristiano ahora mismo?",
      "8. ¿Crees que Jesús murió en la cruz y resucitó de entre los muertos?",
      "9. ¿Crees que murió por ti personalmente, por tus pecados?",
      "10. ¿Te gustaría orar ahora mismo para hacerlo tu Señor y Maestro?"
    ],
    "note": "El cuaderno trae a continuación una oración del pecador. Úsela como modelo, no como guion."
  },
  "d3": {
    "title": "D.3 La escala de Engel",
    "description": "El diagrama pastoral más útil del curso. La conversión es un proceso gradual que va de la ignorancia total a la madurez.",
    "steps": [
      {
        "score": "-10",
        "label": "Conciencia de lo sobrenatural"
      },
      {
        "score": "-9",
        "label": "Ningún conocimiento efectivo del cristianismo"
      },
      {
        "score": "-8",
        "label": "Conciencia inicial del cristianismo"
      },
      {
        "score": "-7",
        "label": "Interés por el cristianismo"
      },
      {
        "score": "-6",
        "label": "Conciencia de los hechos básicos del evangelio"
      },
      {
        "score": "-5",
        "label": "Comprensión de las implicaciones del evangelio"
      },
      {
        "score": "-4",
        "label": "Actitud positiva hacia el evangelio"
      },
      {
        "score": "-3",
        "label": "Conciencia de las implicaciones personales"
      },
      {
        "score": "-2",
        "label": "Desafío y decisión de actuar"
      },
      {
        "score": "-1",
        "label": "Arrepentimiento y fe"
      },
      {
        "score": "0",
        "label": "Regeneración (Nuevo Nacimiento)",
        "isZero": true
      },
      {
        "score": "+1",
        "label": "Evaluación post-decisión"
      },
      {
        "score": "+2",
        "label": "Integración a la iglesia / comunión"
      },
      {
        "score": "+3",
        "label": "Discipulado continuo y reproducción espiritual"
      }
    ],
    "quote": "«Puede ser un logro tremendo llevar a un ateo hasta un agnosticismo abierto (quizá de -10 a -7), o a un agnóstico hasta comprender las implicaciones del evangelio (digamos, de -9 a -5). En ninguno de los dos casos se han convertido, pero su comprensión ha dado un gran salto.»",
    "pastoralUse": "Use esto cuando un facilitador esté desanimado. Es el diagrama más pastoralmente útil del curso."
  },
  "d4": {
    "title": "D.4 El esquema del evangelio",
    "author": "Los cinco encabezados de John Chapman",
    "description": "Tal como aparecen en el cuaderno de trabajo. Memorícelos.",
    "headings": [
      {
        "tag": "DIOS GOBERNANTE",
        "color": "bg-blue-600",
        "content": "Dios existe realmente. Él creó el universo y lo dirige, y nos hizo a usted y a mí para disfrutar de una relación con Él. Lo sabemos porque Él se ha revelado claramente: a través de la creación, a través de Su trato en la historia con el pueblo judío y, del modo más perfecto, a través de la persona de Jesucristo, Dios el Hijo.",
        "verses": "Hch 2:32; 17:26-27; Heb 1:1-2"
      },
      {
        "tag": "EL HOMBRE REBELDE",
        "color": "bg-amber-600",
        "content": "Ninguno de nosotros ha vivido consistentemente como si esta fuera la verdadera realidad. Todos, en mayor o menor grado, hemos asumido que tenemos derecho a dirigir nuestra propia vida. A veces hemos desobedecido a Dios conscientemente; otras veces simplemente lo hemos ignorado. Ambas cosas equivalen a lo mismo: rebelión.",
        "verses": "Mc 7:21-23; Rom 3:12; 3:23"
      },
      {
        "tag": "DIOS RESCATE",
        "color": "bg-emerald-600",
        "content": "Sin embargo, Dios nos ama y quiere rescatarnos del destino que nos espera. Por eso envió a Su Hijo Jesucristo. Jesús, al morir en la cruz, tomó sobre sí el castigo que merecíamos e hizo posible que nuestra relación rota con Dios fuera restaurada.",
        "verses": "Mt 4:17; Jn 3:16; Hch 17:30; Gál 1:3-4"
      },
      {
        "tag": "¿Y SI NO LO HAGO? (RECHAZADO)",
        "color": "bg-rose-600",
        "content": "Si rechazamos o ignoramos el ofrecimiento de perdón y reconciliación de Dios, no nos queda esperanza alguna. Enfrentaremos el juicio de Dios y recibiremos lo que verdaderamente merecemos.",
        "verses": "Jn 3:18; Rom 1:18; 2 Tes 1:8-9; Ap 20:15"
      },
      {
        "tag": "¿Y SI LO HAGO? (RECONCILIADO)",
        "color": "bg-teal-600",
        "content": "En cambio, si dejamos de rebelarnos contra Dios y ponemos nuestra vida bajo Su gobierno, Él nos trata como si nunca nos hubiéramos rebelado. Nos perdona y nos da el don de Su Espíritu Santo. La decisión es nuestra.",
        "verses": "Jn 3:16; 5:24; Rom 6:23; Hch 2:38; Col 2:13"
      }
    ],
    "usageNote": "En el Módulo 6 el esquema se usa dos veces: el alumno presenta el evangelio en dos minutos sin él, y luego otra vez con él. El contraste es la clase."
  },
  "d5": {
    "title": "D.5 Notas para el equipo editorial",
    "description": "Base terminológica, abreviaturas bíblicas y correcciones pendientes",
    "items": [
      {
        "title": "Base terminológica",
        "text": "Esta guía sigue la nomenclatura del cuaderno de trabajo en español (edición NBLA): nombres de capítulo, términos técnicos, abreviaturas bíblicas y citas textuales. No es una traducción independiente del inglés. Cualquier cambio en el cuaderno debe reflejarse aquí."
      },
      {
        "title": "Abreviaturas bíblicas",
        "text": "Se sigue el uso del cuaderno: Jn • Rom • Mt • Hch • Lc • Ap • Sal • 2 Cor • 1 Cor • Is • Heb • 1 Jn • Mc • Gn • Ef • Fil • 2 Tes • 1 Tim • 2 Tim • 1 P • 2 P • Col • Tit • Gál • Pr • Jer • Ex • Stg • Ez • Dt • Dn • 2 R • Job • Ec. Atención en la revisión: el cuaderno usa Rom (no «Ro»), Mc (no «Mr»), Fil (no «Flp»), 1 Tim / 2 Tim (no «1 Ti / 2 Ti») y Gál (no «Gá»)."
      },
      {
        "title": "Capítulos, no páginas",
        "text": "Esta guía remite a nombres de capítulo del cuaderno, nunca a números de página, porque la paginación cambia con cada nueva diagramación."
      },
      {
        "title": "Cuatro puntos a resolver antes de imprimir",
        "subpoints": [
          "1. «Cuaderno de trabajo» frente a «cuaderno de ejercicios»: El cuaderno se autodenomina cuaderno de trabajo. El cronograma dice cuaderno de ejercicios. Se recomienda unificar.",
          "2. Salmo 53 — numeración: El cuaderno cita Sal 53:1-3 en un lugar y Sal 53:2-3 en otro para el mismo contenido.",
          "3. Títulos de diapositivas desactualizados: Corregir «¿Sucederá?», «¿Y los que nunca se han enterado?», «¿El cielo?», etc.",
          "4. Erratas del original en inglés corregidas en español: Fil 3:21, Ap 20:15, Jn 3:18, 1 Jn 1:3, Jn 19:35, escala de Engel de -10 a -7."
        ]
      }
    ],
    "colophon": "Cristianismo con Confianza — Guía del Facilitador. ICMDA, Unidad de Formación. Material del curso © Christian Medical Fellowship 2005. Edición española corregida, 2026. Citas bíblicas: Nueva Biblia de las Américas™ (NBLA™), © 2005 The Lockman Foundation."
  }
};
