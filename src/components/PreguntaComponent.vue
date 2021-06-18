<template>
  <v-row>
    <v-col>
      <div
        class="text-button text-center pa-12"
        style="font-size: 2rem !important"
      >
        {{ text }}
      </div>
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