<template>
  <p class="child">child</p>
</template>

<script setup>
import { watch } from "vue"

const { count = 10 } = defineProps({
  count: {
    type: Number,
    default: 0
  }
})

// watchEffect(() => {
//   console.log(count, "-------count")
// })

watch(
  () => count,
  (newValue, oldValue) => {
    console.log(newValue, "old is: ", oldValue)
  },
  {
    immediate: true
  }
)
</script>

<style scoped></style>
