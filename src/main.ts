/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// i18n
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

// vue router
import router from '@/router/index'

// eslint-disable-next-line import/default
import App from './App.vue'

import 'virtual:windi.css'

// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import 'virtual:windi-devtools'
import '@/assets/styles/index.scss'
import { getSavedLanguage } from './utils/i18n'

const i18n = createI18n({
    locale: getSavedLanguage() || 'zh-CN',
    messages,
})

const app = createApp(App)

app.use(router).use(i18n).mount('#app')
