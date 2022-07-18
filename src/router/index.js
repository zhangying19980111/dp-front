import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect:'/main'
  },
  {
    path: '/login',
    component:() => import('@/views/login/LoginForm.vue')
  },
  {
    path: '/register',
    children:[
      {
        path:'volunteer',
        component:() => import('@/views/register/VolunteerRegisterForm.vue')
      },
      {
        path:'master',
        component:() => import('@/views/register/MasterRegisterForm.vue')
      }
    ]
  },
  {
    path:'/main',
    name:'main',
    component:() => import('@/components/news/src/News.vue')
  },
  {
    path:'/project',
    name:'project',
    component:() => import('@/views/main/project/index.vue')
  },
  {
    path:'/team',
    name:'team',
    // component:() => import('@/views/main/project/test.vue')
  },
  {
    path:'/activity',
    name:'activity',
    // component:() => import('@/views/main/project/test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
