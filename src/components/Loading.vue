<template>
    <div class="w-full h-full flex flex-col justify-center items-center gap-16">
        <!--<img src="../assets/img/escudo.png" class="w-48 md:w-80">-->
        <breeding-rhombus-spinner
        :animation-duration="2000"
        :size="100"
        color="#f1121f"
        />
    </div>
</template>

<script>

import { BreedingRhombusSpinner } from 'epic-spinners'

export default {
    components: {BreedingRhombusSpinner}
}

</script>

<style scoped></style>