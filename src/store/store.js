import Vuex from 'vuex'
import Vue from 'vue'
import player from './modules/player'
import socketEvent from './modules/socker_event'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        player,
        socketEvent,
    },
})
