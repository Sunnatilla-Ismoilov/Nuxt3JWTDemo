export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  nitro: {
    plugins: ["~/server/db/index.ts"], // Adjusted to point to JavaScript file
  },
  // modules: ["@nuxtjs/axios", "@nuxtjs/auth", "@nuxtjs/pwa"],
  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI, // Provide default value or handle if not defined
  },
});
