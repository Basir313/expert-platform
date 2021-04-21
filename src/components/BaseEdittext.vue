<template>
  <div>
    <v-text-field
      :label="label"
      :append-icon="icon"
      :prepend-icon="picon"
      :placeholder="placeholder"
      :counter="counter"
      :value="values"
      :type="type"
      :color="color"
      @input="updateValue"
      v-on="$listeners"
      v-bind="$attrs"
      outlined
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String
    },
    counter: {
    },
    values: [String, Number],
    type: {
      type: String,
      require: true
    },
    color: {
      Type: String,
      default: "light-blue"
    },
    picon: {
      Type: String,
      requered: false
    }
  },
  methods: {
    updateValue: function(event) {
      this.$emit("input", event.paylod);
      //console.log(event)
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
