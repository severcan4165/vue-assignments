<template>
  <div>
    <div class="container">
    <app-card 
        @click.native="selectCardFn(card)" 
        v-for="card in cards" 
        :key="card.id" 
        :card="card" 
        :class="{ shadow: selectedCard == card.id }"></app-card>
  </div>
  <div class="container">
        <h3>Bilgisayarın seçtiği: {{guessCard.id}}</h3>
        <component
          @click.native="compareCards(selectedCard)"
          :card="selectedCardData"
          :is="activeCard"
        >
        </component>
  
    </div>
  </div>

</template>



<script>
import Card from "./Card.vue";
import DefaultCard from "./DefaultCard.vue"


export default {
    components:{
        "app-card":Card,
        "default-card":DefaultCard,
    },data() {
    return {
      cards: [
        { id: 1, component: "app-card", img: "src/assets/card-1.jpg" },
        { id: 2, component: "app-card", img: "src/assets/card-2.jpg" },
        { id: 3, component: "app-card", img: "src/assets/card-3.jpg" },
        { id: 4, component: "app-card", img: "src/assets/card-4.jpg" },
        { id: 5, component: "app-card", img: "src/assets/card-5.jpg" },
      ],
      selectedCard:null,
      selectedCardData:{},
      activeCard:"default-card",
      guessCard:{}
    };
  },
  methods:{
    selectCardFn(data){
      this.selectedCard = data.id;
    },
    compareCards(){
      if (this.selectedCard == null) {
        alert("İlk Olarak Bir Kart Seçiniz!");
      } else {
          this.activeCard=this.guessCard.component;
          this.selectedCardData = this.guessCard
        
          setTimeout(() => {
          if (this.guessCard.id == this.selectedCard) {
            this.$emit("activeComponentEvent", "app-celebrate");
          } else {
            this.$emit("activeComponentEvent", "app-failure");
          }
        }, 1000);
       }
           
        }
  },

  created(){
    let randomNumber = Math.floor(Math.random()*this.cards.length) 
    this.guessCard = this.cards[randomNumber]
  }
};
</script>


<style >
  .container {
    display: flex ;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  .shadow {
  box-shadow: 0px 5px 48px #30969f !important;
  transition: box-shadow 0.5s;
}
</style>
