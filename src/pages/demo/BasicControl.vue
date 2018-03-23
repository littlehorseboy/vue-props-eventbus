<template>
  <div class="basic-control">
    <div class="info-box card">
      <h4>{{ status }}</h4>
      <p>age: <input type="number" :value="age" />v-bind</p>
      <p>age: <input type="number" v-model="age" />v-model</p>
      <button class="btn btn-secondary" @click="showStatus">show</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basicControl',
  data () {
    return {
      birthYear: 1999
    }
  },
  computed: {
    status: function () {
      return '我出生於' + this.birthYear + '年'
    },
    age: {
      get: function () {
        return new Date().getFullYear() - this.birthYear
      },
      set: function (v) {
        this.birthYear = new Date().getFullYear() - v
      }
    }
  },
  watch: {
    birthYear: (newValue, oldValue) => {
      toastr.warning(`birth year has changed from ${oldValue} to ${newValue}`)
    }
  },
  methods: {
    showStatus: function () {
      toastr.success(this.status, 'User Status')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .info-box {
    width: 400px;
    padding: 10px;
    margin: 0 auto;
    text-align: left;
  }
</style>
