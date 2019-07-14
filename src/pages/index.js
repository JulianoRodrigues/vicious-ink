import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import theme from '../styles/theme'
import styled from 'styled-components'
import Layout from '../layouts/layout'

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
    box-sizing: border-box;
    max-width: 768px;
    position: absolute;
    bottom: 6rem;
    right: 6rem;
    text-transform: uppercase;
    a {
        color: ${theme.colors.main};
    }
`

const Index = () => {
    return (
        <Layout>
            <Helmet title={'Vicious Ink'} />
            <StaticQuery
                query={WELCOME_IMAGE}
                render={data => {
                    return (
                        <Wrapper>
                            <BgImg fluid={data.bannerImage.childImageSharp.fluid} />
                            <TextContainer>
                                <Link to="/studio">
                                    <span className="link dim gray b f1 tc db mb3 mb4-ns">
                                        {`Entrar`}
                                    </span>
                                </Link>
                            </TextContainer>
                        </Wrapper>
                    )
                }}
            />
        </Layout>
    )
}

const WELCOME_IMAGE = graphql`
    query WelcomeImage {
        bannerImage: file(relativePath: { eq: "banner.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Index
