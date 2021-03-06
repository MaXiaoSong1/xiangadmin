import { createStore } from 'vuex'
import getters from './getters'
import user from './modules/user'
import menu from './modules/menu'
export default createStore({
  getters,
  modules: {
    user,
    menu
  }
})
