import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.section`
    position: relative;
    min-height: 300px;
`
const BgImg = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;
    & > img {
        object-fit: cover !important; // or whatever
        object-position: 0% 0% !important; // or whatever
        font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
    }
`

const TextContainer = styled.div`
    box-sizing: border-box;
    max-width: 768px;
    position: absolute;
    bottom: 6rem;
    right: 6rem;
`

// eslint-disable-next-line react/prop-types
export const Welcome = () => (
    <StaticQuery
        query={graphql`
            query {
                bannerImage: file(relativePath: { eq: "banner.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <Wrapper>
                    <BgImg fluid={data.bannerImage.childImageSharp.fluid} />
                    <TextContainer>CENAS</TextContainer>
                </Wrapper>
            )
        }}
    />
)

export default Welcome
