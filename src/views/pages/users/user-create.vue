<template>
	<div class="create-type-of-gift">
		<CCard>
			<CCardHeader>
				<h4><b>Добавить ползователя</b></h4>
			</CCardHeader>
			<CCardBody>
             <CForm @submit.prevent="onSubmit"> 
             <CInput
                label="Enter your name"
                horizontal
                name="name"
                v-model="name"
                autocomplete="name"
              />
              <CInput
                label="Enter your full name"
                horizontal
                v-model="full_name"
                name="full_name"
                autocomplete="full_name"
              />
            <CInput
                label="Email input"
                description="Please enter your email"
                placeholder="Enter your email"
                type="email"
                name="email"
                horizontal
                v-model="email"
                autocomplete="email"
            />
             <CInput
                label="Telephone input"
                description="Enter your telephone"
                placeholder="Telephone"
                name="Telephone"
                horizontal
                v-model="telephone"
              />
            <CInputFile
                label="Photo"
                horizontal
                v-model="photo"
              />
             </CForm>
          </CCardBody>
			<CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Сохранить</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Сбросить</CButton>
          </CCardFooter>
		</CCard>
	</div>
</template>

<script>

export default {
  name: 'user-create',
  data(){
    return {
      name: null,
      full_name: null,
      email: null,
      telephone: null,
      photo: null
    }
  },
  methods: {
    onSubmit(){
      this.$http.post(process.env.VUE_APP_BACKEND + 'api/user/create', {
        name: this.name,
        full_name: this.full_name,
        email: this.email,
        telephone: this.telephone
      }).then(response => {
        console.log(response.data);
        this.$router.push('/user/list');
        //this.$http.push({ name: '/' })
      }).catch(e=>{
        this.errors = e.response;
        console.log(e.response);
      })
    }
  }
}
</script>
