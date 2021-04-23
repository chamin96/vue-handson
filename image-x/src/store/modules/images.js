import api from "../../api";

const state = {
    images: [],
};

const getters = {
    allImages: (state) => state.images,
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    },
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data);
    },
    async getPublicImages({ commit }) {
        const response = await api.getPublicImages();
        commit('setImages', response.data);
    },
    uploadImage: () => {},
};

export default {
    state,
    getters,
    mutations,
    actions,
};
