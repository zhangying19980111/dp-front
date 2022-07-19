import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/LoginForm.vue')
  },
  {
    path: '/register',
    children: [
      {
        path: 'volunteer',
        component: () => import('@/views/register/VolunteerRegisterForm.vue')
      },
      {
        path: 'master',
        component: () => import('@/views/register/MasterRegisterForm.vue')
      }
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/components/news/src/News.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/main/project/index.vue'),
  },
  {
    path: '/project/info',
    component: () => import('@/views/main/project/info.vue')
  },
  {
    path: '/team',
    name: 'teamInfo',
    component: () => import('@/views/main/team/index.vue')
  },
  {
    path: '/team/info',
    name: 'team/Info',
    component: () => import('@/views/main/team/info.vue')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('@/views/main/activity/index.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('@/views/main/notice/index.vue')
  },
  {
    path: '/train',
    name: 'train',
    component: () => import('@/views/main/train/index.vue')
  },
  {
    path: '/check',
    children: [
      {
        path: 'team',
        children:[
          {
            path:'volTot',
            component:() => import('@/views/check/team/VolToTeam.vue')
          },
          {
            path:'volTop',
            component:() => import('@/views/check/team/VolToProject.vue')
          }
        ]
      },
      {
        path: 'organizer',
        children:[
          {
            path:'tcheck',
            component:() => import('@/views/check/organizer/TeamCheck.vue')
          },
          {
            path:'pcheck',
            component:() => import('@/views/check/organizer/ProjectCheck.vue')
          }
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
