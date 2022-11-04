<template>
    <div id="season" @click="goHome">
        
    </div>
</template>

<script>
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

#season{
    width: 100%;
    height: 100%;
    background-color: #232323;
    color: #f6f6f6;
}

</style>