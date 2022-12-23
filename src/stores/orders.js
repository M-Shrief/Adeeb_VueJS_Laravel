import { defineStore } from "pinia";
import axios from "axios"

export const useOrdersStore = defineStore("order", {
  state: () => ({
    orders: [],
    
  }),
  getters: {
    getOrders(state) {
      return state.orders
    },
  },
  actions: {
    async fetchOrders(name, phone) {
      try {
        const req = await axios.get(`http://localhost:8000/api/order/${name}/${phone}`);
        this.orders = req.data;
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    }
  }
})