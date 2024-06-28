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
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ],
  // link: [
  //   { rel: 'icon', href: '/favicon.ico' }
  // ],
  htmlAttrs: {
    lang: "en"
  }
})

useSeoMeta({
  titleTemplate: "%s - Nuxt SaaS Template - v2",
  ogImage: "https://saas-template.nuxt.dev/social-card.png",
  twitterImage: "https://saas-template.nuxt.dev/social-card.png",
  twitterCard: "summary_large_image"
})
</script>
