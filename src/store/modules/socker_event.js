const actions = {
	/**
	 * Понг запросы от сервера
	 * @constructor
	 */
	SOCKET_PONG() {
		console.log('pong')
	},
	/**
	 * Запросы в комнату
	 * @constructor
	 */
	SOCKET_ROOM() {
		console.log('room event')
	},
};

const mutations = {};

const getters = {}

export default {
	namespaced: true,

	state: {
		code: null
	},
	actions: actions,
	mutations: mutations,
	getters: getters,

}
