<template>
  <div id="poems" >
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
  </div>
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
  .grid3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>