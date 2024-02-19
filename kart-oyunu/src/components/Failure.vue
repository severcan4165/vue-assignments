<template>
     <div class="container">
    <h1>Maalesef Bilemediniz!!!</h1>
    <button @click="newGame">Yeni Oyun</button>
  </div>
</template>
<script>
  export default {
    methods: {
      newGame() {
        this.$emit("activeComponentEvent", "game")
      }
    }
  }</script>

<style>
</style>