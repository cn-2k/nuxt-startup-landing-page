<template>
  <figure
    class="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  >
    <div class="flex flex-row items-center gap-2">
      <img
        class="rounded-full"
        width="32"
        height="32"
        alt=""
        :src="props.img"
      />
      <div class="flex flex-col">
        <h3 class="text-sm font-medium dark:text-white">
          {{ props.name }}
        </h3>
        <p class="text-xs font-medium dark:text-white/40">
          {{ props.username }}
        </p>
      </div>
    </div>
    <blockquote class="mt-2 text-sm">
      {{ props.body }}
    </blockquote>
  </figure>
</template>

<script lang="ts" setup>
const props = defineProps<{
  img: string
  name: string
  username: string
  body: string
}>()
</script>
