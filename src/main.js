/*
 * @Author: 张帅 77367582@qq.com
 * @Date: 2023-12-24 21:03:53
 * @LastEditors: 张帅 77367582@qq.com
 * @LastEditTime: 2024-01-08 20:27:01
 * @FilePath: /shuaizi-plus/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入样式文件
import './assets/main.css'
import './styles/index.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

// 引入自定义组件
import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import Card from './components/Card/Card.vue'
import Dialog from './components/Dialog/Dialog.vue'
import Pager from './components/Pager/Pager.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'

const app = createApp(App)

// 注册fontawesome组件
app.component('font-awesome-icon', FontAwesomeIcon)

// 注册自定义组件
app.component('Sz-Icon', Icon)
app.component('Sz-Button', Button)
app.component('Sz-Card', Card)
app.component('Sz-Dialog', Dialog)
app.component('Sz-Pager', Pager)
app.component('Sz-Collapse', Collapse)
app.component('Sz-CollapseItem', CollapseItem)
app.component('Sz-Tooltip', Tooltip)

app.use(router)

app.mount('#app')
