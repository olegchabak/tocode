<template>
	<section>
		<h2>Async Section {{ msg }}</h2>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				msg: this.$store.getters.getMsg, //
			}
		}
	}
</script>

<style lang="scss" scoped>
	h2 {
		color: #583b85;
		font-weight: bold;
	}
</style>