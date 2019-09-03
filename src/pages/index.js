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
    bottom: 6rem;
    right: 6rem;
    text-transform: uppercase;
    a {
        color: ${theme.colors.main};
    }
`

class Index extends Component {

    
    constructor (props) {
        const { data: { allSvgJson } } = props;
        super(props);
        this.state = {
            showPopup: true,
            allSvgJson
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
    }
`

export default Index
