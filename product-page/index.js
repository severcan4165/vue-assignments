var eventBus = new Vue()

Vue.component("product", {
  template: `    <div class="product">
    <div class="product-image">
        <img :src="image" alt="">
    </div>
    <div class="product-info">
        <h1>{{productName}}</h1>
        
   
    
        <p v-if="inStock>10">in Stock</p>
        <p v-else-if="inStock>0 && inStock<=10">Almost Sold</p>
        <p v-else>Out of Stock</p>
        <p >Shipping is {{shipping}} !</p>
       
        <p>{{sale}}</p>
     
        <product-details :details="details" ></product-details>

        <div class="color-box" :style="{backgroundColor: variant.variantColor}" v-for="(variant,index) in variants" 
        :key="variant.variantId"
        @mouseover="updateImage(index)"
     >
           
               
        </div>
        <div>
            <button @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}"  >Add To Cart</button>
        </div>
        <div>
        <button @click="removeCart" >Remove the Cart</button>
    </div>
   

    <product-tabs :reviews="reviews"></product-tabs>
   
    </div>

 
 

   </div> `,
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      onSale: true,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      reviews: [],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: "./vmSocks-green-onWhite.jpg",
          variantQuantity: 10,
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: "./vmSocks-blue-onWhite.jpg",
          variantQuantity: 10,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    },
    removeCart() {
      console.log("çalışlyor");
      this.$emit("remove-cart", this.variants[this.selectedVariant].variantId);
    },
    updateImage: function (updatedImageIndex) {
      this.selectedVariant = updatedImageIndex;
    },
    
  },
  computed: {
    productName: function () {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if (this.onSale) {
        return this.productName + " are on Sale !";
      } else {
        return this.productName + " are not on Sale !";
      }
    },
    shipping() {
      if (this.premium) {
        return "free";
      } else {
        return 2.99;
      }
    },
  },
  mounted(){
    eventBus.$on('review-submitted', productReview => {
        this.reviews.push(productReview)
      })
  }
});

Vue.component("product-details", {
  props: {
    details: {
      type: Array,
      reuired: true,
    },
  },
  template: `
    <ul>
    <li v-for="(item,index) in details" :key="index" >{{item}}</li>
</ul>`,
});

Vue.component("product-tabs", {
  props: {
    reviews: {
      type: Array,
      required: false,
    },
  },
  template: `<div>
        <div> 
            <span @click="selectedTab=tab" :class="{activeTab:selectedTab === tab}" class="tab" v-for="(tab,index) in tabs" :key="index" >{{tab}}</span> 
        </div>
        <div v-show="selectedTab === 'Review'">
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul v-else>
                <li v-for="(review, index) in reviews" :key="index">
                    <p>{{ review.name }}</p>
                    <p>Rating:{{ review.rating }}</p>
                    <p>{{ review.review }}</p>
                </li>
            </ul>
        </div>
        <div v-show="selectedTab === 'Make a Review'" >
            <product-review    ></product-review>
        </div>
    </div>`,
  data() {
    return {
      tabs: ["Review", "Make a Review"],
      selectedTab: "Review",
    };
  },
});

Vue.component("product-review", {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
    `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      eventBus.$emit("review-submitted", productReview);
      this.name = null;
      this.review = null;
      this.rating = null;
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeTheCart(id) {
      console.log("sss");

      this.cart = this.cart.filter((item) => item !== id);
    },
  },
});
