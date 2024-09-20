<script setup>
import {onMounted} from "vue";
import {useRegion} from "./composables/useRegion.js";

const {getRegionsAndCities} = useRegion()
onMounted(async ()=>{
  await getRegionsAndCities()
})
</script>

<template>
  <RouterView/>
</template>