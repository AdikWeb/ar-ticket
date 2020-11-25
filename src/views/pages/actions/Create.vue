<template>
    <div>
    <CRow>
        <CCol sm="6">
        <CCard>
          <CCardHeader>
            <strong>Action </strong><small>Form</small>
          </CCardHeader>
          <CCardBody>
             <CInput
                label="Enter action name"
                horizontal
                autocomplete="name"
              />
              <CInput
                label="Quantity"
                horizontal
                autocomplete="quantity"
              />
            <CSelect
                label="Status"
                horizontal
                :options="options"
                placeholder="Please select status"
              />
              <CSelect
                label="Owner"
                horizontal
                :options="options"
                placeholder="Please select owner"
              />
             <CInput
                label="Start_Date"
                type="date"
                horizontal
              />
              <CInput
                label="End_Date"
                type="date"
                horizontal
              />
             <CInputFile
                label="Photo input"
                horizontal
              />
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
    </div>
</template>

<script>

export default {
  name: 'ActionsCreate',
  data(){
    return {
      items: null,
    }
  },
  components: {
    
  },
  methods: {
  },
  mounted() {

  },
}
</script>
