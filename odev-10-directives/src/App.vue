<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3>Directive Sınavı</h3>

      <p v-color:mouseover="'green'">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ducimus nam fuga beatae nemo, molestias </p>
    </div>
    <div class="col-md-6 col-md-offset-3">
  
      
      <div class="customDiv" v-customdiv:click="{fn:clickedDiv, color1:'green',color2:'blue'}" ></div>
         </div>
  </div>
</template>

<script>
export default {
  directives:{
    color:{
      bind(el,binding){
        
        el.addEventListener("mouseover",()=>{
          el.style.backgroundColor = binding.value
        })
      }
    },
    customdiv:{
      bind(el,binding){
        let methodType = binding.arg
        let customFn = binding.value.fn
        let colors = [binding.value.color1, binding.value.color2]
        let currentColor = null
        el.addEventListener(methodType,customFn(colors,currentColor,el ))
      }
    }
  },
  methods:{
    clickedDiv(colors, currentColor, el){
      setInterval(()=>{
        currentColor == colors[0] ? currentColor = colors[1]: currentColor = colors[0]
        el.style.backgroundColor = currentColor
      },500)
    
    }
  }
}
</script>

<style>
.customDiv{
  width:200px;
  height: 200px;
  background-color: bisque;
}
</style>
