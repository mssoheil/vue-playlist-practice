<template>
	<div id="ninjas">
		<ul>
			<li v-for="(ninja, key) in ninjas" :key="ninja.name" @click="showNinja(key)">
				<h2>{{ ninja.name}}</h2>
				<h3 v-show="ninja.show">{{ ninja.speciality}}</h3>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		ninjas: Array
	},
	methods: {
		showNinja (index) {
			// eslint-disable-next-line
			this.$emit("update-ninja", index)
		}
	}
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss" src="./ninja.scss" scoped>
</style>