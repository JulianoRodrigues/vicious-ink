import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import GraphImg from 'graphcms-image'

const Hero = () => (
    // eslint-disable-next-line prettier/prettier
    <StaticQuery 
        query={graphql`
            query {
                vicious {
                    images(where: { id: "cjorpop4wyxdu093210w1nq7m" }) {
                        image {
                            handle
                            height
                            width
                        }
                    }
                }
            }
        `}
        render={data => {
            console.log(data)
            return (
                <div>
                    <GraphImg image={data.vicious.images[0].image} maxWidth={1000} />
                </div>
            )
        }}
    />
)

export default Hero
