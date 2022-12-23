<template>
    <div class="component">
        <Header :title="'Plantilla'" @back="goBack()" />
        <div class="main">
            <div v-for="(position, index) in squad" class="position">
                <h1 class="position-title">{{ positionName[index] }}</h1>
                <div class="player-container">
                    <div v-for="player in position" @click="renderPlayer(player)"
                    class="player">
                        <div class="number">{{ player.n }}</div>
                        <div class="info">
                            <p>{{ player.name }}</p>
                            <h1 class="nickname"><b>{{ player.nickname }}</b></h1>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
</template>


<script setup>

import Header from './Header.vue';
import Home from './Home.vue';

import array from '../local/players.json';

const squad = [
    Object.values(array).filter(x => x.pos == "gk"),
    Object.values(array).filter(x => x.pos == "df"),
    Object.values(array).filter(x => x.pos == "mf"),
    Object.values(array).filter(x => x.pos == "st"),
];

const positionName = [
    "Portero",
    "Defensa",
    "Mediocentro",
    "Delantero"
]

const emits = defineEmits(["renderingComponent", "renderingPlayer"]);

const goBack = () =>{
    emits("renderingComponent", Home);
}

const renderPlayer = (obj) => {
    emits("renderingPlayer", obj);
}

</script>


<style scoped>

.main{
    @apply w-full h-full bg-gradient-to-b from-[#232323] to-[#373737] flex flex-col gap-6 p-12 overflow-y-auto
}

.position{
    @apply w-full h-full flex flex-col gap-4
}

.position-title{
    @apply w-full text-2xl md:text-3xl font-black text-[#f6f6f6] border-solid border-b-2 border-[#888888]
}

.player-container{
    @apply w-full flex flex-col md:flex-row md:flex-wrap gap-4 pb-12
}

.player{
    @apply w-full md:w-80 h-16 bg-[#f6f6f6] rounded-xl flex shrink-0 cursor-pointer hover:drop-shadow-2xl duration-300 hover:bg-[#aeaeae]
}

.number{
    @apply text-5xl basis-1/4 text-[#f1121f] text-right font-black p-2
}

.info{
    @apply basis-3/4 flex flex-col justify-end items-start text-[#232323] p-2
}

.nickname{
    @apply text-xl font-bold text-xl font-bold
}

</style>