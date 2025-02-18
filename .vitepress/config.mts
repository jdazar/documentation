import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mi Documentación",
  description: "Documentación de múltiples tecnologías que manejo",
  base: "/documentation/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: {
      "/javascript/": [
        {
          text: 'Examples',
          items: [
            { text: 'Introducción', link: '/javascript/index.md' },
            { text: 'Tipos de Datos', link: '/javascript/data-types.md' },
            { text: 'Operadores', link: '/javascript/operators.md' },
            { text: 'Condicionales y Bucles', link: '/javascript/loops-conditionals.md' }
          ]
        }
      ],
      "/": [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jdazar' },
      { icon: 'linkedin', link: 'https://twitter.com/jdazar' }
    ],

    search: {
      provider: 'local'
    }
  }
})
