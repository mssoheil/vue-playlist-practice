<template>
	<nav>
		<ul>
			<li>
				<router-link to="/" exact>Blog</router-link>
			</li>
			<li>
				<router-link to="/add" exact>Add a New Blog</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
// shared components

export default {
}

</script>

<style scoped lang="scss" src="./navigation.scss" />