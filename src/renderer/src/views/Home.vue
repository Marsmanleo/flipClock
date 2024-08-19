<script setup lang="ts">
import FlipClock from '@renderer/composables/FlipClock'
import { onMounted } from 'vue'
import '@renderer/assets/flipClock.scss'

onMounted(() => {
  const instance = new FlipClock({
    el: '#hd',
    type: 'timing',
    timing: {
      hour: 2,
      minute: 8,
      second: 100
    }
  })
  instance.render()
})
</script>

<template>
  <main class="drag">
    <div id="hd" class="drag"></div>
  </main>
</template>

<style lang="scss">
:root {
  /* --bgColor: red;
  --color: black; */
}
</style>
