<template>
  <router-link  :to="href" class="nav-item" active-class="active" ><slot /></router-link>
</template>

<script setup>
  defineProps({
    href: {
      type: String,
      required: false
    }
  })
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';
$mainColor: #FBE6C2;
.nav-item {
  padding: 0.2rem 0.4rem;
  margin: 0.4rem;
  color: rgba($color: $mainColor, $alpha: 0.8);
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
  color: $mainColor;
  }
  @include mQ($breakpoint-sm) {
    font-size: 0.8rem;
    padding: 0.1rem 0.2rem;
    margin: 0.1rem;
  }
}
.nav-item.active {
  background-color: $mainColor;
  color: #2c3e50;
}
</style>