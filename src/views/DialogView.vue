<template>
  <h1 class="row-title">对话框示例</h1>
  <div class="row">
    <Sz-Button type="primary" @click="visible = true">对话框一</Sz-Button>
    <Sz-Button type="primary" @click="visible2 = true">对话框二</Sz-Button>
    <Sz-Button type="primary" @click="visible3 = true">对话框三</Sz-Button>
  </div>
  <Sz-Dialog v-model:visible="visible" @close="visible = false"> 这是一个基本的对话框 </Sz-Dialog>
  <Sz-Dialog
    v-model:visible="visible2"
    @close="visible2 = false"
    title="这是一个自定义标题"
    width="30vw"
    top="40vh"
  >
    这是一个基本的对话框
  </Sz-Dialog>
  <Sz-Dialog v-model:visible="visible3" @close="visible3 = false">
    这是一个基本的对话框
    <template #footer>
      <Sz-Button @click="visible3 = false">取消</Sz-Button>
      <Sz-Button type="primary" @click="visible3 = false">确定</Sz-Button>
    </template>
  </Sz-Dialog>
</template>

<script setup>
import { ref } from 'vue'

// 控制对话框是否显示
const visible = ref(false)
const visible2 = ref(false)
const visible3 = ref(false)
</script>

<style lang="scss" scoped></style>
