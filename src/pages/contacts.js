import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'layouts/layout'
import Nav from 'components/navbar'
import Main from 'components/main'
import Footer from 'components/footer';
import Address from 'components/address'

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
