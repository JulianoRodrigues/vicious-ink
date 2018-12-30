import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Store = () => (
    <StaticQuery
        query={STORE_IMAGE}
        render={data => {
            console.log(data)
            return (
                <article>
                    <h2 className="pa4 f2 fw2 tc gray">Studio</h2>
                    <section className="mw7 center">
                        <div className="cf dt-l w-100 bt b--black-10 pv4">
                            <Img
                                fixed={
                                    data.allImage.edges[0].node.image
                                        .childImageSharp.fixed
                                }
                            />
                        </div>
                    </section>
                </article>
            )
        }}
    />
)

const STORE_IMAGE = graphql`
    query StoreImage {
        allImage(filter: { fileName: { eq: "storefront.jpg" } }) {
            edges {
                node {
                    fileName
                    image {
                        childImageSharp {
                            fixed(width: 500, height: 300) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    }
`

export default Store
