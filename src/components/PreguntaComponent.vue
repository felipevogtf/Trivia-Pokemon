<template>
  <v-row>
    <v-col sm="12">
      <v-card class="pa-12">
        <div class="text-h4 text-center">{{ text }}</div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "PreguntaComponent",
  props: {
    text: String,
  },
};
</script>

<style>
</style>