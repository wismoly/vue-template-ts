import Vue from 'vue';
import App from '../components/App.vue';
import router from '../router/index.ts';
import '../css/index.less';

import {
  mc,
  MicoJSBridge,
  request,
  getPlatform,
  getSystemInfo,
  proxyUrl,
  args
} from 'mico-base-common';

mc.install(MicoJSBridge);
mc.install(request);
mc.install(proxyUrl);
mc.install(getPlatform);
mc.install(args);
mc.install(getSystemInfo);
Vue.prototype.$mc = mc;
import { Dialog, Toast } from 'vant';
Vue.use(Dialog);
Vue.use(Toast);
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
