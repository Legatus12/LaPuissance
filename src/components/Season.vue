<template>
    <div class="w-full h-full flex flex-col">
        <div class="w-full h-16 bg-[#232323] flex items-center">
            <button @click="goHome" class="w-16 md:w-32 h-full bg-[#f1121f]">&lt;</button>
        </div>
        <div class="w-full h-full flex flex-col md:flex-row items-center justify-around p-16 md:p-32 gap-16 md:gap-32">
            <div class="w-full h-full bg-[#232323]"></div>
            <div class="w-full h-full bg-[#232323]"></div>
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