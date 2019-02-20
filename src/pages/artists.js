import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import remcalc from 'remcalc'
import { Image } from '../styles/base'

import Layout from 'layouts/layout'
import Nav from 'components/navbar'
import Main from 'components/main'
import Footer from 'components/footer'

const Section = styled.section`
    padding: 0px 24px 50px;
`

const ArtistGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(24,1fr);
    grid-row-gap: ${remcalc(125)};
`

const ArtistCard = styled.article`
    grid-column: 3 / span 20;
    display: flex;
    margin: 0;
`

const ArtistInfo = styled.div`
    display: grid;
    flex-direction: column;
`

const Artists = ({ data: { allContentfulArtist } }) => {
    return (
        <Layout>
            <Helmet title={'Artists - Vicious Ink'} />
            <Nav />
            <Main>
                <Section className="mw9 center">
                    <div className="cf ph2-ns">                        
                        <div className="fl w-100">
                            <div className="w-100">
                                <ArtistGrid>
                                    {allContentfulArtist &&
                                        allContentfulArtist.edges.map(({ node }) => (
                                            <ArtistCard key={node.id}>
                                                <Image
                                                    alt={node.name}  
                                                    fixed={
                                                        node.photo.fixed
                                                    }
                                                />
                                                <ArtistInfo className="ml4 w-60">
                                                    <h2 className="f3 fw3 white lh-copy">{node.name}</h2>
                                                    <p className="mt2 mb2 mid-gray">{node.childContentfulArtistBioTextNode.bio}</p>
                                                    <p className="mt4 white bold">Styles: <span className="gray">{node.childContentfulArtistStylesTextNode.styles}</span></p>
                                                </ArtistInfo>
                                            </ArtistCard>
                                        )
                                    )}
                                </ArtistGrid>
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
                        fixed (width: 300, height: 300) {
                            ...GatsbyContentfulFixed
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
