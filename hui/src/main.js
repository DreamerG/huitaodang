// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router"

import Header from './components/Header';
Vue.component(Header.name, Header);
import Footers from './components/Footers';
Vue.component(Footers.name, Footers);
import Listx from './components/Listx';
Vue.component(Listx.name, Listx);
import Listblank from './components/Listblank';
Vue.component(Listblank.name, Listblank);

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
