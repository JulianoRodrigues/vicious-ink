import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import theme from '../../styles/theme';

const Wrapper = styled.section`
    position: relative;
`

const HeroImage = styled(Img)`
    @media screen and (max-width: ${theme.responsive.small}) {
        & > img {
            position: initial;
        }
    }
`

export default () => (
    <StaticQuery
        query={HERO_IMAGE}
        render={data => {
            const heroImage = data.allContentfulImage.edges.map(
                ({ node: { photo } }) => photo
            )
            return (
                <Wrapper>
                    <HeroImage fluid={heroImage[0].fluid} alt='Luis Rocha' />
                </Wrapper>
            );
        }}
    />
);

const HERO_IMAGE = graphql`
    query HeroImage {
        allContentfulImage(filter: { name: { eq: "Hero" } }) {
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
`;
