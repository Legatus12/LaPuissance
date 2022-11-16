<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 bg-[#232323] flex justify-between items-center">
            <button @click="goHome" class="w-16 md:w-32 h-full bg-[#f1121f] text-5xl text-[#f6f6f6]">
                <div class="duration-300 md:hover:-translate-x-4">&lt;</div>
            </button>
            <h1 class="text-[#f6f6f6] text-3xl md:text-4xl px-8">Equipo</h1>
        </div>

        <div class="w-full h-full bg-[#f6f6f6] flex flex-col p-16 md:p-24 gap-8 overflow-y-scroll">

            <div v-for="(group, index) in squad"
            class="w-full h-full bg-[#f6f6f6] text-[#f6f6f6] flex flex-col">

                <h1 class="w-full text-2xl md:text-3xl py-4 text-[#232323]">{{ position[index] }}</h1>
                <div class="w-full flex flex-col md:flex-row md:flex-wrap gap-4">
                    <div v-for="player in group" @click="renderPlayer(player)"
                    class="w-full md:w-80 h-16 bg-[#f1121f] flex shrink-0 cursor-pointer hover:drop-shadow-2xl duration-300 hover:-translate-y-2">
                        <div class="text-5xl basis-1/4 text-right p-2">{{ player.n }}</div>
                        <div class="basis-3/4 flex flex-col justify-end items-start p-2">
                            <p>{{ player.name}}</p>
                            <h1 class="text-xl"><b>{{ player.nickname }}</b></h1>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
</template>

<script lang="ts">

import array from '../local/players.json';

let players = Object.values(array);

export default {
    emits: ["rendering", "renderingPlayer"],
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
        goHome(){
            this.$emit("rendering", "Home");
        },
        renderPlayer(obj){
            this.$emit("renderingPlayer", obj);
        }
    }
}

</script>

<style></style>