import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'layouts/layout'
import Nav from 'components/navbar'
import Main from 'components/main'
import Footer from 'components/footer';

const Contacts = () => {
    return (
        <Layout>
            <Helmet title={'Contacts - Vicious Ink'} />
            <Nav />
            <Main>
                <div> 
                <iframe width="600" height="450" frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Rua+5+de+Outubro+loja+266+Vila+do+Conde" allowFullScreen></iframe>
                </div>
            </Main>
            <Footer />
        </Layout>
    )
}

export default Contacts
