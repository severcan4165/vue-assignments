<template>
  <div>
    <p class="counter-container"> Sayaç : {{ getDoubleCounter }}</p>
    <p class="counter-container"> Sayaç : {{ clickCounter }}</p>
  </div>
</template>
<script>
import {mapGetters} from "vuex"
  export default {
    
    // computed:{
    //   counter(){
    //     return this.$store.state.counter
    //   }
  
    // }
    computed:mapGetters([
      'getDoubleCounter',
      'clickCounter'
    ])
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
  }
</style>
