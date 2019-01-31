import React from 'react'
import SVGIcon from './svgicon'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const ABOUT_IMAGE = graphql`
    query AboutImage {
        allImage(filter: { fileName: { eq: "luis_rocha_about1.jpg" } }) {
            edges {
                node {
                    fileName
                    id
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
    }
`

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
    padding: 0px 24px 50px;
`
const Flex = styled.div`
    display: flex;
`

const About = () => {
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
                                <div className="dtc-l pa4-l pa3-m">
                                    <Flex>
                                        <SVGIcon
                                            name="machine"
                                            width={50}
                                            height={50}
                                            fill="gray"
                                        />
                                        <p className="pa1 f3 white center ttu tc">
                                            Tattooing
                                        </p>
                                    </Flex>
                                    <p className="pa3 mid-gray">
                                        For a premium result, at our tattoo
                                        studio we combine modern techniques with
                                        traditional ones.
                                    </p>
                                </div>
                                <div className="dtc-l pa4-l pa3-m">
                                    <Flex>
                                        <SVGIcon
                                            name="design"
                                            width={50}
                                            height={50}
                                            fill="gray"
                                        />
                                        <p className="pa1 f3 white center ttu tc">
                                            Custom Design
                                        </p>
                                    </Flex>
                                    <p className="pa3 mid-gray">
                                        Nothing can beat the challenge of
                                        creating a design that initially is only
                                        in your imagination.
                                    </p>
                                </div>
                            </div>
                            <div className="dt-row-l">
                                <div className="dtc-l pa4-l pa3-m">
                                    <Flex>
                                        <SVGIcon
                                            name="cover"
                                            width={50}
                                            height={50}
                                            fill="gray"
                                        />
                                        <p className="pa1 f3 white center ttu tc">
                                            Cover Up
                                        </p>
                                    </Flex>
                                    <p className="pa3 mid-gray">
                                        Got some old tattoos that you don’t find
                                        pretty? Our talented artist will cover
                                        them up for you.
                                    </p>
                                </div>
                                <div className="dtc-l pa4-l pa3-m">
                                    <Flex>
                                        <SVGIcon
                                            name="portfolio"
                                            width={50}
                                            height={50}
                                            fill="gray"
                                        />
                                        <p className="pa1 f3 white center ttu tc">
                                            Portfolio
                                        </p>
                                    </Flex>
                                    <p className="pa3 mid-gray">
                                        Still don't know which tattoo artist do
                                        you want? Check our artist's portfolio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fl w-25-l">
                    <div className="center-m w-50-m pt6">
                        <StaticQuery
                            query={ABOUT_IMAGE}
                            render={data => {
                                const aboutImage = data.allImage.edges.map(
                                    ({ node: { image } }) => image
                                )
                                return (
                                    <StoreImage
                                        fluid={
                                            aboutImage[0].childImageSharp.fluid
                                        }
                                    />
                                )
                            }}
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About
