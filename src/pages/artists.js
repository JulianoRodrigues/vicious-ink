import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from 'layouts/layout'
import Nav from 'components/navbar'
import Main from 'components/main'
import Footer from 'components/footer'

const Section = styled.section`
    padding: 0px 24px 50px;
`

const ArtistImage = styled(Img)`
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    &:hover {
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
    }
`

const Artists = ({ data: { vicious, allImage } }) => {
    return (
        <Layout>
            <Helmet title={'Artists - Vicious Ink'} />
            <Nav />
            <Main>
                <Section className="mw9 center">
                    <div className="cf ph2-ns">
                        <div className="fl w-100 l w-100 w-50-s w-25-l">
                            <div className="w-100">
                                {allImage &&
                                    allImage.edges.map(
                                        ({ node: { image } }) => (
                                            <ArtistImage
                                                fluid={
                                                    image.childImageSharp.fluid
                                                }
                                                key="cenas"
                                            />
                                        )
                                    )}
                            </div>
                        </div>
                    </div>
                </Section>
            </Main>
            <Footer />
        </Layout>
    )
}

export default Artists

export const ALL_ARTISTS = graphql`
    query {
        vicious {
            artists {
                id
                name
                bio
                styles
            }
        }
        allImage(filter: { fileName: { eq: "LuisRocha.jpg" } }) {
            edges {
                node {
                    fileName
                    id
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
