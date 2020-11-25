<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="login"> 
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    type="name"
                    description="Please enter your name."
                    label="Name"
                    horizontal
                    placeholder="Enter name..."
                    autocomplete="name" 
                    v-model="name"
                    required
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    type="password"
                    description="Please enter your password."
                    autocomplete="current-password"
                    label="Password"
                    horizontal
                    placeholder="Enter password ..."
                    v-model="password"
                    required
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" type="submit">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <CButton color="link" class="d-lg-none">Register now!</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data(){
    return {
      name: null,
      password: null,
      errors: null,
    }
  },
  methods: {
    login(){ 
      this.$http.post(process.env.VUE_APP_BACKEND + 'api/login', {
        name: this.name,
        password: this.password
      }).then(response => {
        localStorage.setItem('token', 'Bearer ' +response.data.token);
        //that.$store.commit('LOGIN_SUCCESS', response);
        console.log(response.data.token);
        this.$router.push('/');
        //this.$http.push({ name: '/' })
      }).catch(e=>{
        this.errors = e.response;
        console.log(e.response);
      })
    }
  },
  mounted() {
    console.log(process.env.VUE_APP_BACKEND)
  },
}
</script>
