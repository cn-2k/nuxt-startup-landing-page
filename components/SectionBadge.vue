<template>
  <span
    :class="{
      'inline-flex items-center text-sm px-3 py-1.5 bg-purple-500/10 ring-1 text-purple-500 ring-inset ring-purple-600 ring-opacity-25 dark:ring-opacity-25 relative rounded-full font-semibold': !props.onlyText,
      'inline-flex items-center px-3 py-1.5 text-purple-600 relative rounded-full font-semibold': props.onlyText
    }"
  >
    <NuxtLink
      v-if="href"
      :href="props.href"
      rel="noopener noreferrer"
      target="_blank"
      class="focus:outline-none"
      tabindex="-1"
    >
      <span
        class="absolute inset-0"
        aria-hidden="true"
      ></span>
    </NuxtLink>
    <span
      :class="{ 'mx-auto max-w-md text-purple-500/80 animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:100px_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80': props.shiny }"
    >
      {{ props.text }}
    </span>
    <Icon
      v-if="icon"
      :name="icon"
      class="ml-1.5 w-4 h-4 pointer-events-none"
    ></Icon>
  </span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string
  href?: string
  icon?: string
  shiny?: boolean
  onlyText?: boolean
}>()
</script>

<style>

</style>
