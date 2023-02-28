<template>
  <div id="printing" dir="rtl">
    <div class="container">
      <section id="preview">
        <h3>اختر من الاشعار للطباعة</h3>
        <PrintCustomization :colors="colors"
          @fontColor="(color) => fontColor = color"
          @backgroundColor="(color) => backgroundColor = color" />
        <div v-if="preview.verse" v-for="verse in preview.verse" :key="verse._id"
          class="verse" id="print"
          :style="{ color: fontColor, background: backgroundColor }">
          <p>{{ verse.first }}</p>
          <p dir="ltr">{{ verse.sec }}</p>
        </div>
        <div v-else-if="preview.qoute" class="qoute" id="print"
          :style="{ color: fontColor, background: backgroundColor }">
          <p>{{ preview.qoute }}</p>
        </div>
        <button @click="addProduct(preview, [fontColor, backgroundColor])">
          اضافة الطلب</button>
      </section>
      <OrderForm :products="getProducts" />
    </div>

    <section id="prints">
      <h3>المختار للطباعة</h3>
      <div id="randoms">
        <div id="buttons">
          <button @click="getRandomPoetry(1)">شعر عشوائي</button>
          <button @click="getRandomProse(1)">نثر عشوائي</button>
        </div>
        <div v-if="randomPrint">
          <div @click="preview = randomPrint">
            <div v-if="randomPrint.verse" v-for="verse in randomPrint.verse"
              :key="verse._id" class="verse">
              <p>{{ verse.first }}</p>
              <p dir="ltr">{{ verse.sec }}</p>
            </div>
            <div v-else-if="randomPrint.qoute" class="qoute">
              <p>{{ randomPrint.qoute }}</p>
            </div>
          </div>
        </div>
      </div>
      <ShowCasePrints @print="(print) => preview = print" />
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
// Stores
import { useOrderStore } from '../stores/orders';
import { useChosenVerseStore } from "../stores/chosenVerses";
import { useProseStore } from "../stores/proses";
// Components
import PrintCustomization from '../components/PrintCustomization.vue';
import ShowCasePrints from '../components/ShowCasePrints.vue';
import OrderForm from "../components/OrderForm.vue";

let preview = ref({});
let randomPrint = ref();

const orderStore = useOrderStore();
const colors = orderStore.getColors;
let fontColor = ref(colors[0]);
let backgroundColor = ref(colors[1]);

const getProducts = computed(() => {
  return orderStore.getProducts;
})


function addProduct(productPrint, colors) {
  if (productPrint.verse || productPrint.qoute) {
    orderStore.addProduct(productPrint, colors)
  }
}
const chosenVerseStore = useChosenVerseStore();
function getRandomPoetry(num) {
  chosenVerseStore.fetchRandomChosenVerses(num);
  randomPrint.value = chosenVerseStore.getChosenVerses[0];
}

const proseStore = useProseStore();
function getRandomProse(num) {
  proseStore.fetchRandomProses(num);
  randomPrint.value = proseStore.getProses[0];
}
</script>

<style lang="scss" scoped>
@import '../assets/mixins.scss';

#printing {
  display: grid;
  grid-template-columns: 75% 25%;
  color: #fff;
  margin-top: 1rem;

  @include mQ($breakpoint-md) {
    grid-template-columns: 70% 30%;
  }

  h3 {
    text-align: center;
    padding-top: 1rem;

    @include mQ($breakpoint-md) {
      font-size: 1.1rem;
    }

    @include mQ($breakpoint-sm) {
      font-size: 1rem;
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

    .verse,
    .qoute {
      padding: 0 0.6rem;
      font-size: 1.6rem;
      width: 70%;
      margin: 0 auto;

      @include mQ($breakpoint-md) {
        font-size: 0.9rem;
      }

      @include mQ($breakpoint-sm) {
        font-size: 0.8rem;
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
        padding: 0.5rem;

        select {
          border: none;
        }

        #fontType {
          margin-top: 0.3rem;
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

      @include mQ($breakpoint-sm) {
        .select {
          padding: 0.2rem;
        }

        label {
          font-size: 0.8rem;
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

      @include mQ($breakpoint-md) {
        margin: 0.5rem auto;
        padding: 0.3rem;
        font-size: 0.8rem;
      }

      @include mQ($breakpoint-sm) {
        margin: 0.3rem auto;
        padding: 0.1rem;
        font-size: 0.7rem;
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
    border-radius: 1rem;

    button {
      color: $secondaryColor;
      padding: 0.4rem;
      background: none;
      border: none;
      border-radius: 0.7rem;
      cursor: pointer;
      background: $mainColor;

      @include mQ($breakpoint-md) {
        padding: 0.15rem;
      }

      @include mQ($breakpoint-sm) {
        padding: 0.1rem;
      }
    }

    .print-item {
      position: relative;
      border: 1px solid $mainColor;
      list-style: none;
      border-radius: 5px;
      padding: 0.5rem;
      margin: 0.5rem;

      .verse,
      .qoute {
        font-size: 0.8rem;
      }

      .qoute {
        padding-top: 1rem;
        text-align: center;
      }

      button {
        position: absolute;
        left: 0.2rem;
        top: 0.2rem;
      }

      @include mQ($breakpoint-md) {
        padding: 0.5rem;
        margin: 0.5rem;

        .qoute {
          padding-top: 0.5rem;
        }
      }

      @include mQ($breakpoint-sm) {
        padding: 0.3rem;
        margin: 0.3rem;

        .qoute {
          padding-top: 0.3rem;
        }
      }
    }

    #randoms {
      border: 1px solid $mainColor;
      list-style: none;
      border-radius: 5px;
      padding: 0.5rem;
      margin: 0.5rem;

      .qoute {
        text-align: center;
      }

      #buttons {
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
</style>