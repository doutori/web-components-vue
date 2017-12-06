import Vue from 'vue'
import App from './components/App.vue'

// WebComponentsを明示的にignore指定
Vue.config.ignoredElements = [
  'wc-button-red'
];

new Vue({
  el: '#app',
  render: h => h(App)
});
