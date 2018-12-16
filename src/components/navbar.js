import React from 'react'
import Headroom from 'react-headroom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faInstagram)

import styled from 'styled-components'
import { Links } from '../styles/link'
import Header from './header'
import theme from '../styles/theme'
import remcalc from 'remcalc'

const Nav = styled.nav`
    font-size: ${remcalc(15)};
    a {
        position: relative;
        color: ${theme.colors.main};
        display: inline-block;
        margin: 20px 20px;
        outline: none;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
    }
    svg {
        position: relative;
        display: inline-block;
        margin: 0px 20px;
    }
`

const NavBar = () => {
    return (
        <Headroom calcHeightOnResize disableInlineStyles>
            <Header>
                <Nav>
                    <Links to="/home" data-hover="Home">
                        Home
                    </Links>
                    <Links to="/home" data-hover="Test">
                        Test
                    </Links>
                    <Links to="/home" data-hover="Artist">
                        Artist
                    </Links>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Nav>
            </Header>
        </Headroom>
    )
}

export default NavBar
