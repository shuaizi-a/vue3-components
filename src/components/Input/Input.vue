<template>
  <div>input</div>
</template>

<script setup>
defineOptions({
  name: 'shuaizi-input'
})

import propObj from './props'

const props = defineProps(propObj)
console.log(props)
</script>

<style lang="scss" scoped></style>
