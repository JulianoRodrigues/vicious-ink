import React from 'react'
import SVGIcon from '../components/svgicon'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Image } from '../styles/base'

const Section = styled.section`
    padding: 0px 24px 50px;
`
const Flex = styled.div`
    display: flex;
`

const About = props => {
    const svgIconsArray = props.svg.allSvgJson.edges.map(( icon ) => {
        return icon;
    });
    const svgIconsLeft = svgIconsArray.splice(2, 2);
    console.log(svgIconsLeft)
    return (
        <Section className="mw8 center">
            <div className="cf ph2-ns">
                <div className="fl w-100 w-50-s w-75-l">
                    <div className="center-m w-50-m">
                        <h2 className="pa4 f2 fw2 white lh-copy tc">
                            What we do
                        </h2>
                        <div className="dt-l dt--fixed">
                            <div className="dt-row-l">
                                {svgIconsArray && svgIconsArray.map(({ node }) => (
                                    <div key={node.icon} className="dtc-l pa4-l pa3-m">
                                        <Flex>
                                            <SVGIcon
                                                name={node.icon}
                                                width={50}
                                                height={50}
                                                fill="gray"
                                            />
                                            <p className="pa1 f3 white center ttu tc">
                                                {node.tittle}
                                            </p>
                                        </Flex>
                                        <p className="pa3 mid-gray">
                                            {node.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="dt-row-l">
                                {svgIconsLeft && svgIconsLeft.map(({ node }) => (
                                    <div key={node.icon} className="dtc-l pa4-l pa3-m">
                                        <Flex>
                                            <SVGIcon
                                                name={node.icon}
                                                width={50}
                                                height={50}
                                                fill="gray"
                                            />
                                            <p className="pa1 f3 white center ttu tc">
                                                {node.tittle}
                                            </p>
                                        </Flex>
                                        <p className="pa3 mid-gray">
                                            {node.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fl w-25-l">
                    <div className="center-m w-50-m pt6">
                        <StaticQuery
                            query={ABOUT_IMAGE}
                            render={data => {
                                const aboutImage = data.allContentfulImage.edges.map(
                                    ({ node: { photo } }) => photo
                                )
                                return <Image fluid={aboutImage[0].fluid} />
                            }}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

const ABOUT_IMAGE = graphql`
    query AboutPage {
        allContentfulImage(filter: { name: { eq: "About" } }) {
            edges {
                node {
                    name
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

export default About
