<template>
  <component v-bind:is="renderedComponent" @rendering="renderComponent" @renderingPlayer="renderPlayer" :player=renderedPlayer />
</template>

<script>
  import Home from './components/Home.vue';
  import Team from './components/Team.vue';
  import Player from './components/Player.vue';
  import Shop from './components/Shop.vue';
  import Season from './components/Season.vue';
  import News from './components/News.vue';

  export default {
    name: "App",
    components: {Home, Team, Shop, Season, News, Player},
    data(){
      return{
        renderedComponent: Home,
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