import { createApp } from 'vue'
import App from './App.vue'
import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/dist/vuestic-ui.css'

createApp(App).use(
    VuesticPlugin,
    {
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
            background: '#3F4D64',
            success: '#40e583',
            info: '#2c82e0',
            danger: '#DE1041',
            warning: '#FFAC0A',
            gray: '#babfc2',
            dark: '#1B1A1F',
            divider: '#E1E9F8',

            accent: '#EE6C4D',
            appbackground: '#293241',
            font: '#fff'
        },
    }
    ).mount('#app')