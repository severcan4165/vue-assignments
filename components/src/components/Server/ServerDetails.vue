<template>
  <div class="col-xs-12 col-sm-6" v-if="Object.keys(serverData).length === 0">
    <p>Sunucu Bilgisi güncel değil!!</p>
  </div>
  <div class="col-xs-12 col-sm-6" v-else>
    <p>{{ serverData.status }}</p>
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
  created:function(){
        eventBus.$on("sendedData", (data)=> {
            this.serverData = data
        })
    }
}</script>