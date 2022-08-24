import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layout/MainLayout.vue'),
    children: [
        { path: '', component: () => import('../pages/index.vue'), name:"home" },
        { path: 'algo', component: () => import('../pages/algo.vue'), name:"algo" },
        // { path: ':gid/space/:mid', component: () => import('../pages/space.vue'), name:"space" },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)
export default router