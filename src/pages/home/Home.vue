<script lang="ts" setup>

import LogoGarlisDesing from '@/components/LogoGarlis.Desing.vue'

</script>

<template>
    <section class="relative overflow-hidden">
        <nav class=" flex justify-between items-center px-8 text-sm uppercase tracking-widest">
            <LogoGarlisDesing estilos="w-[6rem]"/>
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

  <div class="flex flex-col justify-center min-h-screen px-8 md:px-10">
    <div class="flex justify-between text-xl">
      <span class="rama text-3xl">Graphic Designer</span>
            <img 
              src="/image/fotoaitana.png"
              alt=""
              class="absolute right-[20%] w-[350px]"
            />
      <span class="portfolio text-3xl">Portfolio</span>
      
    </div>
        <h1 class="nombre mt-4 text-[9rem]">
        Aitana<br>Garcia
        </h1>
    <div 
    class="frase mt-4 text-xl">
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
  font-weight: 200; 
  line-height: 0.9;
}

.Button{
font-family: montserrat;
font-weight: 200; 
}

.Button:hover{
font-family: montserrat;
font-weight: 500; 
}


</style>