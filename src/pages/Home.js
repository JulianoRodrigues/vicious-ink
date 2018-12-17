import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../layouts/layout'
import Nav from '../components/navbar'
import Main from '../components/main'
import Hero from '../components/hero'
import Store from '../components/store'

const Home = () => {
    return (
        <Layout>
            <Helmet title={'Home'} />
            <Nav />
            <Main>
                <Hero />
                <Store />
            </Main>
        </Layout>
    )
}

export default Home
