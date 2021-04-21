<template>
  <div>
    <BaseProgress :dialog="progress.dialog"> </BaseProgress>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["progress"])
};
</script>
<style lang="scss" scoped></style>
