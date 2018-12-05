import React from 'react'

import styled from 'styled-components'
import remcalc from 'remcalc'
import theme from '../styles/theme'
import Header from './header';

const Nav = styled.nav`
    box-shadow: none;
    display: block;
    position: absolute;
    top: 0;
    right: 5px;
    width: auto;
    background: transparent;
    height: 100%;
    overflow: initial;
    transform: none;
    transition: none;
    padding: 0;
`

const NavBar = () => {
    return (
        <Header>
            <Nav>
                coisas
            </Nav>
        </Header>
    )
}

export default NavBar
