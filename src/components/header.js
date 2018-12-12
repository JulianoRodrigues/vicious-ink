import React from 'react'

import styled from 'styled-components'
import remcalc from 'remcalc'

const Header = styled('header')`
    width: 100%;
    top: 0;
    font-size: ${remcalc(15)};
    text-transform: uppercase;
`
const Container = styled.div`
    height: ${remcalc(65)};
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`

export default props => (
    <Header>
        <Container>{props.children}</Container>
    </Header>
)
