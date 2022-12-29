<template>
    <div class="component">
        <Header :title="'Partidos'" @back="goBack()" />
        <div class="">
            
        </div>
    </div>
</template>

<script setup>

import Header from './Header.vue';
import Home from './Home.vue';

import Papa from 'papaparse';
import sortMatches from '../store/sortMatches.mjs';

//

let matches;
let nextMatch;

const date = new Date();

const getMatches = async () => {
    try {
        const response = await fetch('src/local/matches.csv'); /* dev -> src/local/matches.csv */ /* prod -> assets/matches.csv */
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

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Home)
}

</script>

<style scoped></style>