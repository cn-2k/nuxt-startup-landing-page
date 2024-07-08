<script setup lang="ts">
import { computed, toRefs } from "vue"

type Variant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "black" | "link"

type Size = "sm" | "base" | "lg"

type Type = "button" | "submit" | "reset"

const props = withDefaults(defineProps<{
  variant?: Variant
  type?: Type
  size?: Size
  squared?: boolean
  pill?: boolean
  href?: string
  to?: string
  disabled?: boolean
  iconOnly?: boolean
  srText?: string | undefined
}>(), {
  variant: "primary",
  type: "button",
  size: "base",
  squared: false,
  pill: false,
  disabled: false,
  iconOnly: false,
  srText: undefined
})

const emit = defineEmits<{
  (e: "click", evt: MouseEvent): void
}>()

const { type, variant, size, squared, pill, href, iconOnly, srText } = props

const { disabled } = toRefs(props)

const baseClasses = [
  "inline-flex items-center text-center justify-center transition-colors font-medium select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
]

function variantClasses(variant: Variant) {
  return {
    "bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 text-white dark:hover:bg-purple-700": variant === "primary",
    "bg-gray-200/50 hover:bg-gray-300/70 dark:bg-purple-500/20 text-gray-700 dark:text-white dark:hover:bg-purple-500/50":
      variant === "secondary",
    "dark:text-white hover:underline dark:hover:text-gray-200 text-gray-700 hover:text-gray-500": variant === "link",
    "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500": variant === "success",
    "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500": variant === "danger",
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500": variant === "warning",
    "bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500": variant === "info",
    "bg-black text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-black dark:hover:bg-dark-eval-3":
      variant === "black"
  }
}

const classes = computed(() => [
  ...baseClasses,
  iconOnly
    ? {
        "py-2 px-2.5": size === "sm",
        "py-2.5 px-2.5": size === "base",
        "px-4 py-3.5": size === "lg"
      }
    : {
        "px-2.5 py-1.5 text-sm": size === "sm",
        "px-4 py-2 text-base": size === "base",
        "px-5 py-2 text-xl": size === "lg"
      },
  variantClasses(variant),
  {
    "rounded-md": !squared && !pill,
    "rounded-full": pill
  },
  {
    "pointer-events-none opacity-50": href && disabled.value
  }
])

const iconSizeClasses = [
  {
    "w-4 h-4": size === "sm",
    "w-5 h-5": size === "base",
    "w-7 h-7": size === "lg"
  }
]

function handleClick(e: MouseEvent) {
  if (disabled.value) {
    e.preventDefault()
    e.stopPropagation()
    return
  }
  emit("click", e)
}
</script>

<template>
  <router-link
    v-if="to"
    :to="!disabled ? to : ''"
    :class="classes"
    :aria-disabled="disabled.toString()"
  >
    <span
      v-if="srText"
      class="sr-only"
    >{{ srText }}</span>
    <slot :icon-size-classes="iconSizeClasses" />
  </router-link>
  <a
    v-else-if="href"
    :href="!disabled ? href : ''"
    :class="classes"
    :aria-disabled="disabled"
  >
    <span
      v-if="srText"
      class="sr-only"
    >{{ srText }}</span>
    <slot :icon-size-classes="iconSizeClasses" />
  </a>
  <button
    v-else
    :type="type"
    :class="classes"
    :disabled="disabled"
    @click="handleClick"
  >
    <span
      v-if="srText"
      class="sr-only"
    >{{ srText }}</span>
    <slot :icon-size-classes="iconSizeClasses" />
  </button>
</template>
