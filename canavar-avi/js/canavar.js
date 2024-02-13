new Vue({
    el:"#app",
    data:{
        player_health: 100,
        monster_health: 100,
        isGameOn:false,
        game_logs:[]

    },
    methods:  {
        start: function(){
           this.isGameOn =true
        },
        attack: function(){
            let player_attack = Math.round(Math.random()*10)
            this.monster_health -= player_attack
            this.monster_attack();
            this.add_to_log({turn:"p", icerik:`oyuncu saldırdı: ${player_attack}`})


        },
        monster_attack: function(){
          let m_attack = Math.round(Math.random()*15)
          this.player_health -= m_attack
          this.add_to_log({turn:"m", icerik:`canavar saldırdı: ${m_attack}`})


        },
        special_attack: function(){
            let player_attack = Math.round(Math.random()*20)
            this.monster_health -= player_attack
            this.monster_attack();
            this.add_to_log({turn:"p", icerik:`oyuncu özel atakla saldırdı: ${player_attack}`})
    
        },
        heal_up: function(){
            let player_heal = Math.round(Math.random()*20)
            this.player_health += player_heal
            this.monster_attack();
            this.add_to_log({turn:"p", icerik:`oyuncu ilk yardım aldı: ${player_heal}`})
        },
        give_up: function(){
            this.player_health = 0
            this.add_to_log({turn:"p", icerik:`oyuncu pes etti!!`})

        },
        add_to_log: function(log){
         this.game_logs.push(log)
        }
    },
    watch:{
        player_health: function(value){
            if(value <= 0){
                this.player_health=0;
                if(confirm("tamam mı devam mı?")){
                    this.player_health= 100;
                    this.monster_health= 100;
                    this.game_logs=[]
                } 
            }
            else if (value>=100){
                this.player_health=100;
            }
        },
        monster_health: function(value){
            if(value < 0){
                this.monster_health=0;
                if(confirm("Yendiniz !! tamam mı devam mı?")){
                    this.player_health= 100;
                    this.monster_health= 100;
                    this.game_logs=[]
                } 
            }
         
        }
        
       
    }

})