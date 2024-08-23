<script setup lang="ts">
// useConfigStore
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()

const toggle = () => {
  config.clock.type = config.clock.type === 'clock' ? 'timing' : 'clock'
}
</script>

<template>
  <main
    class="bg-white py-1 rounded-md flex justify-between items-center gap-1 opacity-0 group-hover:opacity-100 flex justify-between"
  >
    <span @click="toggle">切换 - {{ config.clock.type }}</span>
    <div class="flex gap-1 text-sm opacity-80 text-gray-800">
      <RouterLink :to="{ name: 'config' }" v-if="$route.name == 'clock'">配置</RouterLink>
      <RouterLink :to="{ name: 'clock' }" v-else>時鐘</RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  user-select: none;
}
</style>
