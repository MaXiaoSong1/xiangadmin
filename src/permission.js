import router from './router'
import store from './store'
const whiteList = ['/login', '/404', '/401']

router.beforeEach((to, from, next) => {
  const token = store.getters.token
  console.log(token, '路由鉴权查看token是否存储')
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
