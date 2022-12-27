<template>
  <!-- Navigation Raws -->
  <nav id="nav-raw" dir="rtl">
    <router-link to="/" id="logo">أديب</router-link>
    <div>
      <NavItem  :href="'/printing'"  >الطباعة</NavItem>
      <NavItem  :href="'/orders'"  >الطلبات</NavItem>
      <NavItem  :href="'/about'">قصتنا</NavItem>
      <NavItem  :href="'/partners'" >كن شريكا</NavItem>
    </div>
  </nav>
</template>

<script setup>
  import NavItem from './NavItem.vue'
</script>
<style lang="scss" scoped>
@import '../assets/mixins.scss';

#nav-raw {
  display: flex;
  flex-direction: row;
  background-color: #1f2124;
  justify-content: space-between;
  align-items: center;
  #logo {
    color: rgba($color: #f6b352, $alpha: .8);
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 0.2rem 0.4rem;
    margin: 0.4rem;
    &:hover {
      color: #f6b352;
    }
    @include mQ($breakpoint-sm) {
      font-size: 1rem;
      padding: 0.1rem 0.2rem;
      margin: 0.1rem;
    }
  }
}
</style>