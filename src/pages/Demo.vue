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
            <router-link :to="{ path: '/demo'}" exact>Basic Control</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'propsTester'}" exact>Props Tester</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'tabTester'}" exact>Tab Tester</router-link>
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
  name: 'demo',
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
