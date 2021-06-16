<template>
  <div>
    <v-container class="mt-4">
      <v-row justify="center">
        <v-col cols="8">
          <v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="logOut()"> cerrar sesión </v-btn>
            </v-card-actions>
            <v-row align="center" class="pb-8 pl-8 pr-8 pt-4">
              <v-col cols="12" sm="4" class="d-flex justify-center">
                <v-avatar size="128">
                  <img :src="currentUser.photoURL" />
                </v-avatar>
              </v-col>
              <v-col cols="12" sm="8">
                <div class="text-md-h3 text-h5">
                  Bienvenido {{ currentUser.displayName }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" md="6">
          <v-btn
            @click="goTrivia()"
            elevation="3"
            :loading="preguntas.length == 0"
            x-large
            dark
            block
            >Jugar</v-btn
          >
        </v-col>
        <v-col cols="8" md="2">
          <v-btn
            @click="goToRanking()"
            elevation="3"
            :loading="preguntas.length == 0"
            x-large
            dark
            block
            ><v-icon>mdi-chess-queen</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
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
