<template>
  <transition name="fade">
    <Button
      v-show="showTopBtn"
      v-slot="{ iconSizeClasses }"
      icon-only
      variant="primary"
      pill
      class="fixed bottom-8 right-10 shadow-md z-50"
      aria-label="Toggle color mode"
      @click="goToTop"
    >
      <Icon
        name="i-material-symbols-arrow-upward-rounded"
        :class="[iconSizeClasses]"
        aria-hidden="true"
      />
    </Button>
  </transition>
</template>

<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core"

const showTopBtn = ref(false)
const scrollThreshold = 500

const goToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}

const handleScroll = useDebounceFn(() => {
  showTopBtn.value = window.scrollY > scrollThreshold
}, 200)

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
