// https://v3.nuxtjs.org/api/configuration/nuxt.config
// https://vuetifyjs.com/en/getting-started/installation/#manual-setup
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		(_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
		'@pinia/nuxt',
		'tailwindcss'
	],
	pinia: {
		autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
	},
	css: ['vuetify/lib/styles/main.sass', '~/assets/css/main.css'],
	build: {
		transpile: ['vuetify'],
	},
	vite: {
		define: {
			'process.env.DEBUG': false,
		},
		vue: {
      template: {
        transformAssetUrls,
      },
    },
	},
	postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
	runtimeConfig: {
		public: {
			baseUrl: 'https://senditskatepark.com/',
		},
	},
});
