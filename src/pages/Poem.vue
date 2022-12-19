<template>
  <div class="container" dir="rtl">
    <!-- v-if to remove component onMount error -->
    <div id="related-data" v-if="getPoem.poet" >
      <router-link  :to="'/poet/' + getPoem.poet_id" class="link">
        <ShowCasePoet :details="getPoem.poet" />
      </router-link>
      
      <!--ToDo: add watch function for the route.parameter to reload the state -->
      <ShowCasePoems :poems="getPoems">
        <h2>قصائد اخري</h2>
      </ShowCasePoems>
    </div>
    <ShowCasePoem :verses="getPoem.verses" 
    @print="(print) => addPrint(print)"/>
  </div>
</template>

<script setup>
import {  onBeforeMount, computed, watch } from 'vue';
import {useRoute, useRouter } from 'vue-router';
// stores
import { usePoemStore } from "../stores/poems";
import { usePrintsStore } from "../stores/prints";
// components
import ShowCasePoem from "../components/ShowCasePoem.vue";
import ShowCasePoems from "../components/ShowCasePoems.vue";
import ShowCasePoet from "../components/ShowCasePoet.vue";

const route = useRoute();
const router = useRouter();

const poemStore = usePoemStore();
const getPoem = computed(() => {
  return poemStore.getPoem
})
const getPoems = computed(() => {
  return poemStore.getPoems
})

// updating poems store
watch(() => route.params.id, (newPoemId) => {
  poemStore.fetchPoemAndOtherPoems(route.params.id);

})

onBeforeMount(() => {
  poemStore.fetchPoemAndOtherPoems(route.params.id);
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
  display: grid;
  grid-template-columns: 40% 60%;
  margin: 1rem;
}
#related-data {
  .link {
  text-decoration: none;
  }
  h2 {
    color: #f6b352;
    text-align: center;
  }
}

</style>