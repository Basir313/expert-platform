<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container row md-6 fluid text-center>
      <v-layout justify-center ml-12 mr-12 mt-12 column>
        <v-flex md6 lg6 xs6 align-self-center
          ><h1 class="font-weight-bold light-blue--text">
            Create a free account
          </h1>
          <h4
            color="light-blue darken-2"
            class=" font-weight-bold blue-grey--text"
          >
            to be a part of our Expert Platform
          </h4>
        </v-flex>
        <v-flex mb-2 mt-8 align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="First Name *"
            placeholder="Ahmad"
            v-model="userExpert.name"
            icon="mdi-text-short"
            type="text"
            clearable
            :rules="rules.rules.name_required"
            required
          />
        </v-flex>
        <v-flex mt-4 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            md6
            color="light-blue darken-2 white--text"
            label="Last Name"
            placeholder="Jamal"
            icon="mdi-text-short"
            type="text"
            hint="It is optional"
            v-model="userExpert.lastName"
            :rules="rules.rules.name"
            clearable
          />
        </v-flex>
        <BaseProgress :dialog="logdindialog"></BaseProgress>
        <v-flex mt-4 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="Email *"
            placeholder="example@gmail.com"
            icon="mdi-email"
            v-model="userExpert.email"
            type="email"
            required
            :rules="rules.rules.email"
            clearable
          />
        </v-flex>

        <v-flex mt-5 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="Phone Number *"
            prefix="+93"
            placeholder="788953988"
            icon="mdi-phone"
            v-model="userExpert.phone"
            type="number"
            :rules="rules.rules.phone"
            required
            :counter= 10
            clearable
          />
        </v-flex>

        <v-flex mt-5 cols="6" align-self-center>
          <v-autocomplete
            style="width:600px"
            color="light-blue darken-2 white--text"
            v-model="userExpert.country"
            :items="this.userInfo.country"
            label="Countray *"
            outlined
            placeholder="Select your country"
            clearable
            required
            :rules="rules.rules.list"
            append-icon="mdi-view-list"
            item-color="light-blue--text"
          />
        </v-flex>

        <v-flex mt-5 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="City"
            placeholder="Enter your city"
            icon="mdi-home-city"
            type="text"
            v-model="userExpert.city"
            :rules="rules.rules.name"
            clearable
          />
        </v-flex>

        <v-flex mt-5 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            :type="password_show ? 'text' : 'password'"
            label="Password *"
            v-model="password"
            :icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="password_show = !password_show"
            hint="the mini password 8 and max password 16"
            required
            :rules="rules.rules.password"
            :counter="16"
            clearable
          />
        </v-flex>

        <v-flex mt-5 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            :type="password_show ? 'text' : 'password'"
            color="light-blue darken-2 white--text"
            label="Confirm Password *"
            :icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
            hint="your Confirm Password should much with Password "
            v-model="userExpert.password"
            required
            :rules="confirmPasswordRull"
            :counter="16"
            clearable
          />
        </v-flex>
        <v-flex mt-4 mb-4 cols="6" align-self-center>
          <v-btn
            rounded
            :disabled="!valid"
            elevation="3"
            color="light-blue darken-2 white--text"
            width="250"
            height="50"
            class="text-capitalize"
            primary
            @click="goToRagistarExpert()"
          >
            Create an Expert Account
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import user_info from "../model/user_info";
import rules from "../model/validationRull";
export default {
  data() {
    return {
      userInfo: user_info,
      rules: rules,
      userExpert: {},
      valid: true,
      password_show: false,
      logdindialog: false,
      password: "",
      confirmPasswordRull: [
        v => !!v || "Password is required",
        v =>
          ((v || "").length >= 8 && v.length <= 16) ||
          "Password must be minimuam 8 and maximuam 16",
        v =>
          /[A-Z]+/.test(v) ||
          "Password should conten at lest one capital character ",
        v =>
          /[£$%#@]+/.test(v) ||
          "Password should conten at least one spicial character",
        v => /[0-9]+/.test(v) || "Password should contenat least one diget",
        v => v == this.password || "Your password does not mach"
      ]
    };
  },
  methods: {
    goToRagistarExpert() {
      if (this.$refs.form.validate()) {
        this.logdindialog = true;
        var user = this.$store.dispatch("creatExpertUser", this.userExpert);
        if (user) {
          this.$router.push({ name: "EamilVerifacation" });
        } else {
          this.logdindialog = false;
          alert(user);
        }
      }
    }
  }
};
</script>
