<template>
  <header class="bg-white/60 dark:bg-gray-900/60 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-[99999]">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16 lg:h-20">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <slot name="left">
          <NuxtLink
            :to="to"
            :aria-label="title"
            class="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
          >
            <slot name="logo">
              {{ title || 'Nuxt SaaS LP' }}
            </slot>
          </NuxtLink>
        </slot>
      </div>

      <slot name="center">
        <ul class="items-center gap-x-10 hidden lg:flex border border-gray-300/70 shadow-sm dark:border-gray-700/60 dark:border-gray-400 dark:bg-gray-600/10 px-6 py-1.5 rounded-full">
          <li
            v-for="item in props.links"
            :key="item.to"
            class="relative"
          >
            <a
              class="text-sm/6 font-semibold flex items-center text-gray-700 dark:hover:text-purple-600 gap-1 hover:text-purple-600 transition-colors"
              :class="{
                'text-purple-500 dark:text-purple-500': item.active,
                'text-gray-700 dark:text-white': !item.active
              }"
              :href="item.to"
            >
              {{ item.label }}

            </a>
          </li>
        </ul>
      </slot>

      <div class="flex items-center justify-end lg:flex-1 gap-2">
        <div class="items-center gap-3 hidden lg:flex">
          <slot
            name="right"
          />
        </div>
        <slot name="panel-button">
          <Button
            icon-only
            variant="secondary"
            class="lg:hidden"
            aria-label="Open Menu"
            @click="togglePanel"
          >
            <Icon
              v-if="!isPanelOpen"
              name="i-heroicons-bars-3-20-solid"
              class="flex-shrink-0 h-5 w-5"
              aria-hidden="true"
            />
            <Icon
              v-if="isPanelOpen"
              name="i-heroicons-x-mark"
              class="flex-shrink-0 h-5 w-5"
              aria-hidden="true"
            />
          </Button>
        </slot>
      </div>
    </div>
    <div
      v-if="isPanelOpen"
      class="flex flex-col justify-between py-4 gap-y-6 border-t border-gray-200 dark:border-gray-800 lg:hidden"
    >
      <div class="h-28 overflow-y-auto">
        <ul class="gap-y-5 flex flex-col rounded-full px-3">
          <li
            v-for="item in props.links"
            :key="item.to"
            class="relative"
          >
            <NuxtLink
              class="text-sm/6 font-semibold flex items-center gap-1 hover:text-purple-600 transition-colors"
              :to="item.to"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex gap-4 items-center border-t border-gray-200 dark:border-gray-800 pt-5 px-2">
        <slot name="right" />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
interface NavLinkProps {
  label: string
  to: string
  active: boolean
}

const props = withDefaults(defineProps<{
  to?: string
  title?: string
  links?: NavLinkProps[]
}>(), {
  to: "/",
  title: undefined
})

const isPanelOpen = ref<boolean>(false)

const togglePanel = () => {
  isPanelOpen.value = !isPanelOpen.value
}
</script>
