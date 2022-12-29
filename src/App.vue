<template>
    <component :is="renderedComponent" @renderingComponent="renderComponent" @renderingPlayer="renderPlayer" :player=renderedPlayer />
</template>

<script setup>

import { reactive, shallowRef } from 'vue';

import Home from './components/Home.vue';
import Player from './components/Player.vue';

const renderedComponent = shallowRef(Home);
const renderedPlayer = reactive({});

const renderComponent = (component) =>{
  renderedComponent.value = component;
}

const renderPlayer = (obj) =>{
      renderedPlayer.value = obj;
      renderedComponent.value = Player
}

</script>

<style scoped>

</style>