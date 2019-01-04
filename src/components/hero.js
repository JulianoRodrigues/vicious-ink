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
                fileName: { in: ["HeroImageRocha.jpg", "HeroImageRocha2.jpg"] }
            }
        ) {
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

const Hero = () => (
    <StaticQuery 
        query={HERO_IMAGE}
        render={data => {
            return (
                <Wrapper>
                    <Img
                        fluid={
                            data.allImage.edges[0].node.image.childImageSharp
                                .fluid
                        }
                    />
                </Wrapper>
            )
        }}
    />
)

export default Hero
