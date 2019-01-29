import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
        padding: 0px 24px 50px;
`

const Address = () => (
    <Section className="mw9 center">
        <div className="fl w-100 l w-100 w-50-s w-25-l">
            <div className="w-100">
                <div className="flex flex-column pa4">
                <h3 className="pa2 f4 fw2 white lh-copy bb">Vicious Ink Tattoo Shop</h3>
                <div className="pa3 mr2">
                    <p className="a3 mid-gray">Rua de cenas Vila do conde</p>
                </div>
                <div className="outline pa3 mr2">
                    <code>1</code>
                </div>
                <div className="outline pa3 mr2">
                    <code>1</code>
                </div>
                    <div className="outline pa3 mr2">
                        <code>1</code>
                    </div>
                </div>
            </div>
        </div>
        <div className="fl w-100 w-50-s w-75-l">
            <div className="w-100">
                <div className="tc">
                    <iframe width="600" height="450" src="https://maps.google.com/maps?q=Rua%205%20de%20Outubro%20loja%20266%20Vila%20do%20Conde&t=&z=13&ie=UTF8&iwloc=&output=embed" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    </Section>
)

export default Address