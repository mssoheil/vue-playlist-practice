<template>
	<footer>
		<p>{{ copyright }}</p>
	</footer>
</template>

<script>
import { bus } from "../../main";
export default {
	props: {
		copyright: {
			type: String
		}
	},
	// fires when the component is created
	created () {
		bus.$on("titleChanged", (data) => {
			this.copyright = data;
		})
	}
}
</script>

<style lang="scss" src="./footer.scss" scoped>
</style>