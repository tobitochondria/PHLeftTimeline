<script setup>
import { timelineData } from './data/timelineData.js'
import TheNavbar from './components/TheNavbar.vue'
import TheHero from './components/TheHero.vue'
import EraNavigation from './components/EraNavigation.vue'
import TimelineContainer from './components/TimelineContainer.vue'
import TheFooter from './components/TheFooter.vue'
import AboutPage from './components/AboutPage.vue'
import FAQPage from './components/FAQPage.vue'
</script>

<template>
  <div class="min-h-screen">
    <TheNavbar />
    <TheHero />
    <EraNavigation />
    <main>
      <TimelineContainer :data="timelineData" />
    </main>
    <TheFooter />
    <AboutPage />
    <FAQPage />
  </div>
</template>
