<script setup>
import FilterButton from "./FilterButton.vue";
import {RegionFilter, PriceFilter, AreaFilter, BedroomFilter} from "./index.js";

const filters = [
  {title: 'რეგიონი', component: RegionFilter},
  {title: 'საფასო კატეგორია', component: PriceFilter},
  {title: 'ფართობი', component: AreaFilter},
  {title: 'საძინებლების რაოდენობა', component: BedroomFilter}
]

</script>

<template>
  <div class="flex justify-between mt-[77px] text-[#ffffff] ">

    <div class="flex gap-[24px] w-auto p-[6px] border border-bd_cl_0 rounded-[10px]">
      <FilterButton v-for="({title,component},i) in filters" :id="i" :title="title" :component="component"/>
    </div>

    <div class="flex items-center gap-4">
      <button class="flex items-center gap-1 rounded-lg px-4 py-2.5 bg-[#F93B1D] border border-[#F93B1D] text-white font-medium hover:bg-[#DF3014] transition-colors duration-300">
        <span class="text-xl">+</span> ლისტინგის დამატება
      </button>

      <button  class="flex items-center gap-1 rounded-lg px-4 py-2.5 border text-[#F93B1D] border-[#F93B1D] font-medium hover:bg-[#F93B1D] hover:text-[#ffffff] transition-colors duration-300">
        <span class="text-xl">+</span> აგენტის დამატება
      </button>
    </div>
  </div>
</template>
