<template>
    <div id="player" class="screen">
        <div>
            <br><br>
            <button @click="goTeam" class="go">&lt;</button>
            <br><br>
        </div>
        <div>
            <div>

            </div>
            <div>
                {{ this.player }}
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">

    export default {
        name: "Player",
        methods:{
            goTeam(){
                this.$emit("listenRender", "Team");
            },
            show(){
                console.log(this.player)
            }
        },
        props:{
            player: Object
        }
    }
</script>

<style scoped>

#player{
    width: 100%;
    height: 100%;
    background-color: #f1121f;
}

#info{
    display: flex;
}
</style>