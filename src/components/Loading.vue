<template>
    <div class="w-full h-full flex flex-col justify-center items-center gap-16">
        <img src="../assets/img/escudonn.png" class="w-24 absolute">
        <half-circle-spinner
        :animation-duration="1000"
        :size="240"
        color="#f1121f"
        />
    </div>
</template>

<script>

import { HalfCircleSpinner } from 'epic-spinners'

export default {
    components: {HalfCircleSpinner}
}

</script>

<style scoped></style>