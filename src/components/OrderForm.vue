<template>
  <div id="form">
    <div id="confirmation">
      <div id="customer-details">
        <div class="container">
          <label for="name" >الاسم: </label>
          <input type="text" id="name" name="name" required minlength="5" maxlength="20" />
        </div>
        <div class="container">
          <label for="phone" >الهاتف: </label>
          <input type="text" id="phone" name="phone" required minlength="8" maxlength="18" />
        </div>
        <div class="container">
          <label for="address" >العنوان: </label>
          <input type="text" id="address" name="address" required minlength="8" maxlength="70" />
        </div>
      </div>          

      <div >
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
    <button @click="confirmOrder">تأكيد الطلب</button>
  </div>
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
    await axios.post(apiOrder, {"order": {...order, "reviewed": false, "completed": false}}).then(res => {
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
$mainColor: #e0f2e9;
$secondaryColor: #1f2124;
#form {
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
  }
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
  }
}
</style>