<template>
  <main dir="rtl">
    <div class="container">
      <!-- v-if to remove component onMount error -->
      <section id="related-data" v-if="getPoem.poet">
        <router-link :to="'/poet/' + getPoem.poet_id" class="link">
          <ShowCasePoet :details="getPoem.poet" />
        </router-link>

        <!--ToDo: add watch function for the route.parameter to reload the state -->
        <ShowCasePoems :poems="getPoems">
          <h2>قصائد اخري</h2>
        </ShowCasePoems>
      </section>
      <ShowCasePoem :verses="getPoem.verses"
        @print="(print) => addPrint(print)" />
    </div>
    <SelectedPrints />
  </main>
</template>

<script setup>
import { onBeforeMount, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
// stores
import { usePoemStore } from "../stores/poems";
import { usePrintsStore } from "../stores/prints";
// components
import ShowCasePoem from "../components/ShowCasePoem.vue";
import ShowCasePoems from "../components/ShowCasePoems.vue";
import ShowCasePoet from "../components/ShowCasePoet.vue";
import SelectedPrints from '../components/SelectedPrints.vue';

const route = useRoute();
const poemStore = usePoemStore();
const getPoem = computed(() => {
  return poemStore.getPoem
})
const getPoems = computed(() => {
  return poemStore.getPoems
})

// updating poems store
watch(() => route.params.id, (newPoemId) => {
  poemStore.fetchPoemAndOtherPoems(newPoemId);

})

onBeforeMount(() => {
  poemStore.fetchPoemAndOtherPoems(route.params.id);
})

const printsStore = usePrintsStore();
function addPrint(print) {
  return printsStore.addPrint(print)
}

</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

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

    @include mQ($breakpoint-lg) {
      font-size: 1.1rem;
    }

    @include mQ($breakpoint-md) {
      font-size: 1rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 1rem;
    }
  }
}
</style>