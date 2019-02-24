import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts/layout'
import Home from '../pages/home'

const Index = () => {
    return (
        <Layout>
            <Helmet title={'Vicious Ink'} />
            <Home />
        </Layout>
    )
}

export default Index
