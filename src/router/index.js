import Vue from 'vue'
import VueRouter from 'vue-router'
import Tourism from '@/views/TouristAttraction';

Vue.use(VueRouter)

const routes = [
  {
    path: '/tourism',
    name: 'Tourism',
    component: Tourism
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
