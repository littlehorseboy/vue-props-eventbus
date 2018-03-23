<template>
  <div>
    <h1>Branch Introduction</h1>
    <h3>Let me introduce <span>{{ branchName }}</span> for you</h3>
  </div>
</template>

<script>
export default {
  name: 'introBranch',
  data () {
    let vm = this
    return {
      msg: 'Let me introduce',
      branchName: vm.$route.params.branchName
    }
  },
  mounted: function () {

  },
  watch: {
    '$route' (to, from) {
      let vm = this
      vm.branchName = to.params.branchName
    }
  }
}
</script>

<style scoped>
span {
  color: red;
}
</style>
