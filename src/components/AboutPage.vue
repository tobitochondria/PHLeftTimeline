<script setup>
import { X, Github, Mail, BookOpen } from 'lucide-vue-next'
import { usePageOverlay } from '../composables/usePageOverlay.js'

const { activePage, closePage } = usePageOverlay()
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="activePage === 'about'"
        class="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto py-20 px-4"
        role="dialog"
        aria-modal="true"
        aria-label="About"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="closePage"
        />

        <!-- Panel -->
        <div class="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-8 py-6 border-b border-surface-100">
            <div class="flex items-center gap-3">
              <BookOpen :size="22" class="text-primary-600" />
              <h2 class="font-display text-2xl font-bold text-surface-950">About</h2>
            </div>
            <button
              @click="closePage"
              class="p-2 rounded-xl text-surface-400 hover:text-surface-700 hover:bg-surface-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X :size="20" />
            </button>
          </div>

          <!-- Body -->
          <div class="px-8 py-8 space-y-8">
            <!-- Project blurb -->
            <div>
              <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-primary-500 mb-3">
                The Project
              </h3>
              <p class="text-surface-700 leading-relaxed">
                The Philippine Left Timeline is a free, open-access interactive timeline that
                chronicles the formation, evolution, and dissolution of leftist organizations
                in the Philippines — from the early labor movements of the American colonial
                period to the pluralized left of today.
              </p>
              <p class="text-surface-700 leading-relaxed mt-3">
                It was built to address the lack of a single, accessible, consolidated resource
                on the organizational history of Philippine social movements — one that could
                serve students, researchers, journalists, and curious readers alike.
              </p>
            </div>

            <!-- Divider -->
            <hr class="border-surface-100" />

            <!-- Creator -->
            <div>
              <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-primary-500 mb-4">
                Created &amp; Maintained By
              </h3>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                  <span class="font-display font-bold text-primary-700 text-lg">TG</span>
                </div>
                <div>
                  <p class="font-semibold text-surface-950 text-lg leading-tight">Toby Giongco</p>
                  <p class="text-sm text-surface-500 mt-0.5 mb-3">Researcher &amp; Web Developer</p>
                  <p class="text-surface-700 leading-relaxed text-sm">
                    Toby Giongco is a Filipino researcher and web developer with a long-standing
                    interest in Philippine political history. He built this timeline as a personal
                    research project after repeatedly struggling to find a single, organized reference
                    for the country's vast organizational left — and decided to build one himself.
                    What started as a set of notes eventually grew into a public resource intended
                    to make a complex and often overlooked history accessible to everyone.
                  </p>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <hr class="border-surface-100" />

            <!-- Contact links -->
            <div>
              <h3 class="text-xs font-semibold uppercase tracking-[0.15em] text-primary-500 mb-4">
                Contact
              </h3>
              <div class="flex items-center gap-3">
                <a
                  href="https://github.com/tobitochondria/PHLeftTimeline"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-surface-200 text-surface-700 hover:border-surface-950 hover:text-surface-950 transition-colors text-sm font-medium"
                  aria-label="GitHub repository"
                >
                  <Github :size="18" />
                  GitHub
                </a>
                <a
                  href="mailto:tobitochondria@gmail.com"
                  class="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-surface-200 text-surface-700 hover:border-surface-950 hover:text-surface-950 transition-colors text-sm font-medium"
                  aria-label="Send email"
                >
                  <Mail :size="18" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.25s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
.overlay-enter-active .relative,
.overlay-leave-active .relative {
  transition: transform 0.25s ease;
}
.overlay-enter-from .relative {
  transform: translateY(16px);
}
.overlay-leave-to .relative {
  transform: translateY(8px);
}
</style>
