import React from 'react'
import Helmet from 'react-helmet'
import Layout from 'layouts/layout'
import Welcome from './welcome'

const Index = () => {
    return (
        <Layout>
            <Helmet title={'Vicious Ink'} />
            <Welcome />
        </Layout>
    )
}

export default Index
