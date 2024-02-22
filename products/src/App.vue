<template>
<div >
  <app-header></app-header>
  <transition mode="out-in" name="fade" >
    <router-view></router-view>
  </transition>

   
  <app-footer></app-footer>

</div>

</template>

<script>
import Header from "./components/shared/Header.vue"
import Footer from "./components/shared/Footer.vue"
// import ProductPurchase from "./components/products/ProductPurchase.vue"
// import ProductSell from "./components/products/ProductSell.vue"
// import ProductList from "./components/products/ProductList.vue"

export default {
 components:{
    appHeader:Header,
    appFooter:Footer,
    // appProductPurchase:ProductPurchase
    // appContainer:ProductList
 },
  data () {
    return {
    
    }
  },
  created(){
    this.$store.dispatch("getTradeResult")
    this.$store.dispatch("initApp")
  }
}
</script>

<style>
body{
  background-color: #a7a0bb5c;
}
  .fade-enter{
    opacity:0;
  }
  .fade-enter-active{
    transition: opacity .3s ease-out;
  }
  .fade-leave{}
  .fade-leave-active{ 
    transition: opacity .3s ease-out;
    opacity: 0;
  }
</style>
