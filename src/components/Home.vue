<template>
    <div class="home-container">
        <div class="head">
            <h1>La&nbsp;Puissance</h1>
            <p>club de fútbol</p>
        </div>

        <div class="image"></div>

        <div class="menu">

            <h1 @click="render(Club)" class="line-through text-[#646464]">
                Club
            </h1>

            <br>

            <p>TEMPORADA</p>

            <h1 @click="render(Tables)">
                Clasificación
            </h1>
            <h1 @click="render(Matches)" class="line-through text-[#646464]">
                Partidos
            </h1>

            <br>

            <p>EQUIPO</p>

            <h1 @click="render(Squad)">
                Plantilla
            </h1>
            <h1 @click="render(Ranking)" class="line-through text-[#646464]">
                Estadísticas
            </h1>

        </div>
    </div>
</template>


<script setup>

import Club from './Club.vue';
import Tables from './Tables.vue';
import Matches from './Matches.vue';
import Squad from './Squad.vue';
import Ranking from './Ranking.vue';

const emits = defineEmits(["renderingComponent"]);

const render = (component) => emits("renderingComponent", component);

</script>


<style scoped>

.home-container{
    @apply w-full h-full flex overflow-hidden
}

.head{
    @apply absolute top-12 left-12
}

.head h1{
    @apply font-bold text-4xl md:text-6xl lg:text-6xl
}

.head p{
    @apply w-fit text-xl md:text-2xl text-[#f1121f] lg:bg-[#f1121f] lg:text-[#f6f6f6] lg:font-bold lg:px-2
}

.image{
    @apply hidden lg:block w-full h-full bg-bg1 bg-cover bg-center p-16 shrink overflow-x-hidden
}

.menu{
    @apply w-full lg:w-fit h-full bg-gradient-to-b from-[#232323] to-[#373737] flex flex-col items-end justify-end p-12 md:p-16
}

.menu h1{
    @apply font-black text-4xl md:text-6xl hover:-translate-x-8 cursor-pointer duration-200 py-2 hover:text-[#f1121f]
}

.menu p{
    @apply text-xl md:text-3xl font-light py-2
}

</style>