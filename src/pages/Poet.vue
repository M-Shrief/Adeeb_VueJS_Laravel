<template >
  <main dir="rtl">
    <!-- don't add a poet without a poem to maintain the layout -->
    <div v-if="getPoet">
      <div class="container">
        <ShowCasePoet :details="getPoet[0]" />

        <ShowCasePoems :poems="getPoet[1]">
          <h3 class="poems-title">قصائده</h3>
        </ShowCasePoems>
      </div>

      <!-- Add Pagination for poetry and proses -->
      <ShowCasePoetry :chosen-verses="getPoet[2]" :grid="'grid-poet'"
        @print="(print) => addPrint(print)" />

      <ShowCaseProse :proses="getPoet[3]" :grid="'grid-poet'"
        @print="(print) => addPrint(print)" />
    </div>
    <SelectedPrints />
  </main>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
// stores
import { usePoetStore } from "../stores/poets";
import { usePrintsStore } from "../stores/prints";
// components
import ShowCasePoet from '../components/ShowCasePoet.vue';
import ShowCasePoems from '../components/ShowCasePoems.vue';
import ShowCasePoetry from '../components/ShowCasePoetry.vue';
import ShowCaseProse from '../components/ShowCaseProse.vue';
import SelectedPrints from '../components/SelectedPrints.vue';

const printsStore = usePrintsStore();
function addPrint(print) {
  return printsStore.addPrint(print)
}

const poetStore = usePoetStore();
const getPoet = computed(() => {
  return poetStore.getPoet
})
const route = useRoute();
onMounted(() => {
  poetStore.fetchPoet(route.params.id);
})

</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

.container {
  display: grid;
  grid-template-columns: 70% 30%;
  border-radius: 1rem;
  padding: 0.7rem;
  margin: 0.7rem 0.3rem;
  overflow: visible;

  @include mQ($breakpoint-lg) {
    padding: 0.6rem;
    margin: 0.6rem 0.3rem;
  }

  @include mQ($breakpoint-md) {
    padding: 0.5rem;
    margin: 0.5rem 0.2rem;
  }

  @include mQ($breakpoint-sm) {
    padding: 0.3rem;
    margin: 0.3rem 0.1erm;
  }
}

.poems-title {
  background-color: #f6b352;
  color: #1f2124;
  text-align: center;
  padding: 0.3rem;
  border-radius: 1.5rem;
  width: 50%;
  margin: 1rem auto;

  @include mQ($breakpoint-lg) {
    padding: 0.3rem;
    margin: 0.7rem auto;
    font-size: 1rem;
  }

  @include mQ($breakpoint-md) {
    padding: 0.2rem;
    margin: 0.5rem auto;
    font-size: 1rem;
  }

  @include mQ($breakpoint-sm) {
    padding: 0.1rem;
    margin: 0.3rem auto;
    font-size: 1rem;
  }
}
</style>