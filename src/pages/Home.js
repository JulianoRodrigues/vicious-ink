import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'layouts/layout'
import Nav from 'components/navbar'
import Main from 'components/main'
import Hero from 'components/hero'
import Store from 'components/store'
import Footer from 'components/footer';
import About from '../components/about';

const Home = () => {
    return (
        <Layout>
            <Helmet title={'Home'} />
            <Nav />
            <Main>
                <Hero />
                <Store />
                <About />
            </Main>
            <Footer />
        </Layout>
    )
}

export default Home
