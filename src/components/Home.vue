<template>
    <div class="home-container">
        <div class="half1">
            <h1 class="section" @click="render('Tables')">&gt;&nbsp;Clasificación</h1>
            <h1 class="section" @click="render(Matches)">&gt;&nbsp;Partidos</h1>
            <h1 class="section" @click="render(Team)">&gt;&nbsp;Plantilla</h1>
            <h1 class="section" @click="render(Ranking)">&gt;&nbsp;Estadísticas</h1>
        </div>
        <div class="half2">
            <div class="flex justify-end gap-2">
                <div class="icon-container"><img src="../assets/img/ig.png" class="w-8"></div>
                <div class="icon-container"><img src="../assets/img/tiktok.png" class="w-8"></div>
                <div class="icon-container"><img src="../assets/img/mail.png" class="w-8"></div>
            </div>
            <div>
                <h1 class="title">La&nbsp;Puissance</h1>
                <p class="subtitle">Club de Fútbol</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const emits = defineEmits(["rendering"])

const render = (component) => emits("rendering", component);

</script>

<style scoped>

.home-container{
    @apply w-full h-full flex flex-col-reverse md:flex-row bg-[#f6f6f6] overflow-hidden
}

.half1{
    @apply w-full md:w-1/2 h-1/2 md:h-full italic flex flex-col gap-6 md:gap-12 justify-center bg-[#232323] md:bg-g1 bg-cover bg-center text-[#f6f6f6] text-4xl md:text-5xl lg:text-6xl font-black p-8 lg:p-16
}

.half2{
    @apply w-full md:w-1/2 h-1/2 md:h-full flex flex-col-reverse md:flex-col justify-between p-8 lg:p-16
}
.icon-container{
    @apply flex items-center justify-center rounded-full w-16 h-16 hover:bg-[#d6d6d6] cursor-pointer
}

.section{
    @apply hover:text-[#f1121f] hover:translate-x-10 cursor-pointer w-fit
}

.title{
    @apply font-black text-4xl md:text-5xl lg:text-6xl xl:text-6xl
}

.subtitle{
    @apply text-lg md:text-2xl lg:text-2xl text-[#f1121f]
}

</style>