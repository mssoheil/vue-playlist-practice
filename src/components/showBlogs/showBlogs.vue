<template>
	<div v-theme:column="'narrow'" id="show-blogs">
		<h1>All blog articles</h1>
		<div v-for="blog in blogs" class="single-blog" :key="blog.id">
			<h2 v-rainbow>{{ blog.title }}</h2>
			<article>{{ blog.body }}</article>
		</div>
	</div>
</template>

<script>


export default {
	components: {

	},
	data () {
		return {
			blogs: []
		}
	},

	methods: {


	},
	created () {
		this.$http.get("https://jsonplaceholder.typicode.com/posts")
			.then(res => { this.blogs = res.body.slice(0, 10) })
	}
}

</script>

<style scoped lang="scss" src="./showBlogs.scss" />