const config = require('./data/siteConfig')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    name: config.name,
    surname: config.surname,
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    instagramUsername: config.instagramUsername,
    twitterUsername: config.twitterUsername,
    copyright: config.copyright,
    fonts: config.fonts,
    languages: config.languages
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
             options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tonifi',
        short_name: 'tonifi',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/pdfs`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: config.languages.defaultLangKey,
        prefixDefault: false, // No locale prefix for default locale URLs
        useLangKeyLayout: false
      }
    }
  ]
}
