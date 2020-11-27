<template>
	<div class="loading-wrapper">
		<CSpinner style="width:4rem;height:4rem;" color="primary" />
	</div>
</template>

<script>
	export default {
		name: "preloader",
	};
</script>

<style scoped lang="scss">
	.loading-wrapper {
		z-index: 999;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(226, 226, 226, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 200px;
		width: 100%;
	}
</style>
