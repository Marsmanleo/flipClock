import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
  const config = ref({
    type: 'timing' as 'clock' | 'timing',
    timing: {
      hour: 2,
      minute: 8,
      second: 100
    }
  })
  // function increment() {
  //   count.value++
  // }

  return {
    config
    // increment
  }
})
