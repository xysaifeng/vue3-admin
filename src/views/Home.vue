<template>
  <div :name v-bind="objectOfAttrs">Home</div>
  <input type="button" value="btn" @click="btnClick" :disabled="dis" />
  <ul>
    <li v-for="item in arr" :key="item.id">
      <input type="text" :ref="(el) => (item.ref = el)" v-model="item.val" />
      <!-- <input type="text" ref="items" v-model="item.val" /> -->
    </li>
  </ul>
</template>

<script setup>
import { reactive, ref, useId } from "vue"

const arr = reactive([
  {
    ref: null,
    id: 0,
    val: ""
  },
  {
    ref: null,
    id: 1,
    val: ""
  },
  {
    ref: null,
    id: 2,
    val: ""
  }
])

const id1 = useId()
const id2 = useId()
console.log(id1, id2)
// const itemsRef = useTemplateRef("items")

const btnClick = () => {
  console.log(arr)
  // itemsRef.value.forEach((e) => {
  //   console.log(e.value)
  // })
}

const name = ref("Home")
// const dis = ""
const dis = null
const objectOfAttrs = {
  id: "container",
  class: "wrapper",
  style: "background-color:green"
}

window.a = 1
</script>

<style scoped></style>
