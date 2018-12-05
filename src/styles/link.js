import styled from 'styled-components'
import { Link } from 'gatsby'
import remcalc from 'remcalc'
import theme from '../styles/theme'

export const WelcomeLink = styled(Link)`
    font-size: ${remcalc(35)};
    color: ${theme.colors.primary};
    text-decoration: none;
    position: relative;
    margin: 15px 25px;
    text-transform: uppercase;
    &::before,
    &::after {
        display: inline-block;
        opacity: 0;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
        -moz-transition: -moz-transform 0.3s, opacity 0.2s;
        transition: transform 0.3s, opacity 0.2s;
    }
    &::before {
        margin-right: 10px;
        content: '[';
        transform: translateX(20px);
    }
    &::after {
        margin-left: 10px;
        content: ']';
        transform: translateX(-20px);
    }
    &:hover::before,
    &:hover::after,
    &:focus::before,
    &:focus::after {
        opacity: 1;
        -webkit-transform: translateX(0px);
        -moz-transform: translateX(0px);
        transform: translateX(0px);
    }
`

export const NavLink = styled(Link)`
    font-size: ${remcalc(15)};
    text-decoration: none;
    position: relative;
    text-transform: uppercase;
    text-shadow: none;
    &::before {
        color: ${theme.colors.primary};
        content: attr(data-hover);
        position: absolute;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        -moz-transition: -moz-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
    }
    &:hover::before,
    &:focus::before {
        color: ${theme.colors.gold};
        -webkit-transform: scale(0.9);
        -moz-transform: scale(0.9);
        transform: scale(0.9);
    }
`
