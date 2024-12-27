<template>
  <div>
    <Header />
    <MainContent>
      <slot />
    </MainContent>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Layout/Header/Header.vue"
import MainContent from "@/components/Layout/MainContent.vue"
import AppFooter from "@/components/Layout/Footer/AppFooter.vue"
</script>
