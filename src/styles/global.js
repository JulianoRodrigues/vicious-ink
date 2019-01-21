import remcalc from 'remcalc'
import { createGlobalStyle } from 'styled-components'

import 'tachyons'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');
    @import url('https://fonts.googleapis.com/css?family=Lato');
    
    html, body, div, span, object,
    h1, h2, h3, h4, h5, h6, p, a,
    em, img, small, strike, strong, sub, sup,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        border: 0;
        vertical-align: baseline;
    }

    body {
        background-color: #000;
        font-family: Lato, Roboto, Helvetica Neue, Arial, sans-serif;;
        font-size: ${remcalc(14)};
        color: #fff;
        letter-spacing: ${remcalc(0.15)};
        line-height: ${remcalc(20)};
        height: 100%
    }

    footer {
        position: unset;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 0;
    }

    ol, ul, li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    img {
        display: block;
    }

    @media screen and (min-width: 35em) {
        html {
          margin-right: calc(-100vw + 100%);
          overflow-x: hidden;
        }
    }
`

export default GlobalStyle
