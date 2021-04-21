<template>
  <v-container fill-height fluid text-center row>
    <v-layout justify-space-around align-content-center row wrap>
      <v-flex
        ustify-center
        align-content-center
        col="12"
        class="mt-3"
        xl12
        md4
        sm12
        row
      >
        <v-btn
          x-large
          class="text-center text-capitalize white--text"
          outlined
          rounded
          elevation="5"
          width="400"
          height="300"
          color="light-blue darken-2"
          @click="goToRegistarCompay()"
        >
          <div class="text-center mb-5">
            <v-col>
              <v-img
                light
                top
                sizes="55px"
                src="../assets/search_expert.png"
              ></v-img>
            </v-col>
            <v-col class="mb-5">
              <h1>Hirring Expert</h1>
            </v-col>
          </div>
        </v-btn>
      </v-flex>
      <v-flex justify-center align-content-center xl12 md4 sm12 row>
        <v-btn
          class="text-center text-capitalize white--text"
          color="light-blue darken-2 white--text"
          outlined
          rounded
          elevation="5"
          width="400"
          height="300"
          @click="goToRegistarExpert()"
          x-large
        >
          <div class="mb-5">
            <v-col>
              <v-img
                light
                top
                sizes="55px"
                src="../assets/black_work_48.png"
              ></v-img>
            </v-col>
            <v-col class="mb-5">
              <h1>Become Expert</h1>
            </v-col>
          </div>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToRegistarExpert() {
      this.$router.push({ name: "RegistarExpert" });
    },
    goToRegistarCompay() {
      this.$router.push({ name: "RegistrationCompany" });
    }
  }
};
</script>
