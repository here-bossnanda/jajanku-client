<template>
<div class="container">
  <div class="card">
    <div class="card-header">
      <h6>LOGIN</h6>
    </div>
    <div class="card-body">
      <div class="container">
      <form @submit.prevent="submitLogin">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" v-model="data.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" v-model="data.password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'FormLogin',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['isAuth'])
  },
  methods: {
    ...mapActions('auth', ['login']),
    submitLogin () {
      this.login(this.data)
    }
  },
  created () {
    if (this.isAuth) this.$router.push({ name: 'Home' })
  }
}
</script>

<style scoped>
  .card{
    margin: 200px auto;
    float: none;
  }
</style>
