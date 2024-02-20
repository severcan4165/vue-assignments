import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        counter:0
    },
    getters:{
        getDoubleCounter(state){
            return state.counter*2;
        },
        clickCounter(state){
            return state.counter + ".kez tıklandı"
        }
    },
    mutations:{
        updateCounter(state,value){
            return state.counter += value

        }
    }
})