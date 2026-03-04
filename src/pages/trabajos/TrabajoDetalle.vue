<script setup lang="ts">
import { useRoute } from "vue-router"
import { proyectos } from "@/pages/trabajos/data"
import { computed, ref } from "vue"

import LogoGarlisDesing from '@/components/LogoGarlis.Desing.vue'
import { Menu } from "lucide-vue-next";

const route = useRoute()

const proyecto = computed(() => {
  return proyectos.find(p => p.id === Number(route.params.id))
})

const imagenActiva = ref(0)

const cambiarImagen = (index: number) => {
  imagenActiva.value = index
}
const menuAbierto = ref(false)
</script>


<template>
  <header>
    <nav class="bg-[#F3EBDD] overflow-hidden absolute w-full flex justify-between items-center px-8 py-4 text-sm uppercase tracking-widest transition-all">
          <div class="text-[#5E4B3C]">
            <LogoGarlisDesing estilos="w-0 sm:w-[5rem] md:w-[6rem] lg:w-[7rem] transition-all"/>
          </div>

          <div class="hidden md:flex gap-8 tracking-widest text-[#5E4B3C]">
            <Button class="Button">
              <RouterLink to="/Home">
                Portada
              </RouterLink>
            </Button>

            <Button class="Button">
              <RouterLink 
                to="/Trabajos"
                active-class="font-bold">
                  Trabajos
              </RouterLink>
            </Button>

            <Button class="Button">
              <RouterLink 
              to="/SobreMi"
              active-class="font-bold">Sobre mi</RouterLink>
            </Button>    
            
            <Button class="Button">
              <RouterLink 
              to="/Contactos"
              active-class="font-bold">Contacto</RouterLink>
            </Button>
          </div>

          <button 
            class="iconoboton text-[#5E4B3C] block flex align-center justify-center md:hidden lg:hidden text-3xl" 
            @click="menuAbierto = !menuAbierto">
              <Menu class="w-5 h-5" />
          </button>
        </nav>

          <div 
            v-if="menuAbierto"
            class="absolute top-[80px] tracking-widest right-8 flex flex-col gap-4 bg-white/20 text-white backdrop-blur-md p-6 rounded-2xl shadow-lg md:hidden z-50">
                <RouterLink to="/Trabajos" @click="menuAbierto = false">Trabajos</RouterLink>
                <RouterLink to="/SobreMi" @click="menuAbierto = false">Sobre mi</RouterLink>
                <RouterLink to="/Contactos" @click="menuAbierto = false">Contacto</RouterLink>
        </div>
  </header>
  <main>
    <div 
      v-if="proyecto" 
      class="bg-[#F3EBDD] min-h-screen px-8 py-50 text">
        <div class="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          <div class="text-[#5E4B3C]">
            <h1 class="nproyecto text-9xl mb-4">
            /0{{ proyecto.id }}/
            </h1>

            <h1 class="nombre text-7xl mb-10 ">
              {{ proyecto.nombre }}
            </h1>

            <h1 class="asignatura text-3xl mb-2">
              {{ proyecto.asignatura }}
            </h1>

            <h1 class="categoria text-xl mb-10">
              #{{ proyecto.categoria }}
            </h1>
            
            <p class="texto mb-10">
              {{ proyecto.concepto}}
            </p>

            <p class="texto mb-10">
              {{ proyecto.descripcion}}
            </p>

            <p class="texto mb-10">
              {{ proyecto.proceso}}
            </p>

            <p class="texto mb-2">
              {{ proyecto.herramientas }}
            </p>

            <p class="texto">
              {{ proyecto.year}}
            </p>
          </div>
          <div class="flex justify-center">
            <img
              :src="`/public/image/${proyecto.imagen}`"
              :alt="proyecto.nombre"
              class="w-[600px] object-contain"
            />
          </div>
        </div>
        <div class="my-24 border-t border-[#362821]/20"></div>
        <div class="max-w-6xl mx-auto">
          <div class="flex gap-6 overflow-x-auto pb-4">
            <img
              v-for="(foto, index) in proyecto.galeria"
              :key="index"
              :src="`/public/image/${foto}`"
              class="w-[300px] cursor-pointer transition hover:scale-105"
            />
          </div>
        </div>
      </div>

  </main>

  <footer class="footer text-center text-[#362821] bg-[#F3EBDD] w-full py-4">
      <p> © 2026 · Aitana García Lis · Portfolio </p> 
    </footer>
  
</template>

<style scoped>

.Button{
    font-family: montserrat;
    font-weight: 500;
    width: 100px;
    height: 120%;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6 ease;
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

.Button:hover{
    font-family: montserrat;
    font-weight: 700;
    transform: scale(1.05);
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
}

.nproyecto{
  font-family: bodonimoda;
  font-weight: 900;
}

.nombre{
  font-family: bodonimodaitalic;
  font-weight: 600;
}

.asignatura{
  font-family: montserrat;
  font-weight: 800;
}

.categoria{
  font-family: montserrat;
  font-weight: 500;
}

.texto{
  font-family: montserrat;
  font-weight: 200;
}

.footer{
  font-family: montserrat;
  font-weight: 100;
  font-size: small;
}

</style>
