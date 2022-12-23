<template>
    <div class="component">
        <Header :title="'Plantilla'" @back="goBack()" />
        <div class="main">
            <div class="player">

            </div>
            <div class="stats">

            </div>
        </div>
    </div>
</template>


<script setup>

import Header from './Header.vue';
import Squad from './Squad.vue';

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Squad)
}

</script>


<style scoped>

.main{
    @apply w-full h-full flex flex-col md:flex-row
}

.player, .stats{
    @apply w-full md:w-1/2 h-full
}

.player{
    @apply bg-pimg bg-center
}

.stats{
    @apply bg-[#424242]
}

</style>