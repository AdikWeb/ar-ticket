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
import createGiftPoint from '@/views/pages/gifts/create-gift-point'
import typeOfGiftsList from '@/views/pages/gifts/type-of-gifts-list'
import createTypeOfGifts from '@/views/pages/gifts/create-type-of-gift'

//user pages
import userList from '@/views/pages/users/users-list'
import userCreate from '@/views/pages/users/user-create'
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
          component: userList,
          meta: { auth: true, permission: true, title: 'Пользователи' },
        },{
          path: 'user/create',
          name: 'Создание Пользователя',
          component: userCreate,
          meta: { auth: true, permission: true, title: 'Пользователи' },
        }, {
          path: 'contractors',
          name: 'Контрагенты',
          component: Dashboard,
          meta: { auth: true, permission: true, title: 'Контрагенты' },
        }, {
          path: '/types-of-gifts/',
          name: 'Типы подарков',
          redirect: '/types-of-gifts/list',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          meta: { auth: true, permission: true, title: 'Точки выдачи подарков' },
          children: [
            {
              path: 'list',
              name: 'Список Типов Подарков',
              component: typeOfGiftsList,
              meta: { auth: true, permission: true, title: 'Список типов подарков' },
            }, {
              path: 'create',
              name: 'Создать тип подарка',
              component: createTypeOfGifts,
              meta: { auth: true, permission: true, title: 'Создать тип подарка' },
            },
          ]
        },  {
          path: '/gifts-points/',
          name: 'Точки выдачи подарков',
          redirect: '/gifts-points/list',
          component: {
            render(c) {
              return c('router-view')
            }
          },
          meta: { auth: true, permission: true, title: 'Точки выдачи подарков' },
          children: [
            {
              path: 'list',
              name: 'Список',
              component: giftPointsList,
              meta: { auth: true, permission: true, title: 'Точки выдачи подарков' },
            }, {
              path: 'create',
              name: 'Создать точку выдачи подарков',
              component: createGiftPoint,
              meta: { auth: true, permission: true, title: 'Создать точку выдачи подарков' },
            },
          ]
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