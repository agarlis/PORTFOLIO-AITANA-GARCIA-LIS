<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { Menu } from "lucide-vue-next"

import LogoGarlisDesing from "@/components/LogoGarlis.Desing.vue"

const menuAbierto = ref(false)
const route = useRoute()
const enPortada = computed(() => route.path === "/")
</script>

<template>
  <section>
    <nav class="w-full flex justify-between items-center px-8 py-4 text-sm uppercase tracking-widest transition-all">
        <!-- Aqui va el logo -->
        <div>
            <LogoGarlisDesing estilos="w-0 sm:w-[5rem] md:w-[6rem] lg:w-[7rem] transition-all" />
        </div>
        <!-- Aqui los botones que llevan a las páginas  -->
        <div class="hidden md:flex gap-8 tracking-widest">
            <Button v-if="!enPortada" class="Button">
                <RouterLink to="/">Portada</RouterLink>
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
        <!-- Botón del menú -->
        <button
            class="iconoboton flex align-center justify-center md:hidden lg:hidden text-3xl"
            @click="menuAbierto = !menuAbierto">
            <Menu class="w-5 h-5" />
        </button>
    </nav>
    <!-- Menú desplegable -->
    <div
        v-if="menuAbierto"
        class="menu absolute top-20 right-8 z-50 flex flex-col gap-4 rounded-2xl bg-white/20 p-6 tracking-widest backdrop-blur-md shadow-lg md:hidden">
            <RouterLink v-if="!enPortada" to="/Home" @click="menuAbierto = false">Portada</RouterLink>
            <RouterLink to="/Trabajos" @click="menuAbierto = false">Trabajos</RouterLink>
            <RouterLink to="/SobreMi" @click="menuAbierto = false">Sobre mi</RouterLink>
            <RouterLink to="/Contactos" @click="menuAbierto = false">Contacto</RouterLink>
    </div>
  </section>
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

.menu {
  font-family: montserrat;
  font-weight: 400;
}
</style>
