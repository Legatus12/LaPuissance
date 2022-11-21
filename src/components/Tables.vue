<template>
    <div class="w-full h-full flex flex-col">
        
        <div class="w-full h-16 flex justify-between items-center">
            <Back @pressed="backHome"/>
            <h1 class="text-3xl md:text-4xl font-black px-8">CLASIFICACIÓN</h1>
        </div>

        <div class="w-full h-full flex flex-col items-center md:justify-center bg-[#232323] text-[#232323] text-center md:text-xl p-8 overflow-y-scroll overflow-x-hidden">
            <!--
            <div class="w-full flex p-2 bg-[#232323] text-[#f6f6f6] border-solid border-2 border-[#f6f6f6]">
                CLASIFICACIÓN&nbsp;-
                <select class="duration-300 cursor-pointer bg-[#232323]">
                    <option>JDM 43</option>
                </select>
            </div>-->
            <table class="w-full md:w-fit">
                <tr class="text-[#f6f6f6] border-solid border-2 border-[#f6f6f6]">
                    <th class="font-black text-xs md:p-4">POS.</th>
                    <th class="font-black text-left p-2 md:p-4 md:w-96">EQUIPO</th>
                    <th class="font-black p-1 md:p-4">PTS</th>
                    <th class="font-black p-1 md:p-4">PJ</th>
                    <th class="font-black p-1 md:p-4">DG</th>
                </tr>
                <tr v-for="(team, index) in teams"
                class="border-solid border-b-2 border-[#232323] bg-[#f6f6f6] hover:bg-[#d6d6d6]">
                    <td v-if="team.Nombre_equipo == 'La Puissance'" 
                    class="bg-[#f1121f] text-[#f6f6f6] font-bold p-2">{{ index + 1 }}º</td>
                    <td v-else 
                    class="">{{ index + 1 }}º</td>
                    <td v-if="team.Nombre_equipo == 'La Puissance'" 
                    class="bg-[#f1121f] text-[#f6f6f6] font-black text-left p-2 md:p-4">{{ team.Nombre_equipo }}</td>
                    <td v-else 
                    class="text-left p-2 md:p-4">{{ team.Nombre_equipo }}</td>
                    <td v-if="team.Nombre_equipo == 'La Puissance'" 
                    class="bg-[#f1121f] text-[#f6f6f6] font-black">{{ Number(team.Puntos) }}</td>
                    <td v-else
                    class="font-bold">{{ Number(team.Puntos) }}</td>
                    <td v-if="team.Nombre_equipo == 'La Puissance'"  
                    class="bg-[#f1121f] text-[#f6f6f6]">{{ team.Partidos_jugados }}</td>
                    <td v-else 
                    class="">{{ team.Partidos_jugados }}</td>
                    <td v-if="team.Nombre_equipo == 'La Puissance'"  
                    class="bg-[#f1121f] text-[#f6f6f6]">{{ team.Goles_favor - team.Goles_contra }}</td>
                    <td v-else 
                    class="">{{ team.Goles_favor - team.Goles_contra }}</td>
                </tr>
            </table>
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
        const response = await fetch('assets/tables.csv'); /* dev -> src/local/tables.csv */ /* prod -> assets/tables.csv */
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
            i: matches.length - 1,
            teams: sortedTeams,
            played: matches,
            next: nextMatch
        }
    },
    methods:{
        backHome(){
            this.$emit("rendering", "Home");
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