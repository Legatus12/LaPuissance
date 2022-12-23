<template>
    <div class="component">
        <Header :title="'Estadísticas'" @back="goBack()" />
        <div class="">
            
        </div>
    </div>
</template>

<script setup>

import Header from './Header.vue';
import Home from './Home.vue';

const emits = defineEmits(["renderingComponent"]);

const goBack = () =>{
    emits("renderingComponent", Home)
}

/*
const sorted = input.sort((a, b) => {
    if (a.seasons.find(x => x.id == 'jdm43').g > b.seasons.find(x => x.id == 'jdm43').g) {
      return -1;
    }
    if (a.seasons.find(x => x.id == 'jdm43').g < b.seasons.find(x => x.id == 'jdm43').g) {
      return 1;
    }
    else {
        if (a.seasons.find(x => x.id == 'jdm43').gp < b.seasons.find(x => x.id == 'jdm43').gp) {
            return -1;
        }
        if (a.seasons.find(x => x.id == 'jdm43').gp > b.seasons.find(x => x.id == 'jdm43').gp) {
            return 1;
        }
        else {
            if (a.seasons.find(x => x.id == 'jdm43').mvp > b.seasons.find(x => x.id == 'jdm43').mvp) {
                return -1;
            }
            if (a.seasons.find(x => x.id == 'jdm43').mvp > b.seasons.find(x => x.id == 'jdm43').mvp) {
                return 1;
            }
            else
                return 0;
        }
    }
})
*/

</script>

<style lang="scss" scoped>

</style>