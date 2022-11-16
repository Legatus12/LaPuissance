<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 bg-[#232323] flex justify-start items-center">
            <button @click="goTeam" class="w-16 md:w-32 h-full bg-[#f1121f] text-5xl text-[#f6f6f6]">
                <div class="duration-300 md:hover:-translate-x-4">&lt;</div>
            </button>
        </div>

        <div class="w-full h-full flex flex-col px-4 py-12 md:p-32 justify-between">
            <!--Info-->
            <div>
                <div>
                    <div class="flex justify-between items-center w-full">
                        <div class="basis-1/4 flex flex-col p-4">
                            <div class="text-7xl text-right">{{ this.player.n }}</div>
                            <i><p class="text-[#888888]">{{ this.player.position }}</p></i>
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
            <div class="w-full">
                <div class="flex justify-between">
                    <h1 class="underline decoration-[#f1121f] text-2xl">Estadísticas</h1>
                    <select name="" id=""></select>
                </div>
                <div class="w-full">
                    <table>
                        <tr><td>GOLES: </td><td>{{ this.player.season.jdm43.g }}</td></tr>
                        <tr><td>ASISTENCIAS: </td><td>{{ this.player.season.jdm43.a }}</td></tr>
                    </table>
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