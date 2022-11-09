<template>
  <component v-bind:is="renderedComponent" @listenRender="renderComponent" @playerRequest="renderPlayer" :player=renderedPlayer />
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
      renderComponent(c){
        this.renderedComponent = c;
      },
      renderPlayer(obj){
        this.renderedPlayer = obj;
        this.renderedComponent = "Player"
      }
    }
  }
</script>

<style scoped>

</style>