const actions = {
	updateCode({commit}, code) {
		if (parseInt(code) === 123) {
			commit('updateCode', code);
		}
	}
};

const mutations = {
	updateCode(state, code) {
		state.code = code;
	},
};

const getters = {
	isCodeExists(state) {
		return state.code === null;
	}
}

export default {
	namespaced: true,

	state: {
		code: null
	},

	actions: actions,
	mutations: mutations,
	getters: getters,

}
