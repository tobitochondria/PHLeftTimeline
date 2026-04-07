<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { getIconComponent } from '../utils/icons'
import TimelineCard from './TimelineCard.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})

const scrollContainer = ref(null)
const scrollProgress = ref(0)
const isDragging = ref(false)
let startX = 0
let scrollLeft = 0

function updateProgress() {
  if (!scrollContainer.value) return
  const { scrollLeft: sl, scrollWidth, clientWidth } = scrollContainer.value
  scrollProgress.value = scrollWidth > clientWidth
    ? (sl / (scrollWidth - clientWidth)) * 100
    : 0
}

// Mouse drag support
function onMouseDown(e) {
  isDragging.value = true
  startX = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft = scrollContainer.value.scrollLeft
  scrollContainer.value.style.cursor = 'grabbing'
}

function onMouseMove(e) {
  if (!isDragging.value) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX) * 1.5
  scrollContainer.value.scrollLeft = scrollLeft - walk
}

function onMouseUp() {
  isDragging.value = false
  if (scrollContainer.value) {
    scrollContainer.value.style.cursor = 'grab'
  }
}

// Wheel horizontal scroll
function onWheel(e) {
  if (!scrollContainer.value) return
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    e.preventDefault()
    scrollContainer.value.scrollLeft += e.deltaY
  }
}

onMounted(() => {
  nextTick(() => {
    if (scrollContainer.value) {
      scrollContainer.value.addEventListener('scroll', updateProgress, { passive: true })
      scrollContainer.value.addEventListener('wheel', onWheel, { passive: false })
    }
  })
})

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener('scroll', updateProgress)
    scrollContainer.value.removeEventListener('wheel', onWheel)
  }
})
</script>

<template>
  <div class="pb-12">
    <!-- Progress bar -->
    <div class="max-w-7xl mx-auto px-4 mb-6">
      <div class="h-1.5 bg-surface-200 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-150 ease-out"
          :style="{
            width: scrollProgress + '%',
            background: `linear-gradient(to right, ${data[0]?.color || '#b91c1c'}, ${data[Math.floor(data.length / 2)]?.color || '#7c3aed'}, ${data[data.length - 1]?.color || '#db2777'})`,
          }"
        ></div>
      </div>
      <div class="flex justify-between mt-1.5">
        <span class="text-[11px] font-medium text-surface-600">{{ data[0]?.subtitle }}</span>
        <span class="text-[11px] font-medium text-surface-600">{{ data[data.length - 1]?.subtitle }}</span>
      </div>
    </div>

    <!-- Horizontal scroll container -->
    <div
      id="horizontal-scroll-container"
      ref="scrollContainer"
      role="region"
      aria-label="Horizontal timeline"
      tabindex="0"
      class="overflow-x-auto horizontal-scroll cursor-grab select-none"
      style="-webkit-overflow-scrolling: touch;"
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      @mouseleave="onMouseUp"
    >
      <div class="inline-flex items-start gap-0 px-8 py-4">
        <!-- Iterate eras -->
        <div
          v-for="(era, eraIndex) in data"
          :key="era.id"
          :id="'e-' + era.id"
          class="shrink-0 flex flex-col items-center relative"
        >
          <!-- Era header (compact) -->
          <div :id="'h-' + era.id" class="scroll-mt-32 mb-6 text-center px-4 flex flex-col items-center">
            <div
              class="w-10 h-10 mb-2 rounded-xl flex items-center justify-center shadow-sm"
              :style="{ backgroundColor: era.color + '18', color: era.color }"
            >
              <component :is="getIconComponent(era.icon)" :size="20" />
            </div>
            <h3 class="font-display text-lg font-bold text-surface-950 whitespace-nowrap">
              {{ era.title }}
            </h3>
            <span
              class="inline-block mt-1.5 px-3 py-1 rounded-full text-[11px] font-semibold text-white"
              :style="{ backgroundColor: era.color }"
            >
              {{ era.subtitle }}
            </span>
          </div>

          <!-- Era rail + cards -->
          <div class="flex items-start gap-0 relative">
            <!-- Rail line for this era -->
            <div
              class="absolute left-0 right-0 h-[3px] rounded-full"
              style="top: 160px;"
              :style="{ backgroundColor: era.color + '25' }"
            >
              <div class="h-full rounded-full" :style="{ backgroundColor: era.color }"></div>
            </div>

            <!-- Era connector between eras -->
            <div
              v-if="eraIndex < data.length - 1"
              class="absolute right-0 h-[3px] w-4 -mr-4"
              style="top: 160px;"
              :style="{ background: `linear-gradient(to right, ${era.color}, ${data[eraIndex + 1]?.color})` }"
            ></div>

            <div
              v-for="(event, index) in era.events"
              :key="`${era.id}-${index}`"
              class="shrink-0 flex flex-col items-center relative"
              style="width: 320px;"
            >
              <!-- Card (top position for even, bottom for odd) -->
              <div
                v-if="index % 2 === 0"
                class="px-3 mb-4"
              >
                <TimelineCard
                  :event="event"
                  :color="era.color"
                  side="left"
                  class="w-[280px]"
                />
              </div>

              <!-- Connector line up -->
              <div
                v-if="index % 2 === 0"
                class="w-px h-5 shrink-0"
                :style="{ backgroundColor: era.color }"
              ></div>

              <!-- Dot on rail -->
              <div class="shrink-0 relative z-10">
                <div
                  class="w-3.5 h-3.5 rounded-full border-[3px] transition-transform hover:scale-150"
                  :style="{
                    backgroundColor: era.color,
                    borderColor: 'var(--tw-bg-base)',
                    boxShadow: `0 0 0 2px ${era.color}`,
                  }"
                ></div>
              </div>

              <!-- Connector line down -->
              <div
                v-if="index % 2 !== 0"
                class="w-px h-5 shrink-0"
                :style="{ backgroundColor: era.color }"
              ></div>

              <!-- Card (bottom position for odd) -->
              <div
                v-if="index % 2 !== 0"
                class="px-3 mt-4"
              >
                <TimelineCard
                  :event="event"
                  :color="era.color"
                  side="left"
                  class="w-[280px]"
                />
              </div>

              <!-- Spacer to maintain consistent height -->
              <div
                v-if="index % 2 === 0"
                class="h-[200px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
