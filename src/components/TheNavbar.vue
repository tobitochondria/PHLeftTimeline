<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ModeToggle from './ModeToggle.vue'
import { usePageOverlay } from '../composables/usePageOverlay.js'

const scrolled = ref(false)
const { openPage } = usePageOverlay()

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    id="navbar"
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass-nav shadow-lg shadow-black/5' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo / Title -->
        <button
          @click="scrollToTop"
          class="flex items-center gap-2.5 cursor-pointer group"
          aria-label="Go to top"
        >
          <img src="/phleft-icon.svg" alt="Logo" class="w-8 h-8 transition-transform group-hover:scale-105" />
          <span
            class="font-display text-sm font-semibold transition-colors duration-300"
            :class="scrolled ? 'text-surface-950' : 'text-white'"
          >
            The Philippine Left Timeline
          </span>
        </button>

        <!-- Center nav links -->
        <div class="hidden sm:flex items-center gap-1">
          <button
            class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer"
            :class="scrolled ? 'text-surface-600 hover:text-surface-950 hover:bg-surface-100' : 'text-white/80 hover:text-white hover:bg-white/10'"
            @click="openPage('about')"
          >
            About
          </button>
          <button
            class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-300 cursor-pointer"
            :class="scrolled ? 'text-surface-600 hover:text-surface-950 hover:bg-surface-100' : 'text-white/80 hover:text-white hover:bg-white/10'"
            @click="openPage('faq')"
          >
            FAQ
          </button>
        </div>

        <!-- Right actions -->
        <div class="flex items-center gap-1">
          <ModeToggle :scrolled="scrolled" />
        </div>
      </div>
    </div>
  </nav>
</template>
