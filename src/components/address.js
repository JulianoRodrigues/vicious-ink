import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    padding: 0px 24px 50px;
`

const Map = styled.div`
    overflow: hidden;
    padding-bottom: 60%;
    position: relative;
    height: 0;

    iframe {
        border: none;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`

const Address = () => (
    <Section className="mw9 center">
        <div className="cf ph2-ns">
            <div className="fl w-100 l w-100 w-50-s w-25-l">
                <div className="w-100">
                    <div className="flex flex-column pa4">
                        <h3 className="pa2 f4 fw2 white lh-copy bb">
                            Vicious Ink Tattoo Shop
                        </h3>
                        <div className="pa2 mr2">
                            <p className="a3 mid-gray">R. 5 de Outubro 266</p>
                            <p className="a3 mid-gray">
                                4480-754 Vila do Conde
                            </p>
                        </div>
                        <h3 className="pa2 f4 fw2 white lh-copy bb">
                            Coordinates
                        </h3>
                        <div className="pa2 mr2">
                            <p className="a3 mid-gray">N: 41°21'18.7"</p>
                            <p className="a3 mid-gray">W: 8°44'29.4"</p>
                        </div>
                        <h3 className="pa2 f4 fw2 white lh-copy bb">
                            Contacts
                        </h3>
                        <div className="pa2 mr2">
                            <p className="a3 mid-gray">
                                Phone: (+351) 916 726 056
                            </p>
                            <p className="a3 mid-gray">
                                E-mail:
                                <a
                                    className="link dim white f6 dib ml2"
                                    href="mailto:vicious.ink.vc@gmail.com"
                                >
                                    vicious.ink.vc@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fl w-100 w-50-s w-75-l">
                <div className="w-100">
                    <div className="tc">
                        <Map>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.9002653383664!2d-8.743376183988746!3d41.35452147926728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd244404164b0305%3A0x452e91d22ebf1af6!2sR.+5+de+Outubro+266%2C+4480-754+Vila+do+Conde!5e0!3m2!1spt-PT!2spt!4v1548806231779"
                                width="600"
                                height="450"
                                allowFullScreen
                            />
                        </Map>
                    </div>
                </div>
            </div>
        </div>
    </Section>
)

export default Address
