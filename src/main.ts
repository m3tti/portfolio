import Main from "./Main.vue";
import CV from "./CV.vue";
import Intro from "./Intro.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: "/cv" },
    { path: "/cv", component: CV },
    { path: "/intro", component: Intro }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: "#main",
    router,
    render: h => h(Main)
})