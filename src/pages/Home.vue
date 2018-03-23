<template>
  <div id="home">
    <div class="home container">

      <!-- Header -->
      <app-header></app-header>

      <!-- Header -->
      <app-side-bar-content>
        <img src="../assets/logo.png" style="width: 50px; height: 50px;">
        <ul>
          <li>
            <router-link :to="{ path: '/home'}" exact>Welcome</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'hello'}" exact>Hello</router-link>
          </li>
          <li>
            <!-- 傳遞參數至動態路由 - URL -->
            <router-link :to="{ path: '/home/introBranch/Taipei'}">Intro Taipei</router-link>
          </li>
          <li>
            <!-- 傳遞參數至動態路由 - Params -->
            <router-link :to="{ name: 'introBranch', params: { branchName: 'New York' }}">Intro New York</router-link>
          </li>
        </ul>

        <router-view></router-view>

      </app-side-bar-content>

      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
