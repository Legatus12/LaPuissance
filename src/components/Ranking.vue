<template>
    <div class="component">
        <Header :title="'Estadísticas'" @back="goBack()" />
        <div class="main">
            <div class="ranking">
                <h1 class="title">TOP 3 GOLEADORES</h1>
                <div class="player-container">
                    <div v-for="player in topGoals" class="player">
                        <div class="info">
                            <span class="text-[#f1121f]">{{ player.n }}</span><span class="font-normal">&nbsp;|&nbsp;</span><span class="nickname">{{ player.nickname }}</span>
                        </div>
                        <br>
                        <div class="w-full flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="font-bold">{{ player.g }}</div>
                                <img src="../assets/img/football.png">
                            </div>
                            <div class="detail"> {{ (player.g / player.gp).toFixed(2) }} G/P </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking">
                <h1 class="title">TOP 3 ASISTENTES</h1>
                <div class="player-container">
                    <div v-for="player in topAssists" class="player">
                        <div class="info">
                            <span class="text-[#f1121f]">{{ player.n }}</span><span class="font-normal"> | </span><span class="nickname">{{ player.nickname }}</span>
                        </div>
                        <br>
                        <div class="w-full flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="font-bold">{{ player.a }}</div>
                                <img src="../assets/img/assist.png">
                            </div>
                            <div class="detail"> {{ (player.a / player.gp).toFixed(2) }} A/P </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking">
                <h1 class="title">TOP 3 AMONESTADOS</h1>
                <div class="player-container">
                    <div v-for="player in topCards" class="player">
                        <div class="info">
                            <span class="text-[#f1121f]">{{ player.n }}</span><span class="font-normal"> | </span><span class="nickname">{{ player.nickname }}</span>
                        </div>
                        <br>
                        <div class="w-full flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <div class="font-bold">{{ player.yc }}</div>
                                <img src="../assets/img/yellowCard.png">
                                &nbsp;
                                <div v-if="player.rc != 0" class="font-bold">{{ player.rc }}</div>
                                <img v-if="player.rc != 0" src="../assets/img/redCard.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue';

import Header from './Header.vue';
import Home from './Home.vue';

import moreGoals from '../store/moreGoals.mjs';
import moreAssists from '../store/moreAssists.mjs';
import moreCards from '../store/moreCards.mjs';

//

const season = "JDM43";

const topGoals = ref([{nickname: ""}]);
const topAssists = ref([{nickname: ""}]);
const topCards = ref([{nickname: ""}]);

onMounted(() => {
    topGoals.value = moreGoals(season);
    topAssists.value = moreAssists(season);
    topCards.value = moreCards(season);
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
    @apply bg-gradient-to-b from-[#232323] to-[#373737] w-full h-full flex flex-col xl:flex-row p-12 gap-12 overflow-y-auto
}

.ranking{
    @apply basis-1/3 md:h-full flex flex-col
}

.title{
    @apply font-black text-3xl border-solid border-b-2 border-[#888888]
}

.player-container{
    @apply w-full h-full p-4 flex flex-col gap-4
}

.player{
    @apply bg-[#f6f6f6] text-[#232323] flex flex-col p-4 text-2xl
}

.info{
    @apply font-black text-2xl md:text-4xl
}

.detail{
    @apply text-xl md:text-xl text-[#646464]
}

</style>