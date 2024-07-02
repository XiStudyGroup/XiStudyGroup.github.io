import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    math: true
  },
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
  }, 
  lang: 'zh-CN',
  title: "XiStudyGroup",
  description: "汐学组主页，欢迎你来。",
  themeConfig: {
    logo: {
      src: '/logo.svg',
      alt: 'Logo: XiStudyGroup',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于我们', link: '/关于我们' },
      { text: '学习资料', link: '/学习资料' }
    ],

    sidebar: {
      '/学习资料/':[{
        text: '学习资料',
        link: '/学习资料/',
        collapsed: true,
        items: [
          { text: '计算机科学与人工智能的数学基础上复习大纲', link: '/学习资料/计算机科学与人工智能的数学基础上复习大纲' },
          { text: 'C++程序设计-绩点与寄点', link: '/学习资料/C++程序设计-绩点与寄点' },
          { text: '认知心理学实验指南', link: '/学习资料/认知心理学实验指南' },
        ]
      }],
      '/关于我们/':[{
        text: '关于我们',
        link: '/关于我们/',
        collapsed: true,
      }],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XiStudyGroup/XiStudyGroup.github.io' }
    ]
  }
})
