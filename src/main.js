import Vue from "vue";
import App from "./App.vue";

import VueResource from "vue-resource";
import VueRouter from "vue-router";

import Routes from "./routes";

Vue.config.productionTip = false;

// event bus
export const bus = new Vue();

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: Routes
});

// custom directives
// Vue.directive("rainbow", {
// 	// vnode -> virtual node
// 	// binding -> value passed
// 	// el -> element itself
// 	bind(el, binding, vnode) {
// 		const colorCode = () => parseInt(Math.random() * 255);
// 		el.style.color = `rgb(${colorCode()},${colorCode()},${colorCode()})`;
// 	},
// });

Vue.directive("theme", {
	bind(el, binding, vnode) {
		const {
			value,
			arg
		} = binding;
		if (value === "wide") {
			el.style.maxWidth = "1200px";
		} else if (value === "narrow") {
			el.style.maxWidth = "560px";
		}
		if (arg === "column") {
			el.style.background = "#ddd";
			el.style.padding = "20px";
		}
	},
});

// Filters
// Vue.filter("to-uppercase", value => {
// 	return value.toUpperCase();
// });

Vue.filter("snippet", value => `${value.slice(0, 50)}...`);

new Vue({
	render: h => h(App),
	router: router
}).$mount("#app");