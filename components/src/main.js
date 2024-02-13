import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods:{
    sendServerData:function(data){
      this.$emit("sendedData",data)
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
