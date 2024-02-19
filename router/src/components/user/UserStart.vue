<template>
  <div class="container">
    <h3>User Start Component</h3>
    <hr>
    <ul class="list-group">
      <router-link 
          to="/user/1" 
          tag="li" 
          active-class="active" 
          class="list-group-item"
          exact>
                  <a>User1</a>
    </router-link>
      <router-link 
          to="/user/2" 
          tag="li" 
          active-class="active"
          class="list-group-item" 
          exact>
                  <a>User2</a>
    </router-link>
      <router-link 
          to="/user/3" 
          tag="li" 
          active-class="active" 
          class="list-group-item"
          exact>
                  <a>User3</a>
    </router-link>
      <router-link 
          to="/user/4" 
          tag="li" 
          active-class="active" 
          class="list-group-item"
          exact>
                  <a>User4</a>
    </router-link>


    </ul>
  </div>
</template>
<script>
  export default {}
</script>
