import { defineStore } from 'pinia'
import axios from "axios"

export const usePoetStore = defineStore("poet",{
    state: () => ({
      poets: [],
      poet: {}
    }),
    getters: {
      getPoets(state) {
        return state.poets
      },
      getPoet(state) {
        return state.poet
      }
    },
    actions: {
      async fetchPoets() {
        try {
          const req = await axios.get('http://localhost:8000/api/poets')
            this.poets = req.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchPoet(id) {
        try {
          const apiUrl = "http://localhost:8000/api/poet/" + id;
          const req = await axios.get(apiUrl)
            this.poet = req.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
    },
})