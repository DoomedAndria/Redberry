<script setup>
import {useRegion} from "../composables/useRegion.js";
import {onMounted, provide, ref} from "vue";
import Filter from "../components/filter/Filter.vue";




// const handleCheck = (e) => {
//   if (e.target.checked) {
//     regionIds.value.push(e.target.value)
//
//   } else {
//     regionIds.value = regionIds.value.filter(r => r !== e.target.value)
//   }
// }
//
// const show = ref(true)

</script>




<template>
  <Filter/>


<!--  <div v-if="regions">-->
<!--    <div v-for="(region,index) in regions" :key="index" class="flex gap-1 items-center">-->
<!--      <input @change="handleCheck" type="checkbox" :value="region.id">-->
<!--      <p v-text="region.name"/>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div v-else v-text="'loading regions'"/>-->


<!--  <Transition>-->
<!--    <div v-if="filteredCities&&filteredCities.length !== 0" class="mt-10">-->
<!--      <div v-for="(city,index) in filteredCities" :key="index" class="flex gap-1 items-center">-->
<!--        <input type="checkbox">-->
<!--        <p v-text="city.name"/>-->
<!--      </div>-->
<!--    </div>-->
<!--  </Transition>-->
</template>




<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>