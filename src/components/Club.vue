<template>
    <div class="component">
        <Header :title="'Club'" @back="goBack()" />
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

</script>

<style scoped></style>