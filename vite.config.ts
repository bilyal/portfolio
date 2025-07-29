import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
	base: '/portfolio/',
	build: {
		rollupOptions: {
			treeshake: false
		}
	},
	plugins: [
		vue(),
		vueDevTools(),
		VitePWA({
			registerType: 'autoUpdate',
			includeAssets: [
				'favicon.svg',
				'apple-touch-icon.png'
			],
			manifest: {
				name: 'Bilyal Abdulganiev | FS Web Developer',
				short_name: 'PfApp',
				description: 'My portfolio website',
				start_url: '/portfolio',
				display: 'standalone',
				theme_color: '#181818',
				background_color: '#ffffff',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable'
					}
				]
			},
			workbox: {
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'google-fonts',
							expiration: {
								maxEntries: 20,
								maxAgeSeconds: 60 * 60 * 24 * 365
							}
						}
					},
					{
						urlPattern: /^https:\/\/.*\.(css|js|woff2?|ttf|eot|svg)/,
						handler: 'CacheFirst'
					},
					{
						urlPattern: /^\/$/,
						handler: 'NetworkFirst'
					}
				]
			}
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		},
	},
})





