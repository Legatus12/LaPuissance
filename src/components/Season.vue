<template>
    <div class="w-full h-full flex flex-col bg-[#232323] text-[#f6f6f6] overflow-y-auto">
        <div class="w-fit h-1/4 border-[#f6f6f6] rounded p-16">
            <button @click="goHome" class="w-20 h-20 bg-[#f6f6f6] text-[#232323] text-3xl rounded-full p-6">&lt;</button>
            <br><br><br>
            <h1 class="text-5xl underline">Temporada 22/23</h1>
        </div>
        <div class="h-3/4 flex flex-col justify-start xl:flex-row px-16 py-20 gap-16">
            <div class="w-full h-full flex flex-col items-center xl:w-3/5">
                <h2 class="text-2xl py-4">Clasificación</h2>
                <table class="w-full h-full">
                    <tr class="bg-[#f6f6f6] text-[#232323] text-left">
                        <th class="xl:p-1 text-base xl:text-xl"></th>
                        <th class="xl:p-1 text-base xl:text-xl">Equipo</th>
                        <th class="xl:p-1 text-base xl:text-xl">Puntos</th>
                        <th class="xl:p-1 text-base xl:text-xl">PJ</th>
                        <th class="xl:p-1 text-base xl:text-xl">DG</th>
                    </tr>
                    <tr v-for="(team, index) in teams" class="bg-[#464646] odd:bg-[#6d6d6d] hover:bg-[#888888]">
                        <td class="xl:p-1 text-base text-xl">{{ index + 1 }}º</td>
                        <td class="xl:p-1 text-base text-xl">{{ team[19] }}</td>
                        <td class="xl:p-1 text-base text-xl">{{ Number(team[6]) }}</td>
                        <td class="xl:p-1 text-base text-xl">{{ Number(team[7]) }}</td>
                        <td class="xl:p-1 text-base text-xl">{{ Number(team[11]-team[12]) }}</td>
                    </tr>
                </table>
            </div>
            <div class="w-full xl:w-2/5 flex flex-col justify-end items-center">
                <h2 class="text-2xl py-4">Partidos</h2>
                <div class="w-full overflow-y-scroll border-solid border-y-2 border-[#f6f6f6]">
                    <div class="w-full border-t border-[#f6f6f6] p-4">
                        <i><h1>PRÓXIMO PARTIDO</h1></i> 
                        <p class="w-fit text-xl border-2 border-solid border-[#f6f6f6]">&nbsp;<b>{{ this.next[22] }}</b> vs. <b>&nbsp;{{ this.next[23] }}</b>&nbsp;</p>
                        <p>
                            {{ new Date(this.next[11]).getDate()}} / {{ new Date(this.next[11]).getMonth()}} / {{ new Date(this.next[11]).getFullYear()}}
                            - {{ this.next[12] }} - {{ this.next[24].split(" ")[3] }} (Campo {{ this.next[24].split(" ")[2].split("-")[1] }}) 
                        </p>
                    </div>
                    <div v-for="match in this.played" class=" w-full border-t border-[#f6f6f6] py-8 px-4">
                        <div class="flex flex-col md:flex-row justify-center">
                            <div class="w-full flex flex-col justify-center items-center">
                                <p>{{ new Date(match[11]).getDate()}} / {{ new Date(match[11]).getMonth()}} / {{ new Date(match[11]).getFullYear()}}</p>
                                <p><i class="border-2 border-solid border-[#f6f6f6]">&nbsp; JDM {{ match[4]}} &nbsp;</i></p><br>
                            </div>
                            <div class="w-full flex justify-center items-center">
                                <div class="flex flex-col justify-center items-end">
                                    <p class="text-base md:text-lg">{{ match[22] }}&nbsp;<b class="bg-[#f6f6f6] text-[#232323]">&nbsp;{{ match[8] }}&nbsp;</b></p>
                                    <p class="text-base md:text-lg">{{ match[23] }}&nbsp;<b class="bg-[#f6f6f6] text-[#232323]">&nbsp;{{ match[9] }}&nbsp;</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
    import Papa from 'papaparse';
    import sortTeams from '../store/sortTeams.mjs';
    import sortMatches from '../store/sortMatches.mjs';

    const date = new Date();

    let sortedTeams;
    Papa.parse('../local/table.csv', {
        header: true,
        complete: function(result) {
            console.log(result);
            sortedTeams = result.data.filter(x => x[16] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h").sort(sortTeams);
        }
    });

    let matches;
    let nextMatch;
    Papa.parse("https://datos.madrid.es/egob/catalogo/211549-3-juegos-deportivos-actual.csv", {
        download: true,
        complete: function(result) {
            //console.log(date);
            //console.log(result.data[0]);
            matches = result.data
                                .filter(x => x[18] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x[22] == "La Puissance" || x[23] == "La Puissance") && new Date(x[11]) <= date)
                                .sort(sortMatches);

            nextMatch = result.data
                                .filter(x => x[18] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x[22] == "La Puissance" || x[23] == "La Puissance"))
                                .sort(sortMatches)[matches.length];
                                
            //console.log(matches);
            //console.log(nextMatch);
        }
    });

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
                this.$emit("listenRender", "Home");
            }
        }
    }
</script>

<style></style>