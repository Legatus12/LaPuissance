<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 flex justify-between items-center border-solid border-b-2 border-[#232323]">
            <Back @pressed="backTeam"/>
            <h1 class="text-4xl md:text-5xl font-black px-8">Plantilla</h1>
        </div>

        <div class="w-full h-full flex flex-col lg:flex-row overflow-y-scroll overflow-x-hidden md:overflow-hidden bg-[#f6f6f6] lg:gap-0.5">

            <div class="w-full md:w-1/3 hidden md:flex bg-[#888888]">

            </div>

            <div class="w-full lg:w-2/3 h-full bg-[#f6f6f6] flex flex-col bg-[#f6f6f6] gap-0.5">

                <div class="h-fit md:h-1/4 flex bg-[#232323] flex items-end p-3 md:p-12">
                    <div class="flex h-full">
                        <div class="text-6xl md:text-9xl text-[#f1121f] font-black px-4 md:px-8 lg:pr-12 flex items-end">
                            {{ this.player.n }}
                        </div>
                        <div class="h-full flex flex-col justify-end text-[#f6f6f6]">
                            <p class="md:text-lg lg:text-xl">{{ this.player.name }}</p>
                            <h1 class="text-4xl md:text-7xl lg:text-8xl font-black">{{ this.player.nickname }}</h1>
                        </div>
                    </div>
                </div>

                <div class="h-full md:h-3/4 flex flex-col-reverse md:flex-row text-[#f6f6f6] bg-[#f6f6f6] gap-0.5">
                    <div class="w-full lg:w-1/2 h-full flex flex-col bg-[#232323] items-center">
                        <div class="w-full border-solid border-b-2 border-[#f6f6f6] flex p-4">
                            <h1 class="text-2xl">Estadísticas - </h1>
                            <select class="bg-[#232323] text-xl">
                                <option value="">JDM 43</option>
                            </select>
                        </div>
                        <div class="w-full flex flex-col gap-8 md:gap-16 p-8 md:p-12 lg:p-16 md:h-full justify-center">
                            <div class="w-full flex">
                                <div class="w-1/2">
                                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ this.player.season.jdm43.g }}</h1>
                                    <p class="text-[#aeaeae] md:text-lg lg:text-xl">GOLES</p>
                                </div>
                                <div class="w-1/2">
                                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ this.player.season.jdm43.a }}</h1>
                                    <p class="text-[#aeaeae] md:text-lg lg:text-xl">ASISTENCIAS</p>
                                </div>
                            </div>
                            <div class="w-full flex">
                                <div class="w-1/2">
                                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ this.player.season.jdm43.gp }}</h1>
                                    <p class="text-[#aeaeae] md:text-lg lg:text-xl">PARTIDOS<br>JUGADOS</p>
                                </div>
                                <div class="w-1/2">
                                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ this.player.season.jdm43.mvp }}</h1>
                                    <p class="text-[#aeaeae] md:text-lg lg:text-xl">JUGADOR<br>DEL PARTIDO</p>
                                </div>
                            </div>
                            <div class="w-full flex">
                                <div class="w-1/2">
                                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ this.player.season.jdm43.yc }}</h1>
                                    <p class="text-[#aeaeae] md:text-lg lg:text-xl">TARJETAS<br>AMARILLAS</p>
                                </div>
                                <div class="w-1/2">
                                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold">{{ this.player.season.jdm43.rc }}</h1>
                                    <p class="text-[#aeaeae] md:text-lg lg:text-xl">TARJETAS<br>ROJAS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 p-8 bg-[#232323]">
                        <p class="text-[#aeaeae] md:text-xl lg:text-2xl">Posición</p>
                        <h1 class="font-bold text-xl md:text-2xl lg:text-3xl">{{ this.player.position }}</h1>
                        <br>
                        <p class="text-[#aeaeae] md:text-xl lg:text-2xl">Con nosotros desde</p>
                        <h1 class="font-bold text-xl md:text-2xl lg:text-3xl">{{ this.player.est }}</h1>
                        <br>
                        <p class="text-[#aeaeae] md:text-xl lg:text-2xl">Palmarés</p>
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