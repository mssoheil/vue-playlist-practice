<template>
	<div>
		<h1>Please fill the form...</h1>
		<form>
			<div id="form-header">
				<slot name="form-header" />
			</div>
			<div id="form-fields">
				<slot name="form-fields" />
			</div>
			<div id="form-controls">
				<slot name="form-controls" />
			</div>
			<div id="useful-links">
				<ul>
					<li>
						<a href="#">Link 1</a>
					</li>
					<li>
						<a href="#">Link 2</a>
					</li>
					<li>
						<a href="#">Link 3</a>
					</li>
				</ul>
			</div>
		</form>
	</div>
</template>

<script>
export default {


}
</script>


<style lang="scss" src="./formHelper.scss" scoped>
</style>