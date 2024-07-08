<template>
  <div>
    <!-- Pricing toggle -->
    <div class="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
      <div class="relative flex w-full p-1.5 bg-white shadow-md dark:bg-slate-800/40 rounded-full">
        <span
          class="absolute inset-0 m-1 pointer-events-none"
          aria-hidden="true"
        >
          <span
            class="absolute inset-0 w-1/2 bg-purple-600 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
            :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"
          ></span>
        </span>
        <button
          class="relative flex-1 text-sm font-semibold h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
          :class="isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'"
          :aria-pressed="isAnnual"
          @click="isAnnual = true"
        >
          Yearly <span
            :class="isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'"
          >-20%</span>
        </button>
        <button
          class="relative flex-1 text-sm font-semibold h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
          :class="isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'"
          :aria-pressed="isAnnual"
          @click="isAnnual = false"
        >
          Monthly
        </button>
      </div>
    </div>

    <div class="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
      <!-- Pricing tab 1 -->
      <PriceTab
        :yearly="isAnnual"
        plan-name="Essential"
        :price="{ yearly: 29, monthly: 35 }"
        plan-description="There are many variations available, but the majority have suffered."
        :features="[
          'Unlimited placeholder texts',
          'Consectetur adipiscing elit',
          'Excepteur sint occaecat cupidatat',
          'Officia deserunt mollit anim'
        ]"
      />

      <!-- Pricing tab 2 -->
      <PriceTab
        :yearly="isAnnual"
        popular
        plan-name="Perform"
        :price="{ yearly: 49, monthly: 55 }"
        plan-description="There are many variations available, but the majority have suffered."
        :features="[
          'Unlimited placeholder texts',
          'Consectetur adipiscing elit',
          'Excepteur sint occaecat cupidatat',
          'Officia deserunt mollit anim',
          'Predefined chunks as necessary'
        ]"
      />

      <!-- Pricing tab 3 -->
      <PriceTab
        :yearly="isAnnual"
        plan-name="Enterprise"
        :price="{ yearly: 79, monthly: 85 }"
        plan-description="There are many variations available, but the majority have suffered."
        :features="[
          'Unlimited placeholder texts',
          'Consectetur adipiscing elit',
          'Excepteur sint occaecat cupidatat',
          'Officia deserunt mollit anim',
          'Predefined chunks as necessary',
          'Free from repetition'
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import PriceTab from "./PriceTab.vue"

const isAnnual = ref<boolean>(true)
</script>
