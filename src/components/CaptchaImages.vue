<template>
	<div class="gallery">
		<CaptchaImage v-for="image in images"
			:key="image.id"
			:category="image.category"
			:src="image.src"
			@img-clicked="$emit( 'img-clicked', image )"
		/>
	</div>
</template>

<script>
import CaptchaImage from './CaptchaImage.vue';

export default {
	name: 'CaptchaImages',
	props: [ 'images' ],
	components: {
		CaptchaImage
	}
};
</script>

<style scoped lang="scss">
	.gallery {
		margin: 0 auto;
		max-width: 600px;
		columns: 4;
		img {
			margin: 5% 0;
			border: 1px solid black;
			&:hover {
				cursor: pointer;
			}
		}
	}
</style>
