<script setup>
import {onMounted} from "vue";
import {useRegions} from "./composables/useRegion.js";
import {useListing} from "./composables/useListing.js";

const {getRegionsAndCities} = useRegions()
const { getListings } = useListing()

onMounted(async ()=>{
  await getRegionsAndCities()
  await getListings()
})
</script>

<template>
  <RouterView/>
</template>