import React from 'react'
import SVGIcon from './svgicon'

const About = () => (
        <article className="pa3">
                <h2 className="pa4 f2 fw2 tc white lh-copy">What We Do</h2>
                <SVGIcon name="machine" width={50} fill="gray" />
                <SVGIcon name="design" width={50} fill="gray" />
                <SVGIcon name="cover" width={50} fill="gray" />
                <SVGIcon name="portfolio" width={50} fill="gray" />
        </article>
)

export default About