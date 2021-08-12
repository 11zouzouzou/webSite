import { createApp } from 'vue'
import App from './App.vue'
import { ElRow, ElCol, ElMenu, ElMenuItem, ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { router } from './routers'
import { key, store } from './store'
import 'element-plus/lib/theme-chalk/index.css' //引入默认css
const app = createApp(App)

app.component(ElRow.name, ElRow)
app.component(ElCol.name, ElCol)
app.component(ElMenu.name, ElMenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElButton.name, ElButton)
app.component(ElDropdown.name, ElDropdown)
app.component(ElDropdownMenu.name, ElDropdownMenu)
app.component(ElDropdownItem.name, ElDropdownItem)

app.use(store, key)
app.use(router)

app.mount('#app')
