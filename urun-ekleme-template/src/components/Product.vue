<template>
       <div class="col-md-2 card">
        <img class="card-img-top" :src="product.selectedImage" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ product.productName }}</h5>
          <small>
            <strong>Adet : {{ product.productAmount }} </strong> 
          </small>
          <br>
          <small>
            <strong>Fiyat :{{ product.productPrice }} </strong> 
          </small>
          <br>
          <small>
            <strong>Tutar : {{ product.productAmount * product.productPrice }} </strong> 
          </small>
        </div>
      </div>
</template>

<script>
export default{
    props:["product"]
}</script>