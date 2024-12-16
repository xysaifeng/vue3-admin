<template>
  <!--  -->
  <button @click.capture="btnClick1" @click.exact="btnClick">btn click</button>
  <span v-bind="attrs">Lorem ipsum dolor sit amet.</span>
  <div :style="styles">
    2 s

    <template v-if="attrs">
      <div>if {{ a }}-{{ b }}</div>
    </template>

    <div>Selected: {{ selected }}</div>

    <select v-model="selected" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>

    <hr />
    <input
      type="checkbox"
      v-model="checked"
      :true-value="{ a: 1 }"
      :false-value="{ b: 2 }"
    />

    <input type="radio" v-model="pick" value="first" />
    <input type="radio" v-model="pick" value="second" />
  </div>
</template>

<script setup>
import { useAttrs, ref, watch } from "vue"

defineOptions({
  name: "Btn",
  inheritAttrs: true
})

var selected = ref([])
var checked = ref()
var pick = ref()

watch(checked, (val) => {
  console.log(val)
})
var a = ref([1, 2, 3, 4, 5])
// var b = a.value.toReversed()
var b = a.value.reverse()
console.log("b: ", b)

const styles = {
  color: ["back", "blue", "red", "jim"],
  name: "tom",
  background: "lightblue"
}

// const emits = defineEmits(["click"])

const attrs = useAttrs()
console.log("attrs: ", attrs)
const btnClick1 = () => {
  console.log("btn click curr 1")
}
const btnClick = () => {
  console.log("btn click curr")
}
</script>

<style scoped></style>
