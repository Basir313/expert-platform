<template>
  <v-snackbar
    v-model="notification.model"
    :timeout="notification.timeout"
    elevation="4"
    shaped
    :color="notification.color"
    top
    right
    outlined
    class="text-lift"
  >
    {{ notification.message }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="white--text"
        text
        v-bind="attrs"
        @click="notification.model = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification, 9000));
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  computed: {
    notificationTypeClass() {
      return "${this.notification.type}";
    }
  },
  methods: mapActions("notification", ["remove"])
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
