const config = require('./config/site')

module.exports = {
    siteMetadata: {
        ...config
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-source-graphql',
            options: {
                fieldName: 'vicious',
                url:
                    'https://api-euwest.graphcms.com/v1/cjoefozni7i7i01ght4oymxzy/master',
                typeName: 'ViciousCMS'
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
        'gatsby-plugin-sass',
        'gatsby-plugin-offline'
    ],
}
