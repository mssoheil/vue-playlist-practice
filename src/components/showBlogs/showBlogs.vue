<template>
	<div v-theme:column="'wide'" id="show-blogs">
		<h1>All blog articles</h1>
		<input type="text" v-model="search" placeholder="search blogs" />
		<div v-for="blog in filteredBlogs" class="single-blog" :key="blog.id">
			<h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
			<article>{{ blog.body | snippet }}</article>
		</div>
	</div>
</template>

<script>


export default {
	components: {

	},
	data () {
		return {
			blogs: [],
			search: ""
		}
	},

	methods: {


	},
	created () {
		this.$http.get("https://jsonplaceholder.typicode.com/posts")
			.then(res => { this.blogs = res.body.slice(0, 10) })
	},
	computed: {
		filteredBlogs () {
			return this.blogs.filter(blog => {
				return blog.title.match(this.search);
			});
		}

	}
}

</script>

<style scoped lang="scss" src="./showBlogs.scss" />