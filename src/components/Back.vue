<template>
    <button @click="press" class="w-16 md:w-32 h-full duration-300 bg-[#f1121f] hover:bg-[#f54f59] text-5xl text-[#232323]">
        <div class="w-full h-full flex justify-center items-center duration-300 md:hover:-translate-x-3 text-[#f6f6f6]">&lt;</div>
    </button>
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