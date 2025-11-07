import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo:  <>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
            />
          </svg>
          <span style={{ marginLeft: '.4em', fontWeight: 800 }}> ЭИОС для обучения фреймворкам JS</span> 
        </>,
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let { title } = useConfig()
    if (title) {
      title += ' | ЭИОС для обучения фреймворкам JS'
    }
    else title = 'ЭИОС для обучения фреймворкам JS'
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        
      </>
    )
  },
  search: {
    placeholder: "Поиск по программе...",
    loading: "Поиск...",
    emptyResult: "Не найдено!",
    error: "Ошибка поиска!"
  },
  editLink: { 
    component: null
  },
  feedback: {
    content: null
  },
  nextThemes: {
    defaultTheme: 'light'
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
    autoCollapse: true
  },
  toc: {
    backToTop: true,
    title: "На этой странице:"
  },
  color : {
    lightness : {dark : 30 , light : 45 } , 
    hue : {light : 274 , dark : 279  } ,
    saturation : {light : 100 , dark : 100} ,
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{'Меликов Роман'}
        <br/>
        <a href="https://nextra.site" target="_blank">
          Nextra
        </a>
        .
      </span>
    )
  },
  gitTimestamp: null
}

export default config
