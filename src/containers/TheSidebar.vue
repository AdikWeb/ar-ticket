<template>
	<CSidebar fixed :minimize="minimize" :show="show" @update:show="(value) => $store.commit('set', ['sidebarShow', value])">
		<CSidebarBrand class="d-md-down-none" to="/">
			<CIcon class="c-sidebar-brand-full" name="logo" size="custom-size" :height="35" viewBox="0 0 111 20" />
			<CIcon class="c-sidebar-brand-minimized" name="logo" size="custom-size" :height="35" viewBox="0 0 110 134" />
		</CSidebarBrand>

		<CRenderFunction flat :content-to-render="$options.nav" />
		<CSidebarMinimizer class="d-md-down-none" @click.native="$store.commit('set', ['sidebarMinimize', !minimize])" />
	</CSidebar>
</template>

<script>
	import nav from "./_nav";

	export default {
		name: "TheSidebar",
		nav,
		computed: {
			show() {
				return this.$store.state.sidebarShow;
			},
			minimize() {
				return this.$store.state.sidebarMinimize;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.c-sidebar-brand {
		justify-content: flex-start;
	}
	.c-sidebar-brand-full {
		width: 123px;
		height: 32px;
		margin-left: 20px;
		display: block;
	}
</style>
