<template>
    <button @click="goBack" class="w-12 h-12 duration-300">
        <div class="w-full h-full flex justify-center items-center text-3xl pb-1 font-mono duration-300 hover:bg-[#f1121f] rounded-full">&lt;</div>
    </button>
</template>

<script>

export default {
    emits: ["back"],
    methods:{
        goBack(){
            this.$emit("back");
        }
    }
}

</script>

<style></style>