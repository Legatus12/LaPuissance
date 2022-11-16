<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 bg-[#232323] flex justify-between items-center border-solid border-b-4 border-[#f6f6f6]">
            <button @click="goHome" class="w-16 md:w-32 h-full text-5xl text-[#f6f6f6] border-solid border-r-4 border-[#f6f6f6]">
                <div class="duration-300 md:hover:-translate-x-3">&lt;</div>
            </button>
            <h1 class="text-3xl md:text-4xl font-bold px-8">TIENDA</h1>
        </div>

        <div class="w-full h-full flex flex-col md:flex-row items-center justify-around p-16 md:p-32 gap-16 md:gap-32">
            <p class="text-4xl md:text-8xl text-bold">EN DESARROLLO</p>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    emits: ["rendering"],
    methods:{
        goHome(){
            this.$emit("rendering", "Home");
        }
    }
}

</script>

<style scoped></style>