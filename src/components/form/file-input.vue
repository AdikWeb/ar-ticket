<template>
	<div class="v-file-input">
		<input @change="file" :id="id" type="file" />
		<div class="wrap">
			<label class="d-block mb-2" :for="id">{{ label }}</label>
			<label class="bu" :for="id">Выбрать файл</label>
		</div>
		<div class="selected-file-name">{{ this.file_name || "Файл не выбран" }}</div>
	</div>
</template>

<script>
	export default {
		name: "v-file",
		props: {
			label: String,
		},
		data() {
			return {
				id: "file_" + Date.now(),
				file_name: null,
			};
		},
		methods: {
			file(e) {
				this.file_name = e.target.value.replace(/.*[\/\\]/, "");
				this.$emit("change", e);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.v-file-input {
		display: flex;
		align-items: flex-end;
	}
	[type="file"] {
		display: none;
	}
	label.bu {
		background: #3c4b64;
		height: 32px;
		padding: 10px 12px;
		color: #fff;
		font-size: 0.8rem;
		border-radius: 4px;
		margin-bottom: 0;
		line-height: 1;
		cursor: pointer;
	}
	.selected-file-name {
		color: #8a93a2;
		margin-bottom: 6px;
	}
</style>
