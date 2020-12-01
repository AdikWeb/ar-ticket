<template>
	 <div class="gifts-wrapper">
          <CCard>
            <CCardBody>
              <div class="d-flex align-items-center mb-3">
                <CButton color="primary" class="mr-3" @click="$router.push('/types-of-gifts/create')"><CIcon size="sm" class="mr-2" name="cust-plus" /><span>Добавить</span></CButton>
            	<CButton class="mr-3" variant="outline" color="primary" :disabled="selectRowId == null"><CIcon size="sm" class="mr-2" name="cust-pencil" /><span>Редактировать</span></CButton>
            	<CButton class="mr-3" variant="outline" color="danger" @click="deleteModal = true"  :disabled="selectRowId == null" ><CIcon size="sm" class="mr-2" name="cust-trash" /><span>Удалить</span></CButton>
			  </div>
              <CDataTable 
			  class="light-border-table" 
			  hover 
			  :items="computed_items" 
			  :fields="fields" 
			  :items-per-page="5"
			  @row-clicked=select
			  :clickableRows = "true"
			  pagination>
				<template #photo="{item}">
						<td>
							<img v-if="item.photo" class="photo" :src="item.photo" alt="" />
							<CIcon v-else name="noImageSvg" size="custom-size" :height="64" />
						</td>
				</template>
              </CDataTable>
            </CCardBody>
          </CCard>
            <!-- Delete Modal -->
                <CModal
                    title="Удалить подарок"
                    color="danger"
                    :show.sync="deleteModal"
                    >
                    Are you sure to delete this user?                     
                    <template #footer>   
                          <CButton @click="deleteModal = false" color="secondary">Отменить</CButton>
                          <CButton @click="deleteFromArray()" color="danger">Удалить</CButton>
                    </template>                     
                </CModal>
				
			<!-- End Delete Modal -->
        </div>
</template>

<script>
	import { LoadGiftsPoint, LoadTypeOfGifts } from "@/api/GiftsApi";
	
	export default {
		name: "type-of-gifts-list",
		data() {
			return {
				items: [],
				fields: [
					{ key: "photo", label: "Фото", _classes: "table-align-center" },
					{ key: "gift_name", label: "Наименование подарка", _classes: "table-align-center" },
					{ key: "description", label: "Описание", _classes: "table-align-center" },
				],
				editModal: false,
				deleteModal: false,
				isDisable: false,
				selectRowId: null
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
				await LoadTypeOfGifts().then((res) => (this.items = res));
			},
			deleteFromArray(){
				let i = this.items.map(item => item.id).indexOf(this.selectRowId) // find index of your object
				this.items.splice(i, 1);
				this.deleteModal = false;
			},
			select(row){
				this.selectRowId = row.id;
			}

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
