import { createApp } from 'vue'
import App from './App.vue'
import { ElRow, ElCol } from 'element-plus'
import { router } from './routers'
const app = createApp(App)

app.component(ElRow.name, ElRow)
app.component(ElCol.name, ElCol)

app.use(router)
app.mount('#app')
