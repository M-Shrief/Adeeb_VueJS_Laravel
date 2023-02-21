<template>
  <div id="customization">
    <div class="select">
      <label for="fontType">اسلوب الخط</label>
      <select name="fontType" id="fontType">
        <option value="نسخ">نسخ</option>
        <option value="رقعة">رقعة</option>
        <option value="ديواني">ديواني</option>
      </select>
    </div>
    <PreviewColors :colors="colors"
      @to-color="(color) => $emit('fontColor', color)">الخط:
    </PreviewColors>
    <PreviewColors :colors="colors"
      @to-color="(color) => $emit('backgroundColor', color)">الخلفية:
    </PreviewColors>
  </div>
</template>

<script setup>
// components
import PreviewColors from "../components/PreviewColors.vue";
defineProps({
  colors: {
    type: Array,
    required: true
  }
})
defineEmits(['fontColor', 'backgroundColor']);
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

#customization {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem;

  .select {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;

    select {
      border: none;
      margin-top: 0.25rem;
      border-radius: 1rem;
    }

    #fontType {
      margin-top: 0.3rem;
    }
  }

  @include mQ($breakpoint-md) {
    .select {
      padding: 0.3rem;
    }

    label {
      font-size: 0.9rem;
    }
  }

  @include mQ($breakpoint-sm) {
    .select {
      padding: 0.1rem;
    }

    label {
      font-size: 0.6rem;
    }
  }
}</style>