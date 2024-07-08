// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/base.css"],
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/fonts",
    "nuxt-og-image",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt"
  ],
  eslint: {
    config: {
      stylistic: {
        quotes: "double",
        commaDangle: "never",
        braceStyle: "1tbs"
      }
    }
  },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
    disableTransition: true
  },
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          "pop-bottom": {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0
            }
          }
        }
      }
    }
  },
  ssr: false
})
