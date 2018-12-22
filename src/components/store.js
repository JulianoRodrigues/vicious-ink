import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import GraphImg from 'graphcms-image'
import theme from '../styles/theme'
import remcalc from 'remcalc'

import styled from 'styled-components'
import Flex, { FlexItem } from 'styled-flex-component'

const Title = styled.h1`
    font-size: ${remcalc(45)};
    font-style: italic;
    text-decoration: underline;
`

const Store = () => (
    <StaticQuery
        query={graphql`
            query Store {
                vicious {
                    stores {
                        location
                        photo {
                            handle
                            height
                            width
                        }
                    }
                }
            }
        `}
        render={data => {
            console.log(data.vicious.stores[0].photo)
            return (
                <Flex center full>
                    <FlexItem>
                        <Title>THE STORE</Title>
                    </FlexItem>
                    {data.vicious.stores[0].photo.map(photo => (
                        <GraphImg
                            key={photo.handle}
                            image={photo}
                            maxWidth={1000}
                            withWebp
                        />
                    ))}
                </Flex>
            )
        }}
    />
)

export default Store
