<template>
  <v-container class="mt-7">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="rounded-xl" elevation="24">
          <v-row align="center" class="mr-4 ml-4">
            <v-col class="d-flex justify-start"
              ><v-btn icon class="secondary-button-icon" @click="close()">
                <v-icon>mdi-close</v-icon>
              </v-btn></v-col
            >
            <v-col class="d-flex justify-center"
              ><v-chip class="ma-2" color="teal darken-1" style="color: white !important">
                <v-avatar left class="darken-4"> {{ correct }} </v-avatar>
                <v-icon>mdi-check</v-icon>
              </v-chip></v-col
            >
            <v-col class="d-flex justify-end"
              ><div class="text-button secondary-button-icon" style="font-size: 1rem !important">
                {{ seconds | moment("mm:ss") }}
              </div></v-col
            >
          </v-row>
          <PreguntaComponent :text="currentPregunta"></PreguntaComponent>
          <AlternativasComponent
            :alternativas="currentAlternativas"
            :respuesta="currentRespuesta"
            @answer="checkAnswer"
          ></AlternativasComponent>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PreguntaComponent from "../components/PreguntaComponent";
import AlternativasComponent from "../components/AlternativasComponent";
import TimerMixin from "../mixins/TimerMixin";
import ScoreMixin from "../mixins/ScoreMixin";

export default {
  name: "Trivia",
  components: {
    PreguntaComponent,
    AlternativasComponent,
  },
  mixins: [TimerMixin, ScoreMixin],
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
        this.endGame();
      }
    },
    checkAnswer(value) {
      if (value) {
        this.addCorrect();
      }
      this.nextPregunta();
    },
    close() {
      this.$router.push({ name: "Home" });
    },
    endGame() {
      this.calculateScore(this.seconds);
      this.$router.push({
        name: "Score",
        params: {
          correctas: this.correct,
          tiempo: this.getTime(),
          score: this.totalScore,
        },
      });
    },
  },
  mounted() {
    this.endFunction = this.endGame;
    this.startCount();
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