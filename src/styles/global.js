import remcalc from 'remcalc'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto')
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    body {
        background-color: #000;
        font-family: Roboto, Arial, sans-serif;
        font-size: ${remcalc(14)};
        color: #fff;
        letter-spacing: ${remcalc(0.15)};
        line-height: ${remcalc(20)};
        height: 100%
    }

    footer {
        width: 100%;
    }

    ol, ul, li {
        list-style: none;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }

`

export default GlobalStyle
