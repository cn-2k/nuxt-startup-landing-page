<template>
  <div class="py-24 sm:py-32">
    <div
      :class="{
        'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center': !props.column,
        'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-14 flex flex-col': props.column
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  column?: boolean
}>()
</script>

<style>

</style>
