<template>
  <v-container class="mt-4">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="24" class="rounded-xl">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              class="mr-8 mt-2 secondary-button-icon"
              icon
              @click="logOut()"
            >
              <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
          </v-card-actions>
          <v-row align="center" class="pb-8 pl-8 pr-8 pt-4">
            <v-col cols="12" sm="4" class="d-flex justify-center">
              <v-avatar size="128">
                <img :src="currentUser.photoURL" />
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="8">
              <div
                class="text-button text-center text-md-start"
                style="font-size: 2rem !important"
              >
                Bienvenido {{ currentUser.displayName }}
              </div>
              <div class="overline mt-2 pr-md-10 text-justify">
                Para comenzar a jugar solo presiona el botón "play", también
                puedes ver el top 10 con los puntajes más altos.
              </div>
            </v-col>
          </v-row>
          <v-row class="pl-8 pr-8 pb-4">
            <v-col cols="12" md="8">
              <v-btn
                class="primary-button"
                @click="goTrivia()"
                depressed
                :loading="preguntas.length == 0"
                x-large
                dark
                block
                >play</v-btn
              >
            </v-col>
            <v-col cols="12" md="4">
              <v-btn
                class="secondary-button"
                @click="goToRanking()"
                depressed
                :loading="preguntas.length == 0"
                x-large
                dark
                block
                ><v-icon>mdi-chess-queen</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user.user;
    },
  },
  methods: {
    goTrivia() {
      this.$router.push({
        name: "Trivia",
        params: { preguntas: this.preguntas },
      });
    },
    goToRanking() {
      this.$router.push({
        name: "Ranking",
      });
    },
    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      /*eslint no-unused-vars: ["error", { "args": "none" }]*/
      this.$router.push({ name: "Login" }).catch((err) => {});
    },
  },
  mounted() {
    this.preguntas = PreguntasService.getPreguntas();
  },
};
</script>

<style lang='scss'>
</style>
