<template>
  <v-form ref="form" lazy-validation v-model="valid">
    <v-container row md-6 fluid text-center>
      <v-layout justify-center ml-12 mr-12 mt-12 column>
        <v-flex md6 lg6 xs6 align-self-center
          ><h1 class="font-weghit-blod light-blue--text">
            Create a free account for your company
          </h1>
          <h4 class="font-weghit-blod blue-grey--text">
            To hire an expert
          </h4></v-flex
        >
        <BaseProgress :dialog="dialog"></BaseProgress>
        <v-flex mb-2 mt-6 align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="First Name *"
            placeholder="Ahmad"
            v-model="company.name"
            icon="mdi-text-short"
            :counter="20"
            required
            :rules="rules.rules.name_required"
            clearable
          />
        </v-flex>
        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="Last Name"
            placeholder="Jamal"
            hint="It is an optional"
            icon="mdi-text-short"
            type="text"
            v-model="company.lastName"
            :rules="rules.rules.name"
            :counter="20"
            clearable
          />
        </v-flex>

        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="Work Email"
            placeholder="example@domain.com"
            icon="mdi-email"
            v-model="company.email"
            type="email"
            required
            :rules="rules.rules.email"
            :counter="30"
            clearable
          />
        </v-flex>
        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="Company name"
            placeholder="@exmple..."
            hint="It is an optional"
            icon="mdi-text-short"
            type="text"
            v-model="company.companyName"
            :rules="rules.rules.name_required"
            required
            :counter="20"
            clearable
          />
        </v-flex>
        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="Company Web site"
            placeholder="www.@example.com"
            hint=""
            append-icon="mdi-text-short"
            type="text"
            v-model="company.companyWebLink"
            :rules="rules.rules.link_url"
            :counter="40"
            clearable
          />
        </v-flex>
        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="Company Address"
            placeholder="Adress"
            hint=""
            icon="mdi-text-short"
            type="text"
            v-model="company.comAddress"
            :rules="rules.rules.name_required"
            :counter="20"
            required
            clearable
          />
        </v-flex>

        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="Phone Number"
            prefix="+93"
            placeholder="788953988"
            icon="mdi-phone"
            v-model="company.phone"
            type="number"
            required
            :rules="rules.rules.phone"
            :counter="10"
            clearable
          />
        </v-flex>

        <v-flex mt-6 cols="6" align-self-center>
          <v-autocomplete
            style="width:600px"
            color="light-blue darken-2 white--text"
            v-model="company.country"
            :items="this.userInfo.country"
            label="Countray"
            outlined
            placeholder="Select your country"
            clearable
            required
            :rules="rules.rules.list"
            append-icon="mdi-view-list"
            item-color="light-blue--text"
          />
        </v-flex>

        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            label="City"
            placeholder="Enter your city"
            icon="mdi-home-city"
            type="text"
            v-model="company.city"
            required
            :rules="rules.rules.name"
            :counter="20"
            clearable
          />
        </v-flex>

        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            color="light-blue darken-2 white--text"
            :type="password_show ? 'text' : 'password'"
            label="Password"
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

        <v-flex mt-6 cols="6" align-self-center>
          <BaseEdittext
            style="width:600px"
            :type="password_show ? 'text' : 'password'"
            color="light-blue darken-2 white--text"
            label="Confirm Password"
            :icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
            hint="your Confirm Password should much with Password "
            v-model="company.password"
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
            color="light-blue darken-2"
            width="250"
            height="50"
            class="text-capitalize font-weight-bold white--text"
            primary
            @click="goToRagistarComapny()"
          >
            Create
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
      rules: rules,
      userInfo: user_info,
      valid: true,
      password_show: false,
      dialog: false,
      company: {},
      password: "",
      confirmPasswordRull: [
        v => !!v || "Password is required",
        v =>
          ((v || "").length >= 8 && (v || "").length <= 16) ||
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
    goToRagistarComapny() {
      if (this.$refs.form.validate()) {
        this.dialog = true;
        var data = this.$store.dispatch("createCompanyUser", this.company);
        if (data) {
          this.$router.push({ name: "EamilVerifacation" });
        } else {
          this.dialog = false;
          alert(data);
        }
      }
    }
  }
};
</script>
