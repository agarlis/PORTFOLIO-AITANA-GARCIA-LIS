<script lang="ts" setup>

import LogoGarlisDesing from '@/components/LogoGarlis.Desing.vue'

</script>

<template>
    <section class="relative min-h-screen bg-[#F3EBDD] overflow-hidden ">
        <nav class="absolute top-0 left-0 w-full flex justify-between items-center px-8 text-sm uppercase tracking-widest">
          
            <div class="text-[#5E4B3C]">
                <LogoGarlisDesing estilos="text-[#5E4B3C] sm:w-[4rem] md:w-[6rem] lg:w-[8rem] transition-all"/>
            </div>

            <div class="flex gap-8 tracking-widest">
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
        </nav>

  <div class="bg-[#F3EBDD] flex flex-col justify-center min-h-screen px-8 md:px-10">
    <div class="flex justify-between text-xl text-[#5E4B3C]">
      <span class="rama text-3xl">Graphic Designer</span>
            <img 
              src="/image/fotoaitana.png"
              alt=""
              class="absolute right-[19%] w-[450px]"
            />
      <span class="portfolio text-3xl">Portfolio</span>
      
    </div>
        <h1 class="nombre mt-4 text-[9rem] text-[#3A2A20]">
        Aitana<br>Garcia
        </h1>
    <div 
    class="frase mt-4 text-xl text-[#5E4B3C]">
    <p>Diseño que conecta</p>
  </div>

  </div>

    </section>
</template>

<style scoped>

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
    font-weight: 200;
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
    font-weight: 500;
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.15);
}


</style>