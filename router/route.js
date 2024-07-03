import { createMemoryHistory, createRouter } from "vue-router";
import Header from "../src/components/Header.vue";
import About from "../src/components/About.vue";
import Produit from "../src/components/Produit.vue";
import App from "../src/App.vue";

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: "/", component: App },
    { path: "/about", component: About },
    { path: "/produit", component: Produit },
  ],
});
