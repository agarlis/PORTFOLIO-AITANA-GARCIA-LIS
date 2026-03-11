<script lang="ts" setup>
import MenuBotonesYLogo from "../MenuBotonesYLogo.vue";
</script>

<template>
    <section class="bg-[#F3EBDD] relative h-screen overflow-hidden">
        <!-- Botones y logo -->
        <MenuBotonesYLogo class=" text-[#5E4B3C]"/>
        <!-- Contenido principal -->
        <div class="flex h-full flex-col justify-start px-8 pt-[17.5rem] md:pt-[12.5rem] lg:pt-[7.5rem] transition-all">
            <div class="flex justify-between text-xl text-[#5E4B3C]">
                <span class="rama sm:text-1xl md:text-2xl lg:text-3xl transition-all">
                    Graphic Designer
                </span>
                <img 
                    src="/image/fotoaitana.png"
                    alt="Aitana Garcia"
                    class="foto absolute right-[19%] hidden md:block md:w-[320px] lg:w-[28rem] object-cover z-10 duration-500 ease-out hover:scale-125 transition-all"
                />
                <span class="portfolio text-3xl sm:text-3xl md:text-4xl lg:text-5xl transition-all">
                    Porfolio
                </span>
            </div>
            <h1 class="nombre mt-2 text-7xl sm:text-7xl md:mt-3 md:text-8xl lg:text-[9rem] text-[#3A2A20] transition-all">
                Aitana<br>Garcia
            </h1>
            <div class="frase mt-2 md:mt-3 text-base sm:text-base md:text-lg lg:text-xl text-[#5E4B3C] transition-all">
                <p>Diseño que conecta</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .foto:hover{
        filter: drop-shadow(1px 1px 10px black);
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
</style>
