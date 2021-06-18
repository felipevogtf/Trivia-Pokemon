<template>
  <div>
    <v-btn class="primary-button" depressed @click="googleSignIn" x-large dark
      >Ingresa con Google</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "SignUp",
  methods: {
    googleSignIn: function () {
      this.$store.dispatch("auth/login").then(
        () => {
          /*eslint no-unused-vars: ["error", { "args": "none" }]*/
          this.$router.push({ name: "Home" }).catch((err) => {});
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>