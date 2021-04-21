<template>
  <v-row justify-center>
    <v-card
      class="mx-auto"
      shaped
      elevation="5"
      color="light-wihte"
      width="600"
    >
      <v-card-title class="pl-9 light-blue--text justify-center text-center">
        Varifiy Email Address
      </v-card-title>
      <v-card-text class="font-weight-bold mb-7 justify-center">
        <h3>
          To varify your email address, pleace click on varify email.
        </h3>
        <h2 class="mt-2 mb-2 light-blue--text">
          {{ send }}
        </h2>
        <h2 class="mt-2 mb-2">
          {{ error }}
        </h2>
        <h1 class="red--text" v-if="count">{{ countDown }} sec</h1>
        <router-link type="button" v-if="login" to="/Login">
          <h3>Login to your account</h3>
        </router-link>
        <BaseButton v-if="btn" class="my-5" @click="varifyEmail">
          {{ button }}
        </BaseButton>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import fireVarification from "../services/varificationCode";
export default {
  data() {
    return {
      send: "",
      error: "",
      button: "Varify Email",
      countDown: 45,
      count: false,
      btn: true,
      login: false
    };
  },
  methods: {
    varifyEmail() {
      fireVarification
        .sendEmailVerification()
        .then(() => {
          this.send = "Varification email sent! Plasce Chech your email";
          this.btn = false;
          this.count = true;
          this.countDownTimer();
        })
        .catch(error => {
          this.error = error.message;
        });
    },
    countDownTimer() {
      setTimeout(() => {
        this.countDown -= 1;
        this.countDownTimer();
      }, 1000);
      if (this.countDown == 0) {
        this.count = false;
        this.btn = true;
        this.button = "Try again"
        this.login = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card {
  position: center;
  margin-top: 8%;
  height: 200px;
  background: transparent;
  text-align: center;
  font-weight: 600;
}

.v-card-title {
  font-family: sans-serif, "Times New Roman", Times, serif;
}
</style>
