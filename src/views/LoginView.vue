<template>
  <v-form v-model="valid" ref="form" lazy-validation @submit.prevent="">
    <v-container fill-height fluid row text-center justify-center>
      <v-layout justify-center align-content-center wrap column>
        <v-flex mt-8 mb-4 align-self-center>
          <span
            ><h1 class="font-weight-bold light-blue--text">Login</h1>
            <h4 class="font-weight-bold mt-4 blue-grey--text">
              Welcome To Afghan Online Expert Platform and login to your account
            </h4></span
          >
        </v-flex>
        <v-col v-if="error" cols="6">
          <span class="red--text font-weight-bold">{{ error }}</span>
        </v-col>
        <v-flex mt-8 mb-4 align-self-center>
          <v-text-field
            style="width:500px"
            clearable
            outlined
            v-model="userinfo.username"
            label="Username"
            type="email"
            append-icon="mdi-email"
            placeholder="Enter your email"
            class="font-wight-bold"
            counter="30"
            hint="Email that your ragistrated in this platform"
            :rules="usernameRolles"
            required
          />
        </v-flex>
        <v-flex align-self-center mb-4>
          <v-text-field
            clearable
            style="width:500px"
            v-model="userinfo.password"
            placeholder="Enter your password"
            :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show_password ? 'text' : 'password'"
            :counter="16"
            label="Password"
            @click:append="show_password = !show_password"
            outlined
            required
            :rules="passwordRolles"
          />
        </v-flex>
        <v-flex mt-1 mb-4 align-self-center>
          <v-btn
            :disabled="!valid"
            width="200"
            elevation="3"
            rounded
            x-large
            outlined
            color="light-blue darken-2"
            class="font-weight-bold"
            type="submit"
            @click.prevent="LoginToAccount"
          >
            <span>Sing In</span>
          </v-btn>
        </v-flex>
        <v-flex mt-3>
          <v-divider light class="mx-4"></v-divider>
        </v-flex>
        <v-flex mt-2>
          <v-row>
            <v-col>
              <a class="blue-grey--text">Creating new account?</a>
            </v-col>
            <v-col>
              <a class="blue-grey--text">Do you forgot your Password?</a>
            </v-col>
          </v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      error: "",
      dialog: false,
      userinfo: {
        username: "",
        password: ""
      },
      valid: true,
      show_password: false,
      usernameRolles: [
        v => !!v || "E-mail is required",
        v => /[@.]+/.test(v) || ("" && v.length <= 30) || "E-mail must be valid"
      ],
      passwordRolles: [
        v => !!v || "Password is required",
        v =>
          "" ||
          (v.length >= 8 && v.length <= 16) ||
          "Password must be minimuam 8 and maximuam 16",
        v =>
          /[A-Z]+/.test(v) ||
          "Password should conten at lest one capital character ",
        v =>
          /[£$%#@]+/.test(v) ||
          "Password should conten at least one spicial character",
        v => /[0-9]+/.test(v) || "Password should contenat least one diget"
      ]
      //email_rolle:[v => !!v || 'Email is required']
    };
  },
  methods: {
    LoginToAccount() {
      if (this.$refs.form.validate()) {
        var data = {
          email: this.userinfo.username,
          password: this.userinfo.password
        };
        this.$store.dispatch("Login", data);
      }
    }
  }
};
</script>
