import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login'),
    meta: {
      showTabbar: false,
      title: '登录'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      showTabbar: true,
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      showTabbar: true,
      title: '关于'
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/list'),
    meta: {
      showNav: true,
      title: '列表'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  if (!localStorage.getItem('mToken') && to.name !== 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
