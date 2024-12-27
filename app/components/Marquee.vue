<template>
  <div
    class="group flex overflow-hidden p-2 gap-4"
    :class="{
      'flex-row': !props.vertical,
      'flex-col': props.vertical
    }"
  >
    <div
      v-for="(_, i) in props.repeat"
      :key="i"
      class="flex shrink-0 justify-around gap-4"
      :class="{
        'animate-marquee flex-row': !props.vertical,
        'animate-marquee-vertical flex-col': props.vertical,
        'group-hover:[animation-play-state:paused]': props.pauseOnHover,
        '[animation-direction:reverse]': props.reverse
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  reverse?: boolean
  pauseOnHover?: boolean
  vertical?: boolean
  repeat?: number
}>(), {
  pauseOnHover: false,
  vertical: false,
  repeat: 4
})
</script>

<style>

</style>
