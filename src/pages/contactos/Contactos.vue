<script setup lang="ts">
import Formulario from "../Formulario.vue"
import MenuBotonesYLogo from "../MenuBotonesYLogo.vue";
</script>

<template>
    <section class="bg-[#F3EBDD] relative min-h-screen overflow-hidden">
        <!-- Botones y logo -->
        <MenuBotonesYLogo class=" text-[#5E4B3C]"/>
        <!-- Texto principal -->
        <div class="max-w-2xl mb-10 text-[#5E4B3C] px-8">
            <h2 class="titulo text-6xl md:text-5xl font-light mb-6">
                Hablemos.
            </h2>
            <p class="texto leading-relaxed">
                Si tienes un proyecto en mente o quieres colaborar, estaré encantada de leerte. Respondo en 24/48h.
            </p>
        </div>
        <!-- Formulario -->
        <Formulario class="px-8"/>
        <!-- Pie de página -->
        <p class="piedepágina text-center text-[#362821] py-4">
            © 2026 · Aitana Garcia Lis · Portfolio
        </p>
    </section>
</template>

<style scoped>
.titulo{
    font-family: montserrat;
    font-weight: 800;
}

.texto{
    font-family: montserrat;
    font-weight: 200;
}
.piedepágina {
  font-family: montserrat;
  font-weight: 100;
  font-size: small;
}
</style>
