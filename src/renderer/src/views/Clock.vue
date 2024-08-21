<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted } from 'vue'
import '@renderer/assets/flipClock.scss'
import FooterVue from '@renderer/components/footer.vue'
import { config, useConfigStore } from '@renderer/store/useConfigStore'

const { config } = useConfigStore()

onMounted(() => {
  const instance = new FlipClock({ el: '#hd', ...config })
  instance.render()
})
</script>

<template>
  <main class="drag">
    <div id="hd" class="drag"></div>
    <FooterVue />
  </main>
</template>

<style lang="scss">
:root {
  /* --bgColor: red;
  --width: 20px;
  --color: black; */
}
</style>
