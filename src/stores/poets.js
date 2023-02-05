import { defineStore } from 'pinia';
import axios from 'axios';

export const usePoetStore = defineStore('poet', {
  state: () => ({
    poets: [],
    poet: {},
  }),
  getters: {
    getPoets(state) {
      return state.poets;
    },
    getPoet(state) {
      return state.poet;
    },
  },
  actions: {
    async fetchPoets() {
      try {
        const req = await axios.get(`${import.meta.env.VITE_API_URL}/poets`);
        this.poets = req.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchPoet(id) {
      try {
        const apiUrl = `${import.meta.env.VITE_API_URL}/poet/${id}`;
        const req = await axios.get(apiUrl);
        this.poet = req.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
