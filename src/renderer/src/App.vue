<script setup lang="ts">
import useMouseEvent from '@renderer/composables/useMouseEvent'
const { hd } = useMouseEvent()
hd()
</script>

<template>
  <Suspense>
    <RouterView #default="{ Component }">
      <div class="drag">
        <component :is="Component" />
      </div>
    </RouterView>
  </Suspense>
</template>
<style lang="less"></style>
