import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../layouts/layout'
import Nav from '../components/navbar'

const Home = () => {
    return (
        <Layout>
            <Helmet title={'Home'} />
            <Nav />
        </Layout>
    )
}

export default Home
