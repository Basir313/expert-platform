<template>
  <div>
    <v-btn outlined rounded :color="color" v-on="$listeners">
      <v-icon>{{ icon }}</v-icon>
      <slot></slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "light-blue"
    }
  }
};
</script>

<style scoped></style>
