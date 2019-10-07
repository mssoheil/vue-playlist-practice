<template>
	<div id="ninjas">
		<slot name="title" />
		<h1>I am the form helper</h1>
		<!-- it's somehow like the children in react -->
		<slot name="text" />
	</div>
</template>

<script>
export default {


}
</script>


<style lang="scss" src="./formHelper.scss" scoped>
</style>