<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full h-16 bg-[#232323] flex justify-between items-center">
            <button @click="goHome" class="w-16 md:w-32 h-full bg-[#f1121f] text-5xl text-[#f6f6f6]">
                <div class="duration-300 md:hover:-translate-x-4">&lt;</div>
            </button>
            <h1 class="text-[#f6f6f6] text-3xl md:text-4xl px-8">Tienda</h1>
        </div>

        <div class="w-full h-full flex flex-col md:flex-row items-center justify-around p-16 md:p-32 gap-16 md:gap-32">
            <div class="w-full h-full bg-[#232323]"></div>
            <div class="w-full h-full bg-[#232323]"></div>
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