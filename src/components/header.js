import React from 'react'

import styled from 'styled-components'
import remcalc from 'remcalc'

const Header = styled('header')`
    width: 100%;
    position: fixed;
    top: 0;
    font-size: ${remcalc(15)};
    text-transform: uppercase;
`
const Container = styled.div`
    height: ${remcalc(70)};
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default props => (
    <Header>
        <Container>{props.children}</Container>
    </Header>
)
