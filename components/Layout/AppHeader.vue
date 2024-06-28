<template>
  <header class="bg-white dark:bg-gray-900/80 backdrop-blur transition-colors border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <a
          href="/"
          class="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5"
          aria-label="Nuxt UI Pro"
          aria-current="page"
        >
          Nuxt UI Pro
          <span class="inline-flex transition-colors items-center font-medium rounded-md text-xs px-2 py-1 bg-cyan-50 dark:bg-cyan-400 dark:bg-opacity-10 text-cyan-500 dark:text-cyan-400 ring-1 ring-inset ring-cyan-500 dark:ring-cyan-400 ring-opacity-25 dark:ring-opacity-25 mb-0.5">
            SaaS
          </span>
        </a>
      </div>

      <ul class="items-center gap-x-8 hidden lg:flex">
        <li class="relative">
          <a
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-cyan-600"
            href="/docs"
          >
            Docs
          </a>
        </li>
        <li class="relative">
          <a
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-cyan-600"
            href="/pricing"
          >
            Pricing
          </a>
        </li>
        <li class="relative">
          <a
            class="text-sm/6 font-semibold flex items-center gap-1 hover:text-cyan-600"
            href="/blog"
          >
            Blog
          </a>
        </li>
      </ul>

      <div class="flex items-center justify-end lg:flex-1 gap-2">
        <a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400 inline-flex items-center"
          href="/login"
        >
          <span class="">Sign in</span>
        </a>
        <a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400 items-center hidden lg:flex"
          href="/signup"
        >
          <span class="">Sign up</span>
          <Icon
            name="i-heroicons-arrow-right"
            class="flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          />
        </a>
        <DarkModeButton />
        <button
          type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400 inline-flex items-center lg:hidden"
          aria-label="Open Menu"
        >
          <Icon
            name="i-heroicons-bars-3-20-solid"
            class="flex-shrink-0 h-5 w-5"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
</script>
