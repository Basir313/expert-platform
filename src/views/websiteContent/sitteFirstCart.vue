<template>
  <v-card fluid :color="color" height="600" flat>
    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>
      {{ content_text }}
    </v-card-text>
    <v-img :src="src"></v-img>
    

    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: ["color", "title", "content_text", "src"],

};
</script>
