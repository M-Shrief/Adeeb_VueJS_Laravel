import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrderStore = defineStore('orders', {
  state: () => ({
    orders: [],
    products: [],
    // to centeralize our color storage
    colors: [
      '#fff',
      '#000',
      '#2c3e50',
      '#c80815',
      '#42b983',
      '#dc5318',
      'silver',
      '#f6b352',
    ],
  }),
  persist: {
    storage: sessionStorage,
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
    getProducts(state) {
      return state.products;
    },
    getColors(state) {
      return state.colors;
    },
  },
  actions: {
    async fetchOrders(name, phone) {
      try {
        const req = await axios.get(
          `${import.meta.env.VITE_API_URL}/order/${name}/${phone}`
        );
        this.orders = req.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    newOrder(order) {
      try {
        let apiOrder = `${import.meta.env.VITE_API_URL}/order/store`;
        axios.post(apiOrder, order);
      } catch (error) {
        alert(error);
      }
    },
    addProduct(print, colors) {
      let fontType = document.getElementById('fontType').value;

      let product = {
        print: print,
        fontType,
        fontColor: colors[0],
        backgroundColor: colors[1],
      };
      // Note: Don't check on repeated ones
      // it's normal to get different colors for the same print
      this.products.push(product);
    },
  },
});
