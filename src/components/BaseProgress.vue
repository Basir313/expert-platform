<template>
  <div>
    <v-dialog v-model="dialog" persistent width="200">
      <v-card
        height="100"
        shaped
        class="text-center rounded"
        justify-center
        flat
      >
        <v-card-title> </v-card-title>
        <v-progress-circular
          indeterminate
          color="light-blue"
          class="mt-3"
          size="50"
        ></v-progress-circular>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  // computed: mapState(["dialog"]),
  data() {
    return {
      dialog: this.$store.state.progress.dialog || false
    };
  },
  watch: {
    dialog(val) {
      this.dialog = val;
    }
  },
  beforeDestroy() {
    this.unwatch();
  }
};
</script>

<style lang="scss" scoped>
.v-dialog {
  height: 200px;
}
</style>
