<template>
	<div id="add-blog">
		<h2>Add a new blog post</h2>
		<form>
			<label>Blog Title:</label>
			<input type="text" v-model.lazy="blog.title" required />
			<label>Blog content:</label>
			<textarea v-model="blog.content"></textarea>
		</form>
		<div id="preview">
			<h3>Preview blog</h3>
			<p>Blog title: {{ blog.title }}</p>
			<p>Blog content: {{ blog.content }}</p>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			blog: {
				title: "",
				content: ""
			}
		}
	},

	methods: {


	}
}

</script>

<style scoped lang="scss" src="./addBlog.scss" />