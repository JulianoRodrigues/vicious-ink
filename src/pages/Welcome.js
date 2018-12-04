import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Main from '../components/main'

import styled from 'styled-components'
import remcalc from 'remcalc'
import theme from '../styles/theme'

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
`

const EnterLink = styled(Link)`
    font-size: ${remcalc(35)};
    color: ${theme.colors.primary};
    text-decoration: none;
    position: relative;
    margin: 15px 25px;
    text-transform: uppercase;
    &::before,
    &::after {
        display: inline-block;
        opacity: 0;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
        -moz-transition: -moz-transform 0.3s, opacity 0.2s;
        transition: transform 0.3s, opacity 0.2s;
    }
    &::before {
        margin-right: 10px;
        content: '[';
        transform: translateX(20px);
    }
    &::after {
        margin-left: 10px;
        content: ']';
        transform: translateX(-20px);
    }
    &:hover::before,
    &:hover::after,
    &:focus::before,
    &:focus::after {
        opacity: 1;
        -webkit-transform: translateX(0px);
        -moz-transform: translateX(0px);
        transform: translateX(0px);
    }
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
                <Main>
                    <Wrapper>
                        <BgImg fluid={data.bannerImage.childImageSharp.fluid} />
                        <TextContainer>
                            <EnterLink to="/home">Enter</EnterLink>
                        </TextContainer>
                    </Wrapper>
                </Main>
            )
        }}
    />
)

export default Welcome
