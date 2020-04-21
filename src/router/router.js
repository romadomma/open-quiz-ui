import Vue from 'vue'
import Router from 'vue-router'
import StepOne from '@/components/StepOne'
import PlayerStepOne from '@/components/PlayerStepOne'
import PlayerLobby from '@/components/PlayerLobby'
import PlayerQuestion from '@/components/PlayerQuestion'
import PlayerQuestionResult from '@/components/PlayerQuestionResult'
import PlayerGameResult from '@/components/PlayerGameResult'
import PlayerCategory from '@/components/PlayerCategory'
import ServerLobby from '@/components/ServerLobby'

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
        {
            path: '/player_question_result',
            name: 'player_question_result',
            component: PlayerQuestionResult
        },
        {
            path: '/player_game_result',
            name: 'player_game_result',
            component: PlayerGameResult
        },
        {
            path: '/player_category',
            name: 'player_category',
            component: PlayerCategory
        },
        {
            path: '/server_lobby',
            name: 'server_lobby',
            component: ServerLobby
        },
    ]
})
