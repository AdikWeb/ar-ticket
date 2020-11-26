<template>
	<div class="gifts-wrapper">
		<CCard>
			<CCardBody>
				<div class="d-flex align-items-center mb-4">
					<h5>
						<b>Точки выдачи подарков</b>
					</h5>
				</div>
				<CTabs :active-tab="0">
					<CTab title="Все">
						<CDataTable :items="computed_items" :fields="fields" :items-per-page="5" sorter pagination>
							<template #photo="{item}">
								<td>
									<img class="photo" :src="item.photo" alt="" />
								</td>
							</template>
							<template #status="{item}">
								<td>
									<CBadge size="lg" :color="item.status.color">{{ item.status.label }}</CBadge>
								</td>
							</template>
						</CDataTable>
					</CTab>
					<CTab title="Активные"></CTab>
					<CTab title="Неактивные"> </CTab>
				</CTabs>
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
					{ key: "photo", label: "Фото" },
					{ key: "name", label: "Наименование" },
					{ key: "description", label: "Описание" },
					{ key: "geo", label: "Геопозиция" },
					{ key: "address", label: "Адрес" },
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
		width: 100px;
		height: 100px;
		display: block;
		margin: 5px;
	}
</style>
