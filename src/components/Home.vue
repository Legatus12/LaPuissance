<template>
    <div v-if="this.loading == true" class="absolute bg-[#232323] z-50 w-full h-full flex flex-col justify-center items-center gap-16">
        <img src="../assets/img/shield.png" class="w-48">
        <hollow-dots-spinner
        :animation-duration="800"
        :dot-size="32"
        :dots-num="3"
        color="#f1121f"
        />
    </div>
    <div class="absolute w-full h-full flex flex-col items-center lg:flex-row bg-g1 bg-cover bg-center p-16 md:p-24 xl:p-32 text-[#f6f6f6] text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black">
        <div class="h-full flex flex-col lg:justify-center">
            <img src="../assets/img/shieldWhite.png" class="w-32 md:w-40 lg:w-48 duration-300 hover:scale-125">
        </div>
        <div class="w-full flex flex-col flex justify-center items-center lg:items-end gap-8 md:gap-12 lg:gap-16">
            <h1 @click="render('Tables')" 
            class="lg:hover:-translate-x-20 hover:text-[#f1121f] duration-300 cursor-pointer drop-shadow-2xl shadow-[#f6f6f6]">Clasificación</h1>
            <h1 @click="render('Matches')" 
            class="lg:hover:-translate-x-20 hover:text-[#f1121f] duration-300 cursor-pointer drop-shadow-2xl shadow-[#f6f6f6]">Partidos</h1>
            <h1 @click="render('Team')" 
            class="lg:hover:-translate-x-20 hover:text-[#f1121f] duration-300 cursor-pointer drop-shadow-2xl shadow-[#f6f6f6]">Plantilla</h1>
            <h1 @click="render('News')" 
            class="lg:hover:-translate-x-20 hover:text-[#f1121f] duration-300 cursor-pointer drop-shadow-2xl shadow-[#f6f6f6]">Noticias</h1>
            <h1 @click="render('Club')" 
            class="lg:hover:-translate-x-20 hover:text-[#f1121f] duration-300 cursor-pointer drop-shadow-2xl shadow-[#f6f6f6]">Club</h1>
        </div>
    </div>
</template>

<script>

import { HollowDotsSpinner } from 'epic-spinners'

export default {
    name: "Home",
    emits: ["rendering"],
    components: {HollowDotsSpinner},
    created(){
        this.countdown();
    },
    data(){
        return{
            loading: true
        }
    },
    methods:{
        render(c){
            this.$emit("rendering", c);
        },
        countdown(){
            setTimeout(() => {
                this.loading = false;
            }, 3200);
        }
    }
}

</script>

<style scoped></style>