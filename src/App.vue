<template>
	<div>
		<FormHelper>
			<div slot="form-header">
				<h3>This is the title of the form</h3>
				<p>Information about the form</p>
			</div>
			<div slot="form-fields">
				<input type="text" placeholder="name" required />
				<input type="password" placeholder="password" required />
			</div>
			<div slot="form-controls">
				<button @click="hanldeSubmit">Submit</button>
			</div>
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
