import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import GraphImg from 'graphcms-image'
import theme from '../styles/theme'

import styled from 'styled-components'

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
            return (
                <div>
                    cenas
                </div>
            )
        }

        }
    />
)

export default Store
