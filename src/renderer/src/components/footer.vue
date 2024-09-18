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
    <div class="text-sm run">
      {{ config.footer.content }}
    </div>
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
.run {
  animation: identifier 10s infinite both;
}
@keyframes identifier {
  from {
    transform: translateX(0);
  }
  50% {
    transform: translateX(calc(280px - 100%));
  }
  to {
    transform: translateX(0);
  }
}
</style>
