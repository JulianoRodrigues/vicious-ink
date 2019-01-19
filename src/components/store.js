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

const Section = styled.section`
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
                <Section className="mw8 center ph3-ns">
                    <div className="cf ph2-ns">
                        <div className="fl w-100 w-50-s w-50-l">
                            <div className="center-m w-50-m">
                                <StoreImage
                                    fluid={storeImage[0].childImageSharp.fluid}
                                />
                            </div>
                        </div>
                        <div className="fl w-100 w-50-s w-50-l">
                            <div className="center-m w-50-m">
                                <h2 className="pa4 f2 fw2 white lh-copy tc">Our studio</h2>
                                <p className="pa3 b">{description}</p>
                                <p className="pa3 mid-gray">Our staff consistently upgrades their ability and knowledge through training to ensure your tattoo is performed using the latest industry standards.</p>
                            </div>
                        </div>
                    </div>
                </Section>
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
