<template>
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header">
            <h4>Login</h4>
          </div>
          <div class="card-body">
            <form class="form" @submit.prevent>
              <div class="form-group">
                <label for="loginEmployeeId">Employee Id</label>
                <input id="loginEmployeeId" class="form-control" placeholder="Enter employee Id" v-model="loginUser.employeeId">
              </div>
              <div class="form-group">
                <label for="loginPassword">Password</label>
                <input id="loginPassword" class="form-control" placeholder="password" v-model="loginUser.password">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginUser: {}
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
