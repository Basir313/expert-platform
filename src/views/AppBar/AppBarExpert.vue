<template>
  <v-card>
    <v-app-bar color="light-blue darken-1" light>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold white--text"
        >Afghan Online Platform</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-menu offset-y nudge-width="150" left>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar v-bind="attrs" v-on="on">
            <v-img :src="img"></v-img>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item link v-for="(item, index) in menu_item" :key="index">
            <v-list-item-title
              class="font-weight-bold"
              @click="menuActionClick(item.link_url)"
              ><v-icon color="light-blue">{{ item.icon }}</v-icon
              ><v-divider vertical class="mx-4 primary"></v-divider>
              {{ item.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      color="light-blue darken-1"
      v-model="drawer"
      absolute
      temporary
      app
      fixed
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img :src="img"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="font-weight-bold"
            >Basiramad</v-list-item-title
          >
        </v-list-item>
      </v-list>

      <v-divider class="mx-4"></v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="item in drawer_items"
          :key="item.title"
          :to="item.link_url"
          link
        >
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold white--text"
              >{{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import readData from "../../services/readUserData";
import store from "../../store/index";
export default {
  created() {
    this.readInfo();
  },
  beforeMount() {},
  mounted() {
    this.setImage(store.state.user.info.photoUrl);
  },
  data: () => ({
    img: "",
    drawer: false,
    menu_item: [
      { title: "Setting", icon: "mdi-cog", link_url: "" },
      { title: "Log Out", icon: "mdi-logout", link_url: "logout" }
    ],
    drawer_items: [
      {
        title: "Dashbord",
        icon: "mdi-view-dashboard-variant",
        link_url: "/user_dashboard"
      },
      {
        title: "Profile",
        icon: "mdi-face-profile",
        link_url: "/profile"
      },
      {
        title: "Message",
        icon: "mdi-message-bulleted",
        link_url: "/user_message_list"
      },
      {
        title: "Consultations",
        icon: "mdi-account-voice",
        link_url: "/user_consultation"
      },
      {
        title: "Clients",
        icon: "mdi-account-group",
        link_url: "/user_clinds_list"
      },
      {
        title: "Projects",
        icon: "mdi-view-list-outline",
        link_url: "/project"
      }
    ],
    mini: true
  }),
  methods: {
    goToProfile() {
      this.$router.push({ name: "profile" });
    },
    logOutUser() {
      this.$store.dispatch("logout");
    },
    menuActionClick(action) {
      if (action == "logout") {
        this.logOutUser();
      }
    },
    readInfo() {
      var data = readData.getUserInfo(this.$store.state.user.user.uid);
      data.on("value", function(snapshot) {
        var key = snapshot.val();
        store.state.user.info = key;
      });
    },
    setImage(img) {
      if (img === null) {
        location.reload();
        this.img = img;
      } else {
        this.img = img;
      }
    }
  }
};
</script>
>
