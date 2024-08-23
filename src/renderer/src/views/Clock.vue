<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted, watch } from 'vue'
import '@renderer/assets/flipClock.scss'
// useConfigStore
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
const instance = new FlipClock({ el: '#hd', ...config.clock })

onMounted(() => {
  watch(
    () => config.clock.type,
    () => {
      // console.log(config.clock.type)
      instance
        .destroy()
        .config({ el: '#hd', ...config.clock })
        .render()
    }
  )

  instance.render()
})
</script>

<template>
  <main>
    <div
      id="hd"
      class="drag"
      :style="{
        '--bgColor': config.clock.bgColor,
        '--color': config.clock.color
      }"
    ></div>
  </main>
</template>

<style lang="scss">
:root {
  /* --bgColor: red;
  --width: 20px;
  --color: black; */
}
</style>
