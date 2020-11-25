<template>
	<div id="map">
		<div id="marker-panel">
			<div id="gift"></div>
		</div>
		<yandex-map zoom="12" class="y-map" :coords="houseData.coords" @map-was-initialized="initMap" :settings="yamapSettings" />
	</div>
</template>

<script>
	/*global ymaps*/
	import { loadYmap } from "vue-yandex-maps";
	export default {
		name: "Map",
		components: {},
		data() {
			return {
				houseData: {
					coords: [51.128207, 71.430411],
					marker: null,
					markerOffset: null,
					markerPosition: null,
				},
			};
		},
		async mounted() {
			await loadYmap({ ...this.yamapSettings, debug: true });
		},
		methods: {
			initMap() {
				if (ymaps) {
					this.marker = document.getElementById("gift");
					let drag = new ymaps.util.Dragger({
						autoStartElement: this.marker,
					});
					console.log(drag);
					drag.events
						.add("start", this.onDraggerStart)
						.add("move", this.onDraggerMove)
						.add("stop", this.onDraggerEnd);
				}
			},
			onDraggerStart(event) {
				let { offsetLeft, offsetTop } = this.marker,
					position = event.get("position");
				this.markerOffset = [position[0] - offsetLeft, position[1] - offsetTop];
				this.markerPosition = [position[0] - this.markerOffset[0], position[1] - this.markerOffset[1]];
				this.applyMarkerPosition();
			},
			onDraggerMove(e) {
				console.log("onDraggerMove");
				this.applyDelta(e);
			},
			onDraggerEnd() {
				console.log("onDraggerEnd");
			},
			applyMarkerPosition() {
				console.log(this.markerPosition);
				this.marker.style.left = this.markerPosition[0] + "px";
				this.marker.style.top = this.markerPosition[1] + "px";
			},
			applyDelta(event) {
				var delta = event.get("delta");
				this.markerPosition[0] += delta[0];
				this.markerPosition[1] += delta[1];
				this.applyMarkerPosition();
			},
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.y-map {
		width: 100%;
		height: 500px;
	}
	#marker-panel {
		min-height: 40px;
		position: relative;
		z-index: 1000;
	}
	#gift {
		background: #000;
		height: 10px;
		width: 10px;
		position: absolute;
		z-index: 1000;
	}
</style>
