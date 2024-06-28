<template>
  <Button
    variant="secondary"
    size="icon"
    aria-label="Toggle color mode"
    class="rounded-full"
    @click="toggleColorMode"
  >
    <Icon
      v-if="colorMode.value === 'light'"
      name="i-heroicons-moon-16-solid"
      class="flex-shrink-0 h-5 w-5"
      aria-hidden="true"
    />
    <Icon
      v-if="colorMode.value === 'dark'"
      name="i-heroicons-sun-16-solid"
      class="flex-shrink-0 h-5 w-5"
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
