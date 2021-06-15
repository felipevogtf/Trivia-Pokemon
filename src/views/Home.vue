<template>
  <v-container>
    <v-btn
      @click="
        $router.push({ name: 'Trivia', params: { preguntas: preguntas } })
      "
      elevation="3"
      :loading="preguntas.length == 0"
      x-large
      dark
      block
      >Jugar</v-btn
    >
  </v-container>
</template>

<script>
import PreguntasService from "../services/PreguntasService";

export default {
  name: "Home",
  data() {
    return {
      preguntas: [],
    };
  },
  methods: {
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },
  },
  mounted() {
    this.preguntas = PreguntasService.getPreguntas();
  },
};
</script>
