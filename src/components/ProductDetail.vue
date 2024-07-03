<template>
    <div>
        <img :src="product.image" alt="Image du produit">
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const product = ref([]);
onMounted(() => {
    fetch(`https://fakestoreapi.com/products/${route.params.id}`)
        .then(res => res.json())
        .then((data) => product.value = data)
})


</script>

<style></style>