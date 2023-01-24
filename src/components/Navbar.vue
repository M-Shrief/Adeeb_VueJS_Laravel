<template>
  <!-- Navigation Raws -->
  <nav id="nav-raw" dir="rtl">
    <router-link to="/" id="logo">أديب</router-link>
    <div>
      <router-link  :to="'/printing'" class="nav-item" active-class="active" >الطباعة</router-link>
      <router-link  :to="'/orders'" class="nav-item" active-class="active" >الطلبات</router-link>
      <router-link  :to="'/about'" class="nav-item" active-class="active">قصتنا</router-link>
      <router-link  :to="'/partners'" class="nav-item" active-class="active">كن شريكا</router-link>
    </div>
  </nav>
</template>

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
  $mainColor: #FBE6C2;
  .nav-item {
    //////////////// 
    padding: 0.2rem 0.4rem;
    margin: 0.4rem;
    color: rgba($color: $mainColor, $alpha: 0.8);
    font-size: 1.2rem;
    text-decoration: none;
    &:hover {
    color: $mainColor;
    }
    @include mQ($breakpoint-sm) {
      font-size: 0.8rem;
      padding: 0.1rem 0.2rem;
      margin: 0.1rem;
    }
  }
  .nav-item.active {
    background-color: $mainColor;
    color: #2c3e50;
  }
}
</style>