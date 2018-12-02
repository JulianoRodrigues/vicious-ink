import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts/layout'
import Welcome from './welcome'
import Main from '../components/main'
import Home from './home'

// eslint-disable-next-line react/prop-types
const Index = ({ children }) => {
    return (
        <Layout>
            <Helmet title={'Vicious Ink'} />
            <Main>
                <Welcome />
                {children}
            </Main>
        </Layout>
    )
}

export default Index
