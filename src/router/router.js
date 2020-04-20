import Vue from 'vue'
import Router from 'vue-router'
import StepOne from '@/components/StepOne'
import PlayerStepOne from '@/components/PlayerStepOne'
import PlayerLobby from '@/components/PlayerLobby'
import PlayerQuestion from '@/components/PlayerQuestion'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'step_one',
            component: StepOne
        },
        {
            path: '/player_code',
            name: 'player_step_one',
            component: PlayerStepOne
        },
        {
            path: '/player_question',
            name: 'player_question',
            component: PlayerQuestion
        },
        {
            path: '/player_lobby',
            name: 'player_lobby',
            component: PlayerLobby
        },
    ]
})
