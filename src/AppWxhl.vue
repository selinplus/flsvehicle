<template>
  <v-app>
    <transition>
    <router-view></router-view>
    </transition>
  </v-app>
</template>

<script>
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

