<template>
  <Child />
  <Btn @click="clickMe" v-bind="obj" />

  <!-- <input type="text" v-model.lazy="input" />
  <input type="text" v-model.number="input" /> -->
  <!-- <input type="text" v-model.trim="input" ref="inputRef" /> -->
  <input type="text" v-model.trim="input" ref="inputRef2" />
</template>

<script setup name="News">
import { useAttrs, watch, ref, onMounted, useTemplateRef } from "vue"
import Child from "./Child.vue"
import Btn from "./Btn.vue"

defineOptions({
  inheritAttrs: false
})

// const inputRef = ref()

const inputRef2 = useTemplateRef("inputRef2")

onMounted(() => {
  // console.log("inputRef: ", inputRef.value)
  // console.log("inputRef2: ", inputRef2.value)
  inputRef2.value.focus()
})

const obj = {
  color: "red",
  size: "large"
}

const input = ref("")

watch(input, (val) => {
  console.log("val: ", val)
  console.log("=" + val + "=")
})

console.log(useAttrs())
// const props = defineProps({
//   active: Boolean
// })

function clickMe() {
  console.log("click me p")
}
</script>

<style scoped></style>
