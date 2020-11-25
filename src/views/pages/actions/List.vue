<template>
<div>
    <CCard>
        <CCardHeader>
        <strong>Actons List</strong>
       
        <div class="card-header-actions">
          <a 
            href="/actions/create" 
            class="b-3 mb-xl-0" 
            rel="noreferrer noopener" 
          >
           New Action
          </a>
        </div>
     </CCardHeader>
      <CCardBody>
    <vuetable ref="vuetable"
    :api-mode="false"
    :fields="['id', 'name', 'owner_id', 'photo', 'quantity_presents', 'status_id', 'start_at', 'end_at']"
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
  name: 'ActionsList',
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
      this.$http.post(process.env.VUE_APP_BACKEND + 'api/action/list')
      .then(response => {
        this.items = response.data.actions;
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
