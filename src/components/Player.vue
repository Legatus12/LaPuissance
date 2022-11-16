<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 bg-[#232323] flex justify-start items-center">
            <button @click="goTeam" class="w-16 md:w-32 h-full bg-[#f1121f] text-5xl text-[#f6f6f6]">
                <div class="duration-300 md:hover:-translate-x-4">&lt;</div>
            </button>
        </div>

        <div class="w-full h-full flex flex-col md:flex-row px-4 py-16 md:p-32 space-around">
            <!--Info-->
            <div class="basis-1/2">
                <div>
                    <div class="flex justify-between items-center w-full">
                        <div class="basis-1/4 h-32 flex flex-col p-4">
                            <div class="text-7xl text-right">{{ this.player.n }}</div>
                            <p class="text-[#888888] text-right font-italic">{{ this.player.position }}</p>
                        </div>
                        
                        <div class="w-2 h-32 bg-[#232323]">&nbsp;</div>

                        <div class="basis-3/4 flex flex-col justify-center items-start px-4">
                            <p class="text-[#888888] text-xl">{{ this.player.name }}</p>
                            <h1 class="text-3xl font-black">{{ this.player.nickname }}<b></b></h1>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <!--Stats-->
            <div class="basis-1/2">
                <div class="flex justify-between">
                    <h1 class="underline decoration-[#f1121f] text-3xl">Estadísticas</h1>
                    <select name="" id=""></select>
                </div>
                <br><br>
                <div class="w-full grid grid-cols-2 gap-12 text-center">

                        <div class="flex flex-col items-center">
                            <div class="text-5xl">{{ this.player.season.jdm43.g }}</div><div class="text-xl">GOLES</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div  class="text-5xl">{{ this.player.season.jdm43.a }}</div><div class="text-xl">ASISTENCIAS</div>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="text-5xl">{{ this.player.season.jdm43.gp }}</div><div class="text-xl">PARTIDOS JUGADOS</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="text-5xl">{{ this.player.season.jdm43.mvp }}</div><div class="text-xl">JUGADOR DEL PARTIDO</div>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="text-5xl">{{ this.player.season.jdm43.yc }}</div><div class="text-xl">TARJETAS AMARILLAS</div>
                        </div>
                        <div class="flex flex-col items-center">
                            <div class="text-5xl">{{ this.player.season.jdm43.rc }}</div><div class="text-xl">TARJETAS ROJAS</div>
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