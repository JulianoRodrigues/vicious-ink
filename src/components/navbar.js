import React from 'react'
import Headroom from 'react-headroom'

import styled from 'styled-components'
import remcalc from 'remcalc'
import { NavLink } from '../styles/link'
import Header from './header'

const Nav = styled.nav`
    a {
        position: relative;
        display: inline-block;
        margin: 15px 20px;
        outline: none;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 400;
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
                </Nav>
            </Header>
        </Headroom>
    )
}

export default NavBar
