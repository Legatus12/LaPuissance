<template>
    <div id="team" class="screen">
        <div>
            <br><br>
            <button @click="goHome" class="go">&lt;</button>
            <br><br>
            <h1>Equipo</h1>
        </div>
        <div id="players">
            <div v-for="(positions, index) in squad">
                <h1 class="position">{{ posTitles[index] }}</h1>
                <div>
                    <div class="player" v-for="player in positions" @click="renderPlayer(player)">
                        {{ player.n }} - {{ player.nickname }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import array from '../local/players.json';
    let players = Object.values(array);

    export default {
        emits: ["listenRender", "playerRequest"],
        data(){
            return{
                squad: [players.filter(x => x.pos == "gk"),
                        players.filter(x => x.pos == "d"),
                        players.filter(x => x.pos == "m"),
                        players.filter(x => x.pos == "s"),],
                posTitles: ["Porteros", "Defensas", "Mediocentros", "Delanteros"]
            }
        },
        methods:{
            goHome(){
                this.$emit("listenRender", "Home");
            },
            renderPlayer(obj){
                this.$emit("playerRequest", obj);
            }
        }
    }
</script>

<style scoped>

#team{
    background-color: #f1121f;
    color: #f6f6f6;
}

#players{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#players > div > div{
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
}

.position{
    text-decoration: none;
    background-color: #232323;
    width: 100%;
}

.player{
    background-color: #f6f6f6;
    color: #232323;
    padding: 1em;
    width: 10em;
    min-width: 10em;
    font-size: 22px;
    font-weight: bolder;
    transition: 250ms;
}

.player:hover{
    box-shadow: -10px 0 #232323;
    transform: translateX(10px);
    cursor: pointer;
}

span{
    color: #f1121f;
}
</style>