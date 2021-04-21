<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notification"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    NotificationBar
  },
  computed: mapState("notification", ["notification"])
};
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 40px;
  right: 0;
  padding-right: 40px;
}
</style>
