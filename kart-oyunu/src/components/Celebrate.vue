<template>
<div>
    <h1>Tebrikler Bildiniz!!!</h1>
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