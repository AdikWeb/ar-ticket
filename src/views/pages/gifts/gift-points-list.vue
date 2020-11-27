<template>
	<div class="gifts-wrapper">
		<CCard>
			<CCardBody>
				<div class="d-flex align-items-center mb-3">
					<CButton to="create" color="primary" class="mr-3"><CIcon size="sm" class="mr-2" name="cust-plus" /><span>Добавить</span></CButton>
					<CButton color="secondary" class="mr-3" disabled variant="outline"><CIcon size="sm" class="mr-2" name="cust-pencil" /><span>Добавить</span></CButton>
					<CButton color="secondary" disabled variant="outline"><CIcon size="sm" class="mr-2" name="cust-trash" /><span>Удалить</span></CButton>
				</div>
				<CDataTable class="light-border-table" :items="computed_items" :fields="fields" :items-per-page="5" pagination>
					<template #photo="{item}">
						<td>
							<img v-if="item.photo" class="photo" :src="item.photo" alt="" />
							<CIcon v-else name="noImageSvg" size="custom-size" :height="64" />
						</td>
					</template>
				</CDataTable>
			</CCardBody>
		</CCard>
	</div>
</template>

<script>
	import { LoadGiftsPoint } from "@/api/GiftsApi";

	export default {
		name: "gift-points-list",
		data() {
			return {
				fields: [
					{ key: "photo", label: "Фото", _classes: "table-align-center" },
					{ key: "name", label: "Наименование", _classes: "table-align-center" },
					{ key: "description", label: "Описание", _classes: "table-align-center" },
					{ key: "geo", label: "Геопозиция", _classes: "table-align-center" },
					{ key: "address", label: "Адрес", _classes: "table-align-center" },
				],
				items: [],
			};
		},

		computed: {
			computed_items() {
				return this.items;
			},
		},

		async mounted() {
			await this.LoadList({});
		},

		methods: {
			async LoadList(params) {
				await LoadGiftsPoint(params).then((res) => (this.items = res));
			},
		},
	};
</script>

<style lang="scss" scoped>
	.photo {
		width: 64px;
		height: 64px;
		display: block;
		object-fit: cover;
		border-radius: 4px;
	}
</style>
