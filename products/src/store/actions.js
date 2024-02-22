import Vue from "vue"
export const setTradeResult = ({state, commit}, payload) => {
    /** önce store içindeki state'i güncelleyeğiz, sonra firebase'e göndereceğiz */
        commit("updateTradeResult", payload)

        let tradeDate = {
            purchase:state.purchase,
            sale:state.sale
        }
        Vue.http.put("https://vue-product-5a972-default-rtdb.firebaseio.com/trade-result.json", tradeDate)
        .then(response => console.log(response))
}

export const getTradeResult = ({commit}) => {
        Vue.http.get("https://vue-product-5a972-default-rtdb.firebaseio.com/trade-result.json")
        .then(response => {
            commit("updateTradeResult", response.body)
        })
}