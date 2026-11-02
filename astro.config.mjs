// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
      plugins: [starlightThemeRapide()],
			title: 'Padawans',
      locales: {
        root: {
          label: 'Poruguês (Brasil)',
          lang: 'pt-BR',
        },
      },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/IFRS-Campus-Restinga/padawans' }],
			sidebar: [
				{
					label: 'Introdução',
					items: ['introducao'],
				},
        {
          label: 'Começando',
          items: [{ autogenerate: { directory: 'comecando' } }],
        },
			],
		}),
	],
});
