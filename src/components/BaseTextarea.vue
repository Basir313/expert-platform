<template>
  <div>
    <v-textarea
      :counter="counter"
      :value="value"
      :label="label"
      :rows="row"
      :class="clas"
      :color="color"
      :prepend-icon="icon"
      :placeholder="placeholder"
      @input="updateValue"
      :v-on="$listeners"
      v-bind="$attrs"
      outlined
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    counter: {
      type: String || Number,
      default: 200
    },
    value: {
      type: String
    },
    row: {
      type: String || Number
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String
    },
    color: {
      type: String,
      default: "light-blue"
    },
    clas: {
      type: String
    },
    placeholder: {
      type: String
    },
  },
  methods: {
    updateValue: function(event) {
      this.$emit("input", event);
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
  }
};
</script>

<style scoped></style>
