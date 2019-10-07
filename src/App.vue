<template>
	<div>
		<FormHelper>
			<h2 slot="title">{{title}}</h2>
			<p slot="text">{{text}}</p>
		</FormHelper>
	</div>
</template>

<script>

import FormHelper from "./components/formHelper/formHelper.vue";

export default {
	name: 'app',
	components: {
		FormHelper
	},
	data () {

		return {
			title: "I am dynamic the slot title",
			text: "I am the dynamic paragraph text for the slot"
		}
	},
	methods: {

	}

}
</script>

<style lang="scss" scoped >
</style>
