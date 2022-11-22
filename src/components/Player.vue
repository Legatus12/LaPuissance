<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 flex justify-between items-center border-solid border-b-2 border-[#232323]">
            <Back @pressed="backTeam"/>
            <h1 class="text-4xl md:text-5xl font-black px-8">Plantilla</h1>
        </div>

        <div class="w-full h-full flex flex-col md:flex-row justify-center items-center bg-[#f6f6f6] gap-0.5">
            <div class="h-full w-full md:basis-1/2 h-full bg-[#232323] flex flex-col text-[#f6f6f6]">
                <div class="flex">
                    <h1 class="">{{ this.player.n }}</h1>
                    <div class="flex flex-col">
                        <p class="">{{ this.player.name }}</p>
                        <h1 class="">{{ this.player.nickname }}</h1>
                    </div>
                </div>
            </div>
            <div class="h-full w-full md:basis-1/2 h-full bg-[#f1121f] flex flex-col">

            </div>
            <div class="hidden   md:absolute h-4/6 w-96 bg-g1 bg-cover bg-center border-solid border-2 border-[#f6f6f6]"></div>
        </div>

    </div>
</template>

<script lang="ts">

import Back from './Back.vue';

export default {
    emits: ["rendering"],
    components: {Back},
    props:{
        player: Object
    },
    methods:{
        backTeam(){
            this.$emit("rendering", "Team");
        },
        show(){
            console.log(this.player)
        }
    }
}

</script>

<style></style>