import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Applications from "../views/Applications.vue";
import NodePlan from "../views/NodePlan.vue";
import BSN from "../views/BSN.vue";
import Team from "../views/Team.vue";
import Wallet from "../views/Wallet.vue";
import Community from "../views/Community.vue";
import Join from "../views/Join.vue";
import Contact from "../views/Contact.vue";
import RiskStatement from "../views/RiskStatement.vue";
import Disclaimer from "../views/Disclaimer.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/applications",
    name: "Applications",
    component: Applications
  },
  {
    path: "/nodeplan",
    name: "Node plan",
    component: NodePlan
  },
  {
    path: "/bsn",
    name: "BSN",
    component: BSN
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: Wallet
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/community",
    name: "Community",
    component: Community
  },
  {
    path: "/join",
    name: "Join",
    component: Join
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/disclaimer",
    name: "Disclaimer",
    component: Disclaimer
  },
  {
    path: "/riskstatement",
    name: "Risk statement",
    component: RiskStatement
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  // mode: "history"
});

export default router;
