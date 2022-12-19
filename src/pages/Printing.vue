<template> 
  <div id="printing" dir="rtl">
    <div class="container">
      <div id="preview">
        <h3>اختر من الاشعار للطباعة</h3>
        <div id="customization" >
          <div class="text-type">
            <label for="textType" >اسلوب الخط</label>
            <select name="textType" id="textType" >
              <option value="نسخ">نسخ</option>
              <option value="رقعة">رقعة</option>
              <option value="ديواني">ديواني</option>
            </select>
          </div>
          <PreviewColors :colors="fontColors" @to-color="(color) => fontColor = color" >الخط: </PreviewColors>
          <PreviewColors :colors="backgroundColors" @to-color="(color) => backgroundColor = color ">الخلفية: </PreviewColors>
        </div>
        <div v-if="preview.qoute" :style="{color: fontColor, background: backgroundColor}" class="qoute">
          <p>{{preview.qoute}}</p>
        </div>
        <div v-else  :style="{color: fontColor, background: backgroundColor}">
          <div v-if="preview[0]" v-for="print in preview" :key="print._id" class="verse">
            <p >{{print.first}}</p>
            <p dir="ltr">{{print.sec}}</p>
          </div>
          <div v-else class="verse">
            <p >{{preview.first}}</p>
            <p dir="ltr">{{preview.sec}}</p>
          </div>
        </div>
        <!-- @click="addOrder" -->
        <button >اضافة الطلب</button>
      </div>
      <OrderForm />
    </div>    

    <div id="prints" >
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
    </div>
  </div>
    

</template>
<script setup>
import { usePrintsStore } from "../stores/prints";
import {  computed, ref } from 'vue';
import PreviewColors from "../components/PreviewColors.vue";
import OrderForm from "../components/OrderForm.vue";

let preview = ref([]);
let fontColors = ref(['#f6b352', '#f66152','#2c3e50','#42b983','#D5DBB3','#17BEBB','#dc5318','#c80815']);
let backgroundColors = ref(['url("../assets/images/Temp.png")', '#1f2124','#f6b352', '#f66152', '#d0342b','#2c3e50','#42b983','#D5DBB3','#002626', '#e4d5b7']);
let fontColor = ref('');
let backgroundColor = ref('');

const printsStore = usePrintsStore();
const getPrints = computed(() => {
  return printsStore.getPrints
})

function deletePrint(print) {
  let printIndex = getPrints.value.map(verse => verse.id).indexOf(print.id);
  getPrints.value.splice(printIndex, 1);
}

</script>

<style lang="scss" scoped>
#printing {
  display: grid;
  grid-template-columns: 75% 25%;
  color: #fff;
  margin-top: 1rem;
  h3 {
    text-align: center;
    padding-top: 1rem;
  }
  .container {
    min-height: 50vh;
  }
  #preview {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto 1rem;
    background: url("../assets/images/Temp.png") no-repeat center center/cover;
    .verse, .qoute {
      padding: 0 0.6rem;
      font-size: 1.6rem;
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
      .text-type {
        display: flex;
        flex-direction: column;
        padding:0.5rem;
        select {
          border: none;
        }
      }
    }
    button {
    margin: 0.5rem auto;
    border: none;
    border-radius: 1.5rem;
    background: #1f2124;
    color: #f6b352;
    padding: 0.3rem;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    &:hover {
    background: #f6b352;
    color: #1f2124;
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
    border-radius: 7px;
    .print-item {
      position: relative;
      border: 1px solid $mainColor;
      list-style: none;
      border-radius: 5px;
      padding: 0.5rem;
      margin: 0.5rem;
      .qoute {
        text-align: center;
        padding-top: 1rem;
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
    }
  }
}
</style>