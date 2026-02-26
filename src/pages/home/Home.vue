<script lang="ts" setup>


</script>

<template>

  <div class="">
    <div class="">
      <span class="rama">Graphic Designer</span>
      <br>
      <span class="portfolio">Portfolio</span>
    </div>
    <h1 class="nom">
      Aitana Garcia
    </h1>
    <div class="frase">
    <p>Diseño que conecta</p>
  </div>
  </div>
<div class="flex gap-8">
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

.nom{
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