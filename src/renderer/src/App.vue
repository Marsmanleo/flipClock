<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import useMouseEvent from '@renderer/composables/useMouseEvent'
const { hd } = useMouseEvent()
hd()
</script>

<template>
  <Suspense>
    <RouterView #default="{ Component }">
      <div class="group">
        <Navbar class="opacity-0 group-hover:opacity-100" />
        <component :is="Component" class="flex flex-col justify-center items-center" />
      </div>
    </RouterView>
  </Suspense>
</template>
<style lang="less"></style>
