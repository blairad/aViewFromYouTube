import Vue from 'vue'
import App from './App.vue'
// import Ninjas from './Ninjas.vue'
// THIS IF FOR GLOBAL IMPORT
// Vue.component('ninjas', Ninjas);
// // importing the ninjas object from the Ninjas file at export default

new Vue({
  el: '#app',
  render: h => h(App)
})
