<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 flex justify-between items-center border-solid border-b-2 border-[#232323]">
            <Back @pressed="backHome"/>
            <h1 class="text-4xl md:text-5xl font-black px-8">Plantilla</h1>
        </div>

        <div class="w-full h-full bg-[#232323] flex flex-col gap-6 p-12 overflow-y-scroll">

            <div v-for="(group, index) in squad"
            class="w-full h-full flex flex-col gap-4">

                <h1 class="w-full text-2xl md:text-3xl font-black text-[#f6f6f6] border-solid border-b-2 border-[#888888]">{{ position[index] }}</h1>
                <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-4 pb-12">
                    <div v-for="player in group" @click="renderPlayer(player)"
                    class="w-full md:w-80 h-16 bg-[#f6f6f6] flex shrink-0 cursor-pointer hover:drop-shadow-2xl duration-300 hover:-translate-y-2">
                        <div class="text-5xl basis-1/4 text-[#f1121f] text-right font-black p-2">{{ player.n }}</div>
                        <div class="basis-3/4 flex flex-col justify-end items-start text-[#232323] p-2">
                            <p>{{ player.name }}</p>
                            <h1 class="text-xl font-bold"><b>{{ player.nickname }}</b></h1>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import Back from './Back.vue';

import array from '../local/players.json';

let players = Object.values(array);

export default {
    emits: ["rendering", "renderingPlayer"],
    components: {Back},
    data(){
        return{
            squad: [players.filter(x => x.pos == "gk"),
                    players.filter(x => x.pos == "d"),
                    players.filter(x => x.pos == "m"),
                    players.filter(x => x.pos == "s"),],
            position: ["Porteros", "Defensas", "Mediocentros", "Delanteros"]
        }
    },
    methods:{
        backHome(){
                this.$emit("rendering", "Home");
        },
        renderPlayer(obj){
            this.$emit("renderingPlayer", obj);
        }
    }
}

</script>

<style></style>