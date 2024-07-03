import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import About from "../src/components/About.vue";
import Produit from "../src/components/Produit.vue";
import ProductDetail from "../src/components/ProductDetail.vue";
import { createMemoryHistory, createRouter } from "vue-router";

const app = createApp(App);

const routes = [
  { path: "/", component: Produit },
  { path: "/about", component: About },
  { path: "/produit/:id", component: ProductDetail },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.use(router);
app.mount("#app");
