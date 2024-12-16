<template>
  <p class="Parent">Parent</p>
  <Child :count="count"></Child>
</template>

<script setup name="Parent">
import Child from "./Child.vue"
import { ref } from "vue"

const count = ref(2)
setTimeout(() => {
  count.value++
}, 2000)
</script>

<style scoped></style>
