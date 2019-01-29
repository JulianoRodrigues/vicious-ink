import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
    position: relative;
`

const HERO_IMAGE = graphql`
    query HeroImage {
        allImage(
            filter: {
                fileName: { eq: "HeroImageRocha.jpg" }
            }
        ) {
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

const Hero = () => (
    <StaticQuery 
        query={HERO_IMAGE}
        render={data => {
             const heroImage = data.allImage.edges.map(
                ({ node: { image } }) => image
            )
            return (
                <Wrapper>
                    <Img
                        fluid={
                            heroImage[0].childImageSharp.fluid
                        }
                    />
                </Wrapper>
            )
        }}
    />
)

export default Hero
