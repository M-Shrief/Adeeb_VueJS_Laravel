<template>
  <div>
    <h2 class="title" >مختارات نثرية</h2>
    <!-- <h2 class="title" v-if="proses.length < 1">لا تتوفر مختارات نثرية حتي الان</h2> -->
    <div :class="route.name == 'poet' ? 'grid2' : ''">
      <div v-for="prose in proses" :key="prose.id" class="prose-item">
        <p class="qoute">{{prose.qoute}}</p>
        <div class="justify">
            <router-link   v-if="!(route.name === 'poet')" :to="'/poet/' + prose.poet_id" class="details">{{prose.poet.name}}</router-link>
          <button @click="$emit('print', prose)" class="print-button">اضف للطباعة</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup> 
import {useRoute } from 'vue-router';
const route = useRoute();

defineProps({
  proses: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['print']);
</script>

<style lang="scss" scoped>
  $mainColor: #f6b352;
  $secondaryColor: #1f2124;

  .title {
    text-align: center;
    background-color: $secondaryColor;
    color: $mainColor;
    padding: 0.3rem;
    margin: 1rem 0.3rem 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
  }
.grid2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.prose-item {
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 15px;
  background: $secondaryColor;
  color: $mainColor;
  .qoute {
    text-align: center;
    font-size: 1.2rem;
    padding-bottom: 0.8rem;
  }
  .details {
    text-decoration: none;
    color: $mainColor;
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    &:hover {
      font-weight: 600;
    }
  }
  .print-button {
    background: $secondaryColor;
    border: 1px solid $mainColor;
    position: absolute;
    bottom: 0.7rem;
    left: 0.7rem;
    border-radius: 6px;
    color: $mainColor;
    padding: 0.1rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background: $mainColor;
      color: $secondaryColor;
    }
  }
}
</style>