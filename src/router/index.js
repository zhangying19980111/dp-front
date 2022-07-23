import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/LoginForm.vue"),
    meta: { name: "login" },
  },
  {
    path: "/register",
    children: [
      {
        path: "volunteer",
        name: "register.volunteer",
        component: () => import("@/views/register/VolunteerRegisterForm.vue"),
        meta: { name: "register.volunteer" },
      },
      {
        path: "master",
        name: "register.master",
        component: () => import("@/views/register/MasterRegisterForm.vue"),
        meta: { name: "register.master" },
      },
    ],
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main/main.vue"),
    meta: { name: "main" },
  },
  {
    path: "/project",
    name: "project",
    component: () => import("@/views/main/project/index.vue"),
    meta: { name: "project" },
  },
  {
    path: "/project/info",
    name: "project.info",
    component: () => import("@/views/main/project/info.vue"),
    meta: { name: "project.info" },
  },
  {
    path: "/team",
    name: "team",
    component: () => import("@/views/main/team/index.vue"),
    meta: { name: "team" },
  },
  {
    path: "/team/info",
    name: "team.info",
    component: () => import("@/views/main/team/info.vue"),
    meta: { name: "team.info" },
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("@/views/main/activity/index.vue"),
    // component: () => import("@/views/check/ActionWord.vue"),
    meta: { name: "activity" },
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/views/main/notice/index.vue"),
  },
  {
    path:'/notic/info',
    component: () => import("@/views/check/ActionWord.vue"),
  },
  {
    path: "/train",
    name: "train",
    component: () => import("@/views/main/train/index.vue"),
    meta: { name: "train" },
  },
  {
    path: "/check",
    component: () => import("@/views/check/index.vue"),
  },
  /*
  {
    path: '/check',
    children: [
      {
        path: 'team',
        children:[
          {
            path:'volTot',
            name:'check.team.volTot',
            component:() => import('@/views/check/team/VolToTeam.vue'),
            meta:{name:'check.team.volTot'}
          },
          {
            path:'volTop',
            name:'check.team.volTop',
            component:() => import('@/views/check/team/VolToProject.vue'),
            meta:{name:'check.team.volTop'}
          }
        ]
      },
      {
        path: 'organizer',
        children:[
          {
            path:'tcheck',
            name:'check.organizer.tcheck',
            component:() => import('@/views/check/organizer/TeamCheck.vue'),
            meta:{name:'check.organizer.tcheck'}
          },
          {
            path:'pcheck',
            name:'check.organizer.pcheck',
            component:() => import('@/views/check/organizer/ProjectCheck.vue'),
            meta:{name:'check.organizer.pcheck'}
          }
        ]
      }
    ]
  },*/
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// 导航守卫

router.beforeEach((to) => {
  /*
  if (to.path !== '/login') {
    const token = sessionStorage.getItem('token')
    if (!token) {
      return '/login'
    }
  }*/
  if (to.path === "/check") {
    const token = sessionStorage.getItem("token");
    if (!token) {
      ElNotification({
        type: "warning",
        message: "亲，请先登录",
      });
      return "/login";
    }
  }
});

export default router;
