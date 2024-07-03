<script setup>
import { ref } from 'vue'
import About from './About.vue';
const counter = ref(true)
defineProps({
    counte: Number,
    // addcount
})

</script>
<template>
    <div :class="{ 'open': counter }">
        Hello
    </div>
    <p>{{ counte }}</p>
    <About>
        <template #age>Mon age</template>
        <template #title>Mon title</template>
    </About>
    <!-- <button @click="addcount">Ajouter un counter</button> -->
</template>



<style scoped>
.open {
    background-color: red;
}
</style>