<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 flex justify-between items-center">
            <Back @pressed="backHome"/>
            <h1 class="text-3xl md:text-4xl font-black px-8">CLUB</h1>
        </div>

        <div class="w-full h-full bg-[#232323] text-[#f6f6f6] flex flex-col md:flex-row items-center justify-around p-16 md:p-32 gap-16 md:gap-32">
            <p class="text-4xl md:text-6xl text-bold">EN DESARROLLO</p>
        </div>
    </div>
</template>

<script lang="ts">

import Back from './Back.vue';

export default {
    emits: ["rendering"],
    components: {Back},
    methods:{
        backHome(){
            this.$emit("rendering", "Home");
        }
    }
}

</script>

<style scoped></style>