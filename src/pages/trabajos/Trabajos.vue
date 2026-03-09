<script lang="ts" setup>

import LogoGarlisDesing from '@/components/LogoGarlis.Desing.vue'
import { Menu } from "lucide-vue-next";
import { computed, ref } from 'vue';


import {Card} from "@/components/ui/card"

import { proyectos } from "@/pages/trabajos/data"

import { useRouter } from "vue-router"

const router = useRouter()

const irAlProyecto = (id: number) => {
  router.push(`/trabajos/${id}`)
}

const menuAbierto = ref(false)
const categoriasAbiertas = ref(false)
const categoriaSeleccionada = ref('Todas')

const categorias = computed(() => {
  const unicas = [...new Set(proyectos.map((proyecto) => proyecto.categoria))]
  return ['Todas', ...unicas]
})

const proyectosFiltrados = computed(() => {
  if (categoriaSeleccionada.value === 'Todas') return proyectos
  return proyectos.filter(
    (proyecto) => proyecto.categoria === categoriaSeleccionada.value
  )
})

const seleccionarCategoria = (categoria: string) => {
  categoriaSeleccionada.value = categoria
  categoriasAbiertas.value = false
}

</script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
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

    <main class="bg-[#F3EBDD] py-45 flex flex-col items-center px-8 gap-10">
      <section class="relative flex flex-col items-center gap-3 text-[#5E4B3C]">
        <p class="categorias-titulo">Categorías</p>
        <button
          class="categorias-boton min-w-[220px]"
          @click="categoriasAbiertas = !categoriasAbiertas">
          {{ categoriaSeleccionada }}
        </button>

        <div
          v-if="categoriasAbiertas"
          class="absolute top-[95px] z-40 w-full min-w-[220px] rounded-2xl border border-[#F3EBDD]/30 bg-[#F3EBDD] py-2 text-[#362821] shadow-lg">
          <button
            v-for="categoria in categorias"
            :key="categoria"
            class="categorias-opcion w-full px-4 py-2 text-left"
            @click="seleccionarCategoria(categoria)">
            {{ categoria }}
          </button>
        </div>
      </section>

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card 
          v-for="proyecto in proyectosFiltrados" 
          :key="proyecto.id"
          @click="irAlProyecto(proyecto.id)"
          class="w-[250px] overflow-hidden cursor-pointer hover:scale-105 transition bg-[#362821]/85">
          <img 
            :src="`/image/${proyecto.imagen}`" 
            :alt="proyecto.nombre"
            class="h-[200px] px-3 object-cover"
          />
          <div class="text-[#F3EBDD]">
            <h1 class="titulo px-3">
              {{ proyecto.nombre }}
            </h1>
            <p class="descripcion px-3">
              {{ proyecto.descripcion }}
            </p>
          </div>
        </Card>
      </div>
      
    </main>

    <footer class="footer text-center text-[#362821] bg-[#F3EBDD] w-full py-4">
      <p> © 2026 · Aitana García Lis · Portfolio </p> 
    </footer>
  </div>
</template>

<style scoped>
.Button{
    font-family: montserrat;
    font-weight: 500;
    width: 100px;
    height: 20px;
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

.iconoboton {
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 120%;
    border-radius: 50px;
    transition: all 0.6 ease;
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

.footer{
  font-family: montserrat;
  font-weight: 100;
  font-size: small;
}
.titulo{
  font-family: montserrat;
  font-weight: 900;
  font-size: medium;
}

.descripcion{
  font-family: montserrat;
  font-weight: 200;
  font-size: small;
}

.categorias-titulo {
  font-family: montserrat;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 1rem;
}

.categorias-boton {
  font-family: bodonimodaitalic;
  font-weight: 600;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(243, 235, 221, 0.6);
  background: rgb(243, 235, 221);
  backdrop-filter: blur(8px);
  transition: 0.25s ease;
}

.categorias-boton:hover {
  background: rgba(243, 235, 221, 0.25);
}

.categorias-opcion {
  font-family: montserrat;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s ease;
}

.categorias-opcion:hover {
  background: rgba(54, 40, 33, 0.08);
  font-weight: 700;
}
</style>
