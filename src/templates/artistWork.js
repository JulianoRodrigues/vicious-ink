import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
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

const TattooGrid = styled.div`
    display: grid;
    grid-gap: ${remcalc(20)};
    grid-template-columns: repeat(auto-fill, minmax(${remcalc(300)}, 1fr));
    grid-auto-flow: dense;
`

const Tattoos = styled.div`
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default ({ data: { allContentfulArtist } }) => {
    const artist = allContentfulArtist.edges[0].node;
    return (
        <Layout>
            <Helmet title={allContentfulArtist.edges[0].node.name}/>
            <Nav/>
            <Main>
                <Section className="mw9 center">
                    <div className="cf ph2-ns">
                        <div className="fl w-100">
                            <div className="w-100">
                                <TattooGrid>
                                    {artist && artist.tattoos.map((tattoo) => (
                                        <Tattoos key={tattoo.id}>
                                            <Image
                                                fixed={tattoo.fixed}
                                            />
                                        </Tattoos>
                                    ))}
                                </TattooGrid>
                            </div>
                        </div>
                    </div>
                </Section>
            </Main>
            <Footer/>
        </Layout>
    )
}

export const ARTIST_WORK = graphql`
    query ArtistTattos ($artistName: String!){
        allContentfulArtist (filter: { name: { eq: $artistName } }){
            edges {
                node {
                    path
                    tattoos {
                        id
                        fixed(width: 300, height: 300) {
                            ...GatsbyContentfulFixed
                        }
                    }
                }
            }
        }
    }
`
