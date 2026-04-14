import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的博客",
  description: "记录技术成长，分享业务实战心得",
  base: '/', // 部署到 GitHub Pages 的用户名.github.io 时使用 /
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '实战项目', link: '/projects/' },
      { text: '技术沉淀', link: '/learnings/' },
      { text: '关于我', link: '/about' }
    ],

    sidebar: {
      '/projects/': [
        {
          text: '企业级业务实战',
          items: [
            { text: '项目概览', link: '/projects/' },
            { text: '高并发电商系统重构', link: '/projects/ecommerce' },
            { text: '权限管理中间件设计', link: '/projects/auth' }
          ]
        }
      ],
      '/learnings/': [
        {
          text: '后端核心技术',
          items: [
            { text: '总结', link: '/learnings/' },
            { text: 'MySQL深度优化记录', link: '/learnings/mysql' },
            { text: 'Redis缓存一致性方案', link: '/learnings/redis' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的GitHub用户名' }
    ],

    footer: {
      message: 'Focus on Backend Engineering & System Architecture.',
      copyright: 'Copyright © 2026-present'
    }
  }
})