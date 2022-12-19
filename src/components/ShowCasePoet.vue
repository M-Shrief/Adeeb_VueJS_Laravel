<template>
    <div v-if="details" class="poet" dir="rtl">
      <h2>{{details.name}} - {{details.time_period}}</h2>
      <p class="bio">{{details.bio}}</p>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
defineProps({
  details: reactive({
    type: Object,
    required: true
  })
})
</script>
<style lang="scss" scoped>

$mainColor: #004e64;
$secondaryColor: #FBE6C2;
.poet {
  position: relative;
  color: $mainColor;
  font-weight: 500;
  background: $secondaryColor;
  box-shadow: 0 5px 10px rgba($color: $mainColor, $alpha: .4);
  border: 1px solid $mainColor;
  border-radius: 15px;
  padding: 0.8rem;
  margin: 0.7rem 0.3rem;
  overflow: visible;
  .bio {
    font-size: 1.2rem;
  }
}
</style>