<template>
	<img :src="src" :alt="category" @click="$emit( 'img-clicked' )" />
</template>

<script>
export default {
	name: 'CaptchaImage',
	props: [ 'src', 'category' ]
};
</script>

<style scoped>
	img {
		width: 100px;
		height: 100px;
		display: inline-block;
	}
</style>
