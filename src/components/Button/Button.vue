<template>
  <button
    ref="_ref"
    class="Sz-button"
    :class="{
      [`Sz-button--${type}`]: type,
      [`Sz-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled || loading
    }"
    :disabled="disabled || loading"
  >
    <Sz-Icon icon="spinner" spin v-if="loading" />
    <Sz-Icon :icon="icon" v-if="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import propObj from './props'
defineOptions({
  name: 'Sz-Button'
})
defineProps(propObj)

// 回头通过 _ref 就可以获取到 button 元素
const _ref = ref(null)

defineExpose({
  ref: _ref
})
</script>

<style lang="scss" scoped></style>
