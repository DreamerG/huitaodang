// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from "./router"
import store from "./vuex/store"
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import { Toast } from 'mint-ui';

import Header from './components/Header';
Vue.component(Header.name, Header);
import Footers from './components/Footers';
Vue.component(Footers.name, Footers);
import Listx from './components/Listx';
Vue.component(Listx.name, Listx);
import Listblank from './components/Listblank';
Vue.component(Listblank.name, Listblank);
import Swipes from './components/Swipes';
Vue.component(Swipes.name, Swipes);
import Listy from './components/Listy';
Vue.component(Listy.name, Listy);
import Header2 from './components/Header2';
Vue.component(Header2.name, Header2);
import Footer2 from './components/Footer2';
Vue.component(Footer2.name, Footer2);
import Common from './components/Common';
Vue.component(Common.name, Common);
import Dis from './components/Dis';
Vue.component(Dis.name, Dis);

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
