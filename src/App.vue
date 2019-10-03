<template>
	<div>
		<app-header :title="title" v-on:changeAppTitle="changeTheAppTitle($event)" />
		<!-- <Ninja :ninjas="ninjas" @update-ninja="updateNinja" /> -->
		<Ninja :ninjas="ninjas" />
		<Ninja :ninjas="ninjas" />
		<Footer :copyright="`${title} Footer`" />
	</div>
</template>

<script>

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Ninja from "./components/ninja/ninja";

export default {
	name: 'app',
	components: {
		"app-header": Header,
		Footer,
		Ninja
	},
	data () {

		return {
			ninjas: [
				{ name: 'ryu', speciality: 'vueComponents', show: true },
				{ name: 'crystal', speciality: 'HTML vizardry', show: false },
				{ name: 'kami', speciality: 'clickEvents', show: false },
			],
			title: "vue ninjas"
		}
	},
	methods: {
		updateNinja (index) {
			this.ninjas[index].show = !this.ninjas[index].show
		},
		changeTheAppTitle (title) {
			this.title = title;
		}
	}

}
</script>

<style lang="scss" scoped >
</style>
