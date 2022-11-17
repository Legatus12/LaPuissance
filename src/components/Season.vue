<template>
    <div class="w-full h-full flex flex-col items-center">

        <div class="w-full h-16 bg-[#232323] flex justify-between items-center border-solid border-b-4 border-[#f6f6f6]">
            <button @click="goHome" class="w-16 md:w-32 h-full text-5xl text-[#f6f6f6] border-solid border-r-4 border-[#f6f6f6]">
                <div class="duration-300 md:hover:-translate-x-3">&lt;</div>
            </button>
            <h1 class="text-3xl md:text-4xl font-bold px-8">TEMPORADA</h1>
        </div>

        <div class="w-full md:w-fit h-full flex flex-col items-center justify-around p-8 md:p-16 gap-8 overflow-hidden">
            <div class="w-full bg-[#f6f6f6] flex justify-around text-center text-sm md:text-xl gap-1 cursor-pointer">
                <div class="w-full bg-[#232323]">CLASIFICACIÓN</div>
                <div class="w-full bg-[#232323]">RESULTADOS</div>
            </div>
            <div class="w-full h-full flex justify-center">
                <table class="w-full text-right md:text-center">
                    <tr class="bg-[#f6f6f6] md:text-xl text-[#232323]">
                        <th class="p-1 md:p-4 text-center text-xs md:text-base p-2">pos.</th>
                        <th class="p-1 md:p-4 text-left">Equipo</th>
                        <th class="p-1 md:p-4">Pts</th>
                        <th class="p-1 md:p-4">PJ</th>
                        <th class="pr-4 py-1 md:p-4">DG</th>
                    </tr>
                    <tr v-for="(team, index) in teams"
                    class="md:text-xl hover:bg-[#2c2c2c] border-solid border-b-4 border-[#888888]">
                        <td v-if="team[19] == 'La Puissance'" class="p-1 md:p-2 w-8 text-[#f1121f] font-black">{{ index + 1 }}º</td>
                        <td v-else class="p-1 md:p-2 w-8">{{ index + 1 }}º</td>
                        <td v-if="team[19] == 'La Puissance'" class="p-1 md:p-2 w-20 md:w-80 text-left  font-black">{{ team[19] }}</td>
                        <td v-else class="p-1 md:p-2 w-20 md:w-80 text-left">{{ team[19] }}</td>
                        <td class="p-1 md:p-2">{{ Number(team[6]) }}</td>
                        <td class="p-1 md:p-2">{{ team[7] }}</td>
                        <td class="pr-4 py-1 md:p-2">{{ team[11] -team[12] }}</td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</template>

<script lang="ts">

    import Papa from 'papaparse';
    import sortTeams from '../store/sortTeams.mjs';
    import sortMatches from '../store/sortMatches.mjs';

    let sortedTeams;
    let matches;
    let nextMatch;

    const date = new Date();

    const getData = async () => {
        try {
            const response = await fetch('src/local/teams.csv');
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
            const response = await fetch('src/local/matches.csv');
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

    const getMatches = async () => {
        
    }

    getData();

    export default {
        emits: ["listenRender"],
        data(){
            return{
                teams: sortedTeams,
                played: matches,
                next: nextMatch
            }
        },
        methods:{
            goHome(){
                this.$emit("rendering", "Home");
            }
        }
    }
</script>

<style></style>