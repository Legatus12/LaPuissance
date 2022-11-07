<template>
    <div id="player" class="screen">
        <div>
            <br><br>
            <button @click="goTeam" class="go">&lt;</button>
            <br><br>
            <h1>a</h1>
        </div>
        <div @click="show">
            <h1> {{ player }} </h1>
        </div>
    </div>
    
</template>

<script>
    import players from '../local/players.json';
    let array = Object.values(players);

    export default {
        name: "Player",
        data(){
            return{
                player: array.filter(x => x.n == this.current),
            }
        },
        methods:{
            goTeam(){
                this.$emit("listenRender", "Team");
            },
            show(){
                console.log(this.player)
            }
        },
        props:{
            current: Number
        }
    }
</script>

<style scoped>

#player{
    width: 100%;
    height: 100%;
    background-color: #f1121f;
}

</style>