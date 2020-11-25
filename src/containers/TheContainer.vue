<template>
  <div class="c-app">
    <TheSidebar/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  data(){
    return {
      auth: null,
    }
  },
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  },
  methods: {
    check_auth() {
        if (localStorage.getItem('token')) {
          //this.$http.defaults.headers.common['Authorization'] = localStorage.getItem('token')
          this.auth = true;
          //this.get_profile();
        } else {
          this.auth = false;
          this.$router.push('pages/login')
        }
      },
      // get_profile() {
      //   this.$axios.post(process.env.API_BACK_END + process.env.API_VERSION + 'user/me')
      //     .then(response => {
      //       this.user = response.data;
      //     })
      // },
  },
  mounted(){
    this.check_auth();
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
