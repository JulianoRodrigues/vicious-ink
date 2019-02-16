import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import remcalc from 'remcalc'
import theme from '../styles/theme'

import Layout from 'layouts/layout'
import Nav from 'components/navbar'
import Main from 'components/main'
import Footer from 'components/footer'

const Section = styled.section`
    padding: 0px 24px 50px;
`

const ArtistGrid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: ${remcalc(150)};
    @media only screen and (max-width: ${theme.responsive.large} ){
        grid-template-columns: repeat(24,1fr);
        grid-row-gap: ${remcalc(150)};
        grid-column-gap: ${remcalc(32)};
    }
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

const Artists = ({ data: { allContentfulArtist } }) => {
    return (
        <Layout>
            <Helmet title={'Artists - Vicious Ink'} />
            <Nav />
            <Main>
                <Section className="mw9 center">
                    <div className="cf ph2-ns">
                        <ArtistGrid>
                            <div>
                                cenas
                            </div>
                            <div>
                                cenas
                            </div>
                            <div>
                                cenas
                            </div>
                            <div>
                                cenas
                            </div>
                            <div>
                                cenas
                            </div>
                        </ArtistGrid>
                        <div className="fl w-100 l w-100 w-50-s w-25-l">
                            <div className="w-100">
                                {allContentfulArtist &&
                                    allContentfulArtist.edges.map(({ node }) => (
                                            <ArtistImage
                                                key={node.id}
                                                fluid={
                                                    node.photo.fluid
                                                }
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

export const ALL_ARTISTS = graphql`
    query Artists {
        allContentfulArtist {
            edges {
                node {
                    id
                    name
                    path
                    photo {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                    childContentfulArtistStylesTextNode {
                        styles
                    }
                    childContentfulArtistBioTextNode {
                        bio
                    }
                }
            }
        }
    }
`

export default Artists
