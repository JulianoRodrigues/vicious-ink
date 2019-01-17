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

const Article = styled.section`
    padding: 80px 24px 96px;
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
                <Article className="mw8 center ph3-ns">
                    <section className="cf ph2-ns">
                        <div className="fl w-100 w-50-ns pa2">
                            <StoreImage
                                fluid={storeImage[0].childImageSharp.fluid}
                            />
                        </div>
                        <div className="fl w-100 w-50-ns pa2">
                            <h2 className="pa4 f2 fw2 white lh-copy tc">Our Studio</h2>
                            <p className="pa3">{description}</p>
                            <p className="pa3">Our staff consistently upgrades their ability and knowledge through training and seminars to ensure your tattoo or piercing is performed using the latest industry standards.</p>
                        </div>
                    </section>
                </Article>
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
