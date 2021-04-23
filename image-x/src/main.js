import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

import App from "./App.vue";

import AuthHandler from "./components/AuthHandler.vue";
import ImageList from "./components/ImageList.vue";
import UploadForm from "./components/UploadForm.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: ImageList,
        },
        {
            path: "/upload",
            component: UploadForm,
        },
        {
            path: "/oauth2/callback",
            component: AuthHandler,
        },
    ],
});

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
