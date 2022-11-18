<template>
    <div class="w-full h-full flex flex-col items-center">

        <Back @pressed="renderFather"/>

        <div class="w-full h-full flex flex-col lg:flex-row items-center text-center p-8 md:p-16 gap-16 md:gap-32 overflow-y-scroll overflow-x-hidden">
            <div class="w-full h-full flex flex-col gap-4">
                <div class="w-fit text-lg md:text-xl md:text-2xl">
                    COMPETICIÓN&nbsp;-
                    <select class="bg-[#232323] duration-300 hover:bg-[#888888] cursor-pointer">
                        <option>JDM 43</option>
                    </select>
                </div>
                <table class="w-full md:text-center">
                    <tr class="bg-[#f6f6f6] md:text-xl text-[#232323]">
                        <th class="p-1 md:p-2 text-center text-xs md:text-base p-2">pos.</th>
                        <th class="p-1 md:p-2 text-left">Equipo</th>
                        <th class="p-1 md:p-2">Pts</th>
                        <th class="p-1 md:p-2">PJ</th>
                        <th class="p-1 md:p-2">DG</th>
                    </tr>
                    <tr v-for="(team, index) in teams"
                    class="md:text-xl hover:bg-[#373737] border-solid border-b-2 border-[#888888]">
                        <td v-if="team.Nombre_equipo == 'La Puissance'" 
                        class="p-1 md:p-2 w-8 bg-[#f1121f] font-bold">{{ index + 1 }}º</td>
                        <td v-else 
                        class="p-1 md:p-2 w-8">{{ index + 1 }}º</td>
                        <td v-if="team.Nombre_equipo == 'La Puissance'" 
                        class="p-1 md:p-2 w-20 md:w-80 text-left font-black bg-[#f1121f]">{{ team.Nombre_equipo }}</td>
                        <td v-else 
                        class="p-1 md:p-2 w-20 md:w-80 text-left">{{ team.Nombre_equipo }}</td>
                        <td v-if="team.Nombre_equipo == 'La Puissance'" 
                        class="p-1 md:p-2 text-sm md:text-xl font-bold bg-[#f1121f]">{{ Number(team.Puntos) }}</td>
                        <td v-else
                        class="p-1 md:p-2 text-sm md:text-xl font-bold">{{ Number(team.Puntos) }}</td>
                        <td v-if="team.Nombre_equipo == 'La Puissance'"  
                        class="p-1 md:p-2 text-sm md:text-xl bg-[#f1121f]">{{ team.Partidos_jugados }}</td>
                        <td v-else 
                        class="p-1 md:p-2 text-sm md:text-xl">{{ team.Partidos_jugados }}</td>
                        <td v-if="team.Nombre_equipo == 'La Puissance'"  
                        class="p-1 md:p-2 text-sm md:text-xl bg-[#f1121f]">{{ team.Goles_favor - team.Goles_contra }}</td>
                        <td v-else 
                        class="p-1 md:p-2 text-sm md:text-xl">{{ team.Goles_favor - team.Goles_contra }}</td>
                    </tr>
                </table>
            </div>

            <div class="w-full flex flex-col gap-8">
                <!--next match-->
                <h1 class="text-lg md:text-xl">PRÓXIMO PARTIDO</h1>
                <div class="md:basis-1/2 h-80 flex flex-col justify-around items-center p-4 bg-[#f6f6f6] text-[#232323]">
                    <div class="underline text-lg">JDM #{{ this.next.Jornada }}</div>
                    <div class="md:w-full md:h-24 flex flex-col md:flex-row md:justify-center md:items-center text-2xl md:text-3xl gap-2 md:gap-4">
                        <div v-if="this.next.Equipo_local == 'La Puissance'"
                        class="font-black">{{ this.next.Equipo_local }}</div>
                        <div v-else
                        class="">{{ this.next.Equipo_local }}</div>
                        <div class="text-base md:text-lg text-[#f1121f]">vs</div>
                        <div v-if="this.next.Equipo_visitante == 'La Puissance'"
                        class="font-black">{{ this.next.Equipo_visitante }}</div>
                        <div v-else
                        class="">{{ this.next.Equipo_visitante }}</div>
                    </div>
                    <div class="flex flex-col">
                        <div class="border-solid border-b-2 border-[#232323]">{{ this.next.Fecha.split("-")[2] }} / {{ this.next.Fecha.split("-")[1] }} / {{ this.next.Fecha.split("-")[0].substr(2,2) }} - {{ this.next.Hora }}</div>
                        <div>{{ this.next.Campo.split(" ")[3] }} - campo {{ this.next.Campo.split(" ")[2].split("-")[1] }}</div>
                    </div>
                    
                </div>

                <br>

                <!--previous matches-->
                <h1 class="text-lg md:text-xl">PARTIDOS ANTERIORES</h1>
                <div class="md:basis-1/2 h-80 flex flex-col justify-between items-center p-4 gap-4 border-solid border-4 border-[#f6f6f6]">
                    <div class="w-full flex justify-between text-lg">
                        <div class="underline">JDM #{{ this.played[this.i].Jornada }}</div>
                        <div class="text-[#888888]">
                            {{ this.played[this.i].Fecha.split("-")[2] }} / {{ this.played[this.i].Fecha.split("-")[1] }} / {{ this.played[this.i].Fecha.split("-")[0].substr(2,2) }}
                        </div>
                    </div>
                    
                    <div class="w-full md:w-96 h-24 flex flex-col justify-center text-xl md:text-2xl text-left">
                        <div class="flex justify-between gap-4">
                            <div v-if="this.played[this.i].Equipo_local == 'La Puissance'"
                            class="font-black">{{ this.played[this.i].Equipo_local }}&nbsp;</div>
                            <div v-else
                            class="">{{ this.played[this.i].Equipo_local }}</div>
                            <div>{{ this.played[this.i].Resultado1 }}&nbsp;</div>
                        </div>
                        <div class="flex justify-between gap-4">
                            <div v-if="this.played[this.i].Equipo_visitante == 'La Puissance'"
                            class="font-black">{{ this.played[this.i].Equipo_visitante }}&nbsp;</div>
                            <div v-else
                            class="">{{ this.played[this.i].Equipo_visitante }}</div>
                            <div>{{ this.played[this.i].Resultado2 }}&nbsp;</div>
                        </div>
                    </div>
                    
                    <div class="w-full flex text-2xl font-bold gap-4">
                        <button v-if="this.i == 0"
                        class="w-1/2 bg-[#232323] border-solid border-2 border-[#888888] rounded-lg cursor-default" @click="previousMatch">&lt;</button>
                        <button v-else
                        class="w-1/2 bg-[#f6f6f6] text-[#232323] rounded-lg p-1" @click="previousMatch">&lt;</button>
                        <button v-if="this.i == this.played.length - 1"
                        class="w-1/2 bg-[#232323] border-solid border-2 border-[#888888] rounded-lg cursor-default" @click="nextMatch">&gt;</button>
                        <button v-else
                        class="w-1/2 bg-[#f6f6f6] text-[#232323] rounded-lg p-1" @click="nextMatch">&gt;</button>
                    </div>
                    
                </div>

                <br>
            </div>
        </div>

        

    </div>
</template>

<script lang="ts">

import Back from './Back.vue';

import Papa from 'papaparse';
import sortTeams from '../store/sortTeams.mjs';
import sortMatches from '../store/sortMatches.mjs';

let sortedTeams;
let matches;
let nextMatch;

const date = new Date();

const getData = async () => {
    try {
        const response = await fetch('assets/teams.csv'); /* dev -> src/local/teams.csv */ /* prod -> assets/teams.csv */
        const data = await response.text();
        Papa.parse(data, {
            header: true,
            complete: function(result) {
                sortedTeams = result.data.filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h").sort(sortTeams);
            }
        });
    } catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch('assets/matches.csv'); /* dev -> src/local/matches.csv */ /* prod -> assets/matches.csv */
        const data = await response.text();
        Papa.parse(data, {
            header: true,
            complete: function(result) {
                matches = result.data
                                    .filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x.Equipo_local == "La Puissance" || x.Equipo_visitante == "La Puissance") && new Date(x.Fecha) <= date)
                                    .sort(sortMatches);

                nextMatch = result.data
                                    .filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x.Equipo_local == "La Puissance" || x.Equipo_visitante == "La Puissance"))
                                    .sort(sortMatches)[matches.length];
                
                console.log(nextMatch);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

getData();

export default {
    emits: ["rendering"],
    components: {Back},
    data(){
        return{
            father: "Home",
            i: matches.length - 1,
            teams: sortedTeams,
            played: matches,
            next: nextMatch
        }
    },
    methods:{
        renderFather(){
            this.$emit("rendering", this.father);
        },
        previousMatch(){
            this.i > 0 ? this.i -- : this.i;
        },
        nextMatch(){
            this.i < this.played.length - 1 ? this.i ++ : this.i;
        }
    }
}

</script>

<style></style>