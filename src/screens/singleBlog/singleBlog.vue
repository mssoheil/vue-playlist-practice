<template>
	<div id="single-blog">
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.body }}</article>
	</div>
</template>

<script>
// shared components

export default {
	data () {
		return {
			id: this.$route.params.id,
			blog: {}
		}
	},
	created () {
		this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
			.then(res => { this.blog = res.body })
	}
}

</script>

<style scoped lang="scss" src="./singleBlog.scss" />