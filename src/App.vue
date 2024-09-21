<script setup>
import {onMounted} from "vue";
import {useRegion} from "./composables/useRegion.js";
import {useListing} from "./composables/useListing.js";

const {getRegionsAndCities} = useRegion()
const { getListings } = useListing()

onMounted(async ()=>{
  await getRegionsAndCities()
  await getListings()
})
</script>

<template>
  <RouterView/>
</template>