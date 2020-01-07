import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../layouts/layout'
import Nav from '../components/header/navigationBar'
import Main from '../components/main/index'
import Footer from '../components/footer/index'
import Address from '../components/address/index'

const Contacts = () => {
    return (
        <Layout>
            <Helmet title={'Contacts - Vicious Ink'} />
            <Nav />
            <Main>
                <Address />
            </Main>
            <Footer />
        </Layout>
    )
}

export default Contacts
