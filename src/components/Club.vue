<template>
    <div class="component">
        <Header :title="'Club'" @back="goBack()" />
        <div class="main">
            <div class="xl:w-1/2 p-12 md:p-24">
                <h1>La Puissance</h1>
                <p>Somos un equipo amateur de fútbol 7 del distrito de Retiro en Madrid.</p>
            </div>
            <div class="xl:w-1/2 p-12 md:p-24">
                <h2>Síguenos en</h2>
                <br>
                <div class="flex gap-4">
                    <a class="sm" href="https://www.instagram.com/lapuissance.fc/" target="_blank">
                        <img src="../assets/img/ig.png" class="w-full p-4">
                    </a>
                    <a class="sm" href="https://www.tiktok.com/@lapuissancefc" target="_blank">
                        <img src="../assets/img/tiktok.png" class="w-full p-4">
                    </a>
                </div>
                <br>
                <br>
                <h2>Contacto</h2>
                <p class="hover:underline cursor-copy" @click="copyMail()">lapuissancefc@gmail.com</p>
            </div>
        </div>
    </div>
</template>


<script setup>

import Header from './Header.vue';
import Home from './Home.vue';

import * as clipboard from 'clipboard-polyfill';

//

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Home)
}

const copyMail = () => {
    clipboard.writeText("lapuissancefc@gmail.com");
    alert("Correo copiado al portapapeles.");
}

</script>


<style scoped>

.main{
    @apply w-full h-full flex flex-col xl:flex-row justify-between xl:justify-around xl:items-center overflow-y-auto
}

.sm{
    @apply w-16 h-16 bg-[#f6f6f6] rounded-full 
}

h1{
    @apply font-black text-4xl
}

h2{
    @apply font-black text-3xl
}

h3{
    @apply md:text-2xl
}

p{
    @apply text-xl md:text-2xl
}

</style>