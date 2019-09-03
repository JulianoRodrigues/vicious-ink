import React from 'react'
import Headroom from 'react-headroom'
import Img from 'gatsby-image'
import { StaticQuery, Link, graphql } from 'gatsby'

import styled from 'styled-components'

const LogoImage = styled(Img)`
    width: 200px;
    margin: 0 auto;
`

const NavBar = () => (
    <StaticQuery
        query={LOGO_IMAGE}
        render={data => {
            const logo = data.allContentfulImage.edges.map(
                ({ node: { photo } }) => photo
            )
            return (
                <Headroom disableInlineStyles>
                    <header>
                        <nav className="pa3 pa3-ns">
                            <Link to="/">
                                <span className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns">
                                    <LogoImage fluid={logo[0].fluid} />
                                </span>
                            </Link>
                            <div className="tc pb3">
                                <Link to="/">
                                    <span className="link dim white f6 f5-ns dib mr3">
                                        {`Estúdio`}
                                    </span>
                                </Link>
                                <Link to="/artists">
                                    <span className="link dim white f6 f5-ns dib mr3">
                                        {`Artistas`}
                                    </span>
                                </Link>
                                <Link to="/contacts">
                                    <span className="link dim white f6 f5-ns dib mr3">
                                        {`Contactos`}
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
        allContentfulImage(filter: { name: { eq: "Logo" } }) {
            edges {
                node {
                    name
                    photo {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

export default NavBar
