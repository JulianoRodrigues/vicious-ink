const siteMeta = require('./site-config')

module.exports = {
    siteMetadata: {
        ...siteMeta,
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
                typeName: 'ViciousCMS',
                refetchInterval: 60,
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Vicious Ink Tatto Shop',
                short_name: 'VIT shop',
                start_url: '/',
                background_color: '#000',
                theme_color: '#000',
                display: 'minimal-ui',
            },
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
    ],
}
