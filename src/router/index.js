import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

import Dashboard from '@/views/Dashboard'
import Page404 from '@/views/pages/Page404'
import Login from '@/views/pages/Login'
Vue.use(Router)



function configRoutes() {
  return [
    {
      path: '/',
      name: 'Home',
      redirect: "/dashboard",
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: { auth: true, permission: true },
        },
      ]
    },
    {
      path: '*',
      redirect: '/404',
      name: 'Pages',
      component: {
        render(c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: '/404',
          name: 'Page404',
          meta: { permission: true },
          component: Page404
        },
        {
          path: '/permission',
          name: 'Permission',
          meta: { permission: true },
          component: Page404
        },
        {
          path: '/login', name: 'login', component: Login,
        }
      ]
    }
  ]
}

import { getToken } from '@/utils/token'
const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function permission(a) {
  return a !== true ? a.includes(Store.getters.userRole) : true;
}

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth);
  const permissionAuth = to.meta.permission;
  if (!getToken() && requireAuth) {
    next("/login");
  } else {
    document.title = to.meta.title
    next();
  }
});


export default router;