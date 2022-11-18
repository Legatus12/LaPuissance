<template>
    <div class="w-full h-full flex flex-col items-center">

        <Back @pressed="renderFather"/>

        <div class="w-full h-full flex flex-col lg:flex-row items-center text-center p-8 md:p-16 gap-8 md:gap-16 overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden">
            <div class="w-full h-full flex flex-col gap-4">
                <div class="w-fit text-xl md:text-2xl">
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
                    class="md:text-xl hover:bg-[#373737] border-solid border-b-2 md:border-b-4 border-[#888888]">
                        <td v-if="team[19] == 'La Puissance'" class="p-1 md:p-2 w-8 bg-[#f1121f] font-black">{{ index + 1 }}º</td>
                        <td v-else class="p-1 md:p-2 w-8">{{ index + 1 }}º</td>
                        <td v-if="team[19] == 'La Puissance'" class="p-1 md:p-2 w-20 md:w-80 text-left  font-black">{{ team[19] }}</td>
                        <td v-else class="p-1 md:p-2 w-20 md:w-80 text-left">{{ team[19] }}</td>
                        <td class="p-1 md:p-2 text-sm md:text-xl font-bold">{{ Number(team[6]) }}</td>
                        <td class="p-1 md:p-2 text-sm md:text-xl">{{ team[7] }}</td>
                        <td class="p-1 md:p-2 text-sm md:text-xl">{{ team[11] -team[12] }}</td>
                    </tr>
                </table>
            </div>
            <div class="w-full h-full flex flex-col justify-around bg-[#f6f6f6]">
                
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
        const response = await fetch('assets/teams.csv'); /*dev -> src/local/teams.csv*/ /*prod -> assets/teams.csv*/
        const data = await response.text();
        Papa.parse(data, {
            header: true,
            complete: function(result) {
                sortedTeams = result.data.map(x => Object.values(x)).filter(x => x[16] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h").sort(sortTeams);
                console.log(sortedTeams);
            }
        });
    } catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch('assets/matches.csv'); /*dev -> src/local/matches.csv*/ /*prod -> assets/matches.csv*/
        const data = await response.text();
        Papa.parse(data, {
            header: true,
            complete: function(result) {
                matches = result.data.map(x => Object.values(x))
                                    .filter(x => x[18] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x[22] == "La Puissance" || x[23] == "La Puissance") && new Date(x[11]) <= date)
                                    .sort(sortMatches);

                nextMatch = result.data.map(x => Object.values(x))
                                    .filter(x => x[18] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x[22] == "La Puissance" || x[23] == "La Puissance"))
                                    .sort(sortMatches)[matches.length];
                                    
                console.log(matches);
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
            teams: sortedTeams,
            played: matches,
            next: nextMatch
        }
    },
    methods:{
        renderFather(){
            this.$emit("rendering", this.father);
        }
    }
}

</script>

<style></style>