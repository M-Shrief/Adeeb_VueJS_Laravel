<template>
  <!--  حط اسم الموقع  تحته الشعار 
    "اقناع العرب بعربيتهم" + "#البس_بالعربي"
  -->
  <div  dir="rtl" class="container"> 
    <!-- Add Pagination -->
    <ShowCasePoems :poems="getPoems" :grid="'grid3'">
      <h2 class="poems">القصائد</h2>
    </ShowCasePoems>    

    <ShowCasePoets :poets="getPoets" :grid="'grid3'">
      <h2 class="poets">الشعراء</h2>
    </ShowCasePoets>

    <ShowCasePoetry :chosenVerses="getChosenVerses"       
    @print="(print) => addPrint(print)"/>

    <ShowCaseProse :proses="getProses"
    @print="(print) => addPrint(print)"/>
  </div>
  
</template>

<script setup>
import {  onMounted, computed } from 'vue';
// stores
import { usePoemStore } from "../stores/poems";
import { usePoetStore } from "../stores/poets";
import { useChosenVerseStore } from "../stores/chosenVerses";
import { useProsesStore } from "../stores/proses";
import { usePrintsStore } from "../stores/prints";
// components
import ShowCasePoems from '../components/ShowCasePoems.vue';
import ShowCasePoets from '../components/ShowCasePoets.vue';
import ShowCasePoetry from '../components/ShowCasePoetry.vue';
import ShowCaseProse from '../components/ShowCaseProse.vue';



const poemsStore = usePoemStore();
const getPoems = computed(() => {
  return poemsStore.getPoems;
});

const poetsStore = usePoetStore();
const getPoets = computed(() => {
  return poetsStore.getPoets;
});

const chosenVersesStore = useChosenVerseStore();
const getChosenVerses = computed(() => {
  return chosenVersesStore.getChosenVerses;
});

const prosesStore = useProsesStore();
const getProses = computed(() => {
  return prosesStore.getProses;
});

onMounted(() => {
  poemsStore.fetchPoems();
  poetsStore.fetchPoets();
  chosenVersesStore.fetchChosenVerses();
  prosesStore.fetchProses();
})

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})
function addPrint(print) {
  if (!getPrints.value.includes(print)) {
    return printsStore.addPrint(print)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 70% 30%;
}
.poems, .poets {
  text-align: center;
  padding: 0.3rem;
  border-radius: 1.5rem;
  width: 50%;
  margin: 1rem auto;
}
.poems {
  background-color: #f6b352;
  color: #1f2124;
}
.poets {
  background-color: #2c3e50;
  color: #FBE6C2;
}
</style>