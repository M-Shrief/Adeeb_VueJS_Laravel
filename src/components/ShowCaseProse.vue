<template>
  <section id="proses">
    <h2 class="title">مختارات نثرية</h2>
    <div :class="grid">
      <div v-for="prose in proses" :key="prose.id" class="prose-item">
        <p class="qoute">{{ prose.qoute }}</p>
        <div class="justify">
          <router-link v-if="!(route.name === 'poet')"
            :to="'/poet/' + prose.poet_id"
            class="details">{{ prose.poet.name }}</router-link>
          <button @click="$emit('print', prose)" class="print-button">اضف
            للطباعة</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

defineProps({
  proses: {
    type: Array,
    required: true
  },
  grid: {
    type: String,
    required: false,
  }
})
const emit = defineEmits(['print']);
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

$mainColor: #f6b352;
$secondaryColor: #1f2124;

.title {
  text-align: center;
  background-color: $secondaryColor;
  color: $mainColor;
  padding: 0.3rem;
  margin: 1rem 0.3rem 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  border-radius: 1.5rem;

  @include mQ($breakpoint-lg) {
    padding: 0.3rem;
    margin: 0.6rem 0.4rem 0;
    font-size: 1.3rem;
  }

  @include mQ($breakpoint-md) {
    padding: 0.2rem;
    margin: 0.5rem 0.3rem 0;
    font-size: 1.2rem;
  }

  @include mQ($breakpoint-sm) {
    padding: 0.1rem;
    margin: 0.3rem 0.1rem 0;
    font-size: 1rem;
  }
}

.grid-poet {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @include mQ($breakpoint-sm) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.prose-item {
  position: relative;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  padding: 0.3rem;
  margin: 0.3rem;
  border-radius: 1.5rem;
  background: $secondaryColor;
  color: $mainColor;

  @include mQ($breakpoint-md) {
    padding: 0.2rem;
    margin: 0.2rem;
  }

  @include mQ($breakpoint-sm) {
    padding: 0.1rem;
    margin: 0.1rem;
  }

  .qoute {
    text-align: center;
    font-size: 1.2rem;
    padding-bottom: 0.8rem;

    @include mQ($breakpoint-lg) {
      font-size: 1.1rem;
    }

    @include mQ($breakpoint-md) {
      font-size: 1rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
    }
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

    @include mQ($breakpoint-lg) {
      font-size: 0.7rem;
    }

    @include mQ($breakpoint-md) {
      font-size: 0.7rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 0.6rem;
    }
  }

  .print-button {
    @include add-print-btn;
  }
}</style>