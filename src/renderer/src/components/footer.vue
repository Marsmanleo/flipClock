<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <main
    class="bg-[#951d73] w-full px-4 text-center mt-2 rounded-md drag text-white"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
  >
    努力做事吧！
  </main>
</template>

<style lang="scss" scoped>
main {
  user-select: none;
  /* color: black;
  display: flex;
  justify-content: center;
  align-items: center; */
}
</style>
