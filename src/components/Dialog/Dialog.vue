<template>
  <transition name="dialog-fade">
    <!-- 外层容器 -->
    <div v-show="visible" class="Sz-dialog_wrapper">
      <!-- 这一层主要是控制对话框的宽度和高度 -->
      <div class="Sz-dialog" :style="{ width, marginTop: top }">
        <!-- 头部 -->
        <div class="Sz-dialog_header">
          <slot name="title">
            <span class="Sz-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="Sz-dialog_headerbtn" @click="clickHandle">
            <Sz-Icon icon="xmark" />
          </button>
        </div>
        <!-- 中间内容部分，就是一个默认插槽 -->
        <div class="Sz-dialog_body">
          <slot />
        </div>
        <!-- 底部部分，也是一个插槽，是一个具名插槽 -->
        <div class="Sz-dialog_footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'Sz-Dialog'
})
defineProps(propObj)

const emit = defineEmits(['close'])

function clickHandle() {
  // 触发父组件的 close 事件
  emit('close')
}
</script>

<style lang="scss" scoped></style>
