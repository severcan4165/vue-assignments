<template>
  <div class="col-xs-12 col-sm-6" v-if="Object.keys(serverData).length === 0">
    <p>Sunucu Bilgisi güncel değil!!</p>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
    <h2>Server #{{ serverData.id }}</h2>
    <p>{{ serverData.status }}</p>
    <button @click="changeStatus">Durumu düzelt</button>
  </div>
</template>
<script>
import { eventBus } from '../../main';
export default{
  data: function(){
        return{
            serverData:{}
        }
    },
    methods:{
      changeStatus:function(){
        this.serverData.status = "normal"
      }
    },
  created:function(){
        eventBus.$on("sendedData", (data)=> {
            this.serverData = data
        })
    }
}</script>