<template>
    <div class="component">
        <Header :title="'Estadísticas'" @back="goBack()" />
        <div class="select">
            <h1>Competición - </h1>
            <select v-model="selectedSeason">
                <option>JDM43</option>
            </select>
        </div>
        <div class="main">
            <div class="ranking">
                <h1 class="title">TOP 3 GOLEADORES</h1>
                <div class="player-container">
                    <div v-for="player in topGoals" class="player">
                        <img :src=player.img class="h-32">
                        <div class="info">
                            <div>
                                <span class="font-black text-[#f1121f]">{{ player.n }}</span> |
                                <span class="font-black">{{ player.nickname }}</span>
                            </div>
                            <div>
                                <div><span class="font-black">{{ player.g }}</span> goles</div>
                                <div>en {{ player.gp }} partidos</div>
                                <div class="text-[#aeaeae] italic">{{ (player.g / player.gp).toFixed(2) }} G/PJ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking">
                <h1 class="title">TOP 3 ASISTENTES</h1>
                <div class="player-container">
                    <div v-for="player in topAssists" class="player">
                        <img :src=player.img class="h-32">
                        <div class="info">
                            <div>
                                <span class="font-black text-[#f1121f]">{{ player.n }}</span> |
                                <span class="font-black">{{ player.nickname }}</span>
                            </div>
                            <div>
                                <div><span class="font-black">{{ player.a }}</span> asistencias</div>
                                <div>en {{ player.gp }} partidos</div>
                                <div class="text-[#aeaeae] italic">{{ (player.a / player.gp).toFixed(2) }} G/PJ</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking">
                <h1 class="title">TOP 3 AMONESTADOS</h1>
                <div class="player-container">
                    <div v-for="player in topCards" class="player">
                        <img :src=player.img class="h-32">
                        <div class="info">
                            <div>
                                <span class="font-black text-[#f1121f]">{{ player.n }}</span> |
                                <span class="font-black">{{ player.nickname }}</span>
                            </div>
                            <div>
                                <div><span class="font-black">{{ player.yc }}</span> tarjetas amarillas y</div>
                                <div><span class="font-black">{{ player.rc }}</span> tarjetas rojas</div>
                                <div>en {{ player.gp }} partidos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted, watch } from 'vue';

import Header from './Header.vue';
import Home from './Home.vue';

import moreGoals from '../store/moreGoals.mjs';
import moreAssists from '../store/moreAssists.mjs';
import moreCards from '../store/moreCards.mjs';

//

const selectedSeason = ref("JDM43");

const topGoals = ref([{nickname: ""}]);
const topAssists = ref([{nickname: ""}]);
const topCards = ref([{nickname: ""}]);

onMounted(() => {
    topGoals.value = moreGoals(selectedSeason.value);
    topAssists.value = moreAssists(selectedSeason.value);
    topCards.value = moreCards(selectedSeason.value);
})

watch(selectedSeason, nv => {
    topGoals.value = moreGoals(nv);
    topAssists.value = moreAssists(nv);
    topCards.value = moreCards(nv);
})

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Home)
}

</script>


<style scoped>

.select{
    @apply h-16 flex items-center bg-[#f6f6f6] text-[#232323] p-4 md:p-8 md:text-xl
}

.main{
    @apply bg-gradient-to-b from-[#232323] to-[#373737] w-full h-full flex flex-col lg:flex-row p-12 gap-12 overflow-y-auto
}

.ranking{
    @apply basis-1/3 md:h-full bg-[#646464] flex flex-col
}

.title{
    @apply font-black p-4 text-3xl
}

.player-container{
    @apply w-full h-full p-4 flex flex-col gap-4
}

.player{
    @apply basis-1/3 bg-[#f6f6f6] flex items-end p-4
}

.info{
    @apply w-full h-full text-[#232323] flex flex-col justify-between text-end text-lg
}

</style>