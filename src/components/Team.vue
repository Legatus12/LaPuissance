<template>
    <div id="team" class="screen">
        <div>
            <br><br>
            <button @click="goHome" id="go-home">&lt;</button>
            <br><br>
            <h1>Equipo</h1>
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

#team{
    width: 100%;
    height: 100%;
    background-color: #f1121f;
    color: #f6f6f6;
}

</style>