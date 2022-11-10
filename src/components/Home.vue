<template>
    <div class="w-full h-full flex flex-col lg:flex-row md:flex-row">
        
        <div class="basis-1/2 w-full h-1/2 md:h-full bg-showcase bg-cover bg-center flex flex-col p-8">
            <h1 class="text-4xl md:text-5xl font-bold text-[#f1121f] bg-[#232323] w-fit p-2">&nbsp;La&nbsp;Puissance&nbsp;</h1>
            <p class="text-[#f6f6f6] bg-[#232323] w-fit p-1">&nbsp;Asociación deportiva.&nbsp;</p>
        </div>

        <div class="basis-1/2 w-full h-1/2 md:h-full flex flex-col xl:grid grid-cols-2 grid-rows-2">
            <div class="cursor-pointer bg-[#f6f6f6] text-[#232323] p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between" @click="render('Team')">
                <h1 class="text-5xl font-bold">Equipo</h1>
                <p class="text-xl hidden md:inline">Plantilla y estadísticas individuales.</p>
            </div>

            <div class="cursor-pointer bg-[#f1121f] text-[#f6f6f6] p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between" @click="test">
                <h1 class="text-5xl font-bold">Tienda</h1>
                <p class="text-xl hidden md:inline">Échale un ojo a nuestras equipaciones.</p>
            </div>

            <div class="cursor-pointer bg-[#232323] text-[#f6f6f6] p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between" @click="render('Season')">
                <h1 class="text-5xl font-bold">Temporada</h1>
                <p class="text-xl hidden md:inline">Partidos y clasificación.</p>
            </div>

            <div class="cursor-pointer bg-[#888888] text-[#f6f6f6] p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between" @click="">
                <h1 class="text-5xl font-bold">Noticias</h1>
                <p class="text-xl hidden md:inline">Novedades y avisos.</p>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "Home",
    emits: ["listenRender"],
    methods:{
        render(c){
            this.$emit("listenRender", c);
        }
    }
}

</script>

<style scoped></style>