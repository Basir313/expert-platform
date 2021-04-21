<template>
  <div fill-height fluid>
    <base-banner
      color="light-blue lighten-1"
      progress_color="blue darken-4"
      message="Complate your Profile"
      :banner="banner"
      :value=" complated"
    ></base-banner>
    <div class="mt-5">
      <v-row>
        <v-col cols="8" md="4">
          <v-card
            height="200"
            width="350"
            elevation="2"
            rounded=""
            align-content-center
            background-opacity="200px"
          >
            <v-card-text justify-center>
              total message
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="8" md="4">
          <v-card
            height="200"
            width="350"
            elevation="2"
            rounded
            align-content-center
            background-opacity="200px"
          >
            <v-card-text justify-center>
              total clint
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="8" md="4">
          <v-card
            height="200"
            width="350"
            elevation="2"
            rounded
            align-content-center
            background-opacity="200px"
          >
            <v-card-text justify-center>
              total cunsulting
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: true,
      complated: 50
    };
  },
  beforeMount() {},
  methods: {
    gotocheck() {}
  }
};
</script>

<style scoped>
.v-card-text {
  align-content: center;
}
</style>
