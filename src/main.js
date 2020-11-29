import 'core-js/stable'
import Vue from 'vue'
import('@/components');
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from '@/store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import Notifications from 'vue-notification'
import YmapPlugin from 'vue-yandex-maps'

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Vuelidate)
// //Vue.use(Notifications)

// //Vue.use(VueAxios, axios)
Vue.prototype.yamapSettings = {
  apiKey: '4c4fe002-99a8-444b-828a-78624524b705',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YmapPlugin, Vue.yamapSettings);

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
