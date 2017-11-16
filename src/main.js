import Vue from 'vue'
import App from './App'
import IView from 'iview'
import '../node_modules/iview/dist/styles/iview.css'

Vue.use(IView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
