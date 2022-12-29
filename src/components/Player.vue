<template>
    <div class="component">
        <Header :title="'Plantilla'" @back="goBack()" />
        <div class="main">
            <div class="player">
                <div class="info">
                    <div>
                        <p>{{ player.value.name }}</p>
                        <h1>{{ player.value.nickname }}</h1>
                        <h2>{{ player.value.n }}</h2>
                    </div>
                    <br><br><br><br><br><br><br><br>
                    <h3 class="font-black">{{ player.value.position }}</h3>
                </div>
                <img :src=player.value.img class="absolute w-64 md:w-96">
            </div>
            <div class="stats">
                <div class="season-selector">
                    <h1>Estadísticas - </h1>
                    <select v-model="selectedSeason" class="bg-transparent">
                        <option v-for="season in player.value.seasons">{{ season.id }}</option>
                    </select>
                </div>
                <div class="stat-row">
                    <div class="stat">
                        <h1>{{ loadedSeason.g }}</h1>
                        <p>GOLES</p>
                    </div>
                    <div class="stat">
                        <h1>{{ loadedSeason.a }}</h1>
                        <p>ASISTENCIAS</p>
                    </div>
                    <div class="stat">
                        <h1>{{ loadedSeason.gp }}</h1>
                        <p>PARTIDOS JUGADOS</p>
                    </div>
                </div>
                <div class="stat-row">
                    <div class="stat">
                        <h1>{{ loadedSeason.mvp }}</h1>
                        <p>JUGADOR DEL PARTIDO</p>
                    </div>
                    <div class="stat">
                        <h1>{{ loadedSeason.yc }}</h1>
                        <p>TARJETAS AMARILLAS</p>
                    </div>
                    <div class="stat">
                        <h1>{{ loadedSeason.rc }}</h1>
                        <p>TARJETAS ROJAS</p>
                    </div>
                </div>
                <div class="detail">
                    <p>Con nosotros desde:</p>
                    <h1>{{ player.value.est }}</h1>
                    <br>
                    <p>Palmarés:</p>
                    <h1>{{ player.value.trophies }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted, watch } from 'vue';

import Header from './Header.vue';
import Squad from './Squad.vue';

//

const selectedSeason = ref("JDM43");
const loadedSeason = ref({id: "", gp: 0, g: 0, a: 0, rc: 0, yc: 0, mvp: 0});

const img = ref("")

const props = defineProps({
    player: Object
})

onMounted(() => {
    loadedSeason.value = props.player.value.seasons.find(x => x.id == selectedSeason.value);
})

watch(selectedSeason, nv => {
    loadedSeason.value = props.player.value.seasons.find(x => x.id == nv);
})

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Squad);
}

</script>


<style scoped>

.main{
    @apply w-full h-full flex flex-col md:flex-row overflow-y-auto bg-[#f6f6f6]
}

.player, .stats{
    @apply w-full md:w-1/2
}

.player{
    @apply h-full flex justify-end items-end bg-[#f6f6f6] relative p-4 md:p-12
}

.info{
    @apply w-full h-full flex flex-col justify-between text-[#232323]
}

.info p{
    @apply text-xl md:text-2xl xl:text-4xl font-light
}

.info h1{
    @apply text-5xl md:text-6xl xl:text-8xl font-black
}

.info h2{
    @apply text-[12rem] xl:text-[16rem] leading-none text-[#f1121f] font-black
}

.info h3{
    @apply font-black md:text-xl xl:text-2xl
}

.stats{
    @apply flex flex-col bg-gradient-to-b from-[#232323] to-[#373737] rounded-t-3xl md:rounded-none
}

.season-selector{
    @apply flex text-xl md:text-2xl xl:text-3xl p-6 border-solid border-b-2 border-[#646464]
}

option{
    color: #232323;
}

.stat-row{
    @apply flex justify-around p-2 md:p-4 xl:p-4 border-solid border-b-2 border-[#646464]
}

.stat{
    @apply basis-1/4 p-2 md:p-4 xl:p-8 rounded-2xl
}

.stat h1{
    @apply text-4xl md:text-5xl xl:text-6xl font-bold
}

.stat p{
    @apply text-xs md:text-sm xl:text-base
}

.detail{
    @apply p-6 text-xl md:text-2xl
}

.detail h1{
    @apply font-black
}

</style>