<template >
<!-- don't add a poet without a poem to maintain the layout -->
  <div v-if="getPoet" dir="rtl" >
    <div class="container">
      <ShowCasePoet :details="getPoet[0]"/>

      <ShowCasePoems :poems="getPoet[1]">
        <h3 class="poems">قصائده</h3>
      </ShowCasePoems>
    </div>

    <!-- Add Pagination for poetry and proses -->
    <ShowCasePoetry :chosen-verses="getPoet[2]" dir="rtl"
    @print="(print) => addPrint(print)"/>

    <ShowCaseProse  :proses="getPoet[3]" 
    @print="(print) => addPrint(print)"/>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import {useRoute } from 'vue-router';
import { usePoetStore } from "../stores/poets";
import { usePrintsStore } from "../stores/prints";
import ShowCasePoet from '../components/ShowCasePoet.vue';
import ShowCasePoems from '../components/ShowCasePoems.vue';
import ShowCasePoetry from '../components/ShowCasePoetry.vue';
import ShowCaseProse from '../components/ShowCaseProse.vue';

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})

function addPrint(print) {
  if (!getPrints.value.includes(print)) {
    return printsStore.addPrint(print)
  }
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
  .container {
    display: grid;
    grid-template-columns: 70% 30%;
    border-radius: 15px;
    padding: 0.7rem;
    margin: 0.7rem 0.3rem;
    overflow: visible;
  }
  .poems {
    background-color: #f6b352;
    color: #1f2124;
    text-align: center;
    padding: 0.3rem;
    border-radius: 1.5rem;
    width: 50%;
    margin: 1rem auto;
  }

  .grid4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  // .not-available {
  //   text-align: center;
  //   color: #f6b352;
  //   background-color: #1f2124;
  // }
  
</style>