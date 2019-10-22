<template>
	<div id="app">
		<Header title="Captcha" />
		<CaptchaImages :images="images" />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import CaptchaImages from './components/CaptchaImages.vue';
import { getInitialImages, getRandomCategory } from './utils/utils.js';

export default {
	name: 'app',
	components: {
		Header,
		CaptchaImages
	},
	data() {
		const validCategory = getRandomCategory();
		const invalidCategory = getRandomCategory( validCategory );
		return {
			validCategory,
			invalidCategory,
			images: getInitialImages( { number: 16, validCategory, invalidCategory } )
		};
	}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 20px;
}
</style>
