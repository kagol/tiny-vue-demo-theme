import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import TinyThemeTool from '@opentiny/vue-theme/theme-tool'
import { tinySmbTheme } from '@opentiny/vue-theme/theme'

const app = createApp(App)

const theme = new TinyThemeTool('', 'tinyStyleSheetId') // 初始化主题
app.config.globalProperties.theme = theme // 将 theme 对象挂到 vue 实例中


app.mount('#app')
