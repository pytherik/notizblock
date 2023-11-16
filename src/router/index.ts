import { createRouter, createWebHashHistory } from "vue-router";
import ViewNotes from "@/views/ViewNotes.vue";
import ViewStats from "@/views/ViewStats.vue";

const routes = [
  { path: '/', name: 'home', component: ViewNotes},
  { path: '/stats', name: 'stats', component: ViewStats},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;