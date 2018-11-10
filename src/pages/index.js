import React from 'react'
import { graphql } from 'gatsby'

import Home from '../components/Home'

const IndexPage = (props) => (
  <Home {...props} />
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`

export const pageQuery = graphql`
  query {
    one: file(relativePath: { eq: "home/toni-figuera-1.jpg" }) {
      ...fluidImage
    },
    two: file(relativePath: { eq: "home/toni-figuera-2.jpg" }) {
      ...fluidImage
    },
    three: file(relativePath: { eq: "home/toni-figuera-3.jpg" }) {
      ...fluidImage
    },
    four: file(relativePath: { eq: "home/toni-figuera-4.jpg" }) {
      ...fluidImage
    }
  }
`
