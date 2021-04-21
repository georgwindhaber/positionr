import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import App from "./App.vue";
import Root from "./Root.vue";
import Position from "./pages/Position/Position.vue";
import "./index.css";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const history = createWebHistory();
const routes = [
  { path: "/", component: App },
  { path: "/position/:id", component: Position },
];
const router = createRouter({
  history,
  routes,
});

createApp(Root).use(router).mount("#app");
