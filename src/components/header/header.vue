<template>
	<header>
		<h1 @click="changeTitle">{{ title }}</h1>
	</header>
</template>

<script>
import { bus } from "../../main";
export default {
	props: {
		title: {
			type: String,
		}
	},
	methods: {
		changeTitle () {
			// this.$emit("changeAppTitle", "Vue wizards");
			this.title = "VUE wizards"
			bus.$emit("titleChanged", "Vue wizards2");
		}
	}
}
</script>

<style lang="scss" src="./header.scss" scoped>
</style>