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
    "shadcn-nuxt"
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
    fallback: "light"
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui"
  },
  ssr: false
})
