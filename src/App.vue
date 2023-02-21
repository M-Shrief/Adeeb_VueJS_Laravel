<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>
  <router-view v-slot="{ Component }">
    <transition name="fade" appear>
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<style lang="scss" scoped>
@import './assets/mixins.scss';
@include fade-transition;
</style>
