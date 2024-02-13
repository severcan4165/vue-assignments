var app = new Vue({
    el: '#app',
    data: {
         activeClass:null,
      intervalId : null,
    },
    methods:{
        startEffect:function(){
      vm = this;
              this.activeClass = true;
        this.intervalId = setInterval(function(){
          vm.activeClass = !vm.activeClass;
      },1000)
      },
      stopEffect:function(){
          clearInterval(this.intervalId)
      }
    },
    computed:{
        divEffect: function(){
              return this.activeClass ? "highlight":"shrink"
     
       
      }
    }
  })