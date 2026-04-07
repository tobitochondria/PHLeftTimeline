<script setup>
import { ref } from 'vue'
import { X, HelpCircle, ChevronDown } from 'lucide-vue-next'
import { usePageOverlay } from '../composables/usePageOverlay.js'

const { activePage, closePage } = usePageOverlay()

const faqs = [
  {
    q: 'What is the Philippine Left Timeline?',
    a: 'The Philippine Left Timeline is a free, open-access interactive timeline that chronicles the formation, evolution, and dissolution of leftist organizations in the Philippines — from the first labor unions of the American colonial period in 1901 to the pluralized left of today. It is intended as an educational and research reference for students, academics, journalists, and the general public.',
  },
  {
    q: 'What is its scope?',
    a: 'The timeline currently focuses on the formation of organizations — political parties, mass movements, armed groups, labor federations, youth and student organizations, peasant federations, cultural formations, and women\'s groups that constitute the organizational history of the Philippine Left. Future updates will expand coverage to include critical nationwide events the Left participated in or was responsible for.',
  },
  {
    q: 'Will data be updated in the future?',
    a: 'Yes. This is an ongoing project. New entries, corrections to existing records, and expanded event coverage will be added over time. If you spot an error or know of an organization that should be included, feel free to reach out via the contact details on the About page.',
  },
  {
    q: 'What are your sources?',
    a: 'Data is drawn from public sources including books, Wikipedia, archival web material, and official organization websites. A future update will add in-line source citations inside each individual event card on the timeline.',
  },
  {
    q: 'What do you mean by "the Left"?',
    a: 'The term broadly refers to political parties, organizations, mass movements, and armed groups that self-identify or are historically classified as socialist, communist, nationalist-democratic, or progressive in orientation. This includes formations across the Marxist-Leninist, social-democratic, and national-democratic traditions, as well as labor and peasant federations that have historically aligned with the left.',
  },
  {
    q: 'Why does the timeline begin in 1901?',
    a: '1901 marks the formal beginning of American colonial rule in the Philippines following the Philippine-American War. This period saw the emergence of early labor unions, nationalist organizations, and proto-leftist formations — making it the most logical starting point for tracing the roots of organized left politics in the country.',
  },
  {
    q: 'What kinds of organizations are included?',
    a: 'Political parties, militant mass organizations, armed revolutionary groups, labor unions, peasant federations, youth and student alliances, women\'s organizations, cultural institutions, and broad coalitions — in short, any formation that constitutes a meaningful part of the organizational landscape of the Philippine Left.',
  },
  {
    q: 'Is this project affiliated with any political party or organization?',
    a: 'No. This is an independent historical reference project with no affiliation to any political party, group, or institution. It is intended as a neutral, educational resource and does not advocate for or against any political tendency.',
  },
  {
    q: 'Can I use this for academic or research purposes?',
    a: 'Yes, with appropriate attribution. The timeline is intended to be a useful starting point for researchers, students, and the general public. Always verify information against primary sources for formal academic work, as this is a reference resource and not a peer-reviewed publication.',
  },
  {
    q: 'How can I report an error or suggest an addition?',
    a: 'Reach out via the email or GitHub link on the About page. All corrections, factual notes, and suggestions for new entries are very welcome — building an accurate and comprehensive resource depends on community input.',
  },
]

const openIndex = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="activePage === 'faq'"
        class="fixed inset-0 z-[60] flex flex-col justify-end sm:items-start sm:justify-center sm:overflow-y-auto sm:py-20 sm:px-4"
        role="dialog"
        aria-modal="true"
        aria-label="Frequently Asked Questions"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-black/50 backdrop-blur-sm"
          @click="closePage"
        />

        <!-- Panel -->
        <div class="relative w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[92dvh] sm:max-h-none overflow-hidden">
          <!-- Mobile drag handle -->
          <div class="sm:hidden flex justify-center pt-3 pb-1 shrink-0">
            <div class="w-10 h-1 rounded-full bg-surface-200"></div>
          </div>

          <!-- Header -->
          <div class="shrink-0 flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 border-b border-surface-100">
            <div class="flex items-center gap-3">
              <HelpCircle :size="20" class="text-primary-600 shrink-0" />
              <h2 class="font-display text-lg sm:text-2xl font-bold text-surface-950 leading-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <button
              @click="closePage"
              class="p-2 rounded-xl text-surface-400 hover:text-surface-700 hover:bg-surface-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X :size="20" />
            </button>
          </div>

          <!-- FAQ accordion -->
          <div class="overflow-y-auto flex-1 px-4 sm:px-8 py-4 sm:py-6 space-y-2">
            <div
              v-for="(item, i) in faqs"
              :key="i"
              class="border border-surface-100 rounded-xl overflow-hidden"
            >
              <button
                class="w-full flex items-center justify-between gap-3 px-3 sm:px-5 py-3 sm:py-4 text-left hover:bg-surface-50 transition-colors cursor-pointer"
                :aria-expanded="openIndex === i"
                @click="toggle(i)"
              >
                <span class="font-medium text-surface-900 text-sm leading-snug">{{ item.q }}</span>
                <ChevronDown
                  :size="18"
                  class="shrink-0 text-surface-400 transition-transform duration-200"
                  :class="openIndex === i ? 'rotate-180' : ''"
                />
              </button>
              <Transition name="faq-expand">
                <div v-if="openIndex === i" class="px-3 sm:px-5 pb-4">
                  <p class="text-sm text-surface-600 leading-relaxed">{{ item.a }}</p>
                </div>
              </Transition>
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

.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}
.faq-expand-enter-from,
.faq-expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.faq-expand-enter-to,
.faq-expand-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
