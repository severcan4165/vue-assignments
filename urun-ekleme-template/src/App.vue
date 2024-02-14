<template>
  <div class="container">
    <h1 class="text-center">Ürün Ekleme Uygulaması</h1>
    <hr>
    <new-product ></new-product>
    <br><br>
    <app-progress :productList="productList"></app-progress>
    <br><br>
    <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
    <hr>
    
  <app-products :productList="productList"></app-products>
  </div>


</template>

<script>
import NewProduct from "./components/NewProduct.vue"
import Progress from "./components/Progress.vue"
import Products from "./components/Products.vue"
import { eventBus } from "./main"
  export default {
    components:{
      "new-product":NewProduct,
      "app-progress":Progress,
      "app-products":Products
    },
    data() {
      return {
        imageList: [],
        productList:[]
 
      }
    },
    methods: {
     
    },
    created(){
      eventBus.$on("addedNewProduct", (product)=>{
          this.productList.push(product)
      })
    }
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>

