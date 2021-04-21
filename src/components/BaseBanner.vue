<template>
  <div class="ma-8">
    <v-banner
      v-model="banner"
      transition="slide-y-transition"
      elevation="3"
      rounded
      outlined
      sticky
      :color="color"
    >
      <v-row>
        <v-col class="text-left ml-2">
          <h3 class="white--text">
            {{ message }}
          </h3></v-col
        >
        <v-col class="text-right">
          <v-btn
            class="mb-2 text-right"
            outlined
            rounded
            color="white"
            @click="banner = !banner"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-progress-linear
        v-model="value"
        class="mt-3 ml-1 pr-3 mb-3"
        height="22"
        rounded
        :color="progress_color"
        striped
        top
      >
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </v-progress-linear>
    </v-banner>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    progress_color: {
      type: String,
      default: "red"
    },
    message: {
      type: String,
      required: true
    },
    banner: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
