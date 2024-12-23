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
  app: {
    head: {
      title: "Nuxt 3 Startup Landing Page",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-og-image",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/fonts",
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
  }
})
