import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icons/*.png"],
      manifest: {
        name: "Bíblia365 — Plano de Leitura em 1 Ano",
        short_name: "Bíblia365",
        description:
          "Acompanhe seu plano de leitura da Bíblia em 1 ano, com progresso, estatísticas e sincronização entre dispositivos.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait-primary",
        background_color: "#0f172a",
        theme_color: "#0d9488",
        lang: "pt-BR",
        icons: [
          { src: "icons/Biblia.72x72.png", sizes: "72x72", type: "image/png", purpose: "any" },
          { src: "icons/Biblia.96x96.png", sizes: "96x96", type: "image/png", purpose: "any" },
          { src: "icons/Biblia.144x144.png", sizes: "144x144", type: "image/png", purpose: "any" },
          { src: "icons/Biblia.192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
          { src: "icons/Biblia.192x192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
          { src: "icons/Biblia.256x256.png", sizes: "256x256", type: "image/png", purpose: "any" },
          { src: "icons/Biblia.512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
          { src: "icons/Biblia.512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
        ]
      },
      workbox: {
        // Precache do app shell; runtime caching cuida das imagens do header.
        globPatterns: ["**/*.{js,css,html,svg,woff2}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /\/img\/.*\.png$/,
            handler: "CacheFirst",
            options: {
              cacheName: "biblia365-header-images",
              expiration: { maxEntries: 40, maxAgeSeconds: 60 * 60 * 24 * 90 }
            }
          }
        ]
      },
      devOptions: { enabled: false }
    })
  ]
});
