<template>
	<div class="create-gift-point">
		<CCard>
			<CCardHeader>
				<h4><b>Добавить точку выдачи подарка</b></h4>
			</CCardHeader>
			<CCardBody>
				<CRow>
					<CCol md="6">
						<CInput label="Наименование" />
					</CCol>
				</CRow>

				<CRow>
					<CCol md="6">
						<CTextarea label="Описание" rows="4" />
					</CCol>
				</CRow>

				<CRow>
					<CCol md="6">
						<label class="d-block">Геолокация</label>
						<p class="color-gray">Выберите точку выдачи на карте или воспользуйтесь поиском</p>
						<v-map class="mb-5" @on-click="clickMap" :ymaps.sync="map.ymaps" @map-done="mapInit" map-height="400" />
					</CCol>
				</CRow>

				<CRow>
					<CCol md="6">
						<CInput label="Геолокация" />
					</CCol>
				</CRow>
				<CRow>
					<CCol md="6">
						<CInput label="Адрес" />
					</CCol>
				</CRow>
				<CRow>
					<CCol md="6">
						<v-file label="Фото точки выдачи" />
					</CCol>
				</CRow>
			</CCardBody>
			<CCardFooter>
				<CButton color="primary" class="mr-3">Сохранить</CButton>
				<CButton variant="outline" @click="$router.go(-1)" color="dark">Отменить</CButton>
			</CCardFooter>
		</CCard>
	</div>
</template>

<script>
	import vMap from "@/components/map/v-map";
	import MapControll from "@/components/map/mapControll";
	export default {
		data() {
			return {
				map: {
					init: false,
					map: null,
					ymaps: null,
					controll: null,
					test: [],
				},
			};
		},
		components: { vMap },
		methods: {
			mapInit({ map, ymaps }) {
				this.controll = new MapControll(map, ymaps);
			},

			clickMap(e) {
				let coords = e.get("coords");
				this.controll
					.marker()
					.collection("grou")
					.clear();

				this.controll
					.marker()
					.collection("grou")
					.add(coords, {});

				this.controll.marker().show();
			},
		},
	};
</script>

<style></style>
