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
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            return (
                <div className="container">
                    <Img
                        css={{ margin: 0 }}
                        fluid={data.bannerImage.childImageSharp.fluid}
                    />
                    <Link to="/home">Home</Link>
                </div>
            )
        }}
    />
)

export default Welcome
