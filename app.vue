<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: "%s - Nuxt 3 Startup Template",
  ogTitle: "Nuxt 3 Startup Template",
  title: "Nuxt 3 Startup Template",
  ogImage: "https://i.imgur.com/VNfMfim.png",
  twitterImage: "https://i.imgur.com/VNfMfim.png",
  twitterCard: "summary_large_image",
  description: "A modern Nuxt 3 Startup Landing Page for your next project.",
  ogDescription: "A modern Nuxt 3 Startup Landing Page for your next project."
})

defineOgImageComponent("Nuxt", {
  headline: false,
  title: "Nuxt 3 Startup Template",
  description: "A modern Nuxt 3 Startup Landing Page for your next project."
})
</script>
