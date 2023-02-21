<template>
  <div v-for="print in getPrints" :key="print.id" class="print-item">
    <!-- Assigning poetry(2verses) || poetry(1verse) or prose -->
    <div @click="$emit('print', print)">
      <!-- if selected from ShowCasePoetry -->
      <div v-if="print.verse" v-for="verse in print.verse" :key="verse.id"
        class="verse">
        <p>{{ verse.first }}</p>
        <p dir="ltr">{{ verse.sec }}</p>
      </div>
      <!-- if selected from  ShowCasePoem -->
      <div v-else-if="print.first" class="verse">
        <p>{{ print.first }}</p>
        <p dir="ltr">{{ print.sec }}</p>
      </div>
      <!-- if selected from  ShowCaseProse -->
      <div v-else-if="print.qoute" class="qoute">
        <p>{{ print.qoute }}</p>
      </div>
    </div>
    <button @click="removePrint(print)">X</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// stores
import { usePrintsStore } from "../stores/prints";
const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints;
})
function removePrint(print) {
  return printsStore.removePrint(print);
}
defineEmits(['print'])
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';
$mainColor: #f6b352;
$secondaryColor: #1f2124;

.print-item {
  position: relative;
  color: $mainColor;
  background-color: $secondaryColor;
  border: 1px solid $mainColor;
  list-style: none;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0.5rem;

  .verse,
  .qoute {
    font-size: 0.8rem;
  }

  .qoute {
    padding-top: 1rem;
    text-align: center;
  }

  @include mQ($breakpoint-md) {
    padding: 0.5rem;
    margin: 0.5rem;

    .qoute {
      padding-top: 0.5rem;
    }
  }

  @include mQ($breakpoint-sm) {
    padding: 0.3rem;
    margin: 0.3rem;

    .qoute {
      padding-top: 0.3rem;
    }
  }

  button {
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    background: $mainColor ;
    color: $secondaryColor;
    padding: 0.4rem;
    border: none;
    border-radius: 0.7rem;
    cursor: pointer;

    @include mQ($breakpoint-md) {
      padding: 0.15rem;
    }

    @include mQ($breakpoint-sm) {
      padding: 0.1rem;
    }
  }
}
</style>
