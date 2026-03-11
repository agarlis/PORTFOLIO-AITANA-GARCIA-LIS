<script setup lang="ts">

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

import { Instagram } from "lucide-vue-next";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Calendar } from '@/components/ui/calendar'

import { ref } from "vue"

import type { DateValue } from '@internationalized/date'

const submitForm = () => {
  console.log(form.value)
  alert("Mensaje enviado ✨")
}

const dies = ref<DateValue>()

const form = ref({
  name: "",
  email: "",
  projectType: "",
  message: "",
  privacy: false,
})


</script>

<template>
    <div class="grid md:grid-cols-2 gap-30">
            <Card class="bg-[#F3EBDD] border-none shadow-none">
                <CardContent class="space-y-8 p-2">
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <!-- Nombre -->
                        <div class="respuesta space-y-4">
                            <Label for="name" class="etiqueta text-[#5E4B3C]">Nombre</Label>
                            <Input class="bg-[#5E4B3C] text-[#F3EBDD]" id="name" v-model="form.name" required />
                        </div>
                        <!-- Email -->
                        <div class="respuesta space-y-4">
                            <Label for="email" class="etiqueta text-[#5E4B3C]">Email</Label>
                            <Input class="bg-[#5E4B3C] text-[#F3EBDD]" id="email" type="email" v-model="form.email" required />
                        </div>
                        <!-- Tipo proyecto -->
                        <div class="respuesta space-y-4 ">
                            <Label class="etiqueta text-[#5E4B3C]">Tipo de proyecto</Label>
                            <Select class="bg-[#5E4B3C] text-[#F3EBDD]" v-model="form.projectType">
                                <SelectTrigger class="bg-[#5E4B3C]">
                                <SelectValue placeholder="Selecciona una opción" class="respuesta text-[#F3EBDD]" />
                                </SelectTrigger>
                                <SelectContent class="hover:bg-[#5E4B3C]">
                                <SelectItem value="identidad" class="respuesta ">Identidad visual</SelectItem>
                                <SelectItem value="editorial" class="respuesta">Diseño editorial</SelectItem>
                                <SelectItem value="redes" class="respuesta">Redes sociales</SelectItem>
                                <SelectItem value="packaging" class="respuesta">Packaging</SelectItem>
                                <SelectItem value="otro" class="respuesta">Otro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <!-- Fecha de reunión -->
                        <div class="respuesta space-y-4">
                            <Label class="etiqueta text-[#5E4B3C]">Reunión</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button class="bg-[#5E4B3C]"> 
                                        <span v-if="dies">
                                            {{ dies.day }}/{{ dies.month }}/{{ dies.year }}
                                        </span>
                                        <span v-else class="respuesta text-[#F3EBDD]">
                                            Selecciona una fecha
                                        </span>
                                    </Button>
                                </PopoverTrigger>
                            
                                <PopoverContent class="bg-[#5E4B3C] text-[#F3EBDD]"> 
                                    <Calendar v-model="dies"/>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <!-- Mensaje -->
                        <div class="respuesta space-y-4">
                            <Label for="message" class="etiqueta text-[#5E4B3C]">Mensaje</Label>
                            <Textarea
                            class="bg-[#5E4B3C] text-[#F3EBDD]"
                            id="message"
                            rows="4"
                            v-model="form.message"
                            required
                            />
                        </div>
                        <!-- Checkbox -->
                        <div class="flex items-center space-x-2">
                            <Checkbox id="privacy" v-model:checked="form.privacy" class="bg-[#5E4B3C]" />
                            <Label for="privacy" class="etiqueta text-[#5E4B3C] text-sm">
                            Acepto la política de privacidad
                            </Label>
                        </div>
                        <!-- Botón -->
                        <Button type="submit" class="etiqueta bg-[#5E4B3C] w-full mt-4">
                            Enviar mensaje
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <!-- Información lateral -->
            <div class="space-y-5 text-[#5E4B3C]">
                <!-- Información -->
                <div>
                    <h3 class="etiqueta text-sm uppercase tracking-widest mb-4">
                        Información
                    </h3>
                    <p class="texto">Valencia, España</p>
                    <p class="mb-2 texto">Disponible para freelance y colaboraciones</p>
                    <a href="mailto:aitana.garcia.lis1@gmail.com" class="texto underline">
                        aitana.garcia.lis1@gmail.com
                    </a>
                </div>
                <!-- Redes -->
                <div>
                    <h3 class="etiqueta text-sm uppercase tracking-widest mb-4">
                        Redes
                    </h3>
                    <div class="flex gap-6 text-sm">
                        <a href="https://www.instagram.com/garlisdesignn/">
                            <Instagram/>
                        </a>
                    </div>
                </div>
                <!-- Mapa -->
                <div>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.662975928569!2d-0.5996834360341265!3d39.627342063371074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd605f8b6bff7d67%3A0x7380bc112938a0b!2s46160%20Liria%2C%20Valencia!5e0!3m2!1ses!2ses!4v1772630300702!5m2!1ses!2ses"
                    class="w-full h-80 rounded-2xl shadow hover:scale-105" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>      
        </div>
</template>

<style scoped>
.etiqueta{
    font-family: montserrat;
    font-weight: 600;
}
.respuesta{
    font-family: montserrat;
    font-weight: 400;
}
.texto{
    font-family: montserrat;
    font-weight: 200;
}
</style>