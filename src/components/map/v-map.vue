<template>
	<div class="map" :id="id">
		<yandex-map @click="clickMap" :style="{ height: `${mapHeight}px` }" zoom="12" class="y-map" :coords="mapData.coords" @map-was-initialized="initMap" :settings="yamapSettings" />
	</div>
</template>

<script>
	/*global ymaps*/
	import { loadYmap } from "vue-yandex-maps";
	import preloader from "@/components/base/preloader";
	export default {
		props: {
			mapHeight: {
				type: String,
				default: 200,
			},
			ymaps: {
				type: Object,
				default: {},
			},
		},
		data() {
			return {
				id: "map_" + Date.now(),
				mapData: {
					coords: [51.128207, 71.430411],
				},
			};
		},
		components: {
			preloader,
		},
		async mounted() {
			await loadYmap({ ...this.yamapSettings, debug: true });
		},
		methods: {
			initMap(map) {
				this.$emit("map-done", { ymaps, map });
				this.$emit("update:ymaps", ymaps);
			},
			clickMap(e) {
				this.$emit("on-click", e);
			},
		},
	};
</script>

<style></style>
