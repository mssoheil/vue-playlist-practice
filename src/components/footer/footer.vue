<template>
	<footer>
		<p>{{ copyright }}</p>
	</footer>
</template>

<script>
export default {
	props: {
		copyright: String
	}
}
</script>

<style lang="scss" src="./footer.scss" scoped>
</style>