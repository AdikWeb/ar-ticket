<template>
	<div class="v-image">
		<img :class="className" @error="error_load" @load="loaded_image" v-if="src && !img_error" :height="height" :width="width" :src="src" :alt="alt || src" />
		<transition name="fade">
			<div :class="className" v-show="src && !loaded && !img_error" class="img--preloader">
				<CSpinner size="sm" color="dark" />
			</div>
		</transition>
		<div v-if="!src || img_error" :class="className" class="img--none">
			<CIcon :class="img_error && 'color-danger'" :name="img_error ? 'cil-sad' : false || iconName || 'cil-satelite'" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "v-image",
		props: {
			src: String,
			alt: String,
			width: Number,
			height: Number,
			fit: String,
			className: String,
			iconName: String,
		},
		data() {
			return {
				loaded: false,
				img_error: false,
			};
		},
		watch: {
			src() {
				this.loaded = this.img_error = false;
			},
		},
		methods: {
			loaded_image() {
				this.loaded = true;
			},
			error_load() {
				this.img_error = true;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.v-image {
		position: relative;
		.img {
			&--none,
			&--preloader {
				display: flex;
				align-items: center;
				justify-content: center;
				background: rgb(206, 210, 216);
			}
			&--none {
				svg * {
					fill: white;
				}
			}
			&--preloader {
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				position: absolute;
				z-index: 1;
			}
		}
	}
	/deep/ .color-danger {
		* {
			fill: #e56b6b;
		}
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter {
		transition: 0s;
	}
	.fade-leave-to {
		opacity: 0;
	}
</style>
