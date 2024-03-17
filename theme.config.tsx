import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>AIPROP</span>,
  project: {
    link: 'https://aiprop.com.co/',
  },
  chat: {
    link: 'https://api.whatsapp.com/send?phone=573042536416&text=Quiero%20evolucionar%20mi%20empresa%20con%20Inteligencia%20Artificial%20%F0%9F%A6%BE',
    icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544a8.127 8.127 0 0 1-4.337-1.222L.01 18.313l1.352-4.968A8.172 8.172 0 0 1 3.834 9.67c4.748 0 8.051 4.04 8.232 8.974zm-6.066-5.26a.507.507 0 0 0-.353.14l-.706.717a.505.505 0 0 0-.14.353c0 .137.056.267.14.353l.706.717c.196.198.512.198.707 0l.707-.717a.505.505 0 0 0 .14-.353.507.507 0 0 0-.14-.353l-.707-.717a.507.507 0 0 0-.354-.14zm3.534 0a.507.507 0 0 0-.354.14l-.707.717a.505.505 0 0 0-.14.353c0 .137.056.267.14.353l.707.717c.196.198.512.198.707 0l.707-.717a.505.505 0 0 0 .14-.353.507.507 0 0 0-.14-.353l-.707-.717a.507.507 0 0 0-.353-.14z" fill="currentColor"/>
        </svg>
      ),
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
