<template>
    <div class="component">
        <Header :title="'Resultados'" @back="goBack()" />
        <Loading v-if="loading == true" />
        <div v-else class="main">
            <div class="next">
                <h1 class="title">Próximo partido</h1>
                <div class="h-full flex flex-col items-center justify-center gap-6 md:gap-12 p-6 md:p-12">
                    <div class="week">JORNADA {{ nextMatch.Jornada }}</div>
                    <div class="text-center text-2xl md:text-4xl font-bold">
                        <div v-if="nextMatch.Equipo_local == 'La Puissance'" class="text-[#f1121f]">{{ nextMatch.Equipo_local }}</div>
                        <div v-else>{{ nextMatch.Equipo_local }}</div>
                        <div> - </div>
                        <div v-if="nextMatch.Equipo_visitante == 'La Puissance'" class="text-[#f1121f]">{{ nextMatch.Equipo_visitante }}</div>
                        <div v-else>{{ nextMatch.Equipo_visitante }}</div>
                    </div>
                </div>
            </div>
            <div class="prev">
                <div class="prev-container">
                    <div v-for="match in matches" class="prev-match">
                        <div class="week">JORNADA {{ match.Jornada }}</div>
                        <div class="flex flex-col text-lg md:text-3xl font-bold">
                            <div class="flex justify-between">
                                <div v-if="match.Equipo_local == 'La Puissance'" class="w-full bg-[#646464]">{{ match.Equipo_local }}</div>
                                <div v-else>{{ match.Equipo_local }}</div>
                                <div v-if="match.Equipo_local == 'La Puissance'" class="bg-[#646464]">{{ match.Resultado1 }}</div>
                                <div v-else>{{ match.Resultado1 }}</div>
                            </div>
                            <div class="flex justify-between">
                                <div v-if="match.Equipo_visitante == 'La Puissance'" class="w-full bg-[#646464]">{{ match.Equipo_visitante }}</div>
                                <div v-else>{{ match.Equipo_visitante }}</div>
                                <div v-if="match.Equipo_visitante == 'La Puissance'" class="bg-[#646464]">{{ match.Resultado2 }}</div>
                                <div v-else>{{ match.Resultado2 }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue';

import Header from './Header.vue';
import Home from './Home.vue';
import Loading from './Loading.vue';

import Papa from 'papaparse';
import sortMatches from '../store/sortMatches.mjs';

//

const matches = ref([]);
const nextMatch = ref({});
const week = ref(0);

const loading = ref(true);

const getMatches = async () => {
    try {
        const response = await fetch('assets/matches.csv'); /* dev -> src/local/matches.csv */ /* prod -> assets/matches.csv */
        const data = await response.text();
        Papa.parse(data, {
            header: true,
            complete: function(result) {
                matches.value = result.data
                                    .filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x.Equipo_local == "La Puissance" || x.Equipo_visitante == "La Puissance") && x.Estado == "F")
                                    .sort(sortMatches)
                                    .reverse();
                nextMatch.value = result.data
                                    .filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x.Equipo_local == "La Puissance" || x.Equipo_visitante == "La Puissance") && x.Estado == "R")
                                    .sort(sortMatches)[0];

                loading.value = false;
            }
        });
    } catch (error) {
        console.log(error);
    }
    console.log(matches.value)
    console.log(matches.value)
}

onMounted(() => {
    getMatches();
    week.value = matches.value.length - 1
});


const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Home)
}

</script>


<style scoped>

.main{
    @apply w-full h-full bg-gradient-to-b from-[#232323] to-[#373737] flex flex-col lg:flex-row gap-12 p-12 overflow-y-auto
}

.next{
    @apply w-full lg:w-1/2 h-full bg-[#f6f6f6] p-6 md:p-12 text-[#232323]
}

.prev{
    @apply w-full lg:w-1/2 h-full border-solid border-2 border-[#f6f6f6]
}

.title{
    @apply text-2xl md:text-3xl font-black
}

.prev-container{
    @apply h-full overflow-y-auto p-6 md:p-12
}

.prev-match{
    @apply flex flex-col border-solid border-b-2 border-[#888888] p-4
}

.week{
    @apply text-[#888888] md:text-lg
}

</style>