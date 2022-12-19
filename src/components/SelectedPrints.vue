<template>
  <div id="selected-prints">
    <p><router-link  to="/printing" class="title" >للطباعة</router-link> </p>
      <ul class="prints" >
        <li class="prints-item" v-for="print in getPrints" :key="print.id">
          <!-- poetry -->
          <p class="prints-item-p" v-if="print.verse" >{{print.verse[0].first}}..</p> 
          <p class="prints-item-p" v-else-if="print.first" >{{print.first}}..</p> 
          <!-- prose -->
          <p class="prints-item-p" v-else-if="print.qoute" >{{print.qoute.slice(0,15)}}..</p> 
        </li>
      </ul>
  </div>
</template>

<script setup>
import { usePrintsStore } from "../stores/prints";
import {  computed } from 'vue';

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})
</script>

<style lang="scss" scoped>
$mainColor: #FBE6C2;
$secondaryColor: #2c3e50;
  #selected-prints{
    position: fixed;
    bottom: 0.3rem;
    right: 0.1rem;
    display: flex;
    flex-direction: row;
    background: $secondaryColor;
    padding: 0.3rem 0.7rem;
    border-radius: 2rem;
    .title {
      margin-left: 0.3rem;
      font-weight: 600;
      color: rgba($color: $mainColor, $alpha: .8);
      text-decoration: none;
      &:hover {
        color: $mainColor;
      }
    }
    .prints {
      display: flex;
      flex-direction: row;
      list-style: none;
      .prints-item {
        padding: 0.2rem;
        margin-left: 0.3rem;
        background: rgba($color: $mainColor, $alpha: .8);
        color: $secondaryColor;
        .prints-item-p {
          display: none;
          padding: 0.25rem;
        }
        &:hover {
          .prints-item-p {
            display: inline;
            padding: 0rem;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>