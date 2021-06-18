<template>
  <v-row class="pa-8">
    <v-col
      v-for="(alternativa, index) in alternativas"
      :key="index"
      cols="12"
      md="6"
    >
      <v-btn
        @click="sendAnswer(alternativa.id)"
        block
        depressed
        x-large
        dark
        v-bind:class="[
          !answered
            ? 'secondary-button'
            : isCorrect(alternativa.id)
            ? 'primary-button darken-2'
            : 'secondary-button-light',
        ]"
        class="pa-12 text-h6"
        >{{ alternativa.text }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AlternativasComponent",
  data() {
    return {
      randomPreguntas: [],
      currentIndex: 0,
      answered: false,
    };
  },
  props: {
    alternativas: Array,
    respuesta: Number,
  },
  methods: {
    isCorrect(index) {
      if (this.respuesta == index) {
        return true;
      } else {
        return false;
      }
    },
    sendAnswer(index) {
      if (!this.answered) {
        this.answered = true;
        setTimeout(() => {
          this.answered = false;
          if (this.respuesta == index) {
            this.$emit("answer", true);
          } else {
            this.$emit("answer", false);
          }
        }, 1000);
      }
    },
  },
};
</script>

<style>
</style>