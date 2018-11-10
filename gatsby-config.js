const config = require('./data/siteConfig')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    name: config.name,
    surname: config.surname,
    title: config.siteTitle,
    copyright: config.copyright
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png'
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [
          `${__dirname}/src/styles`,
          `${__dirname}/src/components`,
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Playfair Display',
            variants: ['400', '700'],
            subset: 'latin'
          },
          {
            family: 'Source Sans Pro',
            variants: ['300', '400', '600'],
            subset: 'latin'
          }
        ]
      }
    }
  ],
}
