import { createApp } from 'vue'
import Main from './views/main/index.vue'
import router from './router'
import store from './store'
import { setupStore, setupTeamStore } from './store/'


const app = createApp(Main)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
