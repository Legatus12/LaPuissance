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
                <div id="info">
                    <div>
                        <h2>{{ player.n }}</h2>
                    </div>
                    <div>
                        <p>{{ player.name }}</p>
                        <h2>{{ player.nickname }}</h2>
                    </div>
                </div>
                <div id="stats">
                    <p>PJ = {{ player[2223].gp }} || JP = {{ player[2223].mvp }}</p>
                    <p>GOLES = {{ player[2223].g }} || ASISTENCIAS = {{ player[2223].a }}</p>
                    <p>TA = {{ player[2223].yc }} || TR = {{ player[2223].rc }}</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
    import players from '../local/players.json';
    let array = Object.values(players);

    export default {
        name: "Player",
        data(){
            return{
                player: array.reduce((ac, el) => ac.n == this.current ? ac : el, array[0])
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