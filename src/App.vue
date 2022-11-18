<template>
  <KeepAlive>
    <component v-bind:is="renderedComponent" @rendering="renderComponent" @renderingPlayer="renderPlayer" :player=renderedPlayer />
  </KeepAlive>
  
</template>

<script>

import Loading from './components/Loading.vue';
import Home from './components/Home.vue';
import Team from './components/Team.vue';
import Player from './components/Player.vue';
import Shop from './components/Shop.vue';
import Season from './components/Season.vue';
import News from './components/News.vue';

export default {
  name: "App",
  components: {Loading, Home, Team, Player, Shop, Season, News},
  created(){
    this.load();
  },
  data(){
    return{
      renderedComponent: "Loading",
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
    },
    load(){
      setTimeout(() => {
        this.renderedComponent = "Home";
      }, "3200")
    }
  }
}

</script>

<style scoped>

</style>