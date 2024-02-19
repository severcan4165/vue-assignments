<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <p>user id: {{ id }}</p>
    <hr>
    <!-- :to="'/user/' + $route.params.id + '/edit'" -->
    <router-link
    :to="{name:'UserEdit', params:{id:$route.params.id}, query:{firstName:'salih', lastName:'sever'}}"
    tag="button"
    class="btn btn-primary"
    >
      Kullanıcıyı Düzenle
    </router-link>

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
        // this.$router.push({path:"/"})
        // this.$router.push({name:"anasayfa"})
      }
    },
    watch: {
      "$route"(to,from){
        this.id = to.params.id
      }
    },
    beforeRouteEnter(to,from,next){
      console.log("component seviyesinde kontrol")
      next()
    }
  }
</script>
