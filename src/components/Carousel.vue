<script setup>
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Navigation, Slide} from "vue3-carousel";
import Right from "../assets/icons/svg/right.vue";
import Left from "../assets/icons/svg/left.vue";
import ListingCard from "./ListingCard.vue";

defineProps({
  listings:{
    type: Array,
    required: true
  }
})

</script>

<template>
  <carousel :items-to-show="4" snap-align="start" :wrap-around="true">
    <slide v-for="(listing,index) in listings" :key="index">
      <ListingCard :listing="listing"/>
    </slide>
    <template #addons>
      <navigation>
        <template #next>
          <right style="position: absolute; right: -50px; top: 50%; transform: translateY(-50%); z-index: 10;"/>
        </template>
        <template #prev>
          <left style="position: absolute; left: -50px; top: 50%; transform: translateY(-50%); z-index: 10;"/>
        </template>
      </navigation>
    </template>
  </carousel>
</template>
