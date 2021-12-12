import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        airplane: {}
    },
    mutations: {
        setAirplane(state, playload) {
            state['airplane'] = playload
        }
    },
    actions: {
        triggerAirplane({ commit }, playload) {
            commit("setAirplane", playload)
        }
    },
    getters: {

    }
})