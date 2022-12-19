<template>
  <div>
    <h2 class="title">مختارات شعرية</h2>
    <div :class="route.name == 'poet' ? 'grid4' : 'grid3'">
      <div v-for="chosenVerse in chosenVerses" :key="chosenVerse.id" class="poetry-item">
        <div v-for="verse in chosenVerse.verse" :key="chosenVerse.id"  :class="chosenVerse.verse.length == 1 ? 'one-verse': 'two-verse'">
          <p class="first">{{verse.first}}</p>
          <p class="sec" dir="ltr">{{verse.sec}}</p>
        </div> 
          <router-link :to="'/poem/' + chosenVerse.poem_id" class="details">{{route.name == "poet" ? 'القصيدة الكاملة' : chosenVerse.poet.name + ' - القصيدة الكاملة'}}</router-link>
          <button @click="$emit('print', chosenVerse)" class="print-button">اضف للطباعة</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute } from 'vue-router';
const route = useRoute();

defineProps({
    chosenVerses: {
      type: Array,
      required: true
    }
  })
const emit = defineEmits(['print']);

</script>

<style lang="scss" scoped>

$mainColor: #2c3e50;
$secondaryColor: #FBE6C2;

  .title {
    text-align: center;
    // width: 90%;
    // margin: 0 auto;
    background-color: $secondaryColor;
    color: $mainColor;
    padding: 0.3rem;
    margin: 1rem 0.3rem 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    border: 1px solid $mainColor;
    border-radius: 15px;
  }
  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .grid4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  .poetry-item {
    position: relative;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    border-radius: 15px;
    padding: 0.3rem;
    padding-bottom: 1.5rem;
    margin: 0.5rem;
    border: 1px solid $mainColor;
    background: $secondaryColor;
    color: $mainColor;
    .details {
      text-decoration: none;
      position: absolute;
      bottom: 0.7rem;
      right: 0.7rem;
      color: $mainColor;
      font-size: 0.9rem;
      &:hover {
        font-weight: 600;
      }
    }
    .one-verse {
      font-size: 1.1rem;
      margin-top: 3rem;
      font-weight:400;
      .first {
        margin-right: 0.4rem;
      }
      .sec {
        margin-left: 0.4rem;
      }
    }
    .two-verse {
      font-size: 1rem;
      font-weight: 600;
      .first {
        margin-right: 0.4rem;
      }
      .sec {
        margin-left: 0.4rem;
      }
    }
    .print-button {
      background: $secondaryColor;
      border: 1px solid $mainColor;
      border-radius: 6px;
      color: $mainColor;
      padding: 0.1rem;
      position: absolute;
      bottom: 0.7rem;
      left: 0.7rem;
      cursor: pointer;
      &:hover {
        background: $mainColor;
        color: $secondaryColor;
      }
    }
  }
</style>