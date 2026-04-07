import { useTimelineMode } from './useTimelineMode'

export function useScrollToEra() {
  const { mode } = useTimelineMode()

  function scrollToEra(eraId) {
    const targetId = mode.value === 'horizontal' ? 'h-' + eraId : eraId
    const el = document.getElementById(targetId)
    if (el) {
      if (mode.value === 'horizontal') {
        el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return { scrollToEra }
}
