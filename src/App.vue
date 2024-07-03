<script setup>
import Header from './components/Header.vue';
import { ref } from 'vue';
const count = ref(0);
function addcounter() {
  count.value++;
}


</script>

<template>
  
  
  <RouterView />

  <!-- <RouterLink to="/about">Go to About</RouterLink>
 
  <Header :counte=count :addcount=addcounter /> -->
</template>

<style scoped></style>
