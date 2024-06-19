import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueAMap, { initAMapApiLoader } from '@vuemap/vue-amap'
import '@vuemap/vue-amap/dist/style.css'
import persist from 'pinia-plugin-persistedstate'

//创建app并使用插件
initAMapApiLoader({
  key: '2e98a5aa0c9e643cc93950bccd7d90ee',
  securityJsCode: '0b9914b6e70ad68436af51e28e7c4876'
})
const app = createApp(App)
app.config.productionTip = false
app.use(createPinia().use(persist))
app.use(router)
app.use(VueAMap)

app.mount('#app')
