import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueAMap from 'vue-amap'
import persist from 'pinia-plugin-persistedstate'

//创建app并使用插件
const app = createApp(App)
app.config.productionTip = false
app.use(createPinia().use(persist))
app.use(router)
app.use(VueAMap)
app.mount('#app')
