<script setup lang="ts">
import { ref, onMounted } from "vue"
import { Menu } from "lucide-vue-next"

import LogoGarlisDesing from "@/components/LogoGarlis.Desing.vue"

const menuAbierto = ref(false)

const educacion = [
  {
    periodo: "2018 - 2022",
    centro: "Unió Musical de Llíria",
  },
  {
    periodo: "2022 - 2024",
    centro: "IES Camp de Turia (Llíria). Bachillerato Artistico",
  },
  {
    periodo: "2024 - Actualidad",
    centro: "Grado en Diseno y Tecnologias Creativas. UPV",
  },
]

const skills = ref([
  { name: "Illustrator", nivel: 100 },
  { name: "Photoshop", nivel: 95 },
  { name: "InDesign", nivel: 100 },
  { name: "Adobe Premiere", nivel: 80 },
  { name: "Figma", nivel: 70 },
  { name: "After Effects", nivel: 60 },
])

const habilidades = [
  "Creativa",
  "Curiosa",
  "Observadora",
  "Perfeccionista",
  "Organizada",
  "Responsable",
  "Aprendo rápido",
  "Trabajo en equipo",
  "Atenta al detalle"
]

const servicios = [
  "Identidad visual",
  "Branding",
  "Packaging",
  "Redes sociales",
  "Diseño editorial",
  "Fotografía",
]

const idiomas = [
  { nombre: "Español", nivel: "C1" },
  { nombre: "Valenciano", nivel: "C1" },
  { nombre: "Inglés", nivel: "A2" },
  { nombre: "Francés", nivel: "A2" },
]

const animado = ref(false)

onMounted(() => {
  setTimeout(() => {
    animado.value = true
  }, 300)
})

function starStyle(nivel: number, idx: number) {
  const p = animado.value ? nivel : 0
  const filled = Math.min(Math.max(p - idx * 20, 0), 20) / 20 * 100
  return {
    background: `linear-gradient(90deg, #F3EBDD ${filled}%, #281d14 ${filled}%)`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    transition: 'all 700ms ease'
  }
}
</script>

<template>
    <header>
      <nav
        class="bg-[#F3EBDD] overflow-hidden absolute w-full flex justify-between items-center px-8 py-4 text-sm uppercase tracking-widest transition-all"
      >
        <div class="text-[#5E4B3C]">
          <LogoGarlisDesing estilos="w-0 sm:w-[5rem] md:w-[6rem] lg:w-[7rem] transition-all" />
        </div>

        <div class="hidden md:flex gap-8 tracking-widest text-[#5E4B3C]">
          <Button class="Button">
            <RouterLink to="/Home">Portada</RouterLink>
          </Button>

          <Button class="Button">
            <RouterLink to="/Trabajos" active-class="font-bold">Trabajos</RouterLink>
          </Button>

          <Button class="Button">
            <RouterLink to="/SobreMi" active-class="font-bold">Sobre mi</RouterLink>
          </Button>

          <Button class="Button">
            <RouterLink to="/Contactos" active-class="font-bold">Contacto</RouterLink>
          </Button>
        </div>

        <button
          class="iconoboton text-[#5E4B3C] block flex align-center justify-center md:hidden lg:hidden text-3xl"
          @click="menuAbierto = !menuAbierto"
        >
          <Menu class="w-5 h-5" />
        </button>
      </nav>

      <div
        v-if="menuAbierto"
        class="absolute top-[80px] tracking-widest right-8 flex flex-col gap-4 bg-white/20 text-[#5E4B3C] backdrop-blur-md p-6 rounded-2xl shadow-lg md:hidden z-50"
      >
        <RouterLink to="/Trabajos" @click="menuAbierto = false">Trabajos</RouterLink>
        <RouterLink to="/SobreMi" @click="menuAbierto = false">Sobre mi</RouterLink>
        <RouterLink to="/Contactos" @click="menuAbierto = false">Contacto</RouterLink>
      </div>
    </header>

    <main class="bg-[#F3EBDD] pt-36 pb-0 md:pt-44 md:pb-0 text-[#5E4B3C]">
      <section class="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 class="titulo text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">Hola, soy Aitana.</h1>
            <p class="texto text-[0.9rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] text-justify transition-all">
              Soy estudiante de diseño gráfico con interés en crear proyectos visuales que comuniquen de forma clara, estética y con intención. 
              Me gusta entender cada proyecto como una historia: investigar, conceptualizar y transformar ideas en soluciones visuales que conecten con las personas.
            </p>
            <p class="texto text-[0.9rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] text-justify transition-all py-4"> Actualmente estoy formándome en diseño mientras desarrollo proyectos personales que me permiten experimentar con identidad visual, 
              editorial y comunicación gráfica. Disfruto especialmente del proceso creativo: desde la idea inicial hasta ver cómo el diseño cobra vida. Me interesa crear trabajos con concepto, personalidad y coherencia visual. Creo que el buen diseño no solo se ve bonito, sino que transmite, organiza y aporta valor.
            </p>
            <p class="texto text-[0.9rem] sm:text-[0.9rem] md:text-[0.95rem] lg:text-[1rem] text-justify transition-all">
              Siempre estoy aprendiendo, explorando nuevas ideas y buscando formas de mejorar como diseñadora.
            </p>
          </div>

          <div class="foto-contenedor">
            <img src="/image/fotoaitana.png" alt="Foto Aitana" class="foto-perfil " />
          </div>
        </div>
      </section>

      <section>
        <div class="marquee-wrap w-full my-14" aria-label="Servicios destacados">
          <div class="marquee-track">
            <span>Identidad visual</span>
            <span>·</span>
            <span>Branding</span>
            <span>·</span>
            <span>Packaging</span>
            <span>·</span>
            <span>Redes Sociales</span>
            <span>·</span>
            <span>Fotografia</span>
            <span>·</span>
            <span>Identidad visual</span>
            <span>·</span>
            <span>Branding</span>
            <span>·</span>
            <span>Packaging</span>
            <span>·</span>
            <span>Redes Sociales</span>
            <span>·</span>
            <span>Fotografia</span>
            <span>·</span>
            <span>Identidad visual</span>
            <span>·</span>
            <span>Branding</span>
            <span>·</span>
            <span>Packaging</span>
            <span>·</span>
            <span>Redes Sociales</span>
            <span>·</span>
            <span>Fotografia</span>
          </div>
        </div>
      </section>

      

      <section class="max-w-6xl mx-auto px-8 mb-15 md:px-12 lg:px-16">
        <section class="educacion-card">
          <h2 class="educacion-titulo">
            HISTORIAL
            <span>académico</span>
          </h2>
          <div class="space-y-7 md:space-y-8">
            <article v-for="item in educacion" :key="item.periodo" class="registro">
              <p class="periodo text-[#F3EBDD]">{{ item.periodo }}</p>
              <p class="centro text-[#F3EBDD]">{{ item.centro }}</p>
            </article>
          </div>
        </section>
      </section>

      <section class="bg-[#5E4B3C] w-full pt-24 pb-12 px-6 md:px-20 md:pb-14">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 class="tilulos text-3xl font-semibold mb-10 text-[#F3EBDD]">Skills</h2>
            <div
              v-for="(skill, i) in skills"
              :key="skill.name"
              class="mb-6"
            >
              <div class="tipo flex justify-between mb-2 text-sm text-[#F3EBDD]">
                <span>{{ skill.name }}</span>
              </div>

                <div class="w-full overflow-hidden">
                <div class="stars flex items-center gap-2">
                  <span v-for="j in 5" :key="j" class="star text-xl"> 
                    <span
                      class="star-anim"
                      :style="[starStyle(skill.nivel, j - 1), { animationDelay: (animado ? (i * 0.12 + (j - 1) * 0.08) : 0) + 's' }]
                    ">★</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-12">
            <h2 class="tilulos textext-3xl font-semibold mb-10 text-[#F3EBDD]">Habilidades personales</h2>
            <div class="flex flex-wrap gap-4">
              <div
                v-for="item in habilidades"
                :key="item"
                class="px-4 py-2 border border-[#F3EBDD] text-[#F3EBDD] rounded-full text-sm
                hover:bg-[#F3EBDD] hover:text-[#5E4B3C] hover:text-bold transition-all duration-300
                hover:scale-110 cursor-default"
              >
                {{ item }}
              </div>
            </div>

            <div>
              <h3 class="tilulos mb-5 text-[#F3EBDD]">Idiomas</h3>
              <div class="space-y-3">
                <div
                  v-for="idioma in idiomas"
                  :key="idioma.nombre"
                  class="idioma-item"
                >
                  <span>{{ idioma.nombre }}</span>
                  <span class="idioma-nivel">{{ idioma.nivel }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer text-center text-[#362821] bg-[#F3EBDD] w-full py-4">
      <p>© 2026 · Aitana Garcia Lis · Portfolio</p>
    </footer>
</template>

<style scoped>
.Button {
  font-family: montserrat;
  font-weight: 500;
  width: 100px;
  height: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
}

.Button:hover {
  font-family: montserrat;
  font-weight: 700;
  transform: scale(1.05);
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
}

.iconoboton {
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 120%;
  border-radius: 50px;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
}

.iconoboton:hover {
  font-family: montserrat;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
}

.titulo {
  font-family: bodonimodaitalic;
  font-weight: 600;
}

.texto {
  font-family: montserrat;
  font-weight: 300;
}

.etiqueta {
  font-family: montserrat;
  font-weight: 700;
}

.foto-contenedor {
  display: flex;
  justify-content: center;
}

.foto-perfil {
  width: 90%;
  max-width: 350px;
  border-radius: 50px;
}

.marquee-wrap {
  background-color: #5e4b3c;
  border-top: 1px solid rgba(94, 75, 60, 0.35);
  border-bottom: 1px solid rgba(94, 75, 60, 0.35);
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: center;
}

.marquee-track {
  display: flex;
  gap: 2.5rem;
  padding: 0.9rem 0;
  width: max-content;
  animation: deslizar 30s linear infinite;
}

.marquee-track span {
  display: inline-block;
  flex: 0 0 auto;
  font-family: montserrat;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #F3EBDD;
}

@keyframes pulse {
  0% { transform: scaleX(1); }
  50% { transform: scaleX(0.92); }
  100% { transform: scaleX(1); }
}

/* Animación de meneo para cada estrella */
.star-anim {
  display: inline-block;
  transform-origin: center;
  animation: wiggle 1.8s ease-in-out infinite;
  font-size: 1.6rem;
}

@keyframes wiggle {
  0% { transform: translateY(0) rotate(0deg); }
  20% { transform: translateY(-4px) rotate(-6deg); }
  40% { transform: translateY(0) rotate(4deg); }
  60% { transform: translateY(-2px) rotate(-3deg); }
  80% { transform: translateY(0) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
}

.educacion-card {
  background: #5e4b3c;
  border-radius: 26px;
  padding: 2rem 1.2rem;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.25);
}

.educacion-titulo {
  font-family: montserrat;
  font-weight: 900;
  font-size: clamp(2rem, 6vw, 4.2rem);
  color: #F3EBDD;
  line-height: 0.9;
  margin-bottom: 2rem;
}

.educacion-titulo span {
  font-family: bodonimodaitalic;
  font-weight: 500;
  margin-left: 0.4rem;
}

.registro {
  text-align: center;
  color: #5e4b3c;
}

.periodo {
  font-family: bodonimodaitalic;
  font-weight: 600;
  font-size: x-large;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.centro {
  font-family: montserrat;
  font-weight: 300;
  font-size: large;
}

.tilulos{
  font-family: montserrat;
  font-weight: 900;
  font-size: xx-large;
}

.tipo{
  font-family: montserrat;
  font-weight: 300;
  font-size: medium;
}

.idioma-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-family: montserrat;
  font-weight: 300;
  color: #F3EBDD;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(243, 235, 221, 0.2);
}

.idioma-nivel {
  font-family: bodonimodaitalic;
  font-weight: 600;
  font-size: 1.1rem;
}

.footer {
  font-family: montserrat;
  font-weight: 100;
  font-size: small;
}

@keyframes deslizar {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (min-width: 768px) {
  .educacion-card {
    padding: 3rem;
  }

  .registro {
    text-align: right;
  }
}
</style>
