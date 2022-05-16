import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    path: '/user',
    name: 'userUI',
    component: ()=>import("@/views/user/UserUI.vue"),
    redirect: '/user/index',
    children:[
      {
        path: 'index',
        name: 'index',
        component: ()=>import("@/views/user/page/UserIndex.vue")
      },
      {
        path: 'blog',
        name: 'blog',
        component: ()=>import("@/views/user/page/UserBlog.vue")
      },
      {
        path: 'project',
        name: 'project',
        component: ()=>import("@/views/user/page/UserProject.vue")
      },
      {
        path: 'info',
        name: 'info',
        component: ()=>import("@/views/user/page/UserInfo.vue")
      },

    ]
  },
  {
    path: '/admin',
    name: 'adminUI',
    component: ()=>import("@/views/admin/AdminUI.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
