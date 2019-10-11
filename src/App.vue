<template>
	<div>
		<!-- <AddBlog></AddBlog> -->
		<!-- <ShowBlogs />
		<ListBlogs />-->
		<router-view></router-view>
	</div>
</template>

<script>

// shared components
import AddBlog from "components/addBlog/addBlog";
import ShowBlogs from "components/showBlogs/showBlogs";
import ListBlogs from "components/listBlogs/listBlogs";

export default {
	name: 'app',
	components: {
		AddBlog,
		ShowBlogs,
		ListBlogs
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
