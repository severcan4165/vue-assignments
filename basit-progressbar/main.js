var app = new Vue({
    el: '#app',
    data: {
         genislik:0,
    },
    methods:{
        startEffect:function(){
        vm = this;
            
        this.intervalId = setInterval(function(){
          vm.genislik += 10 ;
        },1000)
      },
      stopEffect:function(){
          clearInterval(this.intervalId)
      }
    },
    computed:{
        progressEffect: function(){
              return {
                width: this.genislik + "px"
              } 
     
       
      }
    }
  })