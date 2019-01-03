import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StoreImage = styled(Img)`
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
    &:hover {
        -webkit-filter: grayscale(0);
        filter: grayscale(0);
    }
`

const Store = () => (
    <StaticQuery
        query={STORE_IMAGE}
        render={data => {
            console.log(data)
            return (
                <article>
                    <h2 className="pa4 f2 fw2 tc gray">The Studio</h2>
                    <section className="mw8 center">
                        <div className="cf dt-l w-100 pv4">
                            <div className="dtc-l v-mid mw6 pr3-l">
                                <StoreImage
                                    fixed={
                                        data.allImage.edges[0].node.image
                                            .childImageSharp.fixed
                                    }
                                />
                            </div>
                            <div className="dtc-l v-mid f6 f5-m">
                                <p className="pa2 center">
                                    {data.vicious.stores[0].description}
                                </p>
                            </div>
                        </div>
                    </section>
                </article>
            )
        }}
    />
)

const STORE_IMAGE = graphql`
    query Store {
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
        vicious {
            stores {
                description
            }
        }
    }
`

export default Store
