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
    }
  ]
}
