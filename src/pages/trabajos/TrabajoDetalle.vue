<script setup lang="ts">
import { useRoute } from "vue-router"
import { proyectos } from "@/pages/trabajos/data"
import { computed, ref } from "vue"


const route = useRoute()

const proyecto = computed(() => {
  return proyectos.find(p => p.id === Number(route.params.id))
})
const imagenGrande = ref<string | null>(null)

const abrirImagen = (foto: string) => {
  imagenGrande.value = foto
}


const cerrarImagen = () => {
  imagenGrande.value = null
}

const esImagenHerramienta = (herramienta: string) => {
  return /\.(png|jpe?g|webp|svg|gif)$/i.test(herramienta)
}
</script>

<template>
  <!-- Contenido principal -->
    <div 
        v-if="proyecto" 
        class="bg-[#F3EBDD] min-h-screen px-8">
          <div class="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div class="text-[#5E4B3C] text-justify">
              <h1 class="nproyecto text-9xl mb-4">
                <!-- Numero proyecto -->
              /0{{ proyecto.id }}/ 
              </h1>

              <h1 class="nombre text-7xl mb-10 ">
                <!-- Nombre proyecto -->
                {{ proyecto.nombre }}
              </h1>

              <h1 class="asignatura text-3xl mb-2">
                <!-- Asignatura proyecto-->
                {{ proyecto.asignatura }}
              </h1>

              <h1 class="categoria text-xl mb-10">
                <!-- Categoria proyecto -->
                #{{ proyecto.categoria }}
              </h1>
              
              <p class="texto mb-10">
                <!-- Breve explicación proyecto -->
                {{ proyecto.descripcion}}
              </p>

              <p class="texto mb-10">
                <!-- Concepto proyecto -->
                {{ proyecto.concepto}}
              </p>
              <!-- Programas que se han usado en el proyecto -->
              <div class="flex flex-wrap gap-3 mb-6">
                <template v-for="(herramienta, index) in proyecto.herramientas" :key="index">
                  <img
                    v-if="esImagenHerramienta(herramienta)"
                    :src="`/image/${herramienta}`"
                    :alt="`Herramienta ${index + 1}`"
                    class="w-10 h-10 object-contain"
                  />
                  <span
                    v-else
                    class="px-3 py-1 rounded-full border border-[#5E4B3C]/30 text-sm"
                  >
                    {{ herramienta }}
                  </span>
                </template>
              </div>
              <!-- Año proyecto -->
              <p class="texto">
                {{ proyecto.year}}
              </p>
              </div>
              <!-- Imagen principal del proyecto -->
              <div class="flex justify-center">
                <img
                  :src="`/image/${proyecto.imagen}`"
                  :alt="proyecto.nombre"
                  class="w-150 object-contain"
                />
              </div>
          </div>
          <!-- Linia separadora -->
          <div class="my-24 border-t border-[#362821]/20"></div>
          <!-- Galería de imágenes -->
          <div class="max-w-6xl mx-auto">
            <div class="flex gap-6 overflow-x-auto pb-4">
              <img
                v-for="(foto, index) in proyecto.galeria"
                :key="index"
                :src="`/image/${foto}`"
                class="w-75 cursor-pointer transition hover:scale-105"
                @click="abrirImagen(foto)"
              />
            </div>
          </div>
      </div>
  <!-- Ver imagenes en grande -->
  <div
    v-if="imagenGrande"
    class="fixed inset-0 bg-black/80 flex items-center justify-center z-100"
    @click="cerrarImagen">
      <img :src="`/image/${imagenGrande}`" class="max-w-[90vw] max-h-[90vh] object-contain" @click.stop/>
  </div> 
</template>

<style scoped>
.nproyecto{
  font-family: bodonimoda;
  font-weight: 900;
}

.nombre{
  font-family: bodonimodaitalic;
  font-weight: 600;
}

.asignatura{
  font-family: montserrat;
  font-weight: 800;
}

.categoria{
  font-family: montserrat;
  font-weight: 500;
}

.texto{
  font-family: montserrat;
  font-weight: 200;
}

.footer{
  font-family: montserrat;
  font-weight: 100;
  font-size: small;
}
</style>
