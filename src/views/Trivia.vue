<template>
  <v-container>
    <PreguntaComponent :text="currentPregunta"></PreguntaComponent>
    <AlternativasComponent
      :alternativas="currentAlternativas"
      :respuesta="currentRespuesta"
      @answer="checkAnswer"
    ></AlternativasComponent>
  </v-container>
</template>

<script>
import PreguntaComponent from "../components/PreguntaComponent";
import AlternativasComponent from "../components/AlternativasComponent";

export default {
  name: "Trivia",
  components: {
    PreguntaComponent,
    AlternativasComponent,
  },
  data() {
    return {
      randomPreguntas: [],
      currentIndex: 0,
      currentAlternativas: [],
      currentPregunta: "",
      currentRespuesta: 0,
    };
  },
  methods: {
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    setPregunta(index) {
      this.currentPregunta = this.randomPreguntas[index].pregunta;
      this.currentAlternativas = this.shuffleArray(
        this.randomPreguntas[index].alternativas
      );
      this.currentRespuesta = this.randomPreguntas[index].respuesta;
    },
    nextPregunta() {
      this.currentIndex++;
      if (this.currentIndex < 5) {
        this.setPregunta(this.currentIndex);
      } else {
         this.$router.push({ name: "Home" });
      }
    },
    checkAnswer(value) {
      console.log(value);
      this.nextPregunta();
    },
  },
  created() {
    var array = this.shuffleArray(this.$route.params.preguntas);
    this.randomPreguntas = array.slice(0, 5);
    this.setPregunta(this.currentIndex);
  },
};
</script>

<style>
</style>