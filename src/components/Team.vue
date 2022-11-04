<template>
    <div id="team" @click="goHome">
        
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

#team{
    width: 100%;
    height: 100%;
    background-color: #f1121f;
    color: #f6f6f6;
}

</style>