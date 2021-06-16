<template>
  <v-container class="mt-4">
    <v-row>
      <v-col>
        <v-card class="pl-8 pt-8 pr-8">
          <v-row>
            <v-col
              class="text-center text-button"
              style="font-size: 2rem !important"
            >
              ¡Juego terminado!
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6" class="text-center text-overline">
              Respuestas correctas: {{ $route.params.correctas }}
            </v-col>
            <v-col cols="12" md="6" class="text-center text-overline">
              Tiempo: {{ $route.params.tiempo | moment("mm:ss") }}
            </v-col>
            <v-col cols="12" class="text-center text-overline">
              Puntaje total: {{ $route.params.score }}</v-col
            >
          </v-row>
          <v-card-actions>
            <v-btn
              depressed
              block
              dark
              color="black"
              :loading="postData == false"
              @click="close()"
            >
              Volver al menu
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScoreService from "../services/ScoreService";
export default {
  name: "Score",
  data() {
    return {
      postData: false,
    };
  },
  methods: {
    close() {
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    ScoreService.postScore(
      this.$store.state.auth.user.user,
      this.$route.params.score
    ).then(() => {
      this.postData = true;
    });
  },
};
</script>

<style>
</style>