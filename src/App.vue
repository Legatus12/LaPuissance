<template>
  <KeepAlive>
    <component v-bind:is="renderedComponent" @rendering="renderComponent" @renderingPlayer="renderPlayer" :player=renderedPlayer />
  </KeepAlive>
  
</template>

<script>

import Home from './components/Home.vue';
import Team from './components/Team.vue';
import Player from './components/Player.vue';
import Tables from './components/Tables.vue';
import Matches from './components/Matches.vue';
import News from './components/News.vue';
import Club from './components/Club.vue';

export default {
  name: "App",
  components: {Home, Team, Player, Tables, Matches, News, Club},
  data(){
    return{
      renderedComponent: "Home",
      renderedPlayer: null,
    }
  },
  methods:{
    renderComponent(component){
      this.renderedComponent = component;
    },
    renderPlayer(player){
      this.renderedPlayer = player;
      this.renderedComponent = "Player"
    }
  }
}

</script>

<style scoped>

</style>