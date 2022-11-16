<template>
    <div class="w-full h-full bg-[#f6f6f6] flex flex-col lg:flex-row md:flex-row gap-1 overflow-hidden">
        
        
        <div class="basis-1/2 w-full h-1/2 md:h-full bg-[#232323] bg-cover bg-center flex p-8">
            <div class="bg-[#232323] flex h-fit p-4 gap-4">
                <img src="../assets/img/escudo.png" class="w-16 h-20">
                <div class="w-fit p-2">
                    <h1 class="text-3xl font-bold text-[#f1121f]">La&nbsp;Puissance&nbsp;</h1>
                    <p class="text-[#f6f6f6]">Asociación deportiva.</p>
                </div>
            </div>
        </div>
        
        <div class="bg-[#f6f6f6] cursor-pointer basis-1/2 w-full h-1/2 md:h-full flex flex-col xl:grid grid-cols-2 grid-rows-2 gap-1">
            <div class="bg-[#232323] bg-cover bg-center p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between"
            @click="render('Season')">
                <h1 class="text-5xl font-bold">Temporada</h1>
                <p class="text-xl hidden md:inline"></p>
            </div>

            <div class="bg-[#232323] bg-cover bg-center p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between"
            @click="render('Shop')">
                <h1 class="text-5xl font-bold">Tienda</h1>
                <p class="text-xl hidden md:inline"></p>
            </div>

            <div class="bg-[#232323] bg-cover bg-center p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between"
            @click="render('Team')">
                <h1 class="text-5xl font-bold">Plantilla</h1>
                <p class="text-xl hidden md:inline"></p>
            </div>

            <div class="bg-[#232323] bg-cover bg-center p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between"
            @click="render('News')">
                <h1 class="text-5xl font-bold">Noticias</h1>
                <p class="text-xl hidden md:inline"></p>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: "Home",
    emits: ["rendering"],
    methods:{
        render(c){
            this.$emit("rendering", c);
        }
    }
}

</script>

<style scoped></style>