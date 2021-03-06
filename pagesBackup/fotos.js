import React from 'react'
import { graphql } from 'gatsby'

import Photos from '../components/Photos'

const ImagesPage = ({ data }) => {
  return (
    <Photos
      images={data.allPhotosJson.edges[0].node.images}
      pathname='fotos'
      pageTitle='Fotos'
    />
  )
}

export default ImagesPage

export const pageQuery = graphql`
  query {
    allPhotosJson {
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
