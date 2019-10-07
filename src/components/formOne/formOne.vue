<template>
	<div>
		<FormHelper>
			<div slot="form-header">
				<h3>Form One - Contact Us</h3>
				<p>Fill in the form to contact us</p>
			</div>
			<div slot="form-fields">
				<input type="text" placeholder="name" required />
				<label>Your message:</label>
				<textarea></textarea>
			</div>
			<div slot="form-controls">
				<button @click="hanldeSubmit">Send</button>
			</div>
		</FormHelper>
	</div>
</template>

<script>

import FormHelper from "../formHelper/formHelper.vue";

export default {

	components: {
		FormHelper
	}
}
</script>


<style lang="scss" src="./formOne.scss" scoped>
</style>