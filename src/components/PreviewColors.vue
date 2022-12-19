<template>
  <div class="colors">
    <p><slot/></p>
    <button v-for="color in colors" :key="color" :style="{background: color}" class="color" @click="$emit('toColor', color)" />
  </div>
</template>

<script setup>
  defineProps({
    colors: Array,
  });

  defineEmits(['toColor']);
</script>

<style lang="scss" scoped>
.colors {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .color {
  padding: 0.5rem;
  margin: 0.3rem;
  border: 1px solid #fff;
  border-radius: 10px;
    &:hover {
      padding: 0.6rem;
    }
  }
}
</style>