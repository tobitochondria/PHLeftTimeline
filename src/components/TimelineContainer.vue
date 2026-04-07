<script setup>
import VerticalTimeline from './VerticalTimeline.vue'
import HorizontalTimeline from './HorizontalTimeline.vue'
import { useTimelineMode } from '../composables/useTimelineMode'

defineProps({
  data: {
    type: Array,
    required: true,
  },
})

const { mode } = useTimelineMode()

function onTimelineEntered() {
  window.dispatchEvent(new CustomEvent('timeline-transition-done'))
}
</script>

<template>
  <section id="timeline-section">
    <Transition name="timeline-switch" mode="out-in" @after-enter="onTimelineEntered">
      <VerticalTimeline
        v-if="mode === 'vertical'"
        :data="data"
        key="vertical"
      />
      <HorizontalTimeline
        v-else
        :data="data"
        key="horizontal"
      />
    </Transition>
  </section>
</template>

<style scoped>
.timeline-switch-enter-active,
.timeline-switch-leave-active {
  transition: all 0.4s ease;
}
.timeline-switch-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.timeline-switch-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
