import { createApp } from 'vue'
import i18n from './i18n' 
import { createVuestic } from 'vuestic-ui' 
import { createGtm } from '@gtm-support/vue-gtm' // Google Tag Manager

import stores from './stores' // Vuex stores
import router from './router' // Vue Router
import vuesticGlobalConfig from './services/vuestic-ui/global-config' // Vuestic UI config
import App from './App.vue' // Main App component

const app = createApp(App)

// Use Vuex store
app.use(stores)
// Use Vue Router
app.use(router)
// Use Vue I18n
app.use(i18n)
// Use Vuestic UI with custom configuration
app.use(createVuestic({ config: vuesticGlobalConfig }))

// Conditionally use Google Tag Manager if enabled
if (import.meta.env.VITE_APP_GTM_ENABLED) {
  app.use(
    createGtm({
      id: import.meta.env.VITE_APP_GTM_KEY,
      debug: false,
      vueRouter: router, // Integrate GTM with Vue Router
    }),
  )
}

// Mount the Vue application
app.mount('#app')
