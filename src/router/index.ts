import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/HomeView.vue'
import DashView from '../views/DashView.vue'
import useAuth from '@/store/index'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      requireAuth:false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta:{
      requireAuth:false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashView,
    meta:{
      requireAuth:true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to,from,next)=>{
  const auth= useAuth()

  const isAuth=auth.token


  if(to.meta.requireAuth && isAuth == null){
    next('login')
  }
  else{
    next()
  }
})
export default router
