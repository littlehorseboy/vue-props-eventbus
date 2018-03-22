<template>
  <div class="product-card">
    <div class="card">
      <h3 class="card-header">
        {{ clonedMadeFrom }}
        <label class="modify-link" @click="modifyMadeFrom">modify string prop</label>
      </h3>
      <div class="card-block">
        <h4 class="card-title">{{ product.name }}</h4>
        <p class="text-danger">
          ${{ product.price }}
          <label class="modify-link" @click="modifyProductPrice">modify object prop</label>
        </p>
        <p class="card-text">{{ product.description }}</p>
        <a href="#" class="btn btn-primary" @click="moreInfo(product.name)">more Info</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productCard',
  props: {
    madeFrom: {
      type: String,
      default: 'default country',
      required: false
    },
    product: {
      type: Object,
      default: function() {
        return {
          name: 'default name',
          description: 'default description',
          price: 300.00
        }
      }
    },
    moreInfo: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      //無須通知父組件 madeFrom 異動資訊
      internalMadeFrom: this.madeFrom
    }
  },
  computed: {
    clonedMadeFrom: {
      get: function() {
        return this.madeFrom
      },
      set: function(newValue) {
        this.$emit('madeFromChanged', newValue)
      }
    }
  },
  methods: {
    modifyMadeFrom: function() {
      this.clonedMadeFrom = 'Japan' + new Date().getSeconds()
    },
    modifyProductPrice: function() {
      this.product.price += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product-card {
    /* width: 400px; */
  }

  .modify-link {
    cursor: pointer;
    color: blue;
    font-size: 12px;
  }
</style>
