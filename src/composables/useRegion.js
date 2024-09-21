import axios from "../interceptors/axios/index.js";
import {ref, watch,provide} from "vue";



export const useRegion = () => {
  const regions = ref()
  provide('regions',regions)
  const cities = ref()
  const filteredCities = ref()
  const regionIds = ref([])
  const getRegionsAndCities = async () => {
    try {
      let response = await axios.get('regions')
      regions.value = response.data
      response = await axios.get('cities')
      cities.value = response.data
    } catch (error) {
      console.log(error)
    }
  }
  watch(regionIds, () => {
    filteredCities.value = cities.value.filter(c => regionIds.value.includes(String(c['region_id'])))
  },{deep: true})

  return {
    regions,
    filteredCities,
    regionIds,
    getRegionsAndCities
  }

}

