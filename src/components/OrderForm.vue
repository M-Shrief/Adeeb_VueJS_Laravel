<template>
  <form action="#" @submit.prevent="confirmOrder">
    <div id="confirmation">
      <div id="customer-details">
        <div class="container">
          <label for="name" >الاسم: </label>
          <input type="text" id="name" name="name" required minlength="7" maxlength="20" />
        </div>
        <div class="container">
          <label for="phone" >الهاتف: </label>
          <input type="text" id="phone" name="phone" required minlength="8" maxlength="18" />
        </div>
        <div class="container">
          <label for="address" >العنوان: </label>
          <input type="text" id="address" name="address" required minlength="12" maxlength="70" />
        </div>
      </div>          

      <div id="products">
        <div v-for="product in products" :key="product.print.id" class="product" 
        :style="{color: product.fontColor, background: product.backgroundColor }"
        @dblclick="deleteProduct(product)"
        >
          <p >{{product.fontType}}</p>
          <p v-if="product.print[0]" > {{product.print[0].first}}...</p>
          <p v-else-if="product.print.qoute">{{product.print.qoute.slice(0,30)}}...</p>
        </div>
      </div>
    </div>
    <button type="submit">تأكيد الطلب</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import {useRouter } from 'vue-router';
import axios from "axios";

const router = useRouter();

const props = defineProps({
  products: {
    type: Array,
    required: false
  }
});

function deleteProduct(product) {
  let productIndex = props.products.map(product => product.print.id).indexOf(product.print.id);
  props.products.splice(productIndex, 1);
}

let order = ref({});
const confirmOrder = async () =>  {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  order = {
    name,
    phone,
    address,
    products: props.products
  }

  try {
    let apiOrder = "http://localhost:8000/api/order/store";
    await axios.post(apiOrder, {"order": order}).then(res => {
      console.log(res);
    });
    router.push('/orders')
  }
  catch (error) {
    alert(error)
    console.log(error)
  }
};
</script>

<style lang="scss" >
@import '../assets/mixins.scss';

$mainColor: #e0f2e9;
$secondaryColor: #1f2124;
form {
  background-color: $secondaryColor;
  margin: 1rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
  #confirmation {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  }
  #customer-details {
    color: $mainColor;
    .container {
      padding: 0.5rem;
      margin-right: 0.2rem;
      margin-top: 0.4rem;
      input[type='text']{
        background: rgba($color: $mainColor, $alpha: 1);
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 8px;
        &:focus {
          border: none;
        }
      }
      select {
        background-color: $mainColor;
        border: 1px solid $secondaryColor;
      }
    }
    @include mQ($breakpoint-md) {
      padding: 0.3rem;
      margin-top: 0.3rem;
      input[type='text'] {
        font-size: 0.7rem;
      }
    }
    @include mQ($breakpoint-sm) {
      padding: 0.1rem;
      margin-top: 0.1rem;
      input[type='text']{
        font-size: 0.6rem;
      }
    }
  }
  #products {
    .product {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 0.2rem;
      margin: 0.3rem 2rem;
      border-radius: 1.5rem;
      border: 1px solid #fff;
      p {
        margin: 0 0.6rem;
      }
      @include mQ($breakpoint-md) {
        padding: 0.15rem;
        margin: 0.15rem;
        p {
          font-size: 0.8rem;
        }
      }
      @include mQ($breakpoint-sm) {
        padding: 0.1rem;
        margin: 0.1rem;
        p {
          font-size: 0.7rem;
        }
      }
    }
  }
  
  button[type='submit'] {
    position: relative;
    right: 45%;
    margin: 0.5rem auto;
    border-radius: 1.5rem;
    background: $mainColor;
    color: $secondaryColor;
    border: none;
    padding: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
    @include mQ($breakpoint-md) {
      margin: 0.4rem auto;
      padding: 0.2rem;
      font-size: 0.8rem;
    }
    @include mQ($breakpoint-sm) {
      margin: 0.3rem auto;
      padding: 0.1rem;
      font-size: 0.7rem;
    }
  }
}
</style>