<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { timelineData } from '../data/timelineData.js'
import { useTimelineMode } from '../composables/useTimelineMode'
import { useScrollToEra } from '../composables/useScrollToEra'

const activeEra = ref(timelineData[0]?.id || '')
const navRef = ref(null)
const { mode } = useTimelineMode()
const { scrollToEra } = useScrollToEra()

let observer = null
let pendingScrollAfterTransition = false

function scrollActiveIntoView(eraId) {
  if (!navRef.value) return
  const btn = navRef.value.querySelector(`[data-era="${eraId}"]`)
  if (btn) {
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
}

function setupObserver() {
  if (observer) observer.disconnect()

  const sections = timelineData.map(era => {
    const targetId = mode.value === 'horizontal' ? 'e-' + era.id : era.id
    return document.getElementById(targetId)
  }).filter(Boolean)

  if (sections.length === 0) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const rawId = entry.target.id.replace(/^[he]-/, '')
          activeEra.value = rawId
          scrollActiveIntoView(rawId)
        }
      }
    },
    {
      root: mode.value === 'horizontal' ? document.getElementById('horizontal-scroll-container') : null,
      rootMargin: mode.value === 'horizontal' ? '0px -40% 0px -40%' : '-20% 0px -60% 0px',
      threshold: 0,
    }
  )

  sections.forEach(section => observer.observe(section))
}

function onTransitionDone() {
  if (pendingScrollAfterTransition) {
    pendingScrollAfterTransition = false
    const targetId = mode.value === 'horizontal' ? 'h-' + activeEra.value : activeEra.value
    const el = document.getElementById(targetId)
    if (el) {
      if (mode.value === 'horizontal') {
        el.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' })
      } else {
        el.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'nearest' })
      }
    }
  }
  setupObserver()
}

watch(mode, () => {
  pendingScrollAfterTransition = true
})

onMounted(() => {
  setupObserver()
  window.addEventListener('timeline-transition-done', onTransitionDone)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('timeline-transition-done', onTransitionDone)
})
</script>

<template>
  <nav
    aria-label="Timeline eras"
    class="sticky top-16 z-40 glass-nav"
  >
    <div
      ref="navRef"
      class="max-w-7xl mx-auto px-4 flex items-center gap-2 py-2.5 overflow-x-auto horizontal-scroll"
    >
      <button
        v-for="era in timelineData"
        :key="era.id"
        :data-era="era.id"
        @click="scrollToEra(era.id)"
        :aria-current="activeEra === era.id ? 'true' : undefined"
        class="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
               transition-all duration-300 cursor-pointer whitespace-nowrap"
        :class="activeEra === era.id
          ? 'text-white shadow-md'
          : 'text-surface-600 hover:bg-surface-100'"
        :style="activeEra === era.id
          ? { backgroundColor: era.color, boxShadow: `0 4px 14px ${era.color}33` }
          : {}"
      >
        <div
          class="w-1.5 h-1.5 rounded-full shrink-0"
          :class="activeEra === era.id ? 'bg-white/60' : ''"
          :style="activeEra !== era.id ? { backgroundColor: era.color } : {}"
        ></div>
        <span>{{ era.subtitle }}</span>
      </button>
    </div>
  </nav>
</template>
