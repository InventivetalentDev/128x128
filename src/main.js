import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import ImageUploader from 'vue-image-upload-resize'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.config.productionTip = false

Vue.use(VueMaterial);
Vue.use(ImageUploader);

new Vue({
  render: h => h(App),
}).$mount('#app')
