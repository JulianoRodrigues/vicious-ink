import React, { Fragment } from 'react'
import CookieConsent from "react-cookie-consent";
import { ThemeProvider } from 'styled-components'

import { SEO } from '../components/seo/SEO'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <SEO />
                {children}
                <GlobalStyle />
                <CookieConsent
                    location='bottom'
                    buttonText='Aceito'
                    declineButtonText='Recuso'
                    cookieName='gatsby-gdpr-google-analytics'
                    buttonStyle={{
                        background: ''
                    }}
                    style={{ 
                        background: 'black',
                        color: 'white',
                        opacity: '0.75'
                    }}
                    expires={150}
                    >
                    Este site utiliza cookies do Google para ajudar a disponibilizar os respetivos serviços e analisar o tráfego.
                    As informações sobre a sua utilização deste site são partilhadas com a Google.
                    Ao utilizar este site, concorda que o mesmo utilize cookies.
                    <a className='fw6 blue link hover-blue' target="_blank" href="https://www.google.com/policies/technologies/cookies/"><span> Saiba mais</span></a>
                </CookieConsent>
            </Fragment>
        </ThemeProvider>
    )
}

export default Layout
