<script lang="ts" setup>
import { RouterView } from "vue-router";
import MenuBotonesYLogo from "../MenuBotonesYLogo.vue";
</script>

<template>
  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">
    <header>
      <nav class="bg-[#F3EBDD] overflow-hidden">
        <MenuBotonesYLogo class=" text-[#5E4B3C]"/>
      </nav>
    </header>

    <main class="bg-[#F3EBDD]">
      <RouterView />
    </main>

    <footer class="piedepagina text-center text-[#362821] bg-[#F3EBDD] w-full py-4">
      <p> © 2026 · Aitana García Lis · Portfolio </p> 
    </footer>
  </div>
</template>

<style scoped>
.piedepagina{
  font-family: montserrat;
  font-weight: 100;
  font-size: small;
}
</style>
