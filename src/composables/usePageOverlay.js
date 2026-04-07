import { ref } from 'vue'

const activePage = ref(null) // null | 'about' | 'faq'

export function usePageOverlay() {
  return {
    activePage,
    openPage: (page) => { activePage.value = page },
    closePage: () => { activePage.value = null },
  }
}
