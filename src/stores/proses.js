import { defineStore } from 'pinia';
import axios from 'axios';

export const useProseStore = defineStore('prose', {
  state: () => ({
    proses: [],
  }),
  getters: {
    getProses(state) {
      return state.proses;
    },
  },
  actions: {
    async fetchProses() {
      try {
        const req = await axios.get(`${import.meta.env.VITE_API_URL}/proses`);
        this.proses = req.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchRandomProses(num) {
      try {
        const req = await axios.get(
          `${import.meta.env.VITE_API_URL}/proses/random/${num}`
        );
        this.proses = req.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
