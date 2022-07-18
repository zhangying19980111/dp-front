import { createApp } from 'vue'
import Main from './views/main/index.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(Main)
app.use(store)
app.use(router)
// app.use(ElementPlus, {
//     locale: zhCn
// })
app.mount('#app')
