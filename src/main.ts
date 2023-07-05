import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 导入 ElementPlus 组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入 ElementPlusIconsVue 字体图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// 使用 ElementPlus 组件
app.use(ElementPlus)
// 使用
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
