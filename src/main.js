import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";

Vue.config.productionTip = false;

// event bus
export const bus = new Vue();

Vue.use(VueResource);

new Vue({
	render: h => h(App),
}).$mount("#app");
