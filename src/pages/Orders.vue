<template>
  <h2>ادخل بيانات الطلب لمتابعته</h2>
  <form @submit.prevent="fetchOrder" dir="rtl">
    <div class="container">
      <label for="name" >الاسم: </label>
      <input type="text" id="name" name="name" required minlength="5" maxlength="20" />
    </div>
    <div class="container">
      <label for="phone" >الهاتف: </label>
      <input type="text" id="phone" name="phone" required minlength="8" maxlength="18" />
    </div>
    <button type="submit">تأكـيد</button>
  </form>

  <div v-for="order in getOrders" :key="order.id" class="order" dir="rtl">
    <section class="order-details">
      <div><p>الاسم</p><span>{{order.name}}</span></div>
      <div><p>الهاتف</p><span>{{order.phone}}</span></div>
      <div><p>العنوان</p><span>{{order.address}}</span></div>
      <div><p>تاريخ الطلب</p><span>{{order.created_at.slice(0,10)}}</span></div>
      <p><span>{{order.reviewed ? 'تمت المراجعة' : 'غير مراجع'}}</span></p>
      <p><span>{{order.completed ? 'تم التسليم' : 'لم يتم التسليم'}}</span></p>
    </section>
    <section class="order-products" v-if="order.products">
      <div v-for="product in order.products" :key="product.print.id" class="product" 
      :style="{color: product.fontColor, background: product.backgroundColor }" >
        <p >{{product.fontType}}</p>
        <p v-if="product.print[0]" > {{product.print[0].first}}...</p>
        <p v-else-if="product.print.qoute">{{product.print.qoute.slice(0,30)}}...</p>
      </div>
    </section>
  </div>
</template>
  
  <script setup>
  import {  onMounted, computed } from 'vue';
  
  import {useOrdersStore} from "../stores/orders";
  
  const ordersStore = useOrdersStore();
  const getOrders = computed(() => {
    return ordersStore.getOrders;
  });
  
function fetchOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  ordersStore.fetchOrders(name, phone);
}
</script>
  
<style lang="scss" scoped>
$mainColor: #e0f2e9;
$secondaryColor: #1f2124;
h2 {
  text-align: center;
}
form {
  color: $mainColor;
  background-color: $secondaryColor;
  margin: 1rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
  .container {
    padding: 0.5rem;
    margin-right: 0.2rem;
    margin-top: 0.4rem;
    input[type='text']{
      background: rgba($color: $mainColor, $alpha: 1);
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 8px;
    }
  }
}
.order {
  color: $mainColor;
  background: $secondaryColor;
  margin: 1rem;
  border-radius: 1.5rem;
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
}
</style>