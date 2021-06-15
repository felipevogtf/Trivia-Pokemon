<template>
  <v-row>
    <v-col
      v-for="(alternativa, index) in alternativas"
      :key="index"
      cols="12"
      md="6"
    >
      <v-btn
        @click="sendAnswer(alternativa.id)"
        block
        x-large
        dark
        v-bind:class="[
          !answered
            ? 'primary'
            : isCorrect(alternativa.id)
            ? 'green darken-2'
            : 'red',
        ]"
        class="pa-12 text-h5"
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