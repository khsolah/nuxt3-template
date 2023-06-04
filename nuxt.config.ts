// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@vite-pwa/nuxt'],

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Movie App',
      short_name: 'MovieApp',
      theme_color: '#fff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
});
