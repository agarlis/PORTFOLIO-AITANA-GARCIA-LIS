<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Card } from "@/components/ui/card";
import { proyectos } from "@/pages/trabajos/data";
import { useRouter } from "vue-router";

const router = useRouter();

const irAlProyecto = (id: number) => {
  router.push(`/trabajos/${id}`);
};

const categoriasAbiertas = ref(false);
const categoriaSeleccionada = ref('Todas');

const categorias = computed(() => {
  const unicas = [...new Set(proyectos.map((proyecto) => proyecto.categoria))];
  return ['Todas', ...unicas];
});

const proyectosFiltrados = computed(() => {
  if (categoriaSeleccionada.value === 'Todas') return proyectos;
  return proyectos.filter(
    (proyecto) => proyecto.categoria === categoriaSeleccionada.value
  );
});

const seleccionarCategoria = (categoria: string) => {
  categoriaSeleccionada.value = categoria;
  categoriasAbiertas.value = false;
};
</script>

<template>
  <div class="flex flex-col items-center px-8 gap-10">
    <section class="relative flex flex-col items-center gap-3 text-[#5E4B3C]">
      <p class="categorias-titulo">Categorías</p>
      <button
        class="categorias-boton min-w-55"
        @click="categoriasAbiertas = !categoriasAbiertas">
        {{ categoriaSeleccionada }}
      </button>

      <div
        v-if="categoriasAbiertas"
        class="absolute top-23.75 z-40 w-full min-w-55 rounded-2xl border border-[#F3EBDD]/30 bg-[#F3EBDD] py-2 text-[#362821] shadow-lg">
        <button
          v-for="categoria in categorias"
          :key="categoria"
          class="categorias-opcion w-full px-4 py-2 text-left"
          @click="seleccionarCategoria(categoria)">
          {{ categoria }}
        </button>
      </div>
    </section>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-15">
      <Card
        v-for="proyecto in proyectosFiltrados"
        :key="proyecto.id"
        @click="irAlProyecto(proyecto.id)"
        class="w-62.5 overflow-hidden cursor-pointer hover:scale-105 transition bg-[#362821]/85">
        <img
          :src="`/image/${proyecto.imagen}`"
          :alt="proyecto.nombre"
          class="h-50 px-3 object-cover"
        />
        <div class="text-[#F3EBDD]">
          <h1 class="titulo px-3">
            {{ proyecto.nombre }}
          </h1>
          <p class="descripcion px-3">
            {{ proyecto.descripcion }}
          </p>
        </div>
      </Card>
    </div>
  </div>
</template>

<style scoped>
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

.categorias-titulo {
  font-family: montserrat;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 1rem;
}

.categorias-boton {
  font-family: bodonimodaitalic;
  font-weight: 600;
  padding: 0.7rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(243, 235, 221, 0.6);
  background: rgb(243, 235, 221);
  backdrop-filter: blur(8px);
  transition: 0.25s ease;
}

.categorias-boton:hover {
  background: rgba(243, 235, 221, 0.25);
}

.categorias-opcion {
  font-family: montserrat;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s ease;
}

.categorias-opcion:hover {
  background: rgba(54, 40, 33, 0.08);
  font-weight: 700;
}
</style>
