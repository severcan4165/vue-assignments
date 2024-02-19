<template>
  <div class="container">
   <h1>user component</h1>
  
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

   <router-view></router-view>
   <button @click="navigateToHome" class="btn btn-success">GO to Home</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        id:this.$route.params.id
      }
    },
    methods: {
      navigateToHome() {
        this.$router.push("/")
        this.$router.push({path:"/"})
        this.$router.push({name:"anasayfa"})
      }
    },
    watch: {

    }
  }
</script>
