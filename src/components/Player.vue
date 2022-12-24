<template>
    <div class="component">
        <Header :title="'Plantilla'" @back="goBack()" />
        <div class="main">
            <div class="player">
                <div class="info">
                    <p>{{ player.value.name }}</p>
                    <h1>{{ player.value.nickname }}</h1>
                    <h2>{{ player.value.n }}</h2>
                </div>
                <img src="../assets/img/vector.png" class="absolute">
            </div>
            <div class="stats">

            </div>
        </div>
    </div>
</template>


<script setup>

import Header from './Header.vue';
import Squad from './Squad.vue';

const props = defineProps({
    player: Object
})

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Squad);
}

</script>


<style scoped>

.main{
    @apply w-full h-full flex flex-col md:flex-row
}

.player, .stats{
    @apply w-full md:w-1/2 p-12
}

.player{
    @apply h-full flex justify-end items-end bg-[#f6f6f6] relative
}

.info{
    @apply w-full h-full flex flex-col text-[#232323]
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

.stats{
    @apply bg-[#424242]
}

</style>