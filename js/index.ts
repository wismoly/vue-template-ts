import Vue from 'vue';
import App from '../components/App.vue';
<% if (router) { %>import router from '../router/index.ts';<% } %>
import '../css/index.less';

import {
  mc,
  MicoJSBridge,
  request,
  getPlatform,
  getSystemInfo,
  proxyUrl,
  args,
  <% if (sentry) { %> initSentry,<% } %>
} from 'mico-base-common';

mc.install(MicoJSBridge);
mc.install(request);
mc.install(proxyUrl);
mc.install(getPlatform);
mc.install(args);
mc.install(getSystemInfo);
<% if (sentry) { %>mc.install(initSentry);

Vue.prototype.$mc = mc;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
