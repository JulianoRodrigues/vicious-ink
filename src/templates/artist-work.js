import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import remcalc from 'remcalc'
import { Image } from '../styles/base'

import Layout from 'layouts/layout'
import Nav from 'components/header/navigationBar'
import Main from 'components/main/index'
import Footer from 'components/footer/index'

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
    display: flex;
    justify-content: center;
    & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export default ({ data: { allContentfulArtist } }) => {
    const { tattoos, path } = allContentfulArtist.edges[0].node;
    return (
        <Layout>
            <Helmet title={path.replace(/[^a-zA-Z0-9]/g, "")}/>
            <Nav/>
            <Main>
                <Section className="mw9 center">
                    <div className="cf ph2-ns">
                        <div className="fl w-100">
                            <div className="w-100">
                                <TattooGrid>
                                    {tattoos && tattoos.map((tattoo) => (
                                        <Tattoos key={tattoo.id}>
                                            <Image 
                                                alt={tattoo.title}
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
                        title
                        fixed(width: 300, height: 300) {
                            ...GatsbyContentfulFixed
                        }
                    }
                }
            }
        }
    }
`
