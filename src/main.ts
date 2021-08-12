import { createApp } from 'vue'
import App from './App.vue'
import { ElRow, ElCol, ElMenu, ElMenuItem, ElButton } from 'element-plus'
import { router } from './routers'
import { key, store } from './store'
const app = createApp(App)

app.component(ElRow.name, ElRow)
app.component(ElCol.name, ElCol)
app.component(ElMenu.name, ElMenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElButton.name,ElButton)

app.use(store, key)
app.use(router)

app.mount('#app')
