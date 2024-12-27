<script setup lang="ts">
import clsx from "clsx"

interface DotPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  className?: string
  [key: string]: any
}

const props = defineProps<DotPatternProps>()

// Função para gerar um ID único
function generateUniqueId() {
  return `pattern-${Math.random().toString(36).substr(2, 9)}`
}

const patternId = generateUniqueId()
</script>

<template>
  <svg
    aria-hidden="true"
    :class="clsx(
      'pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80',
      props.className
    )"
    v-bind="props"
  >
    <defs>
      <pattern
        :id="patternId"
        :width="props.width || 16"
        :height="props.height || 16"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
        :x="props.x || 0"
        :y="props.y || 0"
      >
        <circle
          id="pattern-circle"
          :cx="props.cx || 1"
          :cy="props.cy || 1"
          :r="props.cr || 1"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      stroke-width="0"
      :fill="`url(#${patternId})`"
    />
  </svg>
</template>
