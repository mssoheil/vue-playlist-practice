<template>
	<div v-theme:column="'wide'" id="show-blogs">
		<h1>All blog titles</h1>
		<input type="text" v-model="search" placeholder="search blogs" />
		<div v-for="blog in filteredBlogs" class="single-blog" :key="blog.id">
			<h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
		</div>
	</div>
</template>

<script>

import searchMixin from "../../mixins/searchMixin";

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
		// filteredBlogs () {
		// 	return this.blogs.filter(blog => {
		// 		return blog.title.match(this.search);
		// 	});
		// }

	},
	filters: {
		toUppercase (value) {
			return value.toUpperCase();
		}
	},
	directives: {
		rainbow: {
			bind (el, binding, vnode) {
				const colorCode = () => parseInt(Math.random() * 255);
				el.style.color = `rgb(${colorCode()},${colorCode()},${colorCode()})`;
			}
		}
	},
	mixins: [searchMixin]
}

</script>

<style scoped lang="scss" src="./listBlogs.scss" />