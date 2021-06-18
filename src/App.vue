<template>
  <v-app class="body-background">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.body-background {
  background: $base-two !important;
  background: linear-gradient(
    45deg,
    $base-two 0%,
    rgba(40, 116, 115, 1) 39%,
    $base-one 100%
  ) !important;
}

.primary-button {
  background: $base-two !important;
}
.primary-button-icon {
  color: $base-two !important;
}
.secondary-button {
  background: $base-one !important;
}
.secondary-button-light {
  background: rgba(darken($base-one, 10), 0.6) !important;
}
.secondary-button-icon {
  color: $base-one !important;
}
</style>
