import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginView.vue";
import RegistarPaage from "../views/RegistarView.vue";
import RegistarExpert from "../views/RegistarExpertView.vue";
import RegistarCompany from "../views/RegistarCompanyView.vue";
import UserProfile from "../views/nav/navPage/profile.vue";
import CreateProject from "../views/nav/navPage/CreateProject.vue";
import UserMessageList from "../views/nav/navPage/MessageList.vue";
import UserClindes from "../views/nav/navPage/userListClien.vue";
import UserDashboard from "../views/nav/navPage/userDashboard.vue";
import Projects from "../views/nav/navPage/Project.vue";
import UserConsultations from "../views/nav/navPage/userConsultations.vue";
//import NProgress from "nprogress";
import BaseVarified from "../components/BaseVarified.vue";
//import Store from '../store/index'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/Registar",
    name: "RagistarPage",
    component: RegistarPaage
  },

  {
    path: "/ExpertRegistartion",
    name: "RegistarExpert",
    component: RegistarExpert
  },
  {
    path: "/CompanyRegistaration",
    name: "RegistrationCompany",
    component: RegistarCompany
  },

  {
    path: "/profile",
    name: "profile",
    component: UserProfile
    //meta:{requireAuth: true}
  },
  {
    path: "/create_project",
    name: "CreateProject",
    component: CreateProject
    // meta:{requireAuth:true}
  },
  {
    path: "/user_message_list",
    name: "userMessageList",
    component: UserMessageList
    // meta:{requireAuth:true}
  },
  {
    path: "/user_clinds_list",
    name: "UserClindList",
    component: UserClindes
    //meta:{requireAuth:true}
  },
  {
    path: "/user_consultation",
    name: "UserConsultations",
    component: UserConsultations
    //meta:{requireAuth:true}
  },
  {
    path: "/user_dashboard",
    name: "UserDashboard",
    component: UserDashboard
    //meta:{requireAuth:true}
  },
  {
    path: "/varifiy_Eamil",
    name: "EamilVerifacation",
    component: BaseVarified
  },
  {
    path: "/project",
    name: "projects",
    component: Projects
  }
];

const router = new VueRouter({
  mode: "history",
  //base: process.env.BASE_URL,
  routes
});

router.beforeEach((routTo, routFrom, next) => {
  //Store.state.dialog = true;
  next();
});
router.afterEach(() => {
  //Store.state.dialog = false;
});
export default router;
