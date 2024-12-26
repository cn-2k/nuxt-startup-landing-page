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

const nuxtApp = useNuxtApp()
const { activeHeadings, startObservingHeadings } = useScrollspy()

const links = computed(() => [
  {
    label: "Features",
    to: "#features",
    active: activeHeadings.value.includes("features") && !activeHeadings.value.includes("pricing")
  },
  {
    label: "Pricing",
    to: "#pricing",
    active: activeHeadings.value.includes("pricing") && !activeHeadings.value.includes("features")
  },
  {
    label: "Testimonials",
    to: "#testimonials",
    active: activeHeadings.value.includes("testimonials") && !activeHeadings.value.includes("pricing")
  }
])

nuxtApp.hooks.hookOnce("page:finish", () => {
  startObservingHeadings([
    document.querySelector("#features"),
    document.querySelector("#pricing"),
    document.querySelector("#testimonials")
  ])
})
</script>
