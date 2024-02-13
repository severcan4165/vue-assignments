<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <appServerStatus @click.native="showServerDetail(server)" v-for="server in servers" :key="server.id" :propsServer="server"  ></appServerStatus>
    </ul>
  </div>
</template>

<script>
import {eventBus} from "../../main"
import ServerStaus from "./ServerStatus.vue"
  export default{
    components:{
      appServerStatus:ServerStaus
    },
    data:function(){
      return{
        servers:[
        {id:1, status:"Kritik"},
        {id:2, status:"Normal"},
        {id:3, status:"Tehlikeli"},
        {id:4, status:"Bilinmiyor"}
      ]
      }

    },
    methods:{
      showServerDetail:function(data){
        eventBus.sendServerData(data)
      }
    }
  }

</script>
