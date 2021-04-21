<template>
  <v-card>
    <v-app-bar  light flat class="light-blue darken-1">
      <v-toolbar-title
        @click="goToHome()"
        class="font-weight-bole white--text text-uppercase"
        >{{ siteTitle }}</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn
        @click="goToRegistarExpert()"
        depressed
        rounded
        justify-center
        color="light-blue darken-1 white--text "
        class="font-weight-bold "
        >{{ Expert }}</v-btn
      >

      <v-btn
        @click="goToRegistar()"
        text-transform-lowercase
        depressed
        rounded
        color="light-blue darken-1"
        class="font-weight-bold white--text"
        ml-2
      >
        <v-icon>mdi-plus</v-icon>
        {{ Registar }}
      </v-btn>

      <v-divider vertical dark></v-divider>

      <v-btn
        @click="goToLogin()"
        depressed
        rounded
        color="light-blue darken-1"
        class="font-weight-bole white--text"
      >
        <v-icon mr-1>mdi-login</v-icon>{{ Login }}</v-btn
      >
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      disable: false,
      Login: "Sign in",
      Registar: "Sign up",
      Expert: "Become Expert",
      siteTitle: "Afghan Online"
    };
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "LoginPage" });
    },
    goToRegistar() {
      this.$router.push({ name: "RagistarPage" });
    },
    goToRegistarExpert() {
      this.$router.push({ name: "RegistarExpert" });
    },
    goToHome() {
      this.$router.push({ name: "MyHome" });
    }
  }
};
</script>

<style lang="scss" scoped></style>
