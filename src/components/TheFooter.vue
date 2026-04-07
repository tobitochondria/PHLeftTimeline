<script setup>
import { Heart, Github, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer class="relative mt-20 border-t border-surface-200">
    <!-- Gradient top border -->
    <div
      class="absolute top-0 left-0 right-0 h-px"
      style="background: linear-gradient(to right, transparent, #b91c1c, #d97706, #7c3aed, #db2777, transparent);"
    ></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
      <!-- Tagline -->
      <p class="font-display text-lg sm:text-xl font-medium text-surface-700 mb-3">
        Built to preserve the memory of the Philippine Left
      </p>
      <p class="text-sm text-surface-500 max-w-lg mx-auto mb-8 leading-relaxed">
        This timeline documents the rich and complex history of labor, socialist,
        and revolutionary movements in the Philippines. Data is compiled from
        historical sources, academic works, and archival records.
      </p>

      <!-- Divider -->
      <div class="flex items-center justify-center gap-3 mb-8">
        <div class="h-px w-12 bg-surface-200"></div>
        <Heart :size="14" class="text-primary-400" />
        <div class="h-px w-12 bg-surface-200"></div>
      </div>

      <!-- Contact links -->
      <div class="flex items-center justify-center gap-3 mb-8">
        <a
          href="https://github.com/tobitochondria/PHLeftTimeline"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-200 text-surface-500 hover:text-surface-900 hover:border-surface-400 transition-colors text-sm"
          aria-label="GitHub repository"
        >
          <Github :size="16" />
          GitHub
        </a>
        <a
          href="mailto:tobitochondria@gmail.com"
          class="flex items-center gap-2 px-4 py-2 rounded-xl border border-surface-200 text-surface-500 hover:text-surface-900 hover:border-surface-400 transition-colors text-sm"
          aria-label="Send email"
        >
          <Mail :size="16" />
          Email
        </a>
      </div>

      <!-- Bottom bar -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-surface-500">
        <span>&copy; {{ new Date().getFullYear() }} Philippine Left Timeline</span>
        <span class="hidden sm:inline">·</span>
        <span>Open-source historical project</span>
      </div>
    </div>
  </footer>
</template>
