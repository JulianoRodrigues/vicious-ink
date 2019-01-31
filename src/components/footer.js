import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faInstagram)

const SOCIAL_MEDIA = graphql`
    query {
        site {
            siteMetadata {
                socialMedia {
                    url
                    name
                }
            }
        }
    }
`

const Footer = () => (
    <StaticQuery
        query={SOCIAL_MEDIA}
        render={data => {
            return (
                <footer className="ph3 ph5-ns tc">
                    <span className="link white dib h2 mr3">Follow us:</span>
                    <a
                        className="link white hover-silver dib h2 w2 mr3"
                        href={data.site.siteMetadata.socialMedia[0].url}
                        title={data.site.siteMetadata.socialMedia[0].name}
                    >
                        <FontAwesomeIcon
                            icon={['fab', 'facebook-f']}
                            size="lg"
                        />
                    </a>
                    <a
                        className="link white hover-silver dib h2 w2 mr3"
                        href={data.site.siteMetadata.socialMedia[0].url}
                        title={data.site.siteMetadata.socialMedia[0].name}
                    >
                        <FontAwesomeIcon
                            icon={['fab', 'instagram']}
                            size="lg"
                        />
                    </a>
                </footer>
            )
        }}
    />
)

export default Footer
