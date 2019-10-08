<template>
	<div>
		<AddBlog></AddBlog>
		<ShowBlogs></ShowBlogs>
	</div>
</template>

<script>

// shared components
import AddBlog from "./components/addBlog/addBlog";
import ShowBlogs from "./components/showBlogs/showBlogs";

export default {
	name: 'app',
	components: {
		AddBlog,
		ShowBlogs
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
