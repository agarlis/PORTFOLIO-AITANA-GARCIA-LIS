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
  proceso: string;
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
    descripcion: "Áureo es una marca de chocolate de autor que nace de la tradición familiar y de la pasión por innovar con sabores únicos. Elaborado con cacao ecológico y con un diseño cuidado hasta el último detalle, busca democratizar el chocolate premium y hacerlo accesible para todos.",
    concepto: "El concepto se basa en la unión entre tradición artesanal y estética contemporánea. La identidad visual transmite calidad y sofisticación sin resultar elitista. Cada sabor se diferencia mediante una variación cromática coherente dentro del sistema visual global.",
    proceso: "Se trabajó el posicionamiento de marca, la definición del naming y el desarrollo de una identidad visual sólida. Se realizaron pruebas tipográficas, exploraciones cromáticas y simulaciones de packaging en mockups realistas para validar la aplicación del diseño en distintos formatos.",
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

    descripcion: "Mind Pop es un juego de mesa diseñado para acercar el autocuidado emocional de forma amena y dinámica. Por medio de retos, dibujos, mímica… y mucho humor, los jugadores ejercitan la empatía, la expresión emocional y la autorreflexión.",
    concepto: "",
    proceso: "",
    herramientas: ["Blender", "Illustrator", "Photoshop"]
  },
];

  



