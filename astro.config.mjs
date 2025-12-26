// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.herwingx.dev',
	integrations: [
		starlight({
			title: 'Herwingx Docs',
			description: 'Documentación personal de desarrollo - Frontend, Backend y DevOps',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: false,
			},
			// Configuración de idiomas - 'root' significa sin prefijo de URL
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
			},
			// Enlaces sociales
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/herwingx' },
			],
			// Personalización del tema
			customCss: ['./src/styles/custom.css'],
			// Configuración del sidebar
			sidebar: [
				{
					label: '🏠 Inicio',
					items: [
						{ label: 'Bienvenida', slug: '' },
						{ label: '📝 Panel Admin', link: '/admin/', attrs: { target: '_blank' } },
					],
				},
				{
					label: '🎨 Frontend',
					collapsed: false,
					autogenerate: { directory: 'frontend' },
				},
				{
					label: '⚙️ Backend',
					collapsed: false,
					autogenerate: { directory: 'backend' },
				},
				{
					label: '🚀 DevOps',
					collapsed: false,
					autogenerate: { directory: 'devops' },
				},
			],
			// Head personalizado para PWA y SEO
			head: [
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#1e40af',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: '/manifest.webmanifest',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-capable',
						content: 'yes',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'apple-mobile-web-app-status-bar-style',
						content: 'black-translucent',
					},
				},
			],
			// Componentes personalizados
			components: {
				// Podemos sobrescribir componentes más adelante
			},
		}),
	],
});
