<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import EraHeader from './EraHeader.vue'
import TimelineCard from './TimelineCard.vue'

defineProps({
  data: {
    type: Array,
    required: true,
  },
})

const visibleItems = ref(new Set())
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleItems.value = new Set([...visibleItems.value, entry.target.dataset.key])
          observer.unobserve(entry.target)
        }
      })
    },
    {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1,
    }
  )

  nextTick(() => {
    setTimeout(() => {
      document.querySelectorAll('[data-timeline-item]').forEach((el) => {
        observer.observe(el)
      })
    }, 150)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
    <div v-for="era in data" :key="era.id">
      <!-- Era Header -->
      <EraHeader :era="era" />

      <!-- Timeline events -->
      <div class="relative">
        <!-- Central spine line (desktop) -->
        <div
          class="hidden md:block timeline-spine top-0 bottom-0 left-1/2 -translate-x-1/2"
          :style="{ background: `linear-gradient(to bottom, ${era.color}40, ${era.color}, ${era.color}40)` }"
        ></div>

        <!-- Left spine line (mobile) -->
        <div
          class="md:hidden timeline-spine top-0 bottom-0 left-[18px]"
          :style="{ background: `linear-gradient(to bottom, ${era.color}40, ${era.color}, ${era.color}40)` }"
        ></div>

        <div class="space-y-8 md:space-y-12 py-4">
          <div
            v-for="(event, index) in era.events"
            :key="`${era.id}-${index}`"
            :data-key="`${era.id}-${index}`"
            data-timeline-item
            class="relative transition-all duration-700 ease-out"
            :class="[
              visibleItems.has(`${era.id}-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ]"
          >
            <!-- Desktop layout -->
            <div class="hidden md:flex items-start" :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
              <!-- Card column -->
              <div class="w-[calc(50%-20px)]">
                <TimelineCard
                  :event="event"
                  :color="era.color"
                  :side="index % 2 === 0 ? 'right' : 'left'"
                />
              </div>

              <!-- Center dot column -->
              <div class="flex-shrink-0 w-10 flex justify-center relative z-10 pt-5">
                <div
                  class="w-3.5 h-3.5 rounded-full border-[3px] shrink-0"
                  :style="{
                    backgroundColor: era.color,
                    borderColor: 'var(--tw-bg-base)',
                    boxShadow: `0 0 0 2px ${era.color}`,
                  }"
                ></div>
              </div>

              <!-- Empty spacer column -->
              <div class="w-[calc(50%-20px)]"></div>
            </div>

            <!-- Mobile layout -->
            <div class="md:hidden flex items-start">
              <!-- Dot -->
              <div class="flex-shrink-0 w-9 flex justify-center relative z-10 pt-5">
                <div
                  class="w-3 h-3 rounded-full border-[3px] shrink-0"
                  :style="{
                    backgroundColor: era.color,
                    borderColor: 'var(--tw-bg-base)',
                    boxShadow: `0 0 0 2px ${era.color}`,
                  }"
                ></div>
              </div>

              <!-- Card -->
              <div class="flex-1 ml-2">
                <TimelineCard
                  :event="event"
                  :color="era.color"
                  side="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
