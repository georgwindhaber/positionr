import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import Root from "./Root.vue";

// Import Pages
import List from "./pages/Position/List.vue";
import Create from "./pages/Position/Create.vue";
import Position from "./pages/Position/Position.vue";
import Update from "./pages/Position/Update.vue";

import "./index.css";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const history = createWebHistory();
const routes = [
  { path: "/", component: List },
  { path: "/position/create", component: Create },
  { path: "/position/:id", component: Position },
  { path: "/position/edit/:id", component: Update },
];
const router = createRouter({
  history,
  routes,
});

createApp(Root).use(router).mount("#app");
