<template>
    <div id="shop" class="screen">
        <div>
            <br><br>
            <button @click="goHome" class="go">&lt;</button>
            <br><br>
            <h1>Tienda</h1>
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

#shop{
    width: 100%;
    height: 100%;
    background-color: #232323;
    color: #f6f6f6;
}

</style>