import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'

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

export default class Hero extends React.Component {
  render() {
    return (
        <StaticQuery 
            query={HERO_IMAGE}
            render={data => {
                return (
                    <Wrapper>
                        <Carousel 
                            autoplay={true}
                            autoplayInterval={4000}
                            disableKeyboardControls={true}>

                            <Img
                                fluid={
                                    data.allImage.edges[0].node.image.childImageSharp.fluid
                                }
                            />
                            <Img
                                fluid={
                                    data.allImage.edges[1].node.image.childImageSharp.fluid
                                }
                            />

                        </Carousel>
                    </Wrapper>
                )
            }}
        />
    );
  }
}

