<template>
  <v-flex>
    <FirstsiteCard
      v-bind:color="secondblue"
      v-bind:title="FirstTitle"
      v-bind:content_text="FirstText"
      v-bind:src="img"
    ></FirstsiteCard>

    <FirstsiteCard
      v-bind:color="firstblue"
      v-bind:title="FirstTitle"
      v-bind:content_text="FirstText"
      v-bind:src="img"
    ></FirstsiteCard>
    <FirstsiteCard
      v-bind:color="thredblue"
      v-bind:title="FirstTitle"
      v-bind:content_text="FirstText"
      v-bind:src="img"
    ></FirstsiteCard>
    <FirstsiteCard
      v-bind:color="forthblue"
      v-bind:title="FirstTitle"
      v-bind:content_text="FirstText"
      v-bind:src="img"
    ></FirstsiteCard>
  </v-flex>
</template>

<script>
import FirstsiteCard from "../views/websiteContent/sitteFirstCart";
export default {
  data() {
    return {
      firstblue: "cyan lighten-5",
      secondblue: "blue lighten-5",
      thredblue: "teal lighten-5",
      forthblue: "light-green lighten-5",
      FirstTitle: "Find Your Dream Job",
      FirstText:
        "The publisher, the authors and the editors are safe to assume that the advice and information in this book are believed to be true and accurate at the date",
      img: "../../assets/expert1.jpeg"
    };
  },
  components: {
    FirstsiteCard
  },
  methods: {
    setLayout(layout) {
      this.$store.commit("SET_LAYOUT", layout);
    }
  }
};
</script>
