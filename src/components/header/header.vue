<template>
	<header>
		<h1 @click="changeTitle">{{ title }}</h1>
	</header>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
		}
	},
	methods: {
		changeTitle () {
			this.$emit("changeAppTitle", "Vue wizards");
		}
	}
}
</script>

<style lang="scss" src="./header.scss" scoped>
</style>