import React from 'react'
import Helmet from 'react-helmet'
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
    grid-template-columns: 100%;
    grid-row-gap: 8rem;

    @media (min-width: 48em) {
        grid-template-columns: repeat(12, 1fr);
        grid-row-gap: ${remcalc(125)};
        grid-column-gap: 2rem;
    }

    @media (min-width: 90em) {
        grid-template-columns: repeat(24, 1fr);
    }
`

const ArtistCard = styled.article`
    display: flex;
    margin: 0;

    @media (min-width: 48em) {
        grid-column: 2 / span 10;
    }

    @media (max-width: 48em) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 90em) {
        grid-column: 3 / span 20;
    }
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
                                        allContentfulArtist.edges.map(
                                            ({ node }) => (
                                                <ArtistCard key={node.id}>
                                                    <Image
                                                        alt={node.name}
                                                        fixed={node.photo.fixed}
                                                    />
                                                    <ArtistInfo className="ma3-l ma3-m w-60-l w-60-m">
                                                        <h2 className="f3 fw3 white lh-copy">
                                                            {node.name}
                                                        </h2>
                                                        <p className="mt2 mb2 mid-gray">
                                                            {
                                                                node
                                                                    .childContentfulArtistBioTextNode
                                                                    .bio
                                                            }
                                                        </p>
                                                        <p className="mt2 white bold">
                                                            Styles:{' '}
                                                            <span className="gray">
                                                                {
                                                                    node
                                                                        .childContentfulArtistStylesTextNode
                                                                        .styles
                                                                }
                                                            </span>
                                                        </p>
                                                        <Link to={node.path}>
                                                            <span className="link dim white f6 f5-ns dib mr3">
                                                                See tattoos
                                                            </span>
                                                        </Link>
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
                        fixed(width: 300, height: 300) {
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
