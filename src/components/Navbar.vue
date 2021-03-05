<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Jajanku</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link tag="li" :to="{ name: 'Home' }" v-show="isAuth" class="nav-item">
          <a class="nav-link" >Home <span class="sr-only">(current)</span></a>
        </router-link>
        <router-link tag="li" :to="{ name: 'Login' }" v-show="!isAuth" class="nav-item">
          <a class="nav-link">Login</a>
        </router-link>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" v-show="isAuth" @click.prevent="logoutApp">Logout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" v-show="isAuth" @click.prevent="logoutAppAllDevice">Logout All Device</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    ...mapActions('auth', ['logout', 'logoutAllDevice']),
    logoutApp () {
      this.logout()
    },
    logoutAppAllDevice () {
      this.logoutAllDevice()
    }
  }
}
</script>
