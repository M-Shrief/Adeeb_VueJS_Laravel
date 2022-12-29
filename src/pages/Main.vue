<template>
  <main dir="rtl">
    <h1 >آديب</h1>
    <p >لطباعة الادب العربي شعراً ونثراً</p>
    <div  dir="rtl" class="container"> 
      <!-- Add Pagination -->
      <ShowCasePoems :poems="getPoems"  :grid="'grid'">
        <h2 class="poems-title">القصائد</h2>
      </ShowCasePoems>    

      <ShowCasePoets :poets="getPoets"  :grid="'grid'">
        <h2 class="poets-title">الشعراء</h2>
      </ShowCasePoets>

      <ShowCasePoetry :chosenVerses="getChosenVerses" :grid="'grid-main'" 
      @print="(print) => addPrint(print)"/>

      <ShowCaseProse :proses="getProses"
      @print="(print) => addPrint(print)"/>
    </div>
  </main>  
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
@import '../assets/mixins.scss';

h1, p{
  text-align: center;
}
h1 {
  font-size: 4rem;
}
p  {
  font-size: 1.5rem;
}

.container {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 70% 30%;
}
.poems-title , .poets-title  {
  text-align: center;
  padding: 0.3rem;
  border-radius: 1.5rem;
  width: 50%;
  margin: 1rem auto;
}
.poems-title {
  background-color: #f6b352;
  color: #1f2124;
}
.poets-title {
  background-color: #2c3e50;
  color: #FBE6C2;
}

@include mQ($breakpoint-sm) {
  h1 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1rem
  }
  .container {
    grid-template-columns: 65% 35%;
  }
  .poems-title, .poets-title {
    padding: 0.1rem;
    margin: 0.3rem auto;
    font-size: 1rem;
  }
}
@include mQ($breakpoint-md) {
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
  .container {
    grid-template-columns: 65% 35%;
  }
  .poems-title, .poets-title {
    padding: 0.2rem;
    margin: 0.5rem auto;
    font-size: 1.2rem;
  }
}
@include mQ($breakpoint-lg) {
  h1 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  .container {
    grid-template-columns: 65% 35%;
  }
  .poems-title, .poets-title{
    padding: 0.3rem;
    margin: 0.6rem auto;
    font-size: 1.3rem;
  }
}
</style>