const config = require('./config/site')
require("dotenv").config()

module.exports = {
    siteMetadata: {
        ...config
    },
    plugins: [
        {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
                googleAnalytics: {
                    trackingId: process.env.GOOGLE_ANALYTICS_ID,
                    cookieName: 'gatsby-gdpr-google-analytics',
                    allowAdFeatures: false
                },
                environments: ['production', 'development']
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_API_TOKEN
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/config`
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.title,
                short_name: config.shortName,
                description: config.description,
                start_url: config.pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: 'standalone',
                icon: config.favicon
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-transformer-json',
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        'gatsby-plugin-styled-components'
    ]
}
