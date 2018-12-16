import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import GraphImg from 'graphcms-image'
import theme from '../styles/theme'

import styled from 'styled-components'

const Wrapper = styled.section`
    position: relative;
`

const LogoImage = styled(GraphImg)`
    width: 500px;
    top: -300px;
    margin: 0 auto;
    @media only screen and (max-width: ${theme.responsive.medium}) {
        width: 300px;
        top: -100px;
    }
    @media only screen and (max-width: ${theme.responsive.xsmall}) {
        width: 200px;
        top: -100px;
    }
`

const Hero = () => (
    // eslint-disable-next-line prettier/prettier
    <StaticQuery 
        query={graphql`
            query {
                vicious {
                    images(
                        where: {
                            id_in: [
                                "cjppj4o4q8hr20a84sq7kjcr8"
                                "cjpqperf5igg70a84cn3bxacx"
                            ]
                        }
                    ) {
                        image {
                            handle
                            height
                            width
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <Wrapper>
                    <GraphImg
                        image={data.vicious.images[0].image}
                        maxWidth={1000}
                        withWebp
                    />
                    <LogoImage
                        image={data.vicious.images[1].image}
                        maxWidth={1000}
                        withWebp
                    />
                </Wrapper>
            )
        }}
    />
)

export default Hero
