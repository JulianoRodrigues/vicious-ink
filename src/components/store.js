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
            //Deconstruct store image(s)
            const storeImage = data.allImage.edges.map(
                ({ node: { image } }) => image
            )

            //Deconstruct store description
            const description = data.vicious.stores.map(
                ({ description }) => description
            )
            return (
                <article>
                    <h2 className="pa4 f2 fw2 tc gray">Our Tattoo Shop</h2>
                    <section className="dt mw9 center ph3-ns">
                        <div className="cf ph2-ns">
                            <div className="dtc-l dtc-m w-100 w-50-ns pa2">
                                <StoreImage
                                    fluid={storeImage[0].childImageSharp.fluid}
                                />
                            </div>
                            <div className="dtc-l dtc-m w-100 w-50-ns pa2 v-mid">
                                <p className="pa2">{description}</p>
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
                            fluid(maxWidth: 1000) {
                                ...GatsbyImageSharpFluid
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
