<template>
    <div class="w-full h-full bg-[#f6f6f6] flex flex-col lg:flex-row md:flex-row gap-0 overflow-hidden">
        
        <div class="basis-1/2 w-full h-1/2 md:h-full bg-showcase bg-cover bg-center flex flex-col justify-start p-8">
            <!--
            <div class="flex w-fit h-fit gap-4 lg:flex bg-[#f6f6f6] border-solid border-2 border-[#232323] hidden md:flex">
                <img src="../assets/img/escudonn.png" class="w-16 p-1">
                <div class="w-fit p-2">
                    <p class="text-[#232323] w-fit">Asociación deportiva</p>
                    <h1 class="text-3xl lg:text-4xl font-bold text-[#232323]">La&nbsp;Puissance&nbsp;</h1>
                </div>
            </div>
            -->
        </div>
        
        <div class="bg-[#f6f6f6] cursor-pointer basis-1/2 w-full h-1/2 md:h-full flex flex-col xl:grid grid-cols-2 grid-rows-2 gap-0">
            <div class="bg-g4 bg-cover bg-center hover:bg-left duration-300 p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between"
            @click="render('Season')">
                <h1 class="text-5xl font-bold">Temporada</h1>
                <p class="text-xl hidden md:inline"></p>
            </div>

            <div class="bg-g2 bg-cover bg-center hover:bg-left duration-300 p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between"
            @click="render('Shop')">
                <h1 class="text-5xl font-bold">Tienda</h1>
                <p class="text-xl hidden md:inline"></p>
            </div>

            <div class="bg-g1 bg-cover bg-center hover:bg-right duration-300 p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between"
            @click="render('Team')">
                <h1 class="text-5xl font-bold">Plantilla</h1>
                <p class="text-xl hidden md:inline"></p>
            </div>

            <div class="bg-g3 bg-cover bg-center hover:bg-right duration-300 p-8 h-1/4 xl:h-full flex flex-col justify-center md:justify-between"
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