<template>
  <div v-if="verses" dir="rtl" id="poem">
    <div v-for="verse in verses" :key="verses.indexOf(verse)" class="verse"  @dblclick="$emit('print', verse)">
      <p class="first">{{verse.first}}</p>
      <p class="sec" dir="ltr">{{verse.sec}}</p>
    </div> 
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
 defineProps({
  verses: reactive({
    type: Array,
    required: true
  })
});
defineEmits(['print']);
</script>

<style lang="scss" scoped>
$mainColor: #2c3e50;
$secondaryColor: #FBE6C2;
#poem {
  position: relative;
  color: $mainColor; 
  background: $secondaryColor;
  box-shadow: 0 5px 10px rgba($color: $mainColor, $alpha: .4);
  border-radius: 1.5rem;
  padding: 0.7rem;
  margin: 0 0.7rem;
  overflow: visible;
  .verse {
    font-size: 1.2rem;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    position: relative;
    .first {
      margin-right: 0.4rem;
    }
    .sec {
      margin-left: 0.4rem;
    }
    &:hover {
      font-weight: 600;
    }
  }
}
</style>