<template>
  <footer class="text-gray-500 border-t border-gray-200 dark:border-gray-800 px-4 py-5 mx-auto">
    <div class="max-w-lg sm:mx-auto sm:text-center">
      <Icon
        name="i-mdi-nuxt"
        class="w-10 h-10 text-purple-400"
      />
      <p class="leading-relaxed mt-2 text-[15px]">
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
    <ul class="items-center text-gray-700 dark:text-gray-300/90 justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
      <li
        v-for="item in footerNavs"
        :key="item.name"
        class="hover:text-gray-500 dark:hover:text-gray-100"
      >
        <a href="#">
          {{ item.name }}
        </a>
      </li>
    </ul>
    <div class="mt-8 items-center justify-between sm:flex">
      <div class="mt-4 sm:mt-0 text-sm">
        Copyright &copy; 2024. All rights reserved.
      </div>
      <div class="mt-6 sm:mt-0">
        <ul class="flex items-center space-x-4">
          <li class="w-7 h-7 rounded-full flex items-center justify-center">
            <a
              href="https://github.com/cn-2k/nuxt-startup-landing-page"
              target="_blank"
            >
              <Icon
                name="i-mdi-github"
                class="w-7 h-7 text-white"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerNavs = [
  {
    href: "javascript:void()",
    name: "About"
  },
  {
    href: "javascript:void()",
    name: "Blog"
  },
  {
    href: "javascript:void()",
    name: "Team"
  },
  {
    href: "javascript:void()",
    name: "Careers"
  },

  {
    href: "javascript:void()",
    name: "Suport"
  }
]
</script>
