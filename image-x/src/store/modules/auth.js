import api from "../../api";
import { router } from "../../main";

import axios from "axios";

import qs from "qs";

const CLIENT_ID = "";
const CLIENT_SECRET = "";

const state = {
    token: window.localStorage.getItem("ACCESS_TOKEN"),
};

const getters = {
    isLoggedIn: (state) => !!state.token,
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    },
};

const actions = {
    logout: ({ commit }) => {
        commit("setToken", null);
        window.localStorage.removeItem("ACCESS_TOKEN");
    },
    login: () => {
        api.login();
    },
    async finalizeLogin({ commit }, callback) {
        const query = qs.parse(callback.replace("?", ""));

        const response = await axios.post(
            "https://unsplash.com/oauth/token",
            null,
            {
                params: {
                    client_id: CLIENT_ID,
                    client_secret: CLIENT_SECRET,
                    redirect_uri: "http://localhost:8080/oauth2/callback",
                    code: `${query.code}`,
                    grant_type: "authorization_code",
                },
            }
        );
        commit("setToken", response.data.access_token);
        window.localStorage.setItem("ACCESS_TOKEN", response.data.access_token);
        router.push("/");
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
