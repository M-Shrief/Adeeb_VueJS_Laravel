<template>
  <!-- add isActive class -->
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
  }
  .nav-item.active {
    background-color: $mainColor;
    color: #2c3e50;
  }
</style>