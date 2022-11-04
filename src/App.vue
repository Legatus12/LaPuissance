<template>
  <component v-bind:is="rendered" @listenRender="render"/>
</template>

<script>
  import Home from './components/Home.vue';
  import Team from './components/Team.vue';
  import Shop from './components/Shop.vue';
  import Season from './components/Season.vue';
  import News from './components/News.vue';

  export default {
    name: "App",
    components: {Home, Team, Shop, Season, News},
    data(){
      return{
        rendered: Home,
      }
    },
    methods:{
      render(c){
        this.rendered = c;
      }
    }
  }
</script>

<style scoped>

</style>