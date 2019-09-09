import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import theme from '../styles/theme'
import styled from 'styled-components'
import Layout from '../layouts/layout'
import Nav from '../components/navbar'
import Main from '../components/main'
import Hero from '../components/hero'
import Store from '../components/store'
import Footer from '../components/footer'
import About from '../components/about'

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
    text-transform: uppercase;
    a {
        color: ${theme.colors.main};
    }
`

const PopUp = styled.div`
    background-color: blue;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    height:200px;
    width:300px;
    display: inline-block;
    position:fixed;
    top:50%;
    left:50%;
    margin-left: -150px;
    margin-top: -100px;
    z-index: 10;
`

class Index extends Component {

    constructor (props) {
        const { data: { allSvgJson, bannerImage } } = props;
        super(props);
        this.state = {
            showPopup: true,
            allSvgJson,
            bannerImage
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
                        <PopUp>
                            <TextContainer>CENAS</TextContainer>
                        </PopUp>
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
                    base64
                }
            }
        }
    }
`

export default Index
