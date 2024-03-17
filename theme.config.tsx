import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
logo: <span>AIPROP</span>,
  project: {
    link: 'https://aiprop.com.co/',
    icon: <img src="web.png" alt="Project Icon" width="24" height="24" />,
  },
  chat: {
    link: 'https://api.whatsapp.com/send?phone=573042536416&text=Quiero%20evolucionar%20mi%20empresa%20con%20Inteligencia%20Artificial%20%F0%9F%A6%BE',
    icon: <img src="WHATSAPP.png" alt="Chat Icon" width="24" height="24" />,
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'AIProp Doc',
  },
};

export default config;
