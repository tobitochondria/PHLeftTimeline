import { ref, watch, onMounted, onUnmounted } from 'vue'

const mode = ref('vertical') // 'vertical' | 'horizontal'

export function useTimelineMode() {
  let resizeHandler = null

  function toggleMode() {
    mode.value = mode.value === 'vertical' ? 'horizontal' : 'vertical'
  }

  function getDefaultMode() {
    return window.innerWidth < 768 ? 'vertical' : 'horizontal'
  }

  onMounted(() => {
    const stored = localStorage.getItem('ph-timeline-mode')
    if (stored !== null) {
      mode.value = stored
    } else {
      mode.value = getDefaultMode()
    }

    // Auto-switch on resize if user hasn't manually chosen
    resizeHandler = () => {
      const hasManualChoice = localStorage.getItem('ph-timeline-mode') !== null
      if (!hasManualChoice) {
        mode.value = getDefaultMode()
      }
    }
    window.addEventListener('resize', resizeHandler)
  })

  onUnmounted(() => {
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler)
    }
  })

  // Persist manual changes
  watch(mode, (val) => {
    localStorage.setItem('ph-timeline-mode', val)
  })

  return { mode, toggleMode }
}
