// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Marcell Lanczos',
  siteUrl: 'https://www.marcell-lanczos.com/',
  siteDescription: 'I am a freelance web-developer working with vue.js, wordpress, shopify and other modern technologies. Hire me for your awesome project!',
  plugins: [
    {
      use: 'gridsome-plugin-modal'
    },
    {
      use: 'klaro-gridsome',
      options: {
        acceptAll: true,
        privacyPolicy: '/legal',
        cookieName: 'consent',
        translations: {
          en: {
            consentModal: {
              description: 'Here you can see and customize the information that we collect about you.',
            },
            googleAnalytics: {
              description: 'Website analytics powered by Google Analytics, allowing us to see how visitors use our website.'
            },
            purposes: {
              analytics: 'Analytics'
            },
          }
        },
        apps: [
          {
            name: 'googleAnalytics',
            default: false,
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
              '_ga',
              '_gcl_au',
              '_gid',
              '_gat'
            ],
            required: false,
            optOut: true,
            onlyOnce: false
          }
        ]
      }
    }
  ]
}
