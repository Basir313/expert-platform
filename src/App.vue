<template>
  <v-app>
    <appBar v-if="this.$store.state.user.user.login" />
    <appBarSite v-else />
    <NotificationCountiner />
    <v-main mt-3 fill-height>
      <v-container fluid>
        <router-view :key="$route.fullpath" />
      </v-container>
    </v-main>
    <footerLayout />
  </v-app>
</template>

<script>
import Footer from "./views/footer/Footer";
import AppBarExpert from "./views/AppBar/AppBarExpert";
import AppBarSite from "./views/AppBar/AppBarSite";
import NotificationCountiner from "@/components/NotificationCountiner.vue";
export default {
  components: {
    footerLayout: Footer,
    appBar: AppBarExpert,
    appBarSite: AppBarSite,
    NotificationCountiner
  },
 
};
</script>
<style>
#nprogress .bar {
  background: rgb(248, 3, 3) !important;
  height: 24px;
}
</style>
