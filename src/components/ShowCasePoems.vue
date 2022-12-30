<template>
  <section id="poems" >
    <!--
      Add a link to Poems page that shows all poems with pagination 
      opposite colors for the slot
    -->
    <slot />
    <div :class="grid">
      <router-link  v-for="poem in poems" :key="poem.id" 
      :to="`/poem/${poem.id}`" class="poem" replace>
        <p v-if="poem.poet">{{poem.intro}} - {{poem.poet.name}}</p>
        <p v-else>{{poem.intro}}..</p>
      </router-link>
    </div>
  </section>
</template>

<script setup>
  defineProps({
    poems: {
      type: Array,
      required: true
    },
    grid: {
      type: String,
      required: false
    }
  })
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

$mainColor: #f6b352;
$secondaryColor: #1f2124;
  
#poems {
  background-color: $secondaryColor;
  padding: 0.3rem;
  border-radius: 2rem;
  margin: 0 1rem;
  .poem {
    color: $mainColor;
    text-decoration: none;
    font-size: 1.1rem;
    &:hover {
      font-weight: 700;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
@include mQ($breakpoint-lg) {
  #poems {
    padding: 0.4rem;
    margin: 0 0.7rem;
    .poem {
      font-size: 1rem;
    }
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@include mQ($breakpoint-md) {
  #poems {
    padding: 0.3rem;
    margin: 0 0.6rem;
    .poem {
      font-size: 0.9rem;
    }
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@include mQ($breakpoint-sm) {
  #poems {
    padding: 0.2rem;
    margin: 0 0.4rem;
    .poem {
      font-size: 0.8rem;
    }
    .grid {
    grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>