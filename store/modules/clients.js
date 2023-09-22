function initialState() {
  return {
    clients: [],
  };
}

export const state = () => ({
  ...initialState(),
});

export const getters = {
  getClients: (state) => state.clients,
};

export const mutations = {
  setClients(state, res) {
    state.clients = res;
  },
};

export const actions = {
  async getClientsAction({ commit }) {
    try {
      const response = await this.$axios.$get('/client');
      commit('setClients', response);
      // console.log('Data fetched ', response);
    } catch (err) {
      console.log('Fetching clients data error', err);
      throw err;
    }
  },

  async editClientActions({ commit }, payload) {
    try {
      const response = await this.$axios.$put('');
    } catch (err) {
      console.log('Client Edit Failed : ', err);
      throw err;
    }
  },
};
