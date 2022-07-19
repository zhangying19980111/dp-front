import { createApp } from 'vue'
import Main from './views/main/index.vue'
import router from './router'
import store from './store'

const app = createApp(Main)
app.use(store)
app.use(router)
app.mount('#app')
