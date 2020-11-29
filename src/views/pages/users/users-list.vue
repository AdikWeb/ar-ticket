<template>
	 <div class="users-wrapper">
          <CCard>
            <CCardBody>
              <div class="d-flex align-items-center mb-3">
                <CButton color="primary" class="mr-3" @click="$router.push('/user/create')"><CIcon size="sm" class="mr-2" name="cust-plus" /><span>Добавить</span></CButton>
              </div>
              <CDataTable class="light-border-table" :items="computed_items" :fields="fields" :items-per-page="5" pagination>
                <template #is_online="{item}">
				<td>
					<CBadge :color="getBadge(item.is_online)">{{item.is_online}}</CBadge>
				</td>
				</template>
				<template #photo="{item}">
						<td>
							<img v-if="item.photo" class="photo" :src="item.photo" alt="" />
							<CIcon v-else name="noImageSvg" size="custom-size" :height="64" />
						</td>
				</template>
				<template #actions="{item}">
                  <td>
                   <CButton color="primary" @click="edit(item)" class="mr-1">
                        Edit
                      </CButton>
                      <CButton color="danger" @click="dangerModal = true" class="mr-1">
                        Delete
                      </CButton>
                      <!-- Delete Modal -->
                      <CModal
                        title="Modal title"
                        color="danger"
                        :show.sync="dangerModal"
                      >
                        Are you sure to delete this user?                     
                      <template #footer-wrapper>
                        <CCol col="6" sm="4" md="2" xl class="mb-3 mb-xl-0">
                          <CButton block @click="destroy(item.id)" color="danger">Delete</CButton>
                        </CCol>
                      </template>                     
                      </CModal>
					<!-- End Delete Modal -->
                  </td>
                </template>
              </CDataTable>
              
            </CCardBody>
          </CCard>
        </div>
</template>

<script>
	import { LoginUser, UserList } from "@/api/user/UserApi";

	export default {
		name: "users-list",
		data() {
			return {
				fields: [
					{ key: "photo", label: "Фото", _classes: "table-align-center" },
					{ key: "full_name", label: "ФИО", _classes: "table-align-center" },
					{ key: "name", label: "Имя", _classes: "table-align-center" },
					{ key: "email", label: "Email", _classes: "table-align-center" },
					{ key: "phone", label: "Телефон", _classes: "table-align-center" },				
					{ key: "is_online", label: "Статус", _classes: "table-align-center" },
					{ key: "actions", label: "Действие", _classes: "table-align-center" },
				],
				editModal: false,
				dangerModal: false,
				currentItem: {
					id: null,
					name: null,
					full_name: null,
					email: null,
					roleId: null,
					phone: null,
				},
				roles: [
					{
					label: "Role 1",
					value: 0
					},
					{
					label: "Role 2",
					value: 1
					},
					{
					label: "Role 3",
					value: 3
					}
				],
				statuses: null,
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
				await UserList(params).then((res) => (this.items = res));
			},
			edit(item){
				this.currentItem = JSON.parse(JSON.stringify(item));
				this.editModal = true;
			},
			getBadge (status) {
			return status === 'true' ? 'success'
					: status === 'Inactive' ? 'secondary'
				: status === 'false' ? 'warning'
					: status === 'Banned' ? 'danger' : 'primary'
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
