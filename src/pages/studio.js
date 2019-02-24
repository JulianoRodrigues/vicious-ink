import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../layouts/layout'
import Nav from '../components/navbar'
import Main from '../components/main'
import Hero from '../components/hero'
import Store from '../components/store'
import Footer from '../components/footer'
import About from '../components/about'

const Home = ({ data }) => {
    return (
        <Layout>
            <Helmet title={'Studio - Vicious Ink'} />
            <Nav />
            <Main>
                <Hero />
                <Store />
                <About svg={data} />
            </Main>
            <Footer />
        </Layout>
    )
}

export const SVG = graphql`
    query SVG {
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

export default Home
