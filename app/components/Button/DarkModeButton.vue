<template>
  <Button
    v-slot="{ iconSizeClasses }"
    icon-only
    variant="secondary"
    pill
    aria-label="Toggle color mode"
    @click="toggleColorMode"
  >
    <Icon
      v-if="colorMode.value === 'light'"
      name="i-heroicons-moon-16-solid"
      :class="[iconSizeClasses]"
      aria-hidden="true"
    />
    <Icon
      v-if="colorMode.value === 'dark'"
      name="i-heroicons-sun-16-solid"
      :class="[iconSizeClasses]"
      aria-hidden="true"
    />
  </Button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  if (colorMode.value === "light") {
    setColorMode("dark")
  } else {
    setColorMode("light")
  }
}

const setColorMode = (mode: "light" | "dark") => {
  colorMode.value = mode
  colorMode.preference = mode
}
</script>
