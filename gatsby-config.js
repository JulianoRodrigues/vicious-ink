const siteMeta = require('./site-config');

module.exports = {
    siteMetadata: {
        ... siteMeta
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-graphcms`,
            options: {
                endpoint: `https://api-euwest.graphcms.com/v1/cjoefozni7i7i01ght4oymxzy/master`,
                token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiNWRmMmY2ZWItYTEyZC00OWEwLTk4ZWQtZmM3MmZiM2NhZmQyIn0.v2E7zeD2UAiK0r-73HyNlJcsno9YN5Paoozp1T2GFOA`,
                query: `{
                    allArtists: artists {
                        id,
                        name,
                        specialized,
                        photo {
                            id
                        }
                    },
                    allTattoos: tattoos {
                        id,
                        photo {
                            id
                        }
                    },
                    allCategories: categories {
                        id,
                        name
                    },
                    allConventions: conventions {
                        id,
                        name,
                        description
                    },
                    allStores: stores {
                        id,
                        location,
                        photo {
                            id
                        }
                    }
                }`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Vicious Ink Tatto Shop',
                short_name: 'VIT shop',
                start_url: '/',
                background_color: '#000',
                theme_color: '#000',
                display: 'minimal-ui'
            }
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-offline`
    ]
}