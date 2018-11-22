import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

// eslint-disable-next-line react/prop-types
const Welcome = () => (
    <StaticQuery
        query={graphql`
            query {
                vicious {
                    images(where: { id: "cjorpo77hyxb80932ck5ho1kn" }) {
                        id
                        image {
                            url
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <Img
                    title="Header image"
                    alt="Greek food laid out on table"
                    sizes={image}
                />
            )
        }}
    />
)

export default Welcome
