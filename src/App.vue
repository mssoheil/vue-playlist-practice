<template>
	<div>
		<component :is="component"></component>
		<button @click="showComponent('FormOne')">Show form One</button>
		<button @click="showComponent('FormTwo')">Show form Two</button>
	</div>
</template>

<script>

import FormOne from "./components/formOne/formOne.vue";
import FormTwo from "./components/formTwo/formTwo.vue";

export default {
	name: 'app',
	components: {
		FormOne,
		FormTwo
	},
	data () {

		return {
			component: "FormOne"
		}
	},
	methods: {
		showComponent (component) {
			console.log(component);
			this.component = component;
		}
	}

}
</script>

<style lang="scss" scoped >
</style>
