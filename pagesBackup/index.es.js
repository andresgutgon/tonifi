import React from 'react'
import { graphql } from 'gatsby'

import Home from '../components/Home'

const IndexPage = ({ data }) => {
  return (
    <Home images={data.allHomeJson.edges[0].node.images} />
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allHomeJson {
      edges {
        node {
          images {
            title
            alt
            src {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            full
          }
        }
      }
    }
  }
`
