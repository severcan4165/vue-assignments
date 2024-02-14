<template>
     <div class="row product-container">
        <app-product v-for="product in productList " :key="product.productName" :product="product" ></app-product>


    </div>

</template>

<script>
import Product from "./Product.vue"
export default {
    props:["productList"],
    components:{
        "app-product":Product
    },
    data:function(){
        return{

        }
    }
}</script>