<template>
	<div id="ninjas">
		<ul>
			<li v-for="(ninja, key) in localNinjas" :key="ninja.name" @click="showNinja(key)">
				<h2>{{ ninja.name}}</h2>
				<h3 v-show="ninja.show">{{ ninja.speciality}}</h3>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	// props: ["ninjas"],
	// props: {
	// 	ninjas: Array
	// },
	props: {
		ninjas: {
			type: Array,
			default: () => [],
			required: true
		}
	},
	data () {
		// copy the value
		return {
			localNinjas: this.ninjas.map(x => ({ ...x }))
		}
	},
	methods: {
		showNinja (index) {
			// eslint-disable-next-line
			// this.$emit("update-ninja", index);
			this.localNinjas[index].show = !this.localNinjas[index].show
		}
	},
	// lifecycle hooks
	beforeCreate () {
		console.log("beforeCreate");
	},
	created () {
		console.log("created");
	},
	beforeMount () {
		console.log("beforeMount");
	},
	mounted () {
		console.log("mounted");
	},
	beforeUpdate () {
		console.log("beforeUpdate");
	},
	updated () {
		console.log("updated");
	}
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss" src="./ninja.scss" scoped>
</style>