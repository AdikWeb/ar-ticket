<template>
	<div class="gifts-wrapper">
		<CCard>
			<CCardBody>
				<div class="d-flex align-items-center mb-3">
					<CInput v-model="serachByName" class="m-0 table-search-input">
						<template #append>
							<CButton color="primary">
								<CIcon class="m-0" name="cil-magnifying-glass" />
							</CButton>
						</template>
					</CInput>

					<div class="d-flex align-items-center ml-auto">
						<CButton to="/gifts-points/create" color="primary" class="mr-3"><CIcon size="sm" class="mr-2" name="cust-plus" /><span>Добавить</span></CButton>
						<CButton color="secondary" disabled variant="outline"><CIcon size="sm" class="mr-2" name="cust-trash" /><span>Удалить</span></CButton>
					</div>
				</div>

				<CDataTable class="light-border-table" :items="computed_items" :fields="fields" :items-per-page="serachByName.length !== 0 ? computed_items.length : 1" :pagination="{ align: 'center' }">
					<template #photo="{item}">
						<td>
							<v-image class-name="photo" :src="item.photo" :height="64" />
						</td>
					</template>
					<template #edit="{item}">
						<td class="table-align-center">
							<CButton to="#" color="link">
								<CIcon class="icon--dark" name="cust-pencil" />
							</CButton>
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
				currentPage: +this.$route.query.page || 1,
				serachByName: this.$route.query.search || "",
				fields: [
					{ key: "photo", label: "Фото", _classes: "table-align-center" },
					{ key: "name", label: "Наименование", _classes: "table-align-center" },
					{ key: "description", label: "Описание", _classes: "table-align-center" },
					{ key: "geo", label: "Геопозиция", _classes: "table-align-center" },
					{ key: "address", label: "Адрес", _classes: "table-align-center" },
					{ key: "edit", label: "Действия", _classes: "table-align-center" },
				],
				items: [],
			};
		},
		watch: {
			serachByName(search) {
				this.$router.push({ query: { search } });
			},
		},
		computed: {
			computed_items() {
				return this.items.filter((item) => new RegExp(this.serachByName, "gmui").test(item.name));
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
	.table-search-input {
		width: 100%;
		max-width: 400px;
	}
	/deep/ .photo {
		width: 64px;
		height: 64px;
		display: block;
		object-fit: cover;
		border-radius: 4px;
	}
</style>
