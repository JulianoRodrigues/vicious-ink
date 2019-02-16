import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
    position: relative;
`

const Hero = () => (
    <StaticQuery
        query={HERO_IMAGE}
        render={data => {
            const heroImage = data.allContentfulImage.edges.map(
                ({ node: { photo } }) => photo
            )
            return (
                <Wrapper>
                    <Img fluid={heroImage[0].fluid} />
                </Wrapper>
            )
        }}
    />
)

const HERO_IMAGE = graphql`
    query HeroImage {
        allContentfulImage (filter: { name: { eq: "Hero" } }){
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

export default Hero
