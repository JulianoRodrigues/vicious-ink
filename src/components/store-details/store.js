import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Image, CenteredImage } from '../../styles/base'

const Section = styled.section`
    padding: 80px 24px 96px;
`

const Store = () => (
    <StaticQuery
        query={STORE_IMAGE}
        render={data => {
            //Deconstruct store image(s)
            //TODO
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
                        <div className="fl w-25-l">
                            <div className="center-m w-50-m">
                                <CenteredImage >
                                    <Image fluid={storeImage[0].fluid} />
                                </CenteredImage>
                            </div>
                        </div>
                        <div className="fl w-100 w-50-s w-75-l">
                            <div className="center-m w-50-m">
                                <h2 className="pa4 f2 fw2 white lh-copy tc">
                                    {`Estúdio`}
                                </h2>
                                <p className="pa3 b">{description}</p>
                                <p className="pa3 mid-gray">
                                    {`A nossa equipa está constantemente a melhorar
                                    a sua abilidade e conhecimento através de treino
                                    para assegurar que a sua tatuagem é realizada
                                    com as mais recentes técnicas da indústria.`}
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
