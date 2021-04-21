<template>
  <v-navigation-drawer
    color="light-blue darken-1"
    fixed
    app
    absolute
    mini-variant.sync
    expand-on-hover
    mini-variant-width="50"
  >
    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="../../assets/Basir.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-title class="font-weight-bold"
          >Basiramad</v-list-item-title
        >
      </v-list-item>
    </v-list>

    <v-divider class="mx-4"></v-divider>

    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
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
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashbord", icon: "mdi-view-dashboard-variant" },
        {
          title: "Profile",
          icon: "mdi-face-profile"
        },
        { title: "Message", icon: "mdi-message-bulleted" },
        { title: "Consultations", icon: "mdi-account-voice" },
        { title: "Clients", icon: "mdi-account-group" }
      ]
    };
  },
  methods: {
    goToProfile() {
      this.$router.push({ path: "/profile" });
    }
  }
};
</script>
