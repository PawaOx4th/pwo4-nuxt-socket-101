export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'pw04-nuxt-socket-101',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  env: {
    socketServer: process.env.SOCKET || 'http://localhost:4000',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // {
    //   src: '~/plugins/socket-io.js',
    //   mode: 'client',
    // },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    // https://www.npmjs.com/package/nuxt-socket-io
    'nuxt-socket-io',

    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  // dotenv: [
  //   /* module options */
  //   { path: '@/.env' },
  // ],

  io: {
    // module options
    sockets: [
      {
        default: true,
        url: "http://www.pwo4.online",
      },
    ],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
