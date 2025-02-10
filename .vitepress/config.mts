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
            { text: 'Prueba', link: '/markdown-examples' },
            { text: 'Prueba2', link: '/api-examples' }
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
