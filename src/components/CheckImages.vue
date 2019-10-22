<template>
	<button @click="$emit( 'verify' )" >Verify</button>
</template>

<script>
export default {
	name: 'CheckImages'
};
</script>

<style scoped>
	button {
		width: 50vw;
		padding: 0.2em;
		font-size: 1em;
	}
</style>
