<script setup>
import { AlignVerticalJustifyCenter, AlignHorizontalJustifyCenter } from 'lucide-vue-next'
import { useTimelineMode } from '../composables/useTimelineMode'

defineProps({ scrolled: { type: Boolean, default: true } })

const { mode, toggleMode } = useTimelineMode()
</script>

<template>
  <button
    id="mode-toggle"
    @click="toggleMode"
    class="flex items-center gap-2 px-3 h-10 rounded-xl transition-all duration-300 cursor-pointer text-sm font-medium"
    :class="scrolled ? 'hover:bg-surface-200' : 'hover:bg-white/10'"
    :aria-label="mode === 'vertical' ? 'Switch to horizontal view' : 'Switch to vertical view'"
  >
    <Transition name="mode-icon" mode="out-in">
      <AlignHorizontalJustifyCenter
        v-if="mode === 'vertical'"
        :size="18"
        class="shrink-0 transition-colors duration-300"
        :class="scrolled ? 'text-surface-600' : 'text-white/80'"
      />
      <AlignVerticalJustifyCenter
        v-else
        :size="18"
        class="shrink-0 transition-colors duration-300"
        :class="scrolled ? 'text-surface-600' : 'text-white/80'"
      />
    </Transition>
    <span
      class="hidden sm:inline transition-colors duration-300"
      :class="scrolled ? 'text-surface-600' : 'text-white/80'"
    >
      {{ mode === 'vertical' ? 'Horizontal' : 'Vertical' }}
    </span>
  </button>
</template>

<style scoped>
.mode-icon-enter-active,
.mode-icon-leave-active {
  transition: all 0.25s ease;
}
.mode-icon-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.mode-icon-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>
