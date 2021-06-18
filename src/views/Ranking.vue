<template>
  <v-container class="mt-4">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card
          class="pb-8 pr-8 text-center text-button rounded-xl"
          elevation="24"
          style="font-size: 2rem !important"
        >
          <v-card-actions>
            <v-btn
              class="ml-4 mt-2 secondary-button-icon"
              icon
              @click="close()"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
          </v-card-actions>
         Ranking</v-card
        >
      </v-col>
      <v-col cols="12" md="8">
        <v-card class="pa-8 rounded-xl" elevation="24">
          <div class="text-center" v-if="ranking.length == 0">
            <v-progress-circular
              :size="100"
              color="teal"
              indeterminate
            ></v-progress-circular>
          </div>
          <v-list subheader>
            <v-list-item v-for="(item, index) in ranking" :key="index">
              <v-list-item-avatar>
                <v-img :src="item.img"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-text="item.nombre"
                  class="text-button"
                ></v-list-item-title>
                <v-list-item-subtitle
                  class="text-overline"
                  v-text="'Puntuación: ' + item.score"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action class="d-flex justify-center">
                <div class="text-button" style="font-size: 1rem !important">
                  {{ index + 1 }}
                </div>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ScoreService from "../services/ScoreService";
export default {
  name: "Ranking",
  data() {
    return {
      ranking: [],
    };
  },
  methods: {
    close() {
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    this.ranking = ScoreService.getRanking();
    //console.log(this.ranking);
  },
};
</script>

<style>
</style>