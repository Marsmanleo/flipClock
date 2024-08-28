<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <main class="p-5 bg-[#34495e] text-white">
    <h2>時鈡顏色</h2>
    <div class="card">
      <div class="block">
        背景顏色
        <el-color-picker v-model="config.clock.bgColor" />
      </div>
      <div class="block">
        文字顏色
        <el-color-picker v-model="config.clock.color" />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
h2 {
  @apply text-sm opacity-80 font-bold  mb-2;
}
.card {
  @apply flex gap-2;
}
.block {
  @apply flex flex-col text-xs gap-2;
}
</style>
