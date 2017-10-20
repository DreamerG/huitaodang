import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)

const state = {
    listx:[]
}

const mutations = {
    addData:function(state,res){
        state.listx=res;
    }
}

const actions = {
    addDataAct:function({commit},route){
        console.log(route)
        axios.get(`/h5/api/${route}/`)
        .then(function(res){
            commit("addData",res.data.data.list)
        }).catch(function(error){
            console.log("XXX")
        })
    }
}

const getter = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getter
})
