import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
        padding: 0px 24px 50px;
`

const Address = () => (
    <Section className="mw9 center">
        <div className="fl w-100">
            <div className="fl w-25-l">
                <div className="flex flex-column pa4">
                <h3 className="pa2 f4 fw2 white lh-copy">Address</h3>
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
            <div className="fl w-75-l">
                <div className="tc">
                    <iframe width="800" height="500" src="https://maps.google.com/maps?q=Rua%205%20de%20Outubro%20loja%20266%20Vila%20do%20Conde&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                </div>
            </div>
        </div>
    </Section>
)

export default Address