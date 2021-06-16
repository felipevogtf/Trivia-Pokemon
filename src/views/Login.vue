<template>
  <v-container class="mt-4">
    <v-row justify="center" align="center">
      <v-col cols="8" md="4">
        <v-card class="pa-8">
          <v-row>
            <v-col class="text-center">
              <v-avatar size="100">
                <img
                  src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                  alt="John"
                />
              </v-avatar>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <GoogleSignIn></GoogleSignIn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GoogleSignIn from "../components/GoogleSignIn";
export default {
  name: "Login",
  components: {
    GoogleSignIn,
  },
};
</script>

<style>
</style>