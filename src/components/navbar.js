import React from 'react'
import Headroom from 'react-headroom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faInstagram)

import styled from 'styled-components'
import { NavLink } from '../styles/link'
import Header from './header'
import theme from '../styles/theme'

const Nav = styled.nav`
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
                    <NavLink to="/home" data-hover="Home">
                        Home
                    </NavLink>
                    <NavLink to="/home" data-hover="Test">
                        Test
                    </NavLink>
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Nav>
            </Header>
        </Headroom>
    )
}

export default NavBar
