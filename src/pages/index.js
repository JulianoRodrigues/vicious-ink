import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import theme from '../styles/theme'
import styled from 'styled-components'
import Layout from '../layouts/layout'
import Nav from '../components/header/navigationBar'
import Main from '../components/main/index'
import Hero from '../components/hero/index'
import Store from '../components/store-details/store'
import Footer from '../components/footer'
import About from '../components/about/index'

const Wrapper = styled.section`
    position: relative;
    min-height: 300px;
`

const TextContainer = styled.div`
    box-sizing: border-box;
    max-width: 768px;
    position: absolute;
    text-transform: uppercase;
    a {
        color: ${theme.colors.main};
    }
`

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const PopUp = styled.div`
    position: fixed;
    width: 280px;
    height: 180px;
    top: 50%;
    margin-top: -100px;
    z-index: 10;
    &:after {
        position: fixed;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,0.5);
        z-index: -2;
    }
    &:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`

const PopImage = styled(Img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    & > img {
        object-fit: cover !important;
        object-position: 0% 0% !important;
        font-family: 'object-fit: cover !important; object-position: 0% 0% !important;';
    }
`

class Index extends Component {

    constructor (props) {

        const { data: { allSvgJson, bannerImage } } = props;

        super(props);

        this.state = {
            allSvgJson,
            bannerImage,
            showPopup: true,
        }
    }

    togglePopup () {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        return (
            <Layout>
                <section>
                    {this.state.showPopup ? 
                        <Box>
                            <PopUp>
                                <PopImage
                                    fluid={this.state.bannerImage.childImageSharp.fluid}
                                />
                            </PopUp>
                        </Box>
                        :
                        null
                    }
                    </section>
                <Helmet title={'Vicious Ink'} />
                <Nav />
                <Main>
                    
                    <Hero />
                    <Store />
                    <About data={this.state.allSvgJson} />
                </Main>
                <Footer />
            </Layout>
        )
    }
}

export const imageAndSvg = graphql`
    query {
        allSvgJson {
            edges {
                node {
                    tittle
                    description
                    icon
                }
            }
        }
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
