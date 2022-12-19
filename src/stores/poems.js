import { defineStore } from 'pinia'
import axios from "axios"

export const usePoemStore = defineStore("poem",{
    state: () => ({
      poems: [],
      poem: {}
    }),
    getters: {
      getPoems(state) {
        return state.poems
      },
      getPoem(state) {
        return state.poem
      },
    },
    actions: {
      async fetchPoems() {
        try {
          let apiPoemsIntros = "http://localhost:8000/api/poems_intros";
          let reqPoemsIntros = await axios.get(apiPoemsIntros);
          this.poems = reqPoemsIntros.data;
        }
        catch (error) {
          alert(error)
          console.log(error)
        }
      },
      async fetchPoemAndOtherPoems(id) {
        try {
          let apiPoem = "http://localhost:8000/api/poem/" + id;
          let reqPoem = await axios.get(apiPoem);
          this.poem = reqPoem.data;
          
          this.fetchOtherPoems(id);
        }
        catch (error) {
          alert(error)
          console.log(error)
        }
      },
      async fetchOtherPoems(id) {
        try {
          let apiPoemsIntros = "http://localhost:8000/api/poems_intros";
          let reqPoemsIntros = await axios.get(apiPoemsIntros);
          // didn't use indexOf because of the nature of mySQL indexes
          // and we decreament it by 1 to match the 0 indexing of arrays
          reqPoemsIntros.data.splice(id - 1, 1);
          this.poems = reqPoemsIntros.data;
        }
        catch(error) {
          alert(error);
          console.log(error);
        }
      }
    },
})