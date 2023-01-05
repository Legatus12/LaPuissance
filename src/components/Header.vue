<template>
    <div class="w-full flex justify-between items-center p-4 md:p-8 border-solid border-b-2 border-[#f6f6f6]">
        <button @click="goBack" class="w-12 md:w-16 h-12 md:h-16 duration-300">
            <div class="w-full h-full flex justify-center items-center text-3xl font-mono duration-300 bg-[#f6f6f6] hover:bg-[#f1121f] rounded-full">
                <img src="../assets/img/back.png" class="w-6 md:w-10">
            </div>
        </button>
        <h1 class="font-black text-3xl md:text-5xl">{{ title }}</h1>
    </div>
</template>


<script setup>

const emits = defineEmits(["back"]);

const props = defineProps({title: String});

const goBack = () => {
    emits("back");
}

</script>


<style scoped>

</style>