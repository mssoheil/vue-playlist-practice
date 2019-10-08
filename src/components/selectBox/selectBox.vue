<template>
	<div id="select-box">
		<label>Author:</label>
		<select v-model="blogAuthor">
			<option v-for="author in authors" :key="author">{{ author }}</option>
		</select>
	</div>
</template>

<script>

export default {

	props: {
		blogAuthor: {
			type: String,
			defautl: "",
			isRequired: true
		},
		authors: {
			type: Array,
			default: () => [],
			isRequired: true
		}
	},
	data () {
		return {
		}
	},

	watch: {
		blogAuthor () {
			this.$emit("changedAuthor", this.blogAuthor)
		}
	},
	methods: {


	}
}

</script>

<style scoped lang="scss" src="./selectBox.scss" />