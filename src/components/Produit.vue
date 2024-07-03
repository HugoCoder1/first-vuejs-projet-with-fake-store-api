<template>
    <div>
        <RouterLink to="/about">Go to About</RouterLink>
        <RouterLink to="/">Go to produit</RouterLink>
        <RouterLink v-for="(product, index) in  products" :key="index" :to="`/produit/${product.id}`">
            <div>
                <img :src="product.image" alt="" width="400" height="400">
                <p style="column-gap: 6px;">
                    {{ product.title }}<span color="red">{{ product.price }} $</span>
                </p>
            </div>
        </RouterLink>
    </div>
</template>

<script  setup>
import { onMounted, ref } from 'vue'
const products = ref([]);
onMounted(() => {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then((data) => products.value = data)
})

</script>

<style scoped></style>