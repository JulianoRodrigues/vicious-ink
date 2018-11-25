import React, { Fragment } from 'react'
import { SEO } from './SEO'
import { Welcome } from '../pages/welcome'
import { typography, globalTheme } from '../styles/global'

globalTheme()
typography()

export const Layout = () => (
    <Fragment>
        <SEO />
        <Welcome />
    </Fragment>
)

export default Layout
