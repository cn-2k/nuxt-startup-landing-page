<template>
  <div
    class="rising-stars absolute inset-0 overflow-hidden w-screen h-[45vh] bg-gradient-to-b from-20% to-80%"
  >
    <div
      class="rising-stars__small animate-risingstar [animation-duration:333s] w-px h-px bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-px after:h-px after:bg-transparent"
      :style="`box-shadow: ${smallStars.join(',')}`"
    />
    <div
      class="rising-stars__medium animate-risingstar [animation-duration:666s] w-[2px] h-[2px] bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-[2px] after:h-[2px] after:bg-transparent"
      :style="`box-shadow: ${mediumStars.join(',')}`"
    />
    <div
      class="rising-stars__large animate-risingstar [animation-duration:999s] w-[3px] h-[3px] bg-transparent after:content-[''] after:absolute after:top-[2048px] after:w-[3px] after:h-[3px] after:bg-transparent"
      :style="`box-shadow: ${largeStars.join(',')}`"
    />
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{ size?: number; width?: number; height?: number }>(),
  {
    size: 1024,
    width: 3840,
    height: 3840
  }
)

const { size, width, height } = toRefs(props)

const random = (max: number) => Math.floor(Math.random() * max)

const smallStars = computed(() => {
  return Array.from({ length: size.value }, () => {
    return `${random(width.value)}px ${random(height.value)}px #FFF, ${random(
      width.value
    )}px ${random(height.value)}px #FFF`
  })
})

const mediumStars = Array.from({ length: size.value / 2 }, () => {
  return `${random(width.value)}px ${random(height.value)}px #FFF, ${random(
    width.value
  )}px ${random(height.value)}px #FFF`
})

const largeStars = Array.from({ length: size.value / 4 }, () => {
  return `${random(width.value)}px ${random(height.value)}px #FFF, ${random(
    width.value
  )}px ${random(height.value)}px #FFF`
})
</script>

<style scoped></style>
