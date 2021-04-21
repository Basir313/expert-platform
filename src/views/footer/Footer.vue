<template>
  <v-footer inset dark padless>
    <v-layout row>
      <v-flex xs12 cols="12" md="6">
        <flotButton />
        <v-btn
          v-for="foot in footer_data"
          :key="foot"
          color="White"
          text
          rounded
          class="mt-4"
        >
          {{ foot }}
        </v-btn>
      </v-flex>

      <v-flex>
        <v-divider class="mx-4 blue-grey darken-1" mt-3 inset light></v-divider>
        <v-col class="dark mb-0 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} -
          <strong>Afghan Online Platforme</strong>
        </v-col>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import FlotActionButton from "./FlotingActionButton";
export default {
  components: {
    flotButton: FlotActionButton
  },
  data: () => ({
    footer_data: [
      "About Us",
      "Sucess Story",
      "Blog",
      "Careers",
      "Support",
      "Contact Us",
      "Term of Use",
      "Provocy & Plociy"
    ]
  })
};
</script>
