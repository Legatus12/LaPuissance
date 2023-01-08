<template>
    <div class="component">
        <Header :title="'Clasificación'" @back="goBack()" />
        <Loading v-if="loading == true" />
        <div v-else class="table">
            <table class="text-center w-full">
                <thead class="italic font-black">
                    <th></th>
                    <th class="text-left">EQUIPO</th>
                    <th><abbr title="PUNTOS">PTS</abbr></th>
                    <th><abbr title="PARTIDOS JUGADOS">PJ</abbr></th>
                    <th class="detail"><abbr title="PARTIDOS GANADOS">PG</abbr></th>
                    <th class="detail"><abbr title="PARTIDOS EMPATADOS">PE</abbr></th>
                    <th class="detail"><abbr title="PARTIDOS PERDIDOS">PP</abbr></th>
                    <th class="detail"><abbr title="GOLES A FAVOR">GF</abbr></th>
                    <th class="detail"><abbr title="GOLES EN CONTRA">GC</abbr></th>
                    <th><abbr title="DIFERENCIA DE GOLES">DG</abbr></th>
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
import Loading from './Loading.vue';

import Papa from 'papaparse';
import sortTeams from '../store/sortTeams.mjs';

const teams = ref([]);

const loading = ref(true);

const getTables = async () => {
    try {
        const response = await fetch('assets/tables.csv'); /* dev -> src/local/tables.csv */ /* prod -> assets/tables.csv */
        const data = await response.text();
        Papa.parse(data, {
            header: true,
            complete: function(result) {
                teams.value = result.data.filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h").sort(sortTeams);
                loading.value = false;
            }
        });
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => getTables());

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Home);
}

</script>


<style scoped>

.table{
    @apply w-full h-full bg-gradient-to-b from-[#232323] to-[#373737] flex justify-center md:text-xl overflow-y-auto
}

.lp{
    @apply bg-[#f1121f] font-bold
}

.detail{
    @apply hidden lg:table-cell
}

th, td{
    @apply md:p-4 border-solid border-b-2 border-[#646464]
}

thead{
    @apply bg-[#f6f6f6] text-[#232323]
}

</style>