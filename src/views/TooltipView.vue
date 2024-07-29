<template>
  <h1 class="row-title">不同方向</h1>
  <div class="row">
    <Sz-Tooltip content="this is a test" placement="top" @visible-change="handle">
      <Sz-Button type="primary">top</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="bottom">
      <Sz-Button type="warning">bottom</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="left">
      <Sz-Button type="danger">left</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="right">
      <Sz-Button type="success">right</Sz-Button>
    </Sz-Tooltip>
  </div>
  <h1 class="row-title">切换触发模式</h1>
  <div class="row">
    <Sz-Tooltip content="this is a test" placement="top" trigger="click">
      <Sz-Button type="primary">top</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="bottom" trigger="click">
      <Sz-Button type="warning">bottom</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="left" trigger="click">
      <Sz-Button type="danger">left</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="right" trigger="click">
      <Sz-Button type="success">right</Sz-Button>
    </Sz-Tooltip>
  </div>
  <h1 class="row-title">手动触发模式</h1>
  <div class="row">
    <Sz-Tooltip content="this is a test" placement="right" manual ref="tooltipRef">
      <Sz-Button type="primary">right</Sz-Button>
    </Sz-Tooltip>
  </div>
  <div class="row">
    <Sz-Button @click="openHandler">打开提示框</Sz-Button>
    <Sz-Button @click="closeHandler">关闭提示框</Sz-Button>
  </div>
  <h1 class="row-title">延时触发</h1>
  <div class="row">
    <Sz-Tooltip
      content="this is a test"
      placement="top"
      :open-delay="2000"
      :close-delay="2000"
      @visible-change="handle"
    >
      <Sz-Button type="primary">top</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="bottom" :open-delay="2000" :close-delay="2000">
      <Sz-Button type="warning">bottom</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="left" :open-delay="2000" :close-delay="2000">
      <Sz-Button type="danger">left</Sz-Button>
    </Sz-Tooltip>
    <Sz-Tooltip content="this is a test" placement="right" :open-delay="2000" :close-delay="2000">
      <Sz-Button type="success">right</Sz-Button>
    </Sz-Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tooltipRef = ref(null)
const handle = (isShow) => {
  if (isShow) console.log('提示框显示')
  else console.log('提示框隐藏')
}

const openHandler = () => {
  // 用户要手动打开
  tooltipRef.value.show()
}
const closeHandler = () => {
  // 用户要手动关闭
  tooltipRef.value.hide()
}
</script>

<style lang="scss" scoped></style>
