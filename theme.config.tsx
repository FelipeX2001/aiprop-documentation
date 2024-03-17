import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
logo: <img src="http://aiprop.com.co/wp-content/uploads/2024/03/AIPROP-LOGO-NEGRO.png" alt="AIPROP Logo" width="160" height="50" />,
  project: {
    link: 'https://aiprop.com.co/',
    icon: <img src="http://aiprop.com.co/wp-content/uploads/2024/03/web.png" alt="Project Icon" width="24" height="24" />,
  },
  chat: {
    link: 'https://api.whatsapp.com/send?phone=573042536416&text=Quiero%20evolucionar%20mi%20empresa%20con%20Inteligencia%20Artificial%20%F0%9F%A6%BE',
    icon: <img src="http://aiprop.com.co/wp-content/uploads/2024/03/WHATSAPP.png" alt="Chat Icon" width="24" height="24" />,
  },
  docsRepositoryBase: 'https://admin.aiprop.com.co/',
  footer: {
    text: 'AIProp Documentation',
  },
};

export default config;
