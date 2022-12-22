<template>
    <div class="home-container">
        <div class="left">
            <h1>
                La Puissance
            </h1>
            <p>
                CLUB DE FÚTBOL
            </p>
        </div>
        <div class="right">
            <p>TEMPORADA</p>
            <h1>Clasificación</h1>
            <h1>Partidos</h1>
            <br>
            <p>EQUIPO</p>
            <h1>Plantilla</h1>
            <h1>Estadísticas</h1>
        </div>
    </div>
</template>


<script setup>

const emits = defineEmits(["rendering"])

const render = (component) => emits("rendering", component);

</script>


<style scoped>

.home-container{
    @apply w-full h-full flex
}

.left{
    @apply w-1/2 h-full bg-g1 bg-cover bg-center p-16
}

.right{
    @apply w-1/2 h-full bg-[#232323] flex flex-col items-end justify-end p-16
}

.left h1{
    @apply font-black text-8xl
}

.left p{
    @apply text-4xl text-[#f6f6f6]
}

.right h1{
    @apply font-black text-6xl hover:-translate-x-8 cursor-pointer py-2
}

.right p{
    @apply text-2xl
}

</style>