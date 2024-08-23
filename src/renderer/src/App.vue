<script setup lang="ts">
import useMouseEvent from '@renderer/composables/useMouseEvent'
const { hd } = useMouseEvent()
hd()
</script>

<template>
  <Suspense>
    <RouterView #default="{ Component }">
      <div class="drag">
        <component :is="Component" class="flex flex-col justify-center items-center" />
      </div>
    </RouterView>
  </Suspense>
</template>
<style lang="less"></style>
