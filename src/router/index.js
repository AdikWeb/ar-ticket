import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

import Dashboard from '@/views/Dashboard'
import Page404 from '@/views/pages/Page404'
import Login from '@/views/pages/Login'
Vue.use(Router)


//!gifts pages
import giftPointsList from '@/views/pages/gifts/gift-points-list'


function configRoutes() {
  return [
    {
      path: '/',
      name: 'Home',
      redirect: "/panel",
      component: TheContainer,
      children: [
        {
          path: 'panel',
          name: 'Главная панель',
          component: Dashboard,
          meta: { auth: true, permission: true, title: 'Главная панель' },
        }, {
          path: 'users',
          name: 'Пользователи',
          component: Dashboard,
          meta: { auth: true, permission: true, title: 'Пользователи' },
        }, {
          path: 'contractors',
          name: 'Контрагенты',
          component: Dashboard,
          meta: { auth: true, permission: true, title: 'Контрагенты' },
        }, {
          path: 'types-of-gifts',
          name: 'Типы подарков',
          component: Dashboard,
          meta: { auth: true, permission: true, title: 'Типы подарков' },
        }, {
          path: 'gifts-points',
          name: 'Точки выдачи подарков',
          component: giftPointsList,
          meta: { auth: true, permission: true, title: 'Точки выдачи подарков' },
        }, {
          path: 'maps',
          name: 'Карты',
          component: Dashboard,
          meta: { auth: true, permission: true, title: 'Карты' },
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