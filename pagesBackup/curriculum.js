import React from 'react'
import { graphql } from 'gatsby'

import CurriculumVitae from '../components/CurriculumVitae'

const CVPage = ({ data }) => {
  return (
    <CurriculumVitae
      cvPdfPath={data.allFile.edges[0].node.publicURL}
      content={data.allCvJson.edges[0].node}
    />
  )
}

export default CVPage

export const pageQuery = graphql`
  query {
    allFile(filter: { extension: { eq: "pdf" }, name: { eq:"cv"} }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
    allCvJson {
      edges {
        node {
          education {
            title
            teacher
            is_career
            years
          }
          contact {
            email
            phone
          }
          work {
            image {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            category
            items {
              title
              years
              director
              production
              author
              company {
                name
                url
                id
              }
              played {
                id
                tags
                name
                location
              }
            }
          }
        }
      }
    }
  }
`
