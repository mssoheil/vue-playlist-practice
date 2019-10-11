<template>
	<div>
		<!-- <AddBlog></AddBlog> -->
		<!-- <ShowBlogs />
		<ListBlogs />-->
		<Navigation />
		<router-view></router-view>
	</div>
</template>

<script>

// shared components
import AddBlog from "components/addBlog/addBlog";
import ShowBlogs from "components/showBlogs/showBlogs";
import ListBlogs from "components/listBlogs/listBlogs";
import Navigation from "components/navigation/navigation";

export default {
	name: 'app',
	components: {
		AddBlog,
		ShowBlogs,
		ListBlogs,
		Navigation
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
