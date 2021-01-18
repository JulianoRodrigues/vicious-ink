const config = require('./config/site')
require("dotenv").config()

module.exports = {
    siteMetadata: {
        ...config
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-4GSGKB4KQ5",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: true,
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Defers execution of google analytics script after page load
                defer: false,
            },
        },
        {
            resolve: `gatsby-plugin-gdpr-cookies`,
            options: {
                googleAnalytics: {
                    trackingId: "G-4GSGKB4KQ5",
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
