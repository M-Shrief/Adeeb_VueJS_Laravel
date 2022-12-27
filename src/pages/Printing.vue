<template> 
  <div id="printing" dir="rtl">
    <div class="container">
      <section id="preview">
        <h3>اختر من الاشعار للطباعة</h3>
        <div id="customization" >
          <div class="text-type">
            <label for="fontType" >اسلوب الخط</label>
            <select name="fontType" id="fontType" >
              <option value="نسخ">نسخ</option>
              <option value="رقعة">رقعة</option>
              <option value="ديواني">ديواني</option>
            </select>
          </div>
          <PreviewColors :colors="fontColors" @to-color="(color) => fontColor = color" >الخط: </PreviewColors>
          <PreviewColors :colors="backgroundColors" @to-color="(color) => backgroundColor = color ">الخلفية: </PreviewColors>
        </div>
        <div v-if="preview.qoute" class="qoute" id="print"
        :style="{color: fontColor || fontColors[0], background: backgroundColor || backgroundColors[0]}" >
          <p>{{preview.qoute}}</p>
        </div>
        <div v-else-if="preview[0]" v-for="print in preview" :key="print.id" class="verse" id="print"
        :style="{color: fontColor || fontColors[0], background: backgroundColor || backgroundColors[0]}">
          <p >{{print.first}}</p>
          <p dir="ltr">{{print.sec}}</p>
        </div>
        <div v-else class="verse" id="print"
          :style="{color: fontColor || fontColors[0], background: backgroundColor || backgroundColors[0]}" >
          <p >{{preview.first}}</p>
          <p dir="ltr">{{preview.sec}}</p>
        </div>
        <button @click="addProduct">اضافة الطلب</button>
      </section>
      <OrderForm :products="products" />
    </div>    

    <section id="prints" >
      <h3>المختار للطباعة</h3>
      <!-- ToDo: add a randomButton to get a newRandomVerse -->
        <div v-for="print in getPrints" :key="print.id" class="print-item" >
          <!-- Assigning poetry(2verses) || poetry(1verse) or prose -->
          <div @click="preview = print.verse || print ">
            <!-- if selected from ShowCasePoetry -->
            <div  v-if="print.verse"  v-for="verse in print.verse" :key="verse.id" class="verse"  >
              <p >{{verse.first}}</p>
              <p  dir="ltr" >{{verse.sec}}</p>
            </div>
            <!-- if selected from  ShowCasePoem -->
            <div v-else-if="print.first"  class="verse" >
              <p >{{print.first}}</p>
              <p  dir="ltr" >{{print.sec}}</p>
            </div>
            <!-- if selected from  ShowCaseProse -->
            <div v-else-if="print.qoute"  class="qoute" >
              <p >{{print.qoute}}</p>
            </div>
          </div>
          <button @click="deletePrint(print)">X</button>
        </div>
    </section>
  </div>
</template>
<script setup>
import { usePrintsStore } from "../stores/prints";
import {  computed, ref } from 'vue';
import PreviewColors from "../components/PreviewColors.vue";
import OrderForm from "../components/OrderForm.vue";

let preview = ref([]);
// available colors in stock
let fontColors = ref(['#fff','#000', '#2c3e50','#c80815','#42b983','#dc5318','silver','#f6b352']);
let backgroundColors = ref([ '#000','#fff', '#2c3e50','#c80815','#42b983','#dc5318','silver','#f6b352']);

let fontColor = ref();
let backgroundColor = ref();
let products = ref([]);

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})

function deletePrint(print) {
  let printIndex = getPrints.value.map(verse => verse.id).indexOf(print.id);
  getPrints.value.splice(printIndex, 1);
}

function addProduct() {

  let productPrint = preview.value;
  let fontType = document.getElementById("fontType").value;
  let fontColor = document.getElementById("print").style.color;
  let backgroundColor = document.getElementById("print").style.background;
  let product = {
      print: productPrint,
      fontType,
      fontColor,      
      backgroundColor,
    };
  // if(product.print.value ) {
    // console.log(product.print.value);
  // }
  let productIndex = products.value.map(product => product.print).indexOf(productPrint);
  if (!(productIndex !== -1)) {
    return products.value.push(product);
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

#printing {
  display: grid;
  grid-template-columns: 75% 25%;
  color: #fff;
  margin-top: 1rem;
  @include mQ($breakpoint-sm) {
    grid-template-columns: 65% 35%;
  }
  @include mQ($breakpoint-md) {
    grid-template-columns: 70% 30%;
  }

  h3 {
    text-align: center;
    padding-top: 1rem;
    @include mQ($breakpoint-sm) {
    font-size: 1rem;
    }
    @include mQ($breakpoint-md) {
      font-size: 1.1rem;
    }
  }
  .container {
    min-height: 50vh;
  }
  #preview {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    border-radius: 1.5rem;
    background: #1f2124;
    .verse, .qoute {
      padding: 0 0.6rem;
      font-size: 1.6rem;
      width: 70%;
      margin: 0 auto;
      @include mQ($breakpoint-sm) {
        font-size: 0.8rem;
      }
      @include mQ($breakpoint-md) {
        font-size: 0.9rem;
      }
    }
    .qoute {
      text-align: center;
    }
    #customization {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 0.3rem;
      .select {
        display: flex;
        flex-direction: column;
        padding:0.5rem;
        select {
          border: none;
        }
        #fontType {
          margin-top: 0.3rem;
        }
      }
      @include mQ($breakpoint-sm) {
        .select {
          padding: 0.2rem;
        }
        label {
          font-size: 0.8rem;
        }
      }
      @include mQ($breakpoint-md) {
        .select {
          padding: 0.3rem;
        }
        label {
          font-size: 0.9rem;
        }
      }
    }
    button {
      margin: 0.5rem auto;
      border: none;
      border-radius: 1.5rem;
      background: #e0f2e9;
      color: #1f2124;
      padding: 0.3rem;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      @include mQ($breakpoint-sm) {
        margin: 0.3rem auto;
        padding: 0.1rem;
        font-size: 0.7rem;
      }
      @include mQ($breakpoint-md) {
        margin: 0.5rem auto;
        padding: 0.3rem;
        font-size: 0.8rem;
      }
    }
  }
  #prints {
    $mainColor: #f6b352;
    $secondaryColor: #1f2124;
    /////
    background: $secondaryColor;
    color: $mainColor;
    margin-left: 0.5rem;
    border-radius:  1rem;
    .print-item {
      position: relative;
      border: 1px solid $mainColor;
      list-style: none;
      border-radius: 5px;
      padding: 0.5rem;
      margin: 0.5rem;
      .verse, .qoute {
        font-size: 0.8rem;
      }
      .qoute {
        text-align: center;
      }
      button {
        position: absolute;
        color: $secondaryColor;
        padding: 0.4rem;
        left: 0.2rem;
        top: 0.2rem;
        background: none;
        border: none;
        border-radius: 0.7rem;
        cursor: pointer;
        background: $mainColor;
      }
      @include mQ($breakpoint-sm) {
        padding: 0.3rem;
        margin: 0.3rem;
        button {
          padding: 0.1rem;
        }
      }
      @include mQ($breakpoint-md) {
        padding: 0.5rem;
        margin: 0.5rem;
        button {
          padding: 0.15rem;
        }
      }      
    }
  }
}
</style>