import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style/main.sass'
import blocks from '@/components/UI/blocks'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

blocks.forEach(component => {
  if (component) {
    console.log(component.__name)
    app.component(component.__name as string, component)
  }
})

app.mount('#app')
