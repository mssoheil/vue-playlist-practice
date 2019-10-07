<template>
	<div>
		<FormHelper>
			<div slot="form-header">
				<h3>Form Two - Log In</h3>
				<p>Enter your detail to login</p>
			</div>
			<div slot="form-fields">
				<input type="text" placeholder="username" required />
				<input type="password" placeholder="password" required />
			</div>
			<div slot="form-controls">
				<button @click="hanldeSubmit">Login</button>
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


<style lang="scss" src="./formTwo.scss" scoped>
</style>