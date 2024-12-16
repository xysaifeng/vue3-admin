<template>
  <!-- <div :[someAttr+'f']="someValue" :id>About -- {{ getNames("tom") }}</div> -->
  <div :[someAttr]="someValue" :id>About -- {{ getNames("tom") }}</div>
  <p :class="classObj">{{ obj.id.value + 1 }}--{{ counter }}</p>
  <span :class="[{ [activeClass]: true }]">ds</span>
  <News v-bind="classObj" />
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, watch, ref, useId } from "vue"
import News from "./News.vue"

const id1 = useId()
const id2 = useId()
console.log(id1, id2)
const id = "999"
const someAttr = "someAttr"
const someValue = "someValue"

const activeClass = ref("g-name")
const counter = ref(11)
const obj = {
  id: ref(21)
}
const state = reactive({
  counter
})

const getNames = (name: string) => {
  return name + "--" + id
}

watch(state, (newVal, oldVal) => {
  console.log(newVal, newVal === oldVal)
})

setTimeout(() => {
  state.counter++
}, 2000)

const wres = watch(
  () => state.counter,
  (val) => {
    console.log("counter changed", val)
  },
  {
    immediate: true
  }
)

console.log(wres === wres.stop, 777)

// console.log(state.counter.value) // undefined
console.log(state.counter) // 11

state.counter = 22
console.log(counter.value)

const classObj = reactive({
  active: true,
  "text-danger": true
})

// type IUser = Record<string, number|string>
// const o:IUser = {a:'2'}
// const b = reactive(o)
// o.b =2
// console.log(b.b) // 2

onBeforeMount(() => {
  console.log("about before mount")
})

onMounted(() => {
  console.log("about mounted")
})
</script>

<style scoped></style>
