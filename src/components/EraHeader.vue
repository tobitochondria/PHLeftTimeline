<script setup>
import { computed } from 'vue'
import { getIconComponent as resolveIcon } from '../utils/icons'

const props = defineProps({
  era: {
    type: Object,
    required: true,
  },
})

const IconComponent = computed(() => resolveIcon(props.era.icon))
</script>

<template>
  <div :id="era.id" class="scroll-mt-32 py-8 md:py-12">
    <div class="flex flex-col items-center gap-3 text-center">
      <!-- Era icon -->
      <div
        class="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
        :style="{ backgroundColor: era.color + '18', color: era.color }"
      >
        <component :is="IconComponent" :size="22" />
      </div>

      <!-- Era title -->
      <h2 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-surface-950">
        {{ era.title }}
      </h2>

      <!-- Date range badge -->
      <span
        class="era-badge text-xs"
        :style="{
          backgroundColor: era.color + '15',
          color: era.color,
          border: '1px solid ' + era.color + '30',
        }"
      >
        {{ era.subtitle }}
      </span>

      <!-- Decorative line -->
      <div class="w-24 h-0.5 mt-2 rounded-full" :style="{ background: `linear-gradient(to right, transparent, ${era.color}, transparent)` }"></div>
    </div>
  </div>
</template>
