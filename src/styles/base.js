import styled from 'styled-components'
import { Link } from 'gatsby'
import theme from './theme'
import Img from 'gatsby-image'
import remcalc from 'remcalc'

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

export const Image = styled(Img)`
    border-radius: ${remcalc(10)};
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    &:hover {
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
    }
`
