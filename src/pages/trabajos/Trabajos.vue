<script lang="ts" setup>

import LogoGarlisDesing from '@/components/LogoGarlis.Desing.vue'
import { Menu } from "lucide-vue-next";
import { ref } from 'vue';


import {Card} from "@/components/ui/card"

import { proyectos } from "@/pages/trabajos/data"

import { useRouter } from "vue-router"

const router = useRouter()

const irAlProyecto = (id: number) => {
  router.push(`/trabajos/${id}`)
}

const menuAbierto = ref(false)

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

    <main class="bg-[#362821] py-45 flex justify-center px-8">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card 
          v-for="proyecto in proyectos" 
          :key="proyecto.id"
          @click="irAlProyecto(proyecto.id)"
          class="w-[250px] overflow-hidden cursor-pointer hover:scale-105 transition bg-[#F3EBDD]">
          <img 
            :src="`/image/${proyecto.imagen}`" 
            :alt="proyecto.nombre"
            class="h-[200px] px-3 object-cover"
          />
          <div class="text-[#362821]">
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

    <footer class="footer text-center bg-[#362821] text-[#F3EBDD] w-full py-4">
      <p> © 2026 · Aitana García Lis · Portfolio </p> 
    </footer>
  </div>
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
</style>