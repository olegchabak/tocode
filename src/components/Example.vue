<template>
	<section>
		<h2>Section {{ msg }}</h2>
		<!--		<img src="assets/img/1.jpg" alt="">-->
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