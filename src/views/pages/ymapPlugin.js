import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {  
    apiKey: '4c4fe002-99a8-444b-828a-78624524b705',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1' 
} // настройки плагина

Vue.use(YmapPlugin, settings);