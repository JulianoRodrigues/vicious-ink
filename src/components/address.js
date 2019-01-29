import React from 'react'

const Address = () => (
    <section className="flex flex-column pa4">
        <h3 className="w-25-l pa2 f4 fw2 white lh-copy bb">Address</h3>
        <div className="w-25 pa3 mr2">
            <p className="a3 mid-gray">Rua de cenas Vila do conde</p>
        </div>
        <div className="outline w-25 pa3 mr2">
            <code>1</code>
        </div>
        <div className="outline w-25 pa3 mr2">
            <code>1</code>
        </div>
        <div className="outline w-25 pa3 mr2">
            <code>1</code>
        </div>
        <iframe width="600" height="500" src="https://maps.google.com/maps?q=Rua%205%20de%20Outubro%20loja%20266%20Vila%20do%20Conde&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
</section>
)

export default Address