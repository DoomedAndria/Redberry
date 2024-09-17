<script setup>
import FilterButton from "./FilterButton.vue";

const filters = [
  'რეგიონი',
  'საფასო კატეგორია',
  'ფართობი',
  'საძინებლების რაოდენობა'
]

</script>

<template>
  <div class="flex justify-between mt-[77px]">

    <div class="flex gap-[24px] w-auto p-[6px] border border-bd_cl_0 rounded-[10px]">
      <FilterButton v-for="(f,i) in filters" :id="i" :title="f"/>
    </div>

    <div class="w-auto border border-black">buttons</div>
  </div>
</template>
