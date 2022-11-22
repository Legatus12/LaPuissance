<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 flex justify-between items-center">
            <Back @pressed="backHome"/>
            <h1 class="text-4xl md:text-5xl font-black px-8">Partidos</h1>
        </div>

        <div class="w-full h-full bg-[#232323] text-[#f6f6f6] flex flex-col md:flex-row items-center justify-around p-16 md:p-32 gap-16 md:gap-32">
            <p class="text-4xl md:text-6xl text-bold">EN DESARROLLO</p>
        </div>
    </div>
</template>

<script lang="ts">

import Back from './Back.vue';

import Papa from 'papaparse';
import sortMatches from '../store/sortMatches.mjs';

let matches;
let nextMatch;

const date = new Date();

const getMatches = async () => {
    try {
        const response = await fetch('assets/matches.csv'); /* dev -> src/local/matches.csv */ /* prod -> assets/matches.csv */
        const data = await response.text();
        Papa.parse(data, {
            header: true,
            complete: function(result) {
                matches = result.data
                                    .filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x.Equipo_local == "La Puissance" || x.Equipo_visitante == "La Puissance") && new Date(x.Fecha) <= date)
                                    .sort(sortMatches);

                nextMatch = result.data
                                    .filter(x => x.Nombre_grupo == "JDM RET DOM TAR F7 SEN MAS Adelf D9 15-17h" && (x.Equipo_local == "La Puissance" || x.Equipo_visitante == "La Puissance"))
                                    .sort(sortMatches)[matches.length];
                
                console.log(nextMatch);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

getMatches();

export default {
    emits: ["rendering"],
    components: {Back},
    methods:{
        backHome(){
            this.$emit("rendering", "Home");
        }
    }
}

</script>

<style scoped></style>