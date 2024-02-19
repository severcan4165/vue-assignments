<template>
  <div class="container">
    <p>{{ $route.query.firstName }}</p>
    <p>{{ $route.query.lastName }}</p>

    <button @click="saved = true">Değişiklikleri Kaydet</button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        saved:false
      }
    },
    beforeRouteLeave(to,from,next){
      if(this.saved){
        next()
      }else{
        if(confirm("değişiklikler kaybolacak, gitmek istediğinizden emin misiniz?")){
          next()
        }else{
          next(false)
        }
      }
    }
  }
</script>
