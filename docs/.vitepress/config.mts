import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My API Documentation',
  description: 'API Reference',
  base: '/ваш-репозиторий/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/' }
    ]
  }
})
