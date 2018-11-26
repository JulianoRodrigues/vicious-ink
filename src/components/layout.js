import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

import { SEO } from './SEO'
import { Welcome } from '../pages/welcome'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

export const Layout = () => (
    <Fragment>
        <SEO />
        <ThemeProvider theme={theme}>
            <Welcome />
        </ThemeProvider>
        <GlobalStyle />
    </Fragment>
)

export default Layout
