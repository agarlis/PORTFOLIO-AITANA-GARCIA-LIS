export interface Project {
  id: number;
  nombre: string;
  categoria: string;
  year: number;
  asignatura: string;
  imagen: string;        // imagen principal
  galeria: string[];     // imágenes adicionales
  descripcion: string;
  concepto: string;
  herramientas: string[];
}

export const proyectos: Project[] = [
{
    id: 1,
    nombre: "Áureo",
    categoria: "Packaging",
    year: 2024,
    asignatura:"Fundamentos del diseño",
    imagen: "aureo/fotoaureo4.png",
    galeria: [
      "aureo/fotoaureo1.png",
      "aureo/fotoaureo2.png",
      "aureo/fotoaureo3.png",
      "aureo/fotoaureo5.png",
      "aureo/fotoaureo6.png",
    ],	
    descripcion: "Áureo es una marca de chocolate que nace de la tradición familiar.",
    concepto: "Áureo es una propuesta de identidad y packaging para una marca de chocolate que busca transmitir naturalidad, calidez y calidad artesanal. El diseño se basa en una paleta cromática inspirada en los propios ingredientes y sabores del producto. Las formas orgánicas y suaves evocan la textura del cacao y crean una identidad visual coherente entre las diferentes variedades. El resultado es un sistema de packaging minimalista que comunica cercanía, elegancia y autenticidad.",
    herramientas: ["Packdora", "Illustrator", "Canva"]
},
{
    id: 2,
    nombre: "Mind Pop",
    categoria: "Branding",
    year: 2025,
    asignatura: "Transversal II",
    imagen: "mind pop/fotomindpop13.jpg",
    galeria: [
      "mind pop/fotomindpop1.png",
      "mind pop/fotomindpop2.png",
      "mind pop/fotomindpop3.jpg",
      "mind pop/fotomindpop4.jpg",
      "mind pop/fotomindpop5.png",
      "mind pop/fotomindpop6.png",
      "mind pop/fotomindpop7.png",
      "mind pop/fotomindpop8.png",
      "mind pop/fotomindpop9.png",
      "mind pop/fotomindpop10.jpg",
      "mind pop/fotomindpop11.png",
      "mind pop/fotomindpop12.png",
      "mind pop/fotomindpop14.png",
    ],

    descripcion: "Mind Pop es un juego de mesa de autocuidado emocional.",
    concepto: "Mind Pop es un juego de mesa diseñado para abordar la salud mental desde una perspectiva lúdica y accesible. A través de personajes, cartas y dinámicas de juego, el proyecto busca visibilizar emociones, dificultades y procesos psicológicos de forma simbólica. La identidad gráfica utiliza ilustraciones expresivas y colores vibrantes que refuerzan el carácter cercano y dinámico del juego. El diseño combina entretenimiento y reflexión, creando una experiencia participativa que fomenta la conversación sobre el bienestar emocional.",
    herramientas: [
      "Blender", 
      "Illustrator", 
      "Photoshop"]
  },
  {
    id: 3,
    nombre: "The fold",
    categoria: "Branding",
    year: 2025,
    asignatura: "Proyecto personal",
    imagen: "the fold/fotothefold3.png",
    galeria: [
      "the fold/fotothefold1.png",
      "the fold/fotothefold2.png",
      "the fold/fotothefold4.png",
      "the fold/fotothefold5.png",
      "the fold/fotothefold6.png",
      "the fold/fotothefold6.png",
    ],

    descripcion: "The fold es una marca creada para espacios de coworking y libreria.",
    concepto: "The Fold es un proyecto de identidad visual para una librería y espacio de co-working que combina cultura, lectura y trabajo creativo. El diseño se centra en una estética tipográfica elegante y contemporánea que transmite calma, sofisticación y carácter editorial. La identidad busca reflejar un espacio donde las ideas se pliegan, se conectan y se transforman, igual que las páginas de un libro. El resultado es una marca sutil y minimalista que refuerza el concepto de comunidad creativa.",
    herramientas: [
"Illustrator", 
"Photoshop"
]
  },
  {
    id: 4,
    nombre: "Alicia en el pais de las maravillas",
    categoria: "Editorial",
    year: 2025,
    asignatura: "Ilustración",
    imagen: "alicia en el pais de las maravillas/fotoalicia2.png",
    galeria: [
      "alicia en el pais de las maravillas/fotoalicia1.png",
      "alicia en el pais de las maravillas/fotoalicia3.png",
      "alicia en el pais de las maravillas/fotoalicia4.png",
    ],

    descripcion: "Adaptación y maquetación del libro alicia en el pais de las maravillas",
    concepto: "Este proyecto consiste en el rediseño editorial del clásico Alicia en el País de las Maravillas. La propuesta visual reinterpreta el universo fantástico del relato mediante ilustraciones coloridas y una estética infantil que resalta el carácter imaginativo de la historia. La composición y el uso del color acompañan la narrativa, transportando al lector al mundo surrealista de Alicia. El resultado es una edición visualmente atractiva que combina literatura clásica con un enfoque gráfico contemporáneo. ",
    herramientas: [
"Illustrator", 
"Photoshop"
]
  },
];

  



