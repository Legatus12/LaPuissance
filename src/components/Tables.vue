<template>
    <div class="component">
        <Header :title="'Clasificación'" @back="goBack()" />
        <div class="select">
            <h1>Competición - </h1>
            <select>
                <option>JDM43</option>
            </select>
        </div>
        <div class="table">
            <table class="text-center w-full">
                <thead class="italic font-black">
                    <th></th>
                    <th class="text-left">EQUIPO</th>
                    <th>PTS</th>
                    <th>PJ</th>
                    <th class="detail">PG</th>
                    <th class="detail">PE</th>
                    <th class="detail">PP</th>
                    <th class="detail">GF</th>
                    <th class="detail">GC</th>
                    <th>DG</th>
                </thead>
                <tbody class="font-thin">
                    <tr v-for="(team, index) in teams">
                        <td class="text-right lp"
                        v-if="team.Nombre_equipo == 'La Puissance'">{{ index + 1 }}º</td>
                        <td class="text-right"
                        v-else>{{ index + 1 }}º</td>

                        <td class="text-left md:w-full lp"
                        v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Nombre_equipo }}</td>
                        <td class="text-left md:w-full"
                        v-else>{{ team.Nombre_equipo }}</td>

                        <td v-if="team.Nombre_equipo == 'La Puissance'" class="lp">{{ Number(team.Puntos) }}</td>
                        <td v-else class="font-semibold">{{ Number(team.Puntos) }}</td>

                        <td v-if="team.Nombre_equipo == 'La Puissance'" class="lp">{{ team.Partidos_jugados }}</td>
                        <td v-else>{{ team.Partidos_jugados }}</td>

                        <td class="detail lp" v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Partidos_ganados }}</td>
                        <td class="detail" v-else>{{ team.Partidos_ganados }}</td>

                        <td class="detail lp" v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Partidos_empatados }}</td>
                        <td class="detail" v-else>{{ team.Partidos_empatados }}</td>

                        <td class="detail lp" v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Partidos_perdidos }}</td>
                        <td class="detail" v-else>{{ team.Partidos_perdidos }}</td>

                        <td class="detail lp" v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Goles_favor }}</td>
                        <td class="detail" v-else>{{ team.Goles_favor }}</td>

                        <td class="detail lp" v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Goles_contra }}</td>
                        <td class="detail" v-else>{{ team.Goles_contra }}</td>

                        <td class="lp" v-if="team.Nombre_equipo == 'La Puissance'">{{ team.Goles_favor - team.Goles_contra }}</td>
                        <td v-else>{{ team.Goles_favor - team.Goles_contra }}</td>
                    </tr>
                </tbody>
                
            </table>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue';

import Header from './Header.vue';
import Home from './Home.vue';

import Papa from 'papaparse';
import sortTeams from '../store/sortTeams.mjs';

const teams = ref([]);

const getTables = async () => {
    try {
        const response = await fetch('assets/tables.csv'); /* dev -> src/local/tables.csv */ /* prod -> assets/tables.csv */
        const data = await response.text();
        Papa.parse(data, {
            header: true,
            complete: function(result) {
                teams.value = result.data.filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h").sort(sortTeams);
            }
        });
    } catch (error) {
        console.log(error);
    }
    console.log(teams.value)
}

onMounted(() => getTables());

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Home);
}

</script>


<style scoped>

.select{
    @apply h-16 flex items-center bg-[#f6f6f6] text-[#232323] p-4 md:p-8 md:text-xl
}

.table{
    @apply w-full h-full bg-gradient-to-b from-[#232323] to-[#373737] flex justify-center md:p-12 md:text-xl overflow-y-auto
}

.lp{
    @apply bg-[#f1121f] font-bold
}

.detail{
    @apply hidden lg:table-cell
}

th, td{
    padding: 0.5rem;
    border-bottom: 2px solid #646464;
}

</style>