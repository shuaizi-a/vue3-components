<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <Sz-Icon icon="user-secret" />
    <Sz-Icon icon="bars" />
    <Sz-Icon icon="shield-halved" />
    <Sz-Icon icon="file" />
    <Sz-Icon icon="filter" />
    <Sz-Icon icon="gear" />
    <Sz-Icon icon="barcode" />
    <Sz-Icon icon="folder" />
    <Sz-Icon icon="folder-open" />
  </div>
  <h1 class="row-title">设置不同的大小</h1>
  <div class="row">
    <Sz-Icon icon="user-secret" size="2xs" />
    <Sz-Icon icon="bars" size="xs" />
    <Sz-Icon icon="shield-halved" size="sm" />
    <Sz-Icon icon="file" size="lg" />
    <Sz-Icon icon="filter" size="xl" />
    <Sz-Icon icon="gear" size="2xl" />
    <Sz-Icon icon="barcode" size="2x" />
    <Sz-Icon icon="folder" size="3x" />
    <Sz-Icon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <Sz-Icon icon="user-secret" rotation="90" size="xl" />
    <Sz-Icon icon="bars" rotation="270" size="xl" />
    <Sz-Icon icon="shield-halved" rotation="180" size="xl" />
    <Sz-Icon icon="file" flip="horizontal" size="xl" />
    <Sz-Icon icon="filter" flip="vertical" size="xl" />
    <Sz-Icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <Sz-Icon icon="user-secret" size="xl" beat />
    <Sz-Icon icon="bars" size="xl" beat-fade />
    <Sz-Icon icon="shield-halved" size="xl" bounce />
    <Sz-Icon icon="file" size="xl" fade />
    <Sz-Icon icon="filter" size="xl" flip />
    <Sz-Icon icon="gear" size="xl" shake />
    <Sz-Icon icon="barcode" size="xl" spin />
    <Sz-Icon icon="folder" size="xl" spin spin-reverse />
    <Sz-Icon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <Sz-Icon icon="user-secret" size="xl" type="primary" />
    <Sz-Icon icon="bars" size="xl" type="success" />
    <Sz-Icon icon="shield-halved" size="xl" type="info" />
    <Sz-Icon icon="file" size="xl" type="warning" />
    <Sz-Icon icon="filter" size="xl" type="danger" />
    <Sz-Icon icon="gear" size="xl" color="#e47412" />
    <Sz-Icon icon="barcode" size="xl" color="#7ec102" />
    <Sz-Icon icon="folder" size="xl" color="skyblue" />
    <Sz-Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
