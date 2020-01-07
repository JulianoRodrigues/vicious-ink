import React, { Fragment } from 'react'
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
            </Fragment>
        </ThemeProvider>
    )
}

export default Layout
