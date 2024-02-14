<template>
      <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{productAmount}}/10
      </div>
    </div>
</template>

<script>
export default{
    props:["productList"],
    data:function(){
        return {
        
        }
    },
    computed:{
        progress:function(){
        return this.productList.length * 10
    },
    productAmount:function(){
        return this.productList.length 

    }
    }

}</script>