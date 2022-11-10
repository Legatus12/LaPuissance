<template>
    <div id="season" class="screen">
        <div>
            <br><br>
            <button @click="goHome" class="go">&lt;</button>
            <br><br>
            <h1>Temporada 22/23</h1>
        </div>
        <div id="table">
            <h2>Clasificación</h2>
            <table>
                <tr id="head">
                    <th>Equipo</th>
                    <th>Puntos</th>
                </tr>
                <tr v-for="team in teams">
                    <td>{{ team[19] }}</td>
                    <td>{{ Number(team[6]) }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
    import Papa from 'papaparse';
    import sortTeams from '../store/sortTeams.mjs';
    import sortMatches from '../store/sortMatches.mjs';

    const date = new Date();

    let sortedTeams;
    Papa.parse("https://datos.madrid.es/egob/catalogo/211549-1-juegos-deportivos-actual.csv", {
        download: true,
        complete: function(result) {
            //console.log(result.data[0]);
            sortedTeams = result.data.filter(x => x[16] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h").sort(sortTeams);
            //console.log(sortedTeams);
        }
    });

    let matches;
    let nextMatch;
    Papa.parse("https://datos.madrid.es/egob/catalogo/211549-3-juegos-deportivos-actual.csv", {
        download: true,
        complete: function(result) {
            console.log(date);
            console.log(result.data[0]);
            matches = result.data
                                .filter(x => x[18] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x[22] == "La Puissance" || x[23] == "La Puissance") && new Date(x[11]) <= date)
                                .sort(sortMatches);

            nextMatch = result.data
                                .filter(x => x[18] == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x[22] == "La Puissance" || x[23] == "La Puissance"))
                                .sort(sortMatches)[matches.length];
                                
            console.log(matches);
            console.log(nextMatch);
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

<style scoped>

#season{
    background-color: #232323;
    color: #f6f6f6;
}

#table{
    width: 50%;
    padding-right: 4%;
}

table{
    width: 100%;
    border-collapse: collapse;
}

#head{
    background-color: #f6f6f6;
    color: #232323;
}

tr{
    text-align: left;
    transition: 125ms;
}

tr:nth-child(odd){
    background-color: #373737;
}

tr:hover{
    text-align: left;
    background-color: #565656;
}

td, th{
    padding: 0.5em;
    transition: 250ms;
}

</style>