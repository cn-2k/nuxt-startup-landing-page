<template>
  <div>
    <AppHeader />

    <MainContent>
      <slot />
    </MainContent>

    <!-- <AppFooter /> -->
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/Layout/AppHeader.vue"
import MainContent from "@/components/Layout/MainContent.vue"
</script>
