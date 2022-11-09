<template>
    <div id="news" class="screen">
        <div>
            <br><br>
            <button @click="goHome" class="go">&lt;</button>
            <br><br>
            <h1>Noticias</h1>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        emits: ["listenRender"],
        methods:{
            goHome(){
                this.$emit("listenRender", "Home");
            }
        }
    }
</script>

<style scoped>

#news{
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    color: #232323;
}

#go-home{
  border: 6px solid #232323;
}

#go-home:hover{
  background-color: #232323;
  color: #f6f6f6;
}

</style>