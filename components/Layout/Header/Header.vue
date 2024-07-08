<template>
  <AppHeader :links="links">
    <template #logo>
      <Icon
        name="i-mdi-nuxt"
        class="w-10 h-10 text-purple-400"
      />
    </template>
    <template #right>
      <Button variant="link">
        <NuxtLink
          href="/login"
        >
          <span class="">Sign in</span>
        </NuxtLink>
      </Button>
      <Button>
        <NuxtLink
          href="/free-trial"
        >
          <span class="">Start free trial</span>
        </NuxtLink>
      </Button>
      <DarkModeButton />
    </template>
  </AppHeader>
</template>

<script setup lang="ts">
import AppHeader from "@/components/Layout/Header/AppHeader.vue"
import DarkModeButton from "@/components/Button/DarkModeButton.vue"

const links = [
  {
    label: "Page 1",
    to: "/page1"
  },
  {
    label: "Page 2",
    to: "/page2"
  },
  {
    label: "Page 3",
    to: "/page3"
  }
]
</script>
