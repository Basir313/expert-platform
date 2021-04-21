<template>
  <v-banner
    class="text-center ml-16 mr-16"
    v-model="banner.banner"
    transition="slide-y-reverse-transition"
    elevation="3"
    rounded
    :color="banner.color"
    :width="banner.width"
    :height="banner.height"
  >
    <v-row>
      <v-col class="text-right">
        <v-btn
          outlined
          rounded
          color="white"
          class="text-right"
          @click="banner.banner = !banner.banner"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-card-text class="">
        <h1 class="pb-3 white--text  text-center">
      {{ banner.message }}
    </h1>
    </v-card-text>
  </v-banner>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped></style>
