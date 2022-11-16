<template>
    <div class="w-full h-full flex flex-col overflow-hidden">

        <div class="w-full h-16 bg-[#232323] flex justify-between items-center border-solid border-b-4 border-[#f6f6f6]">
            <button @click="goTeam" class="w-16 md:w-32 h-full text-5xl text-[#f6f6f6] border-solid border-r-4 border-[#f6f6f6]">
                <div class="duration-300 md:hover:-translate-x-3">&lt;</div>
            </button>
            <h1 class="text-3xl md:text-4xl font-bold px-8">PLANTILLA</h1>
        </div>

        <div class="h-full flex flex-col items-center pt-12 md:pt-24 gap-6 md:gap-16 p-8">

            <div class="w-full h-18 md:h-32 overflow-hidden flex justify-center overflow-visible">
                <div class="text-7xl md:text-9xl text-[#f1121f] font-bold">{{ this.player.n }}</div>
                <div class="flex flex-col justify-end px-8 md:px-16">
                    <div class="text-lg md:text-2xl text-[#888888]">{{ this.player.name }}</div>
                    <div class="text-3xl md:text-8xl font-black">{{ this.player.nickname }}</div>
                </div>
            </div>

            <div class="flex flex-col text-xl md:text-2xl">
                <div class="text-[#888888]">| JUGANDO COMO</div>
                <div>{{ this.player.position }}</div>
                <br>
                <div class="text-[#888888]">| CON NOSOTROS DESDE</div>
                <div>{{ this.player.est }}</div>
            </div>

            <div>
                <div class="flex text-xl md:text-2xl">
                    Estadísticas &nbsp;
                    <select class="bg-[#232323]">
                        <option>JDM 43</option>
                    </select>
                </div>
                <br>
                <div class="flex flex-col md:flex-row md:justify-center gap-8 text-center">
                    <div class="bg-[#373737] w-full h-32 grid grid-cols-2 gap-8 md:gap-16 px-4 md:px-8">
                        <div class="flex flex-col items-center justify-center">
                            <div class="font-bold text-6xl">{{ this.player.season.jdm43.g }}</div><div class="text-[#888888]">GOLES</div>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <div class="font-bold text-6xl">{{ this.player.season.jdm43.a }}</div><div class="text-[#888888]">ASISTENCIAS</div>
                        </div>
                    </div>
                    <div class="bg-[#373737] w-full h-32 grid grid-cols-2 gap-8 md:gap-16 px-4 md:px-8">
                        <div class="flex flex-col items-center justify-center">
                            <div class="font-bold text-6xl">{{ this.player.season.jdm43.gp }}</div><div class="text-[#888888]">PARTIDOS<br>JUGADOS</div>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <div class="font-bold text-6xl">{{ this.player.season.jdm43.mvp }}</div><div class="text-[#888888]">JUGADOR&nbsp;DEL<br>PARTIDO</div>
                        </div>
                    </div>
                    <div class="bg-[#373737] w-full h-32 grid grid-cols-2 gap-8 md:gap-16 px-4 md:px-8">
                        <div class="flex flex-col items-center justify-center">
                            <div class="font-bold text-6xl">{{ this.player.season.jdm43.yc }}</div><div class="text-[#888888]">TARJETAS<br>AMARILLAS</div>
                        </div>
                        <div class="flex flex-col items-center justify-center">
                            <div class="font-bold text-6xl">{{ this.player.season.jdm43.rc }}</div><div class="text-[#888888]">TARJETAS<br>ROJAS</div>
                        </div>
                    </div>
                </div>  
            </div>
            

        </div>

    </div>
</template>

<script lang="ts">

    export default {
        name: "Player",
        props:{
            player: Object
        },
        methods:{
            goTeam(){
                this.$emit("rendering", "Team");
            },
            show(){
                console.log(this.player)
            }
        }
    }
</script>

<style></style>