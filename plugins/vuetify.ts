// plugins/vuetify.js
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


export default defineNuxtPlugin((nuxtApp) => {
	const Vuetify = createVuetify({
		ssr: true,
		theme: {
			defaultTheme: 'baseTheme',
			themes: {
				baseTheme: {
					dark: false,
					colors: {
						primary: '#007DC5',
						secondary: '#009659',
						tertiary: '#ED1C24',
						quaternary: '#FFF200',
					},
				},
			},
		},
		components,
		directives,
	});

	nuxtApp.vueApp.use(Vuetify);
});
