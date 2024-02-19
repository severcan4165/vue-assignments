<template>
    <div class="main-container">
        <h1>Kart Oyunu</h1>
        <h4 >Açık kartlardan birini seçtikten sonra, kapalı olan karta tıklayınız</h4>
     
        
        <component 
            :is="activeComponent"  
            @activeComponentEvent="activeComponent=$event"
            key="mainComponent"
            
            >
           
        </component>
       
    </div>
   
</template>
<script>
import Game from "./components/GameCards.vue"
import Celebrate from "./components/Celebrate.vue" 
import Failure from "./components/Failure.vue" 
export default {
    components:{
        "game":Game,
        "app-celebrate":Celebrate,
        "app-failure":Failure,

    },
    data:function(){
        return{
            activeComponent : "game"
        }
    }
   
    
}
</script>
<style >
body{
    margin: 0;
}
.main-container{
    text-align: center;
    padding: 10px;
   
    background-color:bisque ;
}
</style>
