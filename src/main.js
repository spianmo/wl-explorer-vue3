import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
const app = createApp(App);
import locale from 'element-plus/lib/locale/lang/zh-cn' // 设置语言
import 'element-plus/dist/index.css'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'
import { transElIconName } from './util/index'
import { videoPlayer } from "vue-video-player";
app.config.productionTip = false
app.config.globalProperties.$contextmenu = ContextMenu;
import * as ElIconModules from '@element-plus/icons'
for (let iconName in ElIconModules) {
  app.component(transElIconName(iconName), ElIconModules[iconName])
}
// 引入文件管理器
app.use(ContextMenu).use(ElementPlus, {
  locale,
  size: "large",
  button: {
    autoInsertSpace: true
  }
}).use(videoPlayer).mount('#app');

