// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './Index.vue'
import router from './router'
import axios from 'axios'; // 引入http
import { AddressEdit,Uploader,Icon,ContactCard, ContactList, ContactEdit,Popup } from 'vant';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.component(AddressEdit.name, AddressEdit);       // 暂时无法直接在子模版中直接引入
Vue.component(Uploader.name, Uploader);             // 上传
Vue.component(Icon.name, Icon);                     // icon图
Vue.component(Popup.name, Popup);                   // 弹出层
Vue.component(ContactCard.name, ContactCard);       // 联系人展示卡片
Vue.component(ContactList.name, ContactList);       // 联系人列表
Vue.component(ContactEdit.name, ContactEdit);       // 编辑联系人

const FastClick = require('fastclick');
FastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
