<template>
  <div class="props-tester">
    <div class="container">
      <form>
        <div class="form-group row">
          <label class="col-sm-4 form-control-label">Made From</label>
          <div class="col-sm-8">
            <input type="text" v-model="madeFrom" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 form-control-label">Product Name</label>
          <div class="col-sm-8">
            <input type="text" v-model="product.name" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 form-control-label">Product Price</label>
          <div class="col-sm-8">
            <input type="text" v-model="product.price" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-4 form-control-label">Product Desc</label>
          <div class="col-sm-8">
            <input type="text" v-model="product.description" class="form-control">
          </div>
        </div>
      </form>

      <product-card :made-from="madeFrom" :product="product" :more-info="showMoreInfo" @madeFromChanged="onmadeFromChanged"></product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from '../../components/ProductCard'

export default {
  name: 'propsTester',
  data () {
    return {
      madeFrom: 'Taiwan',
      product: {
        name: 'Big Pen',
        description: 'description',
        price: 99.12
      }
    }
  },
  methods: {
    showMoreInfo: function (id) {
      toastr.info(`show ${id} info called by sub component!!`, 'More Info')
    },
    onmadeFromChanged: function (updatedMadeFrom) {
      this.madeFrom = updatedMadeFrom

      this.$bus.$emit('specialEvent', {
        msg: 'This message came from the specialEvent.',
        title: 'Trigger by PropsTester'
      })
    }
  },
  components: {
    ProductCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
