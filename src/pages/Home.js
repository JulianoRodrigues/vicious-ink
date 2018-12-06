import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../layouts/layout'
import Nav from '../components/navbar'
import Main from '../components/main'
import Hero from '../components/hero'

const Home = () => {
    return (
        <Layout>
            <Helmet title={'Home'} />
            <Nav />
            <Main>
                <Hero />
            </Main>
        </Layout>
    )
}

export default Home
