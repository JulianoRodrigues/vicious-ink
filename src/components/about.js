import React from 'react'
import SVGIcon from './svgicon'
import styled from 'styled-components'

const Section = styled.section`
        padding: 0px 24px 50px;
`
const Flex = styled.div`
        display: flex;
`

const About = () => (
        <Section className="mw8 center">
                <div className="cf ph2-ns">
                        <div className="fl w-100 w-50-s w-75-l">
                                <div className="center-m w-50-m">
                                        <h2 className="pa4 f2 fw2 white lh-copy tc">What we do</h2>
                                        <div className="dt-l dt--fixed">
                                                <div className="dt-row-l">
                                                        <div className="dtc-l pa4">
                                                                <Flex>
                                                                        <SVGIcon name="machine" width={50} height={50} fill="gray" />
                                                                        <p className="pa1 f3 white center ttu">Tattooing</p>
                                                                </Flex>
                                                                <p className="pa3 mid-gray">
                                                                        For a premium result, at our tattoo salon we combine modern techniques with traditional ones.
                                                                </p>
                                                        </div>
                                                        <div className="dtc-l pa4">
                                                                <Flex>
                                                                        <SVGIcon name="design" width={50} height={50} fill="gray" />
                                                                        <p className="pa1 f3 white center ttu">Tattoo Design</p>
                                                                </Flex>
                                                                <p className="pa3 mid-gray">
                                                                        Nothing can beat the challenge of creating a design that initially is only in your imagination.
                                                                </p>
                                                        </div>
                                                </div>
                                                <div className="dt-row-l">
                                                        <div className="dtc-l pa4">
                                                                <Flex>
                                                                        <SVGIcon name="cover" width={50} height={50} fill="gray" />
                                                                        <p className="pa1 f3 white center ttu">Tattoo Cover Up</p>
                                                                </Flex>
                                                                <p className="pa3 mid-gray">
                                                                        Got some old tattoos that you don’t find pretty? Our talented artist will cover them up for you.
                                                                </p>
                                                        </div>
                                                        <div className="dtc-l pa4">
                                                                <Flex>
                                                                        <SVGIcon name="portfolio" width={50} height={50} fill="gray" />
                                                                        <p className="pa1 f3 white center ttu">Portfolio</p>
                                                                </Flex>
                                                                <p className="pa3 mid-gray">
                                                                        For a premium result, at our tattoo salon we combine modern techniques with traditional ones.
                                                                </p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="fl w-100 w-50-s w-25-l">
                                <div className="center-m w-50-m">
                                        <p className="pa3 mid-gray"></p>
                                </div>
                        </div>
                </div>
        </Section>
)

export default About