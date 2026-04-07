<script setup>
import { ChevronDown, Clock, Layers, CalendarRange } from 'lucide-vue-next'
import { timelineData } from '../data/timelineData.js'
import { computed } from 'vue'

const totalEvents = computed(() =>
  timelineData.reduce((sum, era) => sum + era.events.length, 0)
)

function scrollToTimeline() {
  const el = document.getElementById(timelineData[0]?.id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
  >
    <!-- Photo background -->
    <div class="absolute inset-0">
      <img
        src="/hero-banner.jpg"
        alt=""
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay for text readability -->
      <div class="absolute inset-0 bg-black/60"></div>
      <!-- Bottom gradient fade into page background -->
      <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--tw-bg-base)] to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <!-- Eyebrow -->
      <div class="animate-fade-in flex items-center justify-center gap-2 mb-6">
        <div class="h-px w-8 bg-white/30"></div>
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">
          Interactive Historical Timeline
        </span>
        <div class="h-px w-8 bg-white/30"></div>
      </div>

      <!-- Title -->
      <h1
        class="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
      >
        <span class="text-white">The </span>
        <span class="text-primary-400">Philippine Left</span>
        <br />
        <span class="text-white">Timeline</span>
      </h1>

      <!-- Subtitle -->
      <p
        class="animate-fade-up text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        style="animation-delay: 0.15s"
      >
        A chronological history of labor, socialist, and revolutionary
        movements in the Philippines — from the first trade unions in 1901
        to the pluralized left of today.
      </p>

      <!-- Stats -->
      <div
        class="animate-fade-up flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12"
        style="animation-delay: 0.3s"
      >
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Clock :size="16" class="text-primary-300" />
          </div>
          <div class="text-left">
            <div class="text-lg font-bold text-white">125+</div>
            <div class="text-xs text-white/60">Years of History</div>
          </div>
        </div>

        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Layers :size="16" class="text-accent-300" />
          </div>
          <div class="text-left">
            <div class="text-lg font-bold text-white">{{ timelineData.length }}</div>
            <div class="text-xs text-white/60">Historical Eras</div>
          </div>
        </div>

        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <CalendarRange :size="16" class="text-emerald-300" />
          </div>
          <div class="text-left">
            <div class="text-lg font-bold text-white">{{ totalEvents }}</div>
            <div class="text-xs text-white/60">Key Events</div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <button
        @click="scrollToTimeline"
        class="animate-fade-up inline-flex items-center gap-2 px-6 py-3 rounded-2xl
               bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm
               shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30
               transition-all duration-300 cursor-pointer group"
        style="animation-delay: 0.45s"
      >
        <span>Explore the Timeline</span>
        <ChevronDown :size="16" class="animate-bounce-subtle" />
      </button>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
      <div class="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5">
        <div class="w-1 h-2 rounded-full bg-white/50 animate-bounce-subtle"></div>
      </div>
    </div>
  </section>
</template>
