import React from 'react'
import Headroom from 'react-headroom'
import Img from 'gatsby-image'
import { StaticQuery, Link, graphql } from 'gatsby'

/** 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faInstagram)
*/

import styled from 'styled-components'

const LogoImage = styled(Img)`
    width: 200px;
    margin: 0 auto;
`

const NavBar = () => (
    <StaticQuery
        query={LOGO_IMAGE}
        render={data => {
            return (
                <Headroom disableInlineStyles>
                    <header>
                        <nav className="pa3 pa3-ns">
                            <Link to="/home">
                                <span className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns">
                                    <LogoImage
                                        fluid={
                                            data.allImage.edges[0].node.image
                                                .childImageSharp.fluid
                                        }
                                    />
                                </span>
                            </Link>
                            <div className="tc pb3">
                                <Link to="/home">
                                    <span className="link dim gray f6 f5-ns dib mr3">
                                        Home
                                    </span>
                                </Link>
                                <Link to="/artists">
                                    <span className="link dim gray f6 f5-ns dib mr3">
                                        Artists
                                    </span>
                                </Link>
                                <Link to="/test1">
                                    <span className="link dim gray f6 f5-ns dib mr3">
                                        Test1
                                    </span>
                                </Link>
                                <Link to="/contacts">
                                    <span className="link dim gray f6 f5-ns dib mr3">
                                        Contacts
                                    </span>
                                </Link>
                            </div>
                        </nav>
                    </header>
                </Headroom>
            )
        }}
    />
)

const LOGO_IMAGE = graphql`
    query LogoImage {
        allImage(filter: { fileName: { eq: "image.png" } }) {
            edges {
                node {
                    fileName
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`

export default NavBar
