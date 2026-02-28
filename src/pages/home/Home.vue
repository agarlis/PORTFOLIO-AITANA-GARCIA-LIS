<script lang="ts" setup>
import { ref } from "vue"
import { Menu } from 'lucide-vue-next';
import LogoGarlisDesing from '@/components/LogoGarlis.Desing.vue'


const menuAbierto = ref(false)
</script>

<template>
    <section class="relative min-h-screen bg-[#F3EBDD] overflow-hidden ">
        <nav class="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-5 text-sm uppercase tracking-widest transition-all">
          
            <div class="text-[#5E4B3C]">
                <LogoGarlisDesing estilos="text-[#5E4B3C] sm:w-[4rem] md:w-[6rem] lg:w-[8rem] transition-all"/>
            </div>

            <div class="hidden md:flex gap-8 tracking-widest">
                <Button class="Button">
                    <RouterLink to="/Trabajos">Trabajos</RouterLink>
                </Button>

                <Button class="Button">
                    <RouterLink to="/SobreMi">Sobre mi</RouterLink>
                </Button>

                <Button class="Button">
                    <RouterLink to="/Contactos">Contacto</RouterLink>
                </Button>
            </div>

            <button 
                class="iconoboton block flex align-center justify-center md:hidden lg:hidden text-3xl text-[#5E4B3C]"
                @click="menuAbierto = !menuAbierto">
                    <Menu class="w-5 h-5" />
            </button>
        </nav>

    <div 
        v-if="menuAbierto"
        class="menu absolute top-[80px] tracking-widest right-8 flex flex-col gap-4 bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg md:hidden z-50">
            <RouterLink to="/Trabajos" @click="menuAbierto = false">Trabajos</RouterLink>
            <RouterLink to="/SobreMi" @click="menuAbierto = false">Sobre mi</RouterLink>
            <RouterLink to="/Contactos" @click="menuAbierto = false">Contacto</RouterLink>
    </div>

  <div class="bg-[#F3EBDD] flex flex-col justify-center min-h-screen px-8 md:px-10">
    <div class="flex justify-between text-xl text-[#5E4B3C]">
      <span class="rama sm:text-1xl md:text-2xl lg:text-3xl transition-all">Graphic Designer</span>
            <img 
              src="/image/fotoaitana.png"
              alt=""
              class="absolute right-[19%] w-[0px] sm:w-[0px] md:w-[320px] lg:w-[450px] object-cover z-10 duration-500 ease-out hover:scale-125 transition-all"
            />
      <span class="portfolio text-1xl sm:text-1xl md:text-2xl lg:text-3xl transition-all">Portfolio</span>
    </div>

    <h1 class="nombre mt-4 text-7xl sm:text-7xl md:text-8xl lg:text-[9rem] text-[#3A2A20] transition-all">
        Aitana<br>Garcia
    </h1>

    <div 
        class="frase mt-4 text-base sm:text-base md:text-lg lg:text-xl text-[#5E4B3C] transition-all">
    <p>Diseño que conecta</p>
  </div>

  </div>

    </section>
</template>

<style scoped>

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

.menu{
    font-family: montserrat;
    font-weight: 400;
}
.menu:hover{

}


.rama {
    font-family: bodonimodaitalic;
    font-weight: 400;
}

.portfolio {
    font-family: montserrat;
    font-weight: 700;
    text-transform: uppercase;
}

.nombre{
    font-family: montserrat;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 0.9;
}

.frase {
  font-family: montserrat;
  font-weight: 300; 
  line-height: 0.9;
}

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
    font-weight: 800;
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
}


</style>