<template>
  <div>
    <li class="list-group-item">
        <h3>Sunucu #{{ propsServer.id }}</h3>
        <p>Durum #{{ propsServer.status }}</p>
    </li>
   
  </div>
</template>

<script>
export default {
  props: ["propsServer"],
};
</script>
