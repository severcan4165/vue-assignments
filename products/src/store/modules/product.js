import Vue from "vue"
import {router} from "../../router"
const state = {
    products:[]
}

const getters = {
    getProducts(state){
        return state.products
    },
    getProduct(state){
      return key =>  state.products.filter(item => {
            return     item.key == key
        })
        
    }
}

const mutations = {
    updateProductList(state, product){
        state.products.push(product)
    }
}

const actions = {
    initApp({commit}){
        Vue.http.get("https://vue-product-5a972-default-rtdb.firebaseio.com/products.json")
        .then(response => {
            let data = response.body;
            for(let key in data){
                data[key].key = key
                commit("updateProductList", data[key])
            }
        })
    },
    saveProduct({dispatch, commit, state},payload){
        Vue.http.post("https://vue-product-5a972-default-rtdb.firebaseio.com/products.json",payload)
        .then((response)=>{

            /****** ürün listesinin güncellenmesi */
            payload.key= response.body.name;
            commit("updateProductList", payload)
            /****** alış, satış, bakiyenin güncellenmesi */
            let tradeResult = {
                purchase:payload.price,
                sale:0,
                count:payload.count
            }
            dispatch("setTradeResult",tradeResult )
            router.replace("/")
        })
    },
    sellProduct({state, commit, dispatch},payload){
        let product = state.products.filter(item => {
            return     item.key == payload.key
        })

        if (product) {
        let resultCount = product[0].count - payload.count;

        Vue.http.patch("https://vue-product-5a972-default-rtdb.firebaseio.com/products/" + payload.key + ".json", {count:resultCount})
        .then(response => {
            console.log(response)
            product[0].count =resultCount
            let tradeResult = {
                purchase:0,
                sale: product[0].price,
                count:payload.count
            }
            dispatch("setTradeResult",tradeResult )
            router.replace("/")
        }) }
    }

}


export default {
    state,
    getters,
    mutations,
    actions
}