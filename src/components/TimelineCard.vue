<script setup>
import { ref } from 'vue'
import { Calendar, ChevronDown, ChevronUp } from 'lucide-vue-next'

defineProps({
  event: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
    default: '#b91c1c',
  },
  side: {
    type: String,
    default: 'left',
  },
})

const expanded = ref(false)
const shouldTruncate = ref(false)
const descRef = ref(null)

function checkTruncation() {
  if (descRef.value) {
    shouldTruncate.value = descRef.value.scrollHeight > descRef.value.clientHeight
  }
}

defineExpose({ checkTruncation })
</script>

<template>
  <div
    class="solid-card overflow-hidden group"
    :class="side === 'right' ? 'border-r-4' : 'border-l-4'"
    :style="side === 'right' ? { borderRightColor: color } : { borderLeftColor: color }"
  >
    <div class="p-4 md:p-5">
      <!-- Date badge -->
      <div class="flex items-center gap-2 mb-2.5">
        <Calendar :size="13" class="text-surface-500 shrink-0" />
        <span
          class="text-xs font-semibold tracking-wide uppercase"
          :style="{ color: color }"
        >
          {{ event.date }}
        </span>
      </div>

      <!-- Organization name -->
      <h3 class="font-display text-base md:text-lg font-semibold text-surface-950 mb-2 leading-snug">
        {{ event.organization }}
      </h3>

      <!-- Description -->
      <div
        ref="descRef"
        class="text-sm text-surface-600 leading-relaxed transition-all duration-300"
        :class="expanded ? '' : 'line-clamp-4'"
        @vue:mounted="checkTruncation"
      >
        {{ event.description }}
      </div>

      <!-- Expand button -->
      <button
        v-if="shouldTruncate || expanded"
        @click="expanded = !expanded"
        :aria-expanded="expanded"
        class="flex items-center gap-1 mt-2 text-xs font-medium cursor-pointer transition-colors"
        :style="{ color: color }"
      >
        <span>{{ expanded ? 'Show less' : 'Read more' }}</span>
        <ChevronUp v-if="expanded" :size="13" />
        <ChevronDown v-else :size="13" />
      </button>

    </div>
  </div>
</template>
