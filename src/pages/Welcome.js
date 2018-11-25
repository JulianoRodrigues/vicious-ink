import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

// eslint-disable-next-line react/prop-types
export const Welcome = () => (
    <StaticQuery
        query={graphql`
            query {
                bannerImage: file(relativePath: { eq: "banner.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <div>
                    <Img
                        css={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        fluid={data.bannerImage.childImageSharp.fluid}
                    />
                </div>
            )
        }}
    />
)

export default Welcome
