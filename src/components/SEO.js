import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export const SEO = ({ title, description, siteLanguage }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    defaultDescription,
                    defaultLanguage,
                    author
                }
            }
        }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription,
                language: siteLanguage || defaultLanguage,
                author: author
            }

            return (
                <>
                    <Helmet title={seo.title}>
                        <html lang={seo.language} />
                        <meta name="description" content={seo.description} />
                        {seo.title && (
                            <meta property="og:title" content={seo.title} />
                        )}
                        {seo.description && (
                            <meta
                                property="og:description"
                                content={seo.description}
                            />
                        )}
                    </Helmet>
                </>
            )
        }}
    />
)

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    siteLanguage: PropTypes.string,
    author: PropTypes.string
}

SEO.defaultProps = {
    title: null,
    description: null,
    siteLanguage: null,
    author: null
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                defaultLanguage: siteLanguage
                author
            }
        }
    }
`
export default SEO
