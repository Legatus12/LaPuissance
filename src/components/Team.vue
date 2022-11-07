<template>
    <div id="team" class="screen">
        <div>
            <br><br>
            <button @click="goHome" class="go">&lt;</button>
            <br><br>
            <h1>Equipo</h1>
        </div>
        <div id="players">
            <h1 class="position">Porteros</h1>
            <div>
                <div class="player" @click="renderPlayer(99)">99 - CABALLERO</div>
            </div>
            <h1 class="position">Defensas</h1>
            <div>
                <div class="player" @click="renderPlayer(5)">5 - PAPI MAIK</div>
                <div class="player" @click="renderPlayer(12)">12 - SANTOS <span>(C)</span></div>
                <div class="player" @click="renderPlayer(14)">14 - BARBU</div>
                <div class="player" @click="renderPlayer(19)">69 - CHARLI</div>
                <div class="player" @click="renderPlayer(77)">77 - OFKIR</div>
            </div>
            <h1 class="position">Mediocentros</h1>
            <div>
                <div class="player" @click="renderPlayer(4)">4 - GODOY</div>
                <div class="player" @click="renderPlayer(16)">6 - ARTURO</div>
                <div class="player" @click="renderPlayer(11)">11 - HUGO</div>
                <div class="player" @click="renderPlayer(17)">17 - ALEX</div>
                <div class="player" @click="renderPlayer(19)">19 - LUISMO</div>
            </div>
            <h1 class="position">Delanteros</h1>
            <div>
                <div class="player" @click="renderPlayer(10)">10 - ALEXANDER</div>
                <div class="player" @click="renderPlayer(9)">9 - EL PILLO</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        emits: ["listenRender", "playerRequest"],
        methods:{
            goHome(){
                this.$emit("listenRender", "Home");
            },
            renderPlayer(n){
                this.$emit("playerRequest", n);
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

#players{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#players > div{
    display: flex;
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
    width: fit-content;
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