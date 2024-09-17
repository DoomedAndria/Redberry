<script setup>
import Arrow from "../../assets/icons/svg/arrow.vue";
import {computed, onBeforeUnmount, onMounted, ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
const button = ref(null)


const arrowClass = computed(() => isOpen.value ? 'rotate-180' : '')

const toggleRotation = () => {
  isOpen.value = !isOpen.value
}
const handleClickOutside = (event) => {
  if (isOpen.value && button.value && !button.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div @click="toggleRotation" ref="button"
       :class="isOpen?'bg-bg_btn_0':''"
       class="cursor-pointer flex justify-center items-center gap-[4px] px-[14px] py-[8px] rounded-[6px] transition-colors duration-300">

    <div class="font-medium text-[16px] text-tx_cl_0" v-text="props.title"/>
    <arrow :class="arrowClass" class="transition-transform duration-300"/>

  </div>
</template>
