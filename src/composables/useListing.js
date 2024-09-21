import axios from "../interceptors/axios/index.js";
import {ref, provide} from "vue";

export const useListing = () => {
  const listings = ref()
  provide('listings', listings)

  const getListings = async () => {
    try {
      const response = await axios.get('real-estates')
      listings.value = response.data
    } catch (error) {
      console.log(error)
    }
  }

  return{
    getListings
  }
}