<script setup lang="ts">
import { Crown } from '@icon-park/vue-next'
import FooterVue from '@renderer/components/footer.vue'
import useMouseEvent from '@renderer/composables/useMouseEvent'

const { hd } = useMouseEvent()
hd()
</script>

<template>
  <Suspense>
    <RouterView v-slot="{ Component }">
      <div>
        <div class="flex justify-center w-full mb-2 drag">
          <Crown theme="outline" size="35" class="text-yellow-400" />
        </div>
        <component :is="Component" class="flex flex-col justify-center items-center" />
        <FooterVue />
      </div>
    </RouterView>
  </Suspense>
</template>

<style lang="less">
/* 可以添加全局樣式 */
</style>
