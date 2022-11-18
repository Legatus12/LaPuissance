<template>
    <div class="w-full h-full flex flex-col">

        <Back @pressed="renderFather"/>

        <div class="w-full h-full flex flex-col md:flex-row items-center justify-around p-16 md:p-32 gap-16 md:gap-32">
            <p class="text-4xl md:text-8xl text-bold">EN DESARROLLO</p>
        </div>
    </div>
</template>

<script lang="ts">

import Back from './Back.vue';

export default {
    emits: ["rendering"],
    components: {Back},
    data(){
        return{
            father: "Home"
        }
    },
    methods:{
        renderFather(){
                this.$emit("rendering", this.father);
            }
    }
}

</script>

<style scoped></style>