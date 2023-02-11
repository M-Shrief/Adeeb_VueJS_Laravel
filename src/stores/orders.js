import { defineStore } from 'pinia';
import axios from 'axios';

export const useOrdersStore = defineStore('order', {
  state: () => ({
    orders: [],
  }),
  getters: {
    getOrders(state) {
      return state.orders;
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
    async newOrder(order) {
      try {
        let apiOrder = `${import.meta.env.VITE_API_URL}/order/store`;
        axios.post(apiOrder, order);
      } catch (error) {
        alert(error);
      }
    },
  },
});
