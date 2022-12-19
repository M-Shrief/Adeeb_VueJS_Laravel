<template>
  <div id="poets" >
    <!--
      Add a link to Poets page that shows all poems with pagination 
      opposite colors for the slot
    -->
    <slot />
    <div :class="grid">
      <router-link v-for="poet in poets" :key="poet.id"
        :to="`/poet/${poet.id}`" class="poet" replace>
        <p >{{poet.name}}</p>
      </router-link>
    </div>
  </div>

</template>

<script setup>
defineProps({
  poets: {
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
$mainColor: #2c3e50;
$secondaryColor: #FBE6C2;
  
#poets {
  background-color: $secondaryColor;
  padding: 0.3rem;
  border-radius: 2rem;
  margin: 0 1rem;

  .poet {
    color: $mainColor;
    text-decoration: none;
    font-size: 1.1rem;
    margin: 0.3rem;
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