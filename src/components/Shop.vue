<template>
    <div class="w-full h-full flex flex-col">
        <div class="w-full h-16 bg-[#232323] flex items-center">
            <button @click="goHome" class="w-16 md:w-32 h-full bg-[#f1121f]">&lt;</button>
        </div>
        <div class="w-full h-full flex flex-col md:flex-row items-center justify-around p-16 md:p-32 gap-16 md:gap-32">
            <div class="w-full h-full bg-[#232323]"></div>
            <div class="w-full h-full bg-[#232323]"></div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    emits: ["listenRender"],
    methods:{
        goHome(){
            this.$emit("listenRender", "Home");
        }
    }
}

</script>

<style scoped></style>