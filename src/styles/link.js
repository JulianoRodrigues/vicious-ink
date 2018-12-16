import styled from 'styled-components'
import { Link } from 'gatsby'
import remcalc from 'remcalc'
import theme from '../styles/theme'

export const Links = styled(Link)`
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
