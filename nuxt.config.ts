import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-12-22',
	css: ['assets/css/main.css'],
	devtools: { enabled: true },
	// Keep Nuxt/Nitro server handlers isolated from the legacy Express server folder.
	modules: ['@pinia/nuxt', '@nuxt/eslint'],
	runtimeConfig: {
		public: {
			NUXT_MAIL_SERVER_API: process.env.NUXT_MAIL_SERVER_API,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
