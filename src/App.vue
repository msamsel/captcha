<template>
	<div id="app">
		<Header title="Captcha" />
		<Instruction :userNotification="userNotification" />
		<CaptchaImages :images="images" @img-clicked="clickHandler" />
		<CheckImages @verify="verifyHandler" />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import CaptchaImages from './components/CaptchaImages.vue';
import Instruction from './components/Instruction.vue';
import CheckImages from './components/CheckImages.vue';

import { getInitialImages, getRandomCategory, getSingleImage } from './utils/utils.js';

export default {
	name: 'app',
	components: {
		Header,
		CaptchaImages,
		Instruction,
		CheckImages
	},
	data() {
		const validCategory = getRandomCategory();
		const invalidCategory = getRandomCategory( validCategory );
		const userNotification = `Please select all images with "${ validCategory }" symbol.`;
		return {
			validCategory,
			invalidCategory,
			userNotification,
			images: getInitialImages( { number: 16, validCategory, invalidCategory } )
		};
	},
	methods: {
		clickHandler( image ) {
			const choosenCategory = Math.random() < 0.5 ? this.validCategory : this.invalidCategory;
			const newImage = getSingleImage( choosenCategory );

			this.images.splice( this.images.indexOf( image ), 1, newImage );
		},
		verifyHandler() {
			if ( this.images.every( item => item.category === this.invalidCategory ) ) {
				this.userNotification = 'Congratulation!!!';
			} else {
				this.userNotification = `Unfortunatelly there are more images with "${ this.validCategory }".`;
				setTimeout( () => {
					this.userNotification = `Please select all images with "${ this.validCategory }" symbol.`;
				}, 2000 );
			}
		}
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
