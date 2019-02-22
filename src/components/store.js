import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Image } from '../styles/base'
import styled from 'styled-components'

const Section = styled.section`
    padding: 80px 24px 96px;
`

const Store = () => (
    <StaticQuery
        query={STORE_IMAGE}
        render={data => {
            //Deconstruct store image(s)
            const storeImage = data.allContentfulStore.edges.map(
                ({ node: { photo } }) => photo
            )

            //Deconstruct store description
            const description = data.allContentfulStore.edges.map(
                ({ node: { childContentfulStoreDescriptionTextNode } }) =>
                    childContentfulStoreDescriptionTextNode.description
            )
            return (
                <Section className="mw8 center ph3-ns">
                    <div className="cf ph2-ns">
                        <div className="fl w-100 w-50-s w-50-l">
                            <div className="center-m w-50-m">
                                <Image fluid={storeImage[0].fluid} />
                            </div>
                        </div>
                        <div className="fl w-100 w-50-s w-50-l">
                            <div className="center-m w-50-m">
                                <h2 className="pa4 f2 fw2 white lh-copy tc">
                                    Our studio
                                </h2>
                                <p className="pa3 b">{description}</p>
                                <p className="pa3 mid-gray">
                                    Our staff consistently upgrades their
                                    ability and knowledge through training to
                                    ensure your tattoo is performed using the
                                    latest industry standards.
                                </p>
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
        allContentfulStore {
            edges {
                node {
                    id
                    childContentfulStoreDescriptionTextNode {
                        description
                    }
                    photo {
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }
    }
`

export default Store
