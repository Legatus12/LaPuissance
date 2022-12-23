<template>
  <KeepAlive>
    <component :is="renderedComponent" @renderingComponent="renderComponent" @renderingPlayer="renderPlayer" :player=renderedPlayer />
  </KeepAlive>
  
</template>

<script setup>

import { shallowRef } from 'vue';

import Home from './components/Home.vue';
import Player from './components/Player.vue';

const renderedComponent = shallowRef(Home);
const renderedPlayer = {};

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