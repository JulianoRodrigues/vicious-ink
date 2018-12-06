import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    margin: 0 auto auto;
    width: 100%;
`

const Main = props => {
    return <Wrapper>{props.children}</Wrapper>
}

export default Main
