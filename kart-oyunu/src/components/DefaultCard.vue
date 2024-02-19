<template>
  <div class="default-card">
      <img src="../assets/vue-js-egitim-background.jpg" alt="">
  </div>
</template>
<script>
export default{
 
}</script>

<style>
.default-card{
  width: 200px;
    height: 232px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #666;
    background-image: url("../assets/vue-js-egitim-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0px 9px 55px #666;
  
}

.default-card:hover{
  box-shadow: 0px 5px 48px #666;
  transition: box-shadow .5s;
}

.default-card img{
  width: 100%;
  height: 100%;
}
</style>