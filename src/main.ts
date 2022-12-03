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
  console.log(component);
  app.component(component?.__name, component)
})

app.mount('#app')
