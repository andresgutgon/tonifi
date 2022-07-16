import React from 'react'
import { graphql } from 'gatsby'

import Home from '../components/Home'

const IndexPage = ({ data }) => {
  return (
    <Home images={data.allHomeJson.edges[0].node.images} />
  )
}

export default IndexPage

export const pageQuery = graphql`{
  allHomeJson {
    edges {
      node {
        images {
          title
          alt
          src {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          full
        }
      }
    }
  }
}
`
