import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import GraphImg from 'graphcms-image'
import theme from '../styles/theme'
import remcalc from 'remcalc'

import styled from 'styled-components'
import Flex, { FlexItem } from 'styled-flex-component'

const Wrapper = styled.section`
    position: relative;
`

const Title = styled.h1`
    font-size: ${remcalc(45)};
    font-style: italic;
    text-decoration: underline;
`

const Store = () => (
    <Wrapper>
        <Flex center full>
            <FlexItem>
                <Title>THE STORE</Title>
            </FlexItem>
        </Flex>
    </Wrapper>
)

export default Store
