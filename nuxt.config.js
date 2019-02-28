const pkg = require('./package')
const resolve = require('path').resolve

const title = 'tchret - Thomas Chrétien'
const description = "Thomas Chrétien (tchret) is a french coding designer with a natural attraction for interfaces, interactions, branding & typography. "

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3E99ED', height: '1px' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/data', {src: '~/plugins/carousel', ssr: false}],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', resolve(__dirname, 'assets/fonts.scss')],
    ['nuxt-sass-resources-loader', resolve(__dirname, 'assets/variables.scss')]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    extend(config, ctx) {
      config.node = {
        fs: "empty"
      }

      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
    }
  }
}
