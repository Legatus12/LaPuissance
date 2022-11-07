<template>
  <component v-bind:is="rendered" @listenRender="render" @playerRequest="renderPlayer" :current=player />
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
        rendered: Home,
        player: 0,
      }
    },
    methods:{
      render(c){
        this.rendered = c;
      },
      renderPlayer(n){
        this.player = n;
        this.rendered = "Player"
      }
    }
  }
</script>

<style scoped>

</style>