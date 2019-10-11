<template>
	<div id="add-blog">
		<h2>Add a new blog post</h2>
		<form v-if="!submitted">
			<label>Blog Title:</label>
			<input type="text" v-model.lazy="blog.title" required />
			<label>Blog content:</label>
			<textarea v-model.lazy="blog.content"></textarea>
			<div id="check-boxes">
				<label>Ninjas</label>
				<input type="checkbox" value="ninjas" v-model="blog.categories" />
				<label>Wizards</label>
				<input type="checkbox" value="wizards" v-model="blog.categories" />
				<label>Mario</label>
				<input type="checkbox" value="mario" v-model="blog.categories" />
				<label>Cheese</label>
				<input type="checkbox" value="cheese" v-model="blog.categories" />
			</div>
			<SelectBox :authors="authors" :blogAuthor="blog.author" @changedAuthor="changeAuthor" />
			<button @click.prevent="postBlog">Add Blog</button>
		</form>
		<div v-if="submitted">
			<h3>Thanks for adding your post</h3>
		</div>
		<div id="preview">
			<h3>Preview blog</h3>
			<p>Blog title: {{ blog.title }}</p>
			<p>Blog content:</p>
			<p>{{ blog.content }}</p>
			<p>Blog categories:</p>
			<ul>
				<li v-for="(category, index) in blog.categories" :key="category">{{ index }}: {{ category }}</li>
			</ul>
			<p>Author: {{ blog.author }}</p>
		</div>
	</div>
</template>

<script>
// shared components
import SelectBox from "components/selectBox/selectBox";

export default {
	components: {
		SelectBox
	},
	data () {
		return {
			blog: {
				title: "",
				content: "",
				categories: [],
				author: ""
			},
			authors: ["John", "Sam", "David"],
			submitted: false
		}
	},

	methods: {
		changeAuthor (author) {
			this.blog.author = author
		},
		postBlog () {
			const { title, content } = this.blog;
			this.$http.post("https://jsonplaceholder.typicode.com/posts", {
				title: title,
				body: content,
				userId: 1
			})
				.then(res => {
					console.log(res);
					this.submitted = true;
				})
		}

	}
}

</script>

<style scoped lang="scss" src="./addBlog.scss" />