<template>
    <div class="flex flex-col">
        <div class="h-16">
            <Back @back="backHome()"/>
        </div>
        <div class="h-16 flex items-center bg-[#232323] text-[#f6f6f6] p-4">
            <h1>Competición - </h1>
            <select class="bg-[#232323]">
                <option>JDM43</option>
            </select>
        </div>
        <div class="flex justify-center">
            <table class="text-center">
                <tr class="">
                    <th></th>
                    <th class="text-left">EQUIPO</th>
                    <th>PTS</th>
                    <th>PJ</th>
                    <th>DG</th>
                </tr>
                <tr v-for="(team, index) in teams">
                    <td class="text-right"
                    v-if="team.Nombre_equipo == 'La Puissance'">{{ index + 1 }}º</td>
                    <td class="text-right"
                    v-else>{{ index + 1 }}º</td>

                    <td class="text-left"
                    v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Nombre_equipo }}</td>
                    <td class="text-left"
                    v-else>{{ team.Nombre_equipo }}</td>

                    <td v-if="team.Nombre_equipo == 'La Puissance'">{{ Number(team.Puntos) }}</td>
                    <td v-else>{{ Number(team.Puntos) }}</td>

                    <td v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Partidos_jugados }}</td>
                    <td v-else>{{ team.Partidos_jugados }}</td>

                    <td v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Goles_favor - team.Goles_contra }}</td>
                    <td v-else>{{ team.Goles_favor - team.Goles_contra }}</td>
                </tr>
            </table>
        </div>
        <br><br>
    </div>
</template>


<script setup>

import Back from './Back.vue';
import Home from './Home.vue';

import Papa from 'papaparse';
import sortTeams from '../store/sortTeams.mjs';

let sortedTeams;

const getTables = async () => {
    try {
        const response = await fetch('src/local/tables.csv'); /* dev -> src/local/tables.csv */ /* prod -> assets/tables.csv */
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
}

getTables();

const emits = defineEmits(["rendering"]);

const backHome = () =>{
    emits("rendering", Home)
}

</script>


<style scoped>

th, td{
    padding: 0.5rem;
    border-bottom: 2px solid #232323;
}

</style>