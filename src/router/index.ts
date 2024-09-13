import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import Index from '../views/Index.vue'
import TemplateDetail from '../views/TemplateDetail.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'template/:id', name: 'template', component: TemplateDetail },
    ],
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('../views/Editor.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
