import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/Page/Home";
import ShopArt from "../components/Page/ShopArt";
import About from "../components/Page/AboutUs";
import Terms from "../components/Page/Terms";
import Privacy from "../components/Page/Privacy";
import Refund from "../components/Page/Refund";
import Payment from "../components/Page/Payment";
import JoinUs from "../components/Page/JoinUs";
Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/shop",
        name: "shop",
        component: ShopArt
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/terms",
        component: Terms
    },
    {
        path: "/privacy",
        component: Privacy
    },
    {
        path: "/refund",
        component: Refund
    },
    {
        path: "/payment",
        component: Payment
    },
    {
        path: "/joinus",
        component: JoinUs
    }
];
// import $ from "jquery";
const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: "history"
});

export default router;
