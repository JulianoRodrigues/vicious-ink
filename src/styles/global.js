import remcalc from 'remcalc'
import { createGlobalStyle } from 'styled-components'

export const colors = {
    main: '#000',
    primary: '#fff',
    red: '#ff4136',
    gray: '#aaa',
    silver: '#ddd',
    gold: '#ffd700'
}

export const globalTheme = () => {
    createGlobalStyle`
        body {
            margin: 0;
            padding: 0;
            background-color: ${colors.main};
        }
    `
}

export const typography = () => {
    createGlobalStyle`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto')
        html,
        body {
            font-family: Roboto, Arial, sans-serif;
            font-size: ${remcalc(14)};
            color: ${colors.primary};
            letter-spacing: ${remcalc(0.15)};
            line-height: ${remcalc(20)};
        }
    `
}

export default {
    typography,
    globalTheme
}
