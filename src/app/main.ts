import { createApp, h } from 'vue'
import './styles/style.css'
import App from './ui.vue'
import router from "./router";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createPinia} from 'pinia'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()

const app = createApp({
  render: () => h(App),
})

app
    .use(pinia)
    .use(router)
    .use(vuetify)
    .mount('#app')
