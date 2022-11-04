<template>
  <component v-bind:is="rendered" @listenRender="render"/>
</template>

<script>
  import Home from './components/Home.vue';
  import Season from './components/Season.vue';
  import Team from './components/Team.vue';

  export default {
    name: "App",
    components: {Home, Season, Team},
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