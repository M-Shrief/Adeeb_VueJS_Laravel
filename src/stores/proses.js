import { defineStore } from 'pinia'
import axios from "axios"

export const useProsesStore = defineStore("prose", {
  state: () => ({
    proses: []
  }),
  getters: {
    getProses(state) {
      return state.proses;
    }
  },
  actions: {
    async fetchProses() {
      try {
        const req = await axios.get('http://localhost:8000/api/proses')
        this.proses = req.data;
      }
      catch(error) {
        alert(error);
        console.log(error);
      }
    }
  }
})