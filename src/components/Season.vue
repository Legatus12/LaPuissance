<template>
    <div id="season" class="screen">
        <div>
            <br><br>
            <button @click="goHome" class="go">&lt;</button>
            <br><br>
            <h1>Temporada 22/23</h1>
        </div>
        <div>
            <div id="table">
                <h2>Clasificación</h2>
                <table>
                    <tr id="head">
                        <th>Equipo</th>
                        <th>Puntos</th>
                    </tr>
                    <tr v-for="team in teams">
                        <td>{{ team.name }}</td>
                        <td>{{ team.points }}</td>
                    </tr>
                </table>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import sortedTeams from '../store/sortTeams.mjs'

    export default {
        emits: ["listenRender"],
        data(){
            return{
                teams: sortedTeams
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

th:hover{
    color: #f1121f;
    cursor: pointer;
}

td, th{
    padding: 0.5em;
    transition: 250ms;
}

</style>