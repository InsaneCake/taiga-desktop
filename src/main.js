import { createApp } from 'vue'
import App from './App.vue'

import { VuesticPlugin, createIconsConfig } from 'vuestic-ui'
// import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'

import '@mdi/font/css/materialdesignicons.css'

import router from './router'
import store from './store'

const aliases = []

const fonts = [
    {
    name: 'mdi {code}',
    resolve: ({ code }) => ({
        class: `mdi ${code}`
    }),
    },
]

createApp(App)
.use(store)
.use(router)
.use(VuesticPlugin,
    {
            icons: createIconsConfig({ aliases, fonts }),
            components: {
                VaButton: {
                    rounded: false,
                    size: 'large',
                    gradient: true
                },
            },
            colors: {
                primary: '#52B69A',
                secondary: '#767C88',
                background: '#232A3E',
                success: '#40e583',
                info: '#2c82e0',
                danger: '#DE1041',
                warning: '#FFAC0A',
                gray: '#babfc2',
                dark: '#1B1A1F',
                divider: '#E1E9F8',

                accent: '#EE6C4D',
                appbackground: '#293241',
                appbar: '#232A3E',
                appbartrans: '#232A3Ecc',
                font: '#ffffffee',
                fontlowcontrast: '#ffffff77',
                hover: '#ffffff10',
            },
        }
    )
.mount('#app')