<template>
  <transition name="dialog-fade">
    <!-- 外层容器 -->
    <div v-show="visible" class="duyi-dialog_wrapper">
      <!-- 这一层主要是控制对话框的宽度和高度 -->
      <div class="duyi-dialog" :style="{ width, marginTop: top }">
        <!-- 头部 -->
        <div class="duyi-dialog_header">
          <slot name="title">
            <span class="duyi-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="duyi-dialog_headerbtn" @click="clickHandle">
            <Duyi-Icon icon="xmark" />
          </button>
        </div>
        <!-- 中间内容部分，就是一个默认插槽 -->
        <div class="duyi-dialog_body">
          <slot />
        </div>
        <!-- 底部部分，也是一个插槽，是一个具名插槽 -->
        <div class="duyi-dialog_footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'Duyi-Dialog'
})
defineProps(propObj)

const emit = defineEmits(['close'])

function clickHandle() {
  // 触发父组件的 close 事件
  emit('close')
}
</script>

<style lang="scss" scoped></style>
