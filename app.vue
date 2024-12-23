<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: "white" }
  ],
  link: [
    { rel: "icon", href: "/favicon.ico" }
  ],
  bodyAttrs: {
    class: "bg-white dark:bg-gray-900 dark:text-gray-200 antialiased overflow-x-hidden"
  }
})

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
