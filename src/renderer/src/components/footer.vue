<script setup lang="ts">
import Navbar from '@renderer/components/Navbar.vue'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
</script>

<template>
  <main
    class="drag w-full px-2 text-center mt-2 rounded-md text-white flex justify-between items-center"
    :style="{ backgroundColor: config.footer.bgColor, color: config.footer.color }"
  >
    <div class="text-sm">努力做事吧！</div>
    <Navbar class="" />
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
