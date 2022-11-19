<template>
    <div class="w-full h-full flex flex-col">

        <Back @pressed="renderFather"/>

        <div class="w-full h-full flex flex-col items-center p-8 md:pt-24 gap-4 md:gap-16 overflow-y-scroll overflow-x-hidden">

            <div class="w-full h-18 md:h-32 flex md:justify-center overflow-visible pb-4 border-solid border-b-4 md:border-0 border-[#f6f6f6]">
                <div class="text-7xl md:text-9xl text-[#f1121f] font-bold">{{ this.player.n }}</div>
                <div class="flex flex-col justify-end px-4 md:px-16">
                    <div class="text-md md:text-2xl text-[#888888]">{{ this.player.name }}</div>
                    <div class="text-4xl md:text-8xl font-black">{{ this.player.nickname }}</div>
                </div>
            </div>

            <div class="w-full md:text-2xl flex flex-col md:items-center justify-start pb-4 border-solid border-b-4 md:border-0 border-[#f6f6f6]">
                <div class="flex">
                    <div class="text-[#888888]">POSICIÓN |&nbsp;</div>
                    <div>{{ this.player.position }}</div>
                </div>
                <div class="flex">
                    <div class="text-[#888888]">CON NOSOTROS DESDE&nbsp;</div>
                    <div>{{ this.player.est }}</div>
                </div>
                
            </div>

            <div class="w-full">
                <div class="w-fit text-xl md:text-2xl">
                    COMPETICIÓN&nbsp;-
                    <select class="bg-[#232323] cursor-pointer">
                        <option>JDM 43</option>
                    </select>
                </div>
                <br>
                <div class="flex flex-col md:flex-row md:justify-center gap-8 text-center">
                    <div class="bg-[#373737] w-full h-24 flex">
                        <div class="basis-1/2 flex flex-col items-center justify-center">
                            <div class="font-bold text-5xl">{{ this.player.season.jdm43.g }}</div><div class="text-sm text-[#888888]">GOLES</div>
                        </div>
                        <div class="basis-1/2 flex flex-col items-center justify-center">
                            <div class="font-bold text-5xl">{{ this.player.season.jdm43.a }}</div><div class="text-sm text-[#888888]">ASISTENCIAS</div>
                        </div>
                    </div>
                    <div class="bg-[#373737] w-full h-24 flex">
                        <div class="basis-1/2 flex flex-col items-center justify-center">
                            <div class="font-bold text-5xl">{{ this.player.season.jdm43.gp }}</div><div class="text-xs text-[#888888]">PARTIDOS<br>JUGADOS</div>
                        </div>
                        <div class="basis-1/2 flex flex-col items-center justify-center">
                            <div class="font-bold text-5xl">{{ this.player.season.jdm43.mvp }}</div><div class="text-xs text-[#888888]">JUGADOR<br>DEL&nbsp;PARTIDO</div>
                        </div>
                    </div>
                    <div class="bg-[#373737] w-full h-24 flex">
                        <div class="basis-1/2 flex flex-col items-center justify-center">
                            <div class="font-bold text-5xl">{{ this.player.season.jdm43.yc }}</div><div class="text-xs text-[#888888]">TARJETAS<br>AMARILLAS</div>
                        </div>
                        <div class="basis-1/2 flex flex-col items-center justify-center">
                            <div class="font-bold text-5xl">{{ this.player.season.jdm43.rc }}</div><div class="text-xs text-[#888888]">TARJETAS<br>ROJAS</div>
                        </div>
                    </div>
                </div>  
            </div>
            

        </div>

    </div>
</template>

<script lang="ts">

import Back from './Back.vue';

export default {
    emits: ["rendering"],
    components: {Back},
    data(){
        return{
            father: "Team"
        }
    },
    props:{
        player: Object
    },
    methods:{
        renderFather(){
            this.$emit("rendering", this.father);
        },
        show(){
            console.log(this.player)
        }
    }
}

</script>

<style></style>