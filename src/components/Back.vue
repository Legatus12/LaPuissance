<template>
    <div class="w-full h-16 flex justify-between items-center border-solid border-b-4 border-[#f6f6f6]">
        <button @click="press" class="w-16 md:w-32 h-full duration-300 hover:bg-[#f1121f] text-5xl text-[#f6f6f6] border-solid border-r-4 border-[#f6f6f6]">
            <div class="w-full h-full flex justify-center items-center duration-300 md:hover:-translate-x-3">&lt;</div>
        </button>
        <h1 class="text-3xl md:text-4xl font-bold px-8">TEMPORADA</h1>
    </div>
</template>

<script>

export default {
    emits: ["pressed"],
    methods:{
        press(){
            this.$emit("pressed");
        }
    }
}

</script>

<style></style>