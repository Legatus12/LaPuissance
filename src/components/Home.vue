<template>
    <div id="home">
        
        <div id="image"></div>

        <div id="grid">
            <div id="g1" class="g" @click="render('Team')">
                <h1>Equipo</h1>
                <p>Plantilla y estadísticas individuales.</p>
            </div>

            <div id="g2" class="g" @click="render('Shop')">
                <h1>Tienda</h1>
                <p>Échale un ojo a nuestras equipaciones.</p>
            </div>

            <div id="g3" class="g" @click="render('Season')">
                <h1>Temporada <br> 22/23</h1>
                <p>Partidos y clasificación.</p>
            </div>

            <div id="g4" class="g" @click="render('News')">
                <h1>Noticias</h1>
                <div>
                    <p>Última noticia- 4/11/22</p>
                    <b><i>¡Francisco Caballero vuelve al Equipo!</i></b>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        emits: ["listenRender"],
        methods:{
            render(c){
                this.$emit("listenRender", c);
            }
        }
    }
</script>

<style scoped>

#home{
    width: 100%;
    height: 100%;
    display: flex;
}

#home > div{
    width: 50%;
    height: 100%;
    overflow: hidden;
}

#image{
    background-image: url("../assets/img/_MCD7206.jpg");
    background-position: center;
    background-size: cover;
}

#grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}

h1{
    font-size: 32px;
    transition: 250ms;
}

p,i{
    font-size: 20px;
}

.g{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10%;
    overflow: hidden;
}

.g:hover{
    cursor: pointer;
}

.g:hover > h1{
    transform: translateX(6%);
    padding-left: 6%;
    box-shadow: -10px 0 #f6f6f6;
}

#g4:hover > h1{
    box-shadow: -10px 0 #232323;
}

#g1{
    background-color: #f1121f;
    color: #f6f6f6;
}

#g2, #g3{
    background-color: #232323;
    color: #f6f6f6;
}

#g4{
    background-color: #f6f6f6;
    color: #232323;
}

</style>