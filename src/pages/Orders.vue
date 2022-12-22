<template>
  <p dir="rtl">ادخل بيانات الطلب لمتابعته</p>
    <div v-for="order in getOrders" :key="order.id" class="order" dir="rtl">
      <div class="order-details">
        <div><p>الاسم</p><span>{{order.name}}</span></div>
        <div><p>الهاتف</p><span>{{order.phone}}</span></div>
        <div><p>العنوان</p><span>{{order.address}}</span></div>
        <div><p>تاريخ الطلب</p><span>{{order.created_at.slice(0,10)}}</span></div>
        <p><span>{{order.reviewed ? 'تمت المراجعة' : 'غير مراجع'}}</span></p>
        <p><span>{{order.completed ? 'تم التسليم' : 'لم يتم التسليم'}}</span></p>
      </div>
      <div class="order-products" v-if="order.products">
        <div v-for="product in order.products" :key="product.print.id" class="product" 
        :style="{color: product.fontColor, background: product.backgroundColor }" >
          <p >{{product.fontType}}</p>
          <p v-if="product.print[0]" > {{product.print[0].first}}...</p>
          <p v-else-if="product.print.qoute">{{product.print.qoute.slice(0,30)}}...</p>
        </div>
      </div>
    </div>
  
  </template>
  
  <script setup>
  import {  onMounted, computed } from 'vue';
  
  import {useOrdersStore} from "../stores/orders";
  
  const ordersStore = useOrdersStore();
  const getOrders = computed(() => {
    return ordersStore.getOrders;
  });
  
  
  
  onMounted(() => {
    ordersStore.fetchOrders()
  })
  </script>
  
  <style lang="scss" scoped>
  $mainColor: #e0f2e9;
  $secondaryColor: #1f2124;
  .order {
    color: $mainColor;
    background: $secondaryColor;
    margin: 1rem;
    border-radius: 1.5rem;
  }
  .order-details{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 1rem;
    p {
      margin: 0.5rem;
    }
    span {
      font-weight: 600;
    }
  }
  
  .order-products {
    padding: 0.4rem 0;
    .product {
      display: flex;
      flex-direction: row;
      padding: 0.2rem;
      margin: 0.3rem 2rem;
      border-radius: 1.5rem;
      border: 1px solid #fff;
      p {
        margin: 0 0.6rem;
      }
    }
  
  }
  </style>