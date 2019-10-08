<template>
	<div>
		<AddBlog></AddBlog>
	</div>
</template>

<script>

// shared components
import AddBlog from "./components/addBlog/addBlog";

export default {
	name: 'app',
	components: {
		AddBlog
	},
	data () {

		return {
		}
	},
	methods: {
	}

}
</script>

<style lang="scss" src="./App.scss" scoped />
