import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reseet.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission'
// import * as echarts from 'echarts'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(store).use(ElementPlus).use(router).mount('#app')
