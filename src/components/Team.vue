<template>
    <div class="w-full h-full flex flex-col">
        <div class="w-full h-16 bg-[#232323] flex items-center">
            <button @click="goHome" class="w-16 md:w-32 h-full bg-[#f1121f]">&lt;</button>
        </div>
        <div class="w-full h-full BG-[#f6f6f6] flex flex-col md:flex-row p-16 md:p-32 gap-16 md:gap-32">
            
            <div v-for="(group, index) in squad"
            class="w-full h-full text-[#f6f6f6] flex flex-col gap-4">

                <h1 class="text-[#232323]">{{ this.position[index] }}</h1>

                <div v-for="player in group"
                class="w-full h-16 bg-[#f1121f] flex gap-4 pl-2">
                    <div class="text-6xl basis-1/4">{{ player.n }}</div>
                    <div class="basis-3/4 flex flex-col justify-center items-start">
                        <p>{{ player.name}}</p>
                        <h1 class="text-xl"><b>{{ player.nickname }}</b></h1>
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
                position: ["Porteros", "Defensas", "Mediocentros", "Delanteros"]
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