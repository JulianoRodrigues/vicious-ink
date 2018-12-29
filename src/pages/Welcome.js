import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Main from '../components/main'
import theme from '../styles/theme'
import { Links } from '../styles/link'
import StaticQuery from '../queries/StaticQuery'

import styled from 'styled-components'
import remcalc from 'remcalc'

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
        object-fit: cover !important;
        object-position: 0% 0% !important;
        font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
    }
`

const TextContainer = styled.div`
    font-size: ${remcalc(45)};
    box-sizing: border-box;
    max-width: 768px;
    position: absolute;
    bottom: 6rem;
    right: 6rem;
    a {
        color: ${theme.colors.main};
    }
`

// QUERY
const WELCOME_IMAGE = graphql`
    query WelcomeImage {
        bannerImage: file(relativePath: { eq: "banner.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

// eslint-disable-next-line react/prop-types
const Welcome = () => (
    <StaticQuery
        query={WELCOME_IMAGE}
        render={data => {
            return (
                <Main>
                    <Wrapper>
                        <BgImg fluid={data.bannerImage.childImageSharp.fluid} />
                        <TextContainer>
                            <Link to="/home">
                                <span className="link dim gray b f1 f-headline-ns tc db mb3 mb4-ns">
                                    Enter
                                </span>
                            </Link>
                        </TextContainer>
                    </Wrapper>
                </Main>
            )
        }}
    />
)

export default Welcome
