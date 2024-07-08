<template>
  <div class="relative shadow h-full border dark:border-gray-800 rounded-lg p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-purple-500 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[60px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-purple-400 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[50px] overflow-hidden">
    <slot></slot>
  </div>
</template>
