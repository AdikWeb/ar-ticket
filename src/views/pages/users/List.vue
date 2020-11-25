<template>
    <div>
    <CCard>
        <CCardHeader>
        <strong>Users List</strong>
       
        <div class="card-header-actions">
          <a 
            href="/users/create" 
            class="b-3 mb-xl-0" 
            rel="noreferrer noopener" 
          >
           New User
          </a>
        </div>
     </CCardHeader>
      <CCardBody>
    <vuetable ref="vuetable"
    :api-mode="false"
    :fields="['id', 'full_name', 'name', 'email', 'phone', 'photo', 'is online']"
     :data = items
    pagination-path="">
    </vuetable>
      </CCardBody>
    </CCard>
    </div>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  name: 'UsersList',
  data(){
    return {
      items: null,
    }
  },
  components: {
    Vuetable
  },
  methods: {
    all(){
      this.$http.post(process.env.VUE_APP_BACKEND + 'api/user/list')
      .then(response => {
        this.items = response.data.users;
        console.log(this.items);
      }).catch(e=>{
        
        console.log(e.response);
      })

    },
    getBadge (status) {
      return status === 'Active' ? 'success'
        : status === 'Inactive' ? 'secondary'
          : status === 'Pending' ? 'warning'
            : status === 'Banned' ? 'danger' : 'primary'
    }
  },
  mounted() {
    this.all();
  },
}
</script>
